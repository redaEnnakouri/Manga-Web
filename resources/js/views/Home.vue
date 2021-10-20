<template>
    <div>
        <div class="container">
            <tags v-if="$site.features.includes('tags') && status.tags == 'done'" :tags="tags"/>
            <placeholder v-else component="tags" classes="mb-3"/>
            <popular-comics/>
            <latest-updates/>
            <discover-comics/>
        </div>
    </div>
</template>

<script>
    import Tags from '../components/homepage/Tags';
    import DiscoverComics from '../components/homepage/DiscoverComics';
    import LatestUpdates from '../components/homepage/LatestUpdates';
    import PopularComics from '../components/homepage/PopularComics';
    import AdSpot from '../components/AdSpot';

    export default {
        components: {
            AdSpot,
            Tags,
            DiscoverComics,
            LatestUpdates,
            PopularComics
        },
        data() {
            return {
                tags : [],
                status : {
                    tags : 'loading'
                }
            }
        },
        mounted() {
            this.$api.get("tags", {
                params: {
                    sort: 'comics_count',
                    per_page: 12,
                    landing: true
                }
            }).then(response => {
                this.$meta({
                    title: this.$t('meta.title.default'),
                    description: this.$t('meta.description.default')
                });
                this.tags = response.data.data;
                this.status.tags = "done";
            });
        }
    }
</script>
