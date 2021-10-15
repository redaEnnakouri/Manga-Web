<template>
    <div>
        <div class="box filters d-flex justify-content-between">
            <h6 class="align-self-center my-0 mx-1" ><slot><grid-icon/> {{ $t('app.comics') }}</slot></h6>
            <div>
                <input class="filter form-control" v-model.lazy="filters.q" :placeholder="$t('app.filters.search')">
                <div class="filter dropdown">
                    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown"><sliders-icon/> {{ $t('app.filters.sort') }}</button>
                    <div class="dropdown-menu">
                        <template v-for="option in sorting">
                            <a class="dropdown-item" @click="filters.order = ((filters.sort == option && filters.order == 'desc') ? 'asc' : 'desc'); filters.sort = option" :key="option">{{ $t('app.filters.' + option) }} <minus-icon v-if="filters.sort != option"/><arrow-down-icon v-else-if="filters.sort == option && filters.order == 'desc'"/><arrow-up-icon v-else/></a>
                        </template>
                    </div>
                </div>
                <div class="filter dropdown" v-if="filters.sort == 'popularity'">
                    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown"><calendar-icon/> {{ $t('app.filters.durations.' + filters.duration) }}</button>
                    <div class="dropdown-menu">
                        <template v-for="option in durations">
                            <a class="dropdown-item" @click="filters.duration = option; filters.order = 'desc'" :key="option" v-bind:class="{ active: filters.duration == option }">{{ $t('app.filters.durations.' + option) }}</a>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3 mb-2">
            <template v-if="status == 'loading'"><placeholder component="comic" :classes="comicClass" v-for="i in new Array(limit)" :key="i"/></template>
            <div class="text-center py-5 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
            <div v-else-if="comics.length" v-for="(comic,index) in comics" :key="index" :class="comicClass"><comic :comic="comic"/></div>
            <slot name="empty" v-else></slot>
        </div>
        <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="12" @paginate="paginate"></pagination>
    </div>
</template>
<script>
    import Comic from './content/Comic';

    const DURATIONS = [
        'day',
        'week',
        'month',
        'year',
        'all'
    ];

    export default {
        props: ['filter', 'filter_id', 'large', 'per_page'],
        components: {
            Comic
        },
        data() {
            return {
                comics: [],
                pagination: {
                    current_page: this.$route.query.page ? this.$route.query.page : 1
                },
                durations: DURATIONS,
                sorting: [
                    'uploaded_at',
                    'title',
                    'pages',
                    'favorites',
                    'popularity'
                ],
                filters: {
                    q: this.$route.query.q ? this.$route.query.q : '',
                    sort: this.$route.query.sort ? this.$route.query.sort : 'uploaded_at',
                    order: this.$route.query.order ? this.$route.query.order : 'desc',
                    duration: (this.$route.query.duration in DURATIONS ? this.$route.query.duration : 'day')
                },
                status: 'loading',
            };
        },
        computed: {
            comicClass: function () {
                return this.large ? 'col-6 col-sm-4 col-md-3 col-lg-2 p-3' : 'col-6 col-sm-4 col-md-4 col-lg-3 p-3';
            },
            limit: function () {
                return (this.per_page || 16);
            }
        },
        mounted() {
            this.get();
            BSN.initCallback();
        },
        watch: {
            filters: {
                handler() {
                    this.$router.replace({query: { page: this.pagination.current_page, ...this.filters }});
                    this.get();
                },
                deep: true
            }
        },
        methods: {
            get() {
                this.status = 'loading';
                this.$api.get('comics?per_page=' + this.limit + '&'+ this.filter + '=' + this.filter_id +'&page=' + this.pagination.current_page, { params: this.filters }).then(response => {
                    let data = response.data;
                    this.comics = data.data;
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
            }
        }
    };
</script>
