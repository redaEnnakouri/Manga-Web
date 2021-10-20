<template>
    <div>
        <div class="title clearfix">
            <h5 class="float-left py-2 m-0"><image-icon/>  {{ $t('admin.artists') }}</h5>
            <button type="button" class="btn btn-primary float-right" @click="add"><plus-icon/> {{ $t('admin.add_artist') }}</button>
        </div>
        <div class="row my-2">
            <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border text-primary"></div></div>
            <div class="text-center py-5 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
            <artist v-else v-for="(artist,index) in artists" :key="index" :artist="artist" admin="true"></artist>
        </div>
        <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="12" @paginate="paginate"></pagination>
        <artist-editor :artist_id="artist_id"/>
    </div>
</template>
<script>
    import Artist from '../../components/admin/Artist';
    import ArtistEditor from '../../components/admin/ArtistEditor';

    export default {
        components: {
            ArtistEditor,
            Artist
        },
        data() {
            return {
                artists: [],
                pagination: {
                    current_page: (this.$route.query.page ? this.$route.query.page : 1)
                },
                status: 'loading',
                artist_id: false
            };
        },
        mounted() {
            this.get();
            this.$root.$on('changed', () => {
                this.get();
            });
            this.$meta({
                title: this.$t('meta.title.admin.artists'),
                description: this.$t('meta.description.default')
            });
        },
        destroyed() {
            this.$root.$off('changed');
        },
        methods: {
            get() {
                this.status = 'loading';
                this.$api.get('artists?per_page=16&page=' + this.pagination.current_page).then(response => {
                    let data = response.data;
                    this.artists = data.data;
                    this.pagination = {
                        total: data.total,
                        per_page: data.per_page,
                        current_page: data.current_page,
                        last_page: data.last_page,
                        from: data.to,
                        to: data.to,
                    };
                    this.status = 'done';
                }).catch(error => {
                    this.status = 'error';
                });
            },
            paginate() {
                this.$router.replace({query: { page: this.pagination.current_page }});
                this.get();
            },
            add() {
                this.artist_id = false;
                new this.$bootstrap.Modal(document.querySelector('#artist-modal')).show();
            },
            edit(artist_id) {
                this.artist_id = artist_id;
                new this.$bootstrap.Modal(document.querySelector('#artist-modal')).show();
            }
        }
    };
</script>
