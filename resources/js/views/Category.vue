<template>
    <div class="container">
        <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border"></div></div>
        <comics-wrapper v-else filter="categories" :filter_id="category.id" :large="true" :per_page="18">
            <span><folder-icon/> {{ $t('app.comics_heading', {name: category.name}) }}</span>
        </comics-wrapper>
    </div>
</template>
<script>
    import ComicsWrapper from '../components/ComicsWrapper';

    export default {
        components: {
            ComicsWrapper
        },
        data() {
            return {
                alert: {
                    show: false,
                    type: "danger",
                    content: "",
                },
                category: {},
                status: 'loading'
            };
        },
        mounted() {
            this.fill(this.$route.params.slug);
        },
        updated() {
            this.$meta({
                title: this.$t('meta.title.category', { name: this.category.name }),
                description: this.category.meta_description
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
                this.$api.get('categories/' + slug).then(response => {
                    this.category = response.data;
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
