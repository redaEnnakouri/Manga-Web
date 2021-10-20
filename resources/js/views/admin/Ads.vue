<template>
    <div>
        <div class="title clearfix">
            <h5 class="float-left py-2 m-0"><layers-icon/>  Ads</h5>
            <button type="button" class="btn btn-primary float-right" @click="add"><plus-icon/> Add ad tag</button>
        </div>
        <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border text-primary"></div></div>
        <div class="text-center py-5 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
        <div v-else v-for="(ads, spot) in spots" :key="spot">
            <h6 class="font-weight-bold text-muted mb-0 mt-3">{{ spot.toUpperCase() }}</h6>
            <div class="row">
                <ad v-for="(ad, index) in ads" :key="index" :ad="ad"></ad>
            </div>
        </div>
        <ad-editor :ad_id="ad_id"/>
    </div>
</template>
<script>
    import Ad from '../../components/admin/Ad';
    import AdEditor from '../../components/admin/AdEditor';

    export default {
        components: {
            AdEditor,
            Ad
        },
        data() {
            return {
                spots: [],
                status: 'loading',
                ad_id: false
            };
        },
        mounted() {
            this.get();
            this.$root.$on('changed', () => {
                this.get();
            });
            this.$meta({
                title: 'Ad management',
                description: this.$t('meta.description.default')
            });
        },
        destroyed() {
            this.$root.$off('changed');
        },
        methods: {
            get() {
                this.status = 'loading';
                this.$api.get('ads').then(response => {
                    this.spots = response.data;
                    this.status = 'done';
                }).catch(error => {
                    this.status = 'error';
                });
            },
            add() {
                this.ad_id = false;
                new this.$bootstrap.Modal(document.querySelector('#ad-modal')).show();
            },
            edit(ad_id) {
                this.ad_id = ad_id;
                new this.$bootstrap.Modal(document.querySelector('#ad-modal')).show();
            }
        }
    };
</script>
