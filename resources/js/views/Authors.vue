<template>
    <div class="container">
        <div class="box filters d-flex justify-content-between">
            <h6 class="align-self-center my-0 mx-1"><image-icon/> {{ $t('app.authors') }}</h6>
            <div>
                <input class="filter form-control" v-model="filters.q" :placeholder="$t('app.filters.search')">
                <div class="filter dropdown">
                    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown"><sliders-icon/> {{ $t('app.filters.sort') }}</button>
                    <div class="dropdown-menu">
                        <template v-for="option in sorting">
                            <a class="dropdown-item" @click="filters.order = (filters.sort == option && filters.order == 'desc' ? 'asc' : 'desc'); filters.sort = option" :key="option">{{ $t('app.filters.' + option) }} <minus-icon v-if="filters.sort != option"/><arrow-down-icon v-else-if="filters.sort == option && filters.order == 'desc'"/><arrow-up-icon v-else/></a>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <template v-if="status == 'loading'"><placeholder component="author" classes="col-6 col-sm-4 col-md-3 col-lg-2 p-3" v-for="i in new Array(18)" :key="i"/></template>
            <div class="text-center py-5 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
            <div v-else v-for="(author,index) in authors" :key="index" class="col-6 col-sm-4 col-md-3 col-lg-2 p-3"><author :author="author"></author></div>
        </div>
        <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="12" @paginate="paginate"></pagination>
    </div>
</template>
<script>
    import Author from '../components/content/Author';

    export default {
        components: {
            Author
        },
        data() {
            return {
                authors: [],
                pagination: {
                    current_page: this.$route.query.page ? this.$route.query.page : 1
                },
                status: 'loading',
                sorting: [
                    'name',
                    'comics_count'
                ],
                filters: {
                    q: this.$route.query.q ? this.$route.query.q : '',
                    sort: this.$route.query.sort ? this.$route.query.sort : 'comics_count',
                    order: this.$route.query.order ? this.$route.query.order : 'desc'
                }
            };
        },
        mounted() {
            this.get();
            this.$meta({
                title: this.$t('meta.title.authors'),
                description: this.$t('meta.description.default')
            });
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
                this.$api.get('authors?page=' + this.pagination.current_page, { params: this.filters }).then(response => {
                    let data = response.data;
                    this.authors = data.data;
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
