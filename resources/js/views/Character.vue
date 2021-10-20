<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-3">
                <div class="character-card clearfix box mb-4">
                    <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border"></div></div>
                    <div class="text-center py-5 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
                    <template v-else>
                        <div class="character-details text-center">
                            <img class="person-image my-4" :src="character.image_url"/>
                            <h5 class="character-name font-weight-bold mb-0">{{ character.name }}</h5>
                            <em class="character-gender mb-0" v-if="character.gender">{{ $t('app.genders.' + character.gender) }}</em>
                            <template v-if="character.gender && character.hair"> - </template>
                            <em class="character-hair mb-0" v-if="character.hair">{{ $t('app.character.hair', { color: character.hair }) }}</em>
                            <p class="character-description mb-0 mt-3">{{ character.description }}</p>
                        </div>
                    </template>
                </div>
            </div>
            <div class="col-12 col-lg-9">
                <template v-if="$route.name !== 'character/comments'">
                    <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border"></div></div>
                    <comics-wrapper v-else filter="characters" :filter_id="character.id"/>
                </template>
                <div class="text-center py-5 w-100 py-3" v-if="status == 'loading'"><div class="spinner-border"></div></div>
                <comments-wrapper v-else type="character" :entry="character.id" :parent_id="$route.params.identifier"/>
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
                character: {},
                status: 'loading'
            };
        },
        mounted() {
            this.fill(this.$route.params.slug);
        },
        updated() {
            this.$meta({
                title: this.$t('meta.title.character', { name: this.character.name }),
                description: this.character.meta_description
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
                this.$api.get('characters/' + slug).then(response => {
                    this.character = response.data;
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
