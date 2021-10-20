<template>
    <div :class="{ box: !headless, 'mb-3': headless }">
        <h6 v-if="!headless" class="box-header">
            <message-square-icon/> {{ $t('app.discussion.' + (type == 'user' ? 'profile' : 'title')) }} <template v-if="parent_id">{{ $t('app.discussion.single') }}</template>
            <router-link v-if="parent_id" :to="{ name: type + '/comments', params: { slug: $route.params.slug } }" class="float-right"><h6 class="font-weight-bold m-0"><arrow-left-icon/> {{ $t('app.all.comments') }}</h6></router-link>
        </h6>
        <div class="discussion">
            <transition v-if="!parent_id && !list" name="fade" mode="out-in">
                <component v-if="editor" :type="type" :entry="entry" @commentAdded="handleAdd" :is="editor"></component>
                <div v-else class="notice-box">
                    {{ $t("app.discussion.login", { type }) }}
                    <div class="mt-3">
                        <router-link :to="{name: 'login'}" class="btn btn-sm btn-link px-3" :event="''" @click.native.prevent="$root.$emit('open-modal', 'Login')">{{ $t("auth.login") }}</router-link>
                        <router-link :to="{name: 'register'}" class="btn btn-sm btn-primary px-3" :event="''" @click.native.prevent="$root.$emit('open-modal', 'Register')">{{ $t("auth.register") }}</router-link>
                    </div>
                </div>
            </transition>
            <div class="mb-4 text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border my-5"></div></div>
            <div v-else-if="status == 'error'" class="text-center py-5 w-100">{{ $t('app.something_went_wrong') }}</div>
            <div v-else-if="list && !comments.length" class="text-center py-5 w-100">{{ $t('app.discussion.no_comments') }}</div>
            <div v-else-if="comments.length" class="comments">
                <div class="comment-bar parent"></div>
                <comment v-for="(comment, index) in comments" :key="index" :comment="comment" :parent="true" :minimal="list" @commentDeleted="handleDelete" :type="type"/>
            </div>
            <a v-if="pagination.has_next" class="inline-action mb-0" @click="pagination.loading ? null : pagination.current_page++">{{ $t('app.discussion.load_more') }} <span v-if="pagination.loading" class="spinner-border spinner-border-sm float-right"></span><chevron-down-icon v-else class="float-right"/></a>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import Comment from './Comment';

    export default {
        components: {
            Comment
        },
        props: ['type', 'entry', 'parent_id', 'headless', 'list'],
        data() {
            return {
                editor: {
                    template: '<div class="spinner-border my-5 mx-auto d-block"></div>'
                },
                comments: [],
                pagination: {
                    current_page: 1,
                    has_next: false
                },
                status: 'loading',
            };
        },
        mounted() {
            this.load();
            this.get();
        },
        computed: {
            ...mapGetters(["isLoggedIn", "user"])
        },
        watch: {
            isLoggedIn() {
                this.load();
            },
            parent_id() {
                this.get();
            },
            "pagination.current_page"() {
                this.get(true);
            }
        },
        methods: {
            handleAdd(data) {
                this.comments = [...data, ...this.comments];
                this.$emit('commentAdded');
            },
            handleDelete(data) {
                this.$emit('commentDeleted');
            },
            load() {
                this.editor = this.isLoggedIn ? () => ({
                    component: import(/* webpackMode: "lazy", webpackChunkName: "editor.bundle" */ './Editor'),
                    loading: {
                        template: '<div class="spinner-border my-5 mx-auto d-block"></div>'
                    },
                    error: {
                        template: '<div class="my-5 mx-auto d-table">{{ $t("app.something_went_wrong") }}</div>'
                    },
                    delay: 200,
                    timeout: 10000
                }) : false;
            },
            get(paginate) {
                if (paginate) this.pagination.loading = true;
                else this.status = 'loading';
                this.$api.get(['comments', this.type, this.entry, this.parent_id].filter(Boolean).join('/') + '?page=' + this.pagination.current_page).then(response => {
                    let data = response.data;
                    this.comments = paginate ? [...this.comments, ...data.data] : data.data;
                    this.pagination = {
                        current_page: data.current_page,
                        has_next: !!data.next_page_url,
                        loading: false
                    };
                    this.status = 'done';
                }).catch(error => {
                    this.status = 'error';
                    this.pagination.loading = false;
                });
            },
        }
    };
</script>
