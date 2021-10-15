<template>
    <div class="container">
        <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border"></div></div>
        <comics-wrapper v-else filter="parodies" :filter_id="parody.id" :large="true" :per_page="18">
            <span><copy-icon/> {{ $t('app.comics_heading', {name: parody.name}) }}</span>
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
                parody: {},
                status: 'loading'
            };
        },
        mounted() {
            this.fill(this.$route.params.slug);
        },
        updated() {
            this.$meta({
                title: this.$t('meta.title.parody', { name: this.parody.name }),
                description: this.parody.meta_description
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
                this.$api.get('parodies/' + slug).then(response => {
                    this.parody = response.data;
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
