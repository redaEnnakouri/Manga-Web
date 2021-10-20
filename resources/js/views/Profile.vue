<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <profile-card :status="status" :user="user"/>
            </div>
            <div class="col-md-9">
                <template v-if="status == 'loading'">
                    <div class="box mb-4 text-center py-5 w-100"><div class="spinner-border my-5"></div></div>
                    <div class="box mb-4 text-center py-5 w-100"><div class="spinner-border my-3"></div></div>
                </template>
                <div v-else-if="status == 'error'" class="box text-center py-5 w-100">{{ $t('app.something_went_wrong') }}</div>
                <template v-else>
                    <comics-wrapper class="mb-4" filter="users" :filter_id="user.id">
                        <span><heart-icon/> {{ $t('app.favorites') }}</span>
                        <template v-slot:empty><div class="text-center py-5 w-100">{{ $t('app.no_favorites') }}</div></template>
                    </comics-wrapper>
                    <comments-wrapper type="user" :entry="user.id" :list="true"/>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    import ComicsWrapper from '../components/ComicsWrapper';
    import CommentsWrapper from '../components/comments/Wrapper';
    import profileCard from '../components/profile/Card';

    export default {
        components: {
            profileCard,
            CommentsWrapper,
            ComicsWrapper
        },
        data() {
            return {
                alert: {
                    show: false,
                    type: "danger",
                    content: "",
                },
                user: {},
                status: 'loading'
            };
        },
        mounted() {
            this.fill(this.$route.params.username);
        },
        updated() {
            this.$meta({
                title: this.$t('meta.title.profile', { username: this.user.username }),
                description: this.$t('meta.description.default')
            });
        },
        watch: {
            '$route' (to, from) {
                if (to.params.username !== from.params.username) {
                    this.fill(to.params.username);
                }
            }
        },
        methods: {
            fill(username) {
                this.status = 'loading';
                this.$api.get('profile/' + username).then(response => {
                    this.user = response.data;
                    this.status = 'done';
                }).catch(error => {
                    if (error.response.status == 404) {
                        this.$router.replace('/404')
                    }
                    this.status = 'error';
                });
            }
        }
    };
</script>
