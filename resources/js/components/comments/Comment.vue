<template>
    <div class="comment" v-if="!deleted">
        <div class="comment-votes">
            <button @click="vote(1)" class="comment-vote up" :class="{ active: comment.meta.upvoted }" :title="$t('app.discussion.upvote')"><chevron-up-icon/></button>
            <button @click="vote(-1)" class="comment-vote down" :class="{ active: comment.meta.downvoted }" :title="$t('app.discussion.downvote')"><chevron-down-icon/></button>
        </div>
        <div class="comment-header">
            <router-link :to="{ name: 'profile', params: { username: comment.user.username } }" class="comment-user mr-2"><img :src="comment.user.avatar_url"> {{ comment.user.username }}</router-link>
            <span class="comment-points">{{ comment.points }} {{ $t('app.discussion.points') }}</span>
             · 
            <span class="comment-timestamp" :title="comment.created_at">{{ comment.posted }}</span>
            <template v-if="minimal">
                <template v-if="comment.child">replied to a comment on </template><template v-else>on </template>
                <router-link :to="comment.type == 'review' ? { name: comment.item.type + '/reviews', params: { slug: comment.item.slug, identifier: comment.item.identifier } } : { name: comment.type, params: { slug: comment.item.slug } }" class="comment-item"> {{ comment.item.title || comment.item.name }}</router-link>
            </template>
            <span class="comment-edited" v-if="comment.meta.edited">{{ $t('app.discussion.edited') }}</span>
        </div>
        <div class="comment-content" v-html="comment.html"></div>
        <div class="comment-buttons">
            <button @click="reply" class="comment-button"><message-square-icon/> {{ $t('app.discussion.reply') }}</button>
            <span v-if="comment.type != 'review'" class="dropdown">
                <button class="comment-button" data-toggle="dropdown"><share-icon/> {{ $t('app.discussion.share') }}</button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=' + url"><facebook-icon/> {{ $t('app.share.facebook') }}</a>
                    <a class="dropdown-item" target="_blank" :href="'https://twitter.com/intent/tweet/?url=' + url"><twitter-icon/> {{ $t('app.share.twitter') }}</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" @click="copy"><clipboard-icon/> {{ $t("app.share.copy") }}</a>
                </div>
            </span>
            <div class="float-right" v-if="comment.meta.owner">
                <button @click="remove" class="comment-button"><trash-icon/> {{ $t('app.discussion.delete') }}</button>
                <button @click="edit" class="comment-button"><edit-icon/> {{ $t('app.discussion.edit') }}</button>
            </div>
        </div>
        <component v-if="(replying || editing) && editor" :type="comment.type" :entry="comment.entry" :cancel="cancel" :parent_id="comment.identifier" :default_value="(editing ? comment.content : '')" :editing="editing" :is="editor" @commentEdited="handleEdit" @commentAdded="handleAdd"></component>
        <a v-if="collapsed && comment.comments.length" class="inline-action" @click="toggle">{{ $t('app.discussion.collapsed', { comments: comment.comments.length }) }} <chevron-down-icon class="float-right"/></a>
        <router-link v-else-if="comment.comments === true" class="inline-action" :to="{ name: comment.type + '/comments', params: { slug: comment.item.slug, identifier: comment.identifier } }">{{ $t('app.discussion.continue') }} <chevron-right-icon class="float-right"/></router-link>
        <div v-else-if="comment.comments.length" class="comments">
            <div class="comment-bar" @click="toggle"></div>
            <comment v-for="(comment, index) in comment.comments" :key="index" :comment="comment"/>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'comment',
        props: ["comment", "parent", "minimal", "type"],
        data() {
            return {
                editor: false,
                collapsed: this.minimal || false,
                replying: false,
                editing: false,
                deleted: false,
                url: window.location.origin + this.$router.resolve({ name: this.comment.type + '/comments', params: { slug: this.comment.item.slug, identifier: this.comment.identifier } }).href
            }
        },
        mounted() {
            BSN.initCallback();
        },
        computed: {
            ...mapGetters(["isLoggedIn", "user"])
        },
        watch: {
            isLoggedIn () {
                this.replying && this.load();
            }
        },
        methods: {
            handleEdit(data) {
                this.comment.meta = data.meta;
                this.comment.content = data.content;
                this.comment.html = data.html;
            },
            handleAdd(data) {
                this.comment.comments = [...data, ...this.comment.comments];
            },
            reply() {
                this.editing = false;
                this.replying = true;
                this.load();
            },
            edit() {
                this.replying = false;
                this.editing = true;
                this.load();
            },
            remove() {
                if (!window.confirm('Do you really want to delete that comment?')) return;
                this.$api.delete('comments/' + this.comment.identifier).then(response => {
                    this.deleted = true;
                    this.$emit('commentDeleted');
                    this.$ga.event('comments', 'deleted');
                });
            },
            cancel() {
                this.replying = this.editing = false;
            },
            vote(vote) {
                if (!this.isLoggedIn) return this.$root.$emit('open-modal', 'Login');
                this.$api.post('comments/vote/' + this.comment.identifier + '/' + vote).then(response => {
                    this.comment.meta = response.data.meta;
                    this.comment.points = response.data.points;
                    if (response.data.meta.upvoted) this.$ga.event('comments', 'upvoted');
                    else if (response.data.meta.downvoted) this.$ga.event('comments', 'downvoted');
                });
            },
            load() {
                if (!this.isLoggedIn) return this.$root.$emit('open-modal', 'Login');
                this.editor = () => ({
                    component: import(/* webpackMode: "lazy", webpackChunkName: "editor.bundle" */ './Editor'),
                    loading: {
                        template: '<div class="spinner-border my-5 mx-auto d-block"></div>'
                    },
                    error: {
                        template: '<div class="my-5 mx-auto d-block">{{ $t("app.something_went_wrong") }}</div>'
                    },
                    delay: 200,
                    timeout: 10000
                });
            },
            toggle() {
                this.collapsed = !this.collapsed;
            },
            copy() {
                const el = document.createElement('textarea');
                el.value = this.url;
                el.setAttribute('readonly', '');
                el.style.position = 'absolute';
                el.style.left = '-9999px';
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
            }
        }
    }
</script>
