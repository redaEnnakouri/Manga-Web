<template>
    <div class="mb-2">
        <alert v-show="alert.show" :type="alert.type" :content="alert.content"></alert>
        <div class="markdown-editor">
            <textarea v-model="value"></textarea>
            <div class="toolbar d-inline-block w-100">
                <button class="toolbar-button" :class="{ active: 'bold' in state }" @click="action(EasyMDE.toggleBold)" :title="title('Bold (Ctrl-B)')" :disabled="preview"><bold-icon/></button>
                <button class="toolbar-button" :class="{ active: 'italic' in state }" @click="action(EasyMDE.toggleItalic)" :title="title('Italic (Ctrl-I)')" :disabled="preview"><italic-icon/></button>
                <button class="toolbar-button" :class="{ active: 'strikethrough' in state }" @click="action(EasyMDE.toggleStrikethrough)" title="Strikethrough" :disabled="preview"><strikethrough-icon/></button>
                <button class="toolbar-button" :class="{ active: 'heading' in state }" @click="action(EasyMDE.toggleHeading1)" :title="title('Heading (Ctrl-H)')" :disabled="preview"><heading-icon/></button>
                <button class="toolbar-button" :class="{ active: 'quote' in state }" @click="action(EasyMDE.toggleBlockquote)" :title="title('Quote (Ctrl-\)')" :disabled="preview"><quote-icon/></button>
                <button class="toolbar-button" :class="{ active: 'unordered-list' in state }" @click="action(EasyMDE.toggleUnorderedList)" :title="title('Generic list (Ctrl-L)')" :disabled="preview"><list-ul-icon/></button>
                <button class="toolbar-button" :class="{ active: 'ordered-list' in state }" @click="action(EasyMDE.toggleOrderedList)" :title="title('Numbered list (Ctrl-Alt-L)')" :disabled="preview"><list-ol-icon/></button>
                <button class="toolbar-button" :class="{ active: 'link' in state }" @click="action(EasyMDE.drawLink)" :title="title('Link (Ctrl-K)')" :disabled="preview"><link-icon/></button>
                <button class="toolbar-button" :class="{ active: 'image' in state }" @click="action(EasyMDE.drawImage)" :title="title('Image (Ctrl-Alt-I)')" :disabled="preview"><picture-icon/></button>
                <button class="toolbar-button" :class="{ active: 'video' in state }" @click="action(drawVideo)" :title="title('Video')" :disabled="preview"><video-icon/></button>
                <button class="toolbar-button" @click="action(EasyMDE.drawHorizontalRule)" title="Insert horizontal line" :disabled="preview"><line-icon/></button>
                <div class="float-right">
                    <button v-if="cancel" class="toolbar-button" @click="cancel"><close-icon/> {{ $t('app.discussion.cancel') }}</button>
                    <button class="toolbar-button" :class="{ active: preview }" @click="action(EasyMDE.togglePreview)"><eye-icon/> {{ $t('app.discussion.preview') }}</button>
                    <button class="btn btn-primary toolbar-action" @click="editing ? edit() : post()" :disabled="value.length == 0 || submitting">
                        <span v-if="submitting" class="spinner-border spinner-border-sm"></span>
                        <template v-else-if="editing">{{ $t('app.discussion.edit_comment') }}</template>
                        <template v-else-if="parent_id">{{ $t('app.discussion.post_reply') }}</template>
                        <template v-else>{{ $t('app.discussion.post_comment') }}</template>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import EasyMDE from 'easymde';

    export default {
        name: 'editor',
        props: ["default_value", "type", "entry", "parent_id", "cancel", "editing"],
        data() {
            return {
                EasyMDE,
                alert: {
                    show: false,
                    type: "danger",
                    content: "",
                },
                editor: null,
                value: '',
                preview: false,
                submitting: false,
                state: {}
            };
        },
        mounted() {
            const configs = {
                element: this.$el.querySelector('textarea'),
                initialValue: this.default_value || '',
                autoDownloadFontAwesome: false,
                autosave: {
                    enabled: false,
                    uniqueId: this.type + '-' + this.entry + '-' + this.parent_id + this.editing && 'edit',
		            delay: 3000
                },
                minHeight: "100px",
                forceSync: true,
                placeholder: this.$t('app.discussion.write_comment'),
                previewRender: (markdown, preview) => {
                    if (this.preview) return;
                    this.$api.post('comments/preview/' + [this.type, this.entry, this.parent_id].filter(Boolean).join('/'), { markdown }).then(response => {
                        preview.innerHTML = response.data;
                        this.preview = this.editor.isPreviewActive();
                    }).catch(error => {
                        preview.innerHTML = 'Failed to render content';
                    });
                    return "Loading...";
                },
                shortcuts: {
                    'toggleHeading1': 'Cmd-H',
                },
                renderingConfig: {
                    codeSyntaxHighlighting: false
                },
                promptURLs: true,
                spellChecker: false,
                status: false,
                toolbar: false
            };
            this.editor = new EasyMDE(configs);
            if (configs.initialValue) {
                this.value = configs.initialValue;
            }
            this.editor.codemirror.on('cursorActivity', () => {
                this.state = this.editor.getState();
            });
            this.editor.codemirror.on('change', () => {
                this.value = this.editor.value();
            });
        },
        destroyed() {
            this.editor = null;
        },
        methods: {
            drawVideo(editor) {
                var cm = editor.codemirror;
                let video = prompt('URL of the video (accepts YouTube, Dailymotion and Vimeo):', 'https://');
                if (!video) return false;
                let tag = '[video src="' + video + '"]';
                if (cm.getSelection().length) cm.replaceSelection(tag);
                else {
                    var cursor = cm.getDoc().getCursor();
                    var pos = {
                        line: cursor.line,
                        ch: cursor.ch
                    };
                    cm.getDoc().replaceRange(tag, pos);
                }
            },
            action(callback) {
                callback(this.editor);
                this.preview = this.editor.isPreviewActive();
            },
            title(title) {
                return (/Mac/.test(navigator.platform) ? title.replace('Ctrl', '⌘').replace('Alt', '⌥') : title);
            },
            post() {
                this.submitting = true;
                this.$api.post('comments/' + [this.type, this.entry, this.parent_id].filter(Boolean).join('/'), { content: this.value }).then(response => {
                    this.submitting = false;
                    this.editor.value('');
                    // this.editor.clearAutosavedValue();
                    this.$emit('commentAdded', response.data);
                    this.$ga.event('comments', (this.parent_id ? 'replied' : 'added'));
                }).catch(error => {
                    this.submitting = false;
                    this.handle_response(error.response, this.alert, true);
                });
            },
            edit() {
                this.submitting = true;
                this.$api.put('comments/' + this.parent_id, { content: this.value }).then(response => {
                    this.$emit('commentEdited', response.data);
                    this.submitting = false;
                    this.cancel();
                    this.$ga.event('comments', 'edited');
                }).catch(error => {
                    this.submitting = false;
                    this.handle_response(error.response, this.alert, true);
                });
            }
        }
    };
</script>