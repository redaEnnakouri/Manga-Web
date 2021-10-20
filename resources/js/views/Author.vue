<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-3">
                <div class="author-card clearfix box mb-4">
                    <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border my-5"></div></div>
                    <div class="text-center py-4 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
                    <template v-else>
                        <div class="author-details text-center">
                            <img class="person-image my-4" :src="author.image_url"/>
                            <h5 class="author-name font-weight-bold mb-0">{{ author.name }}</h5>
                            <em class="author-gender mb-0" v-if="author.gender">{{ $t('app.genders.' + author.gender) }}</em>
                            <p class="author-description mb-0 mt-3">{{ author.description }}</p>
                        </div>
                    </template>
                </div>
                <div class="author-card clearfix box mb-4" v-if="status != 'done' || author.platforms.length > 0">
                    <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border"></div></div>
                    <div class="text-center py-5 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
                    <template v-else>
                        <h6 class="box-header"><link-icon/> {{ $t('app.platforms') }}</h6>
                        <div class="author-platforms">
                            <div v-for="(object, key) in author.platforms" :key="key" class="platform">
                                <div class="platform-title">
                                    <template v-if="/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(object.details)">
                                        <img :src="'https://www.google.com/s2/favicons?domain=' + object.details" :alt="object.platform">
                                    </template>
                                    {{ object.platform }}
                                </div>
                                <p class="platform-details m-0">{{ object.details }}</p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="col-12 col-lg-9">
                <template v-if="$route.name !== 'author/comments'">
                    <div class="box text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border my-5"></div></div>
                    <comics-wrapper v-else filter="authors" :filter_id="author.id"/>
                </template>
                <div class="mt-4">
                    <div class="box text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border my-4"></div></div>
                    <comments-wrapper v-else type="author" :entry="author.id" :parent_id="$route.params.identifier"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ComicsWrapper from '../components/ComicsWrapper';
    import CommentsWrapper from '../components/comments/Wrapper';

    export default {
        components: {
            ComicsWrapper,
            CommentsWrapper
        },
        data() {
            return {
                alert: {
                    show: false,
                    type: "danger",
                    content: "",
                },
                author: {},
                status: 'loading'
            };
        },
        mounted() {
            this.fill(this.$route.params.slug);
        },
        updated() {
            this.$meta({
                title: this.$t('meta.title.author', { name: this.author.name }),
                description: this.author.meta_description
            });
        },
        watch: {
            '$route' (to, from) {
                if (to.params.slug !== from.params.slug) {
                    this.fill(to.params.slug);
                }
            }
        },
        methods: {
            fill(slug) {
                this.status = 'loading';
                this.$api.get('authors/' + slug).then(response => {
                    this.author = response.data;
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
