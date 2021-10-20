<template>
    <div class="container">
        <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border"></div></div>
        <comics-wrapper v-else filter="relationships" :filter_id="relationship.id" :large="true" :per_page="18">
            <span><relationship-icon/> {{ $t('app.comics_heading', {name: relationship.name}) }}</span>
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
                relationship: {},
                status: 'loading'
            };
        },
        mounted() {
            this.fill(this.$route.params.slug);
        },
        updated() {
            this.$meta({
                title: this.$t('meta.title.relationship', { name: this.relationship.name }),
                description: this.relationship.meta_description
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
                this.$api.get('relationships/' + slug).then(response => {
                    this.relationship = response.data;
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
