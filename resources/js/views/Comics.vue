<template>
    <div class="container">
        <div class="box filters d-flex justify-content-between">
            <h6 class="align-self-center my-0 mx-1"><grid-icon/> {{ $t('app.comics') }}</h6>
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
                <div class="filter">
                    <button class="btn btn-default" data-toggle="collapse" data-target="#filter"><filter-icon/> {{ $t('app.filters.filters') }}</button>
                </div>
            </div>
        </div>
        <div class="collapse" id="filter">
            <div class="box filters d-flex flex-column mt-3">
                <div class="w-100">
                    <h6 class="my-2 mx-1"><filter-icon/> {{ $t('app.filters.filters') }}</h6>
                </div>
                <div class="row m-0">
                    <div class="col-md-3" v-if="$site.features.includes('categories')">
                        <multiselect v-model="categoriesModel" label="name" track-by="id" :placeholder="$t('app.filters.categories') | capitalize" :options="results.categories" :multiple="true" :searchable="true" :loading="status.categories == 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :limit="2" :limit-text="(count) => getMessage('limit-text', 'categories', {count})" :max-height="300" :show-no-results="status.categories == 'none'" :hide-selected="true" @search-change="(query) => search('categories', query)">
                            <span slot="noResult">{{ getMessage('no-results', 'categories') }}</span>
                            <span slot="noOptions">{{ getMessage('start', 'categories') }}</span>
                        </multiselect>
                    </div>
                    <div class="col-md-3" v-if="$site.features.includes('tags')">
                        <multiselect v-model="tagsModel" label="name" track-by="id" :placeholder="$t('app.filters.tags') | capitalize" :options="results.tags" :multiple="true" :searchable="true" :loading="status.tags == 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :limit="2" :limit-text="(count) => getMessage('limit-text', 'tags', {count})" :max-height="300" :show-no-results="status.tags == 'none'" :hide-selected="true" @search-change="(query) => search('tags', query)">
                            <template slot="option" slot-scope="props">
                                <img class="option__image" :src="props.option.icon_url">
                                <span>{{ props.option.name }}</span>
                            </template>
                            <span slot="noResult">{{ getMessage('no-results', 'tags') }}</span>
                            <span slot="noOptions">{{ getMessage('start', 'tags') }}</span>
                        </multiselect>
                    </div>
                    <div class="col-md-3" v-if="$site.features.includes('artists')">
                        <multiselect v-model="artistsModel" label="name" track-by="id" :placeholder="$t('app.filters.artists') | capitalize" :options="results.artists" :multiple="true" :searchable="true" :loading="status.artists == 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :limit="2" :limit-text="(count) => getMessage('limit-text', 'artists', {count})" :max-height="300" :show-no-results="status.artists == 'none'" :hide-selected="true" @search-change="(query) => search('artists', query)">
                            <template slot="option" slot-scope="props">
                                <img class="option__image" :src="props.option.icon_url">
                                <span>{{ props.option.name }}</span>
                            </template>
                            <span slot="noResult">{{ getMessage('no-results', 'artists') }}</span>
                            <span slot="noOptions">{{ getMessage('start', 'artists') }}</span>
                        </multiselect>
                    </div>
                    <div class="col-md-3" v-if="$site.features.includes('authors')">
                        <multiselect v-model="authorsModel" label="name" track-by="id" :placeholder="$t('app.filters.authors') | capitalize" :options="results.authors" :multiple="true" :searchable="true" :loading="status.authors == 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :limit="2" :limit-text="(count) => getMessage('limit-text', 'authors', {count})" :max-height="300" :show-no-results="status.authors == 'none'" :hide-selected="true" @search-change="(query) => search('authors', query)">
                            <template slot="option" slot-scope="props">
                                <img class="option__image" :src="props.option.icon_url">
                                <span>{{ props.option.name }}</span>
                            </template>
                            <span slot="noResult">{{ getMessage('no-results', 'authors') }}</span>
                            <span slot="noOptions">{{ getMessage('start', 'authors') }}</span>
                        </multiselect>
                    </div>
                    <div class="col-md-3" v-if="$site.features.includes('groups')">
                        <multiselect v-model="groupsModel" label="name" track-by="id" :placeholder="$t('app.filters.groups') | capitalize" :options="results.groups" :multiple="true" :searchable="true" :loading="status.groups == 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :limit="2" :limit-text="(count) => getMessage('limit-text', 'groups', {count})" :max-height="300" :show-no-results="status.groups == 'none'" :hide-selected="true" @search-change="(query) => search('groups', query)">
                            <template slot="option" slot-scope="props">
                                <img class="option__image" :src="props.option.icon_url">
                                <span>{{ props.option.name }}</span>
                            </template>
                            <span slot="noResult">{{ getMessage('no-results', 'groups') }}</span>
                            <span slot="noOptions">{{ getMessage('start', 'groups') }}</span>
                        </multiselect>
                    </div>
                    <div class="col-md-3" v-if="$site.features.includes('characters')">
                        <multiselect v-model="charactersModel" label="name" track-by="id" :placeholder="$t('app.filters.characters') | capitalize" :options="results.characters" :multiple="true" :searchable="true" :loading="status.characters == 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :limit="2" :limit-text="(count) => getMessage('limit-text', 'characters', {count})" :max-height="300" :show-no-results="status.characters == 'none'" :hide-selected="true" @search-change="(query) => search('characters', query)">
                            <template slot="option" slot-scope="props">
                                <img class="option__image" :src="props.option.icon_url">
                                <span>{{ props.option.name }}</span>
                            </template>
                            <span slot="noResult">{{ getMessage('no-results', 'characters') }}</span>
                            <span slot="noOptions">{{ getMessage('start', 'characters') }}</span>
                        </multiselect>
                    </div>
                    <div class="col-md-3" v-if="$site.features.includes('parodies')">
                        <multiselect v-model="parodiesModel" label="name" track-by="id" :placeholder="$t('app.filters.parodies') | capitalize" :options="results.parodies" :multiple="true" :searchable="true" :loading="status.parodies == 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :limit="2" :limit-text="(count) => getMessage('limit-text', 'parodies', {count})" :max-height="300" :show-no-results="status.parodies == 'none'" :hide-selected="true" @search-change="(query) => search('parodies', query)">
                            <template slot="option" slot-scope="props">
                                <img class="option__image" :src="props.option.icon_url">
                                <span>{{ props.option.name }}</span>
                            </template>
                            <span slot="noResult">{{ getMessage('no-results', 'parodies') }}</span>
                            <span slot="noOptions">{{ getMessage('start', 'parodies') }}</span>
                        </multiselect>
                    </div>
                    <div class="col-md-3" v-if="$site.features.includes('languages')">
                        <multiselect v-model="languagesModel" label="name" track-by="id" :placeholder="$t('app.filters.languages') | capitalize" :options="results.languages" :multiple="true" :searchable="true" :loading="status.languages == 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :limit="2" :limit-text="(count) => getMessage('limit-text', 'languages', {count})" :max-height="300" :show-no-results="status.languages == 'none'" :hide-selected="true" @search-change="(query) => search('languages', query)">
                            <template slot="option" slot-scope="props">
                                <img class="option__image" :src="props.option.icon_url">
                                <span>{{ props.option.name }}</span>
                            </template>
                            <span slot="noResult">{{ getMessage('no-results', 'languages') }}</span>
                            <span slot="noOptions">{{ getMessage('start', 'languages') }}</span>
                        </multiselect>
                    </div>
                    <div class="col-md-3">
                        <multiselect v-model="filters.attributes" :options="attributes" :multiple="true" :searchable="false" :placeholder="$t('app.filters.attributes') | capitalize">
                            <span class="multiselect__single" v-if="values.length > 1 && !isOpen" slot="selection" slot-scope="{ values, search, isOpen }">{{ getMessage('selected', 'attributes', {count: values.length }) }}</span>
                            <span slot="option" slot-scope="props">{{ $t('app.attributes.' + props.option) }}</span>
                        </multiselect>
                    </div>
                    <div class="col-md-3" v-if="$site.features.includes('statuses')">
                        <multiselect v-model="filters.statuses" :options="statuses" :multiple="true" :searchable="false" :placeholder="$t('app.filters.statuses') | capitalize">
                            <span class="multiselect__single" v-if="values.length > 1 && !isOpen" slot="selection" slot-scope="{ values, search, isOpen }">{{ getMessage('selected', 'statuses', {count: values.length }) }}</span>
                            <span slot="option" slot-scope="props">>{{ $t('app.statuses.' + props.option) }}</span>
                        </multiselect>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <template v-if="status.comics == 'loading'"><placeholder component="comic" classes="col-6 col-sm-4 col-md-3 col-lg-2 p-3" v-for="i in new Array(18)" :key="i"/></template>
            <div class="text-center py-5 w-100" v-else-if="status.comics == 'error'">{{ $t('app.something_went_wrong') }}</div>
            <div v-else-if="comics.length" v-for="(comic,index) in comics" :key="index" class="col-6 col-sm-4 col-md-3 col-lg-2 p-3"><comic :comic="comic"/></div>
            <div v-else class="my-5 py-5 text-center w-100">{{ $t('app.no_results') }}</div>
        </div>
        <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="18" @paginate="paginate"></pagination>
    </div>
</template>
<script>
    import Comic from '../components/content/Comic';

    const DURATIONS = [
        'day',
        'week',
        'month',
        'year',
        'all'
    ];

    export default {
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
                statuses: [
                    'complete',
                    'ongoing',
                    'canceled',
                    'onhold'
                ],
                attributes: [
                    'speechless',
                    'translated',
                    'rewritten'
                ],
                sorting: [
                    'uploaded_at',
                    'title',
                    'pages',
                    'favorites',
                    'popularity'
                ],
                results: {
                    categories: [],
                    artists: [],
                    authors: [],
                    tags: [],
                    characters: [],
                    groups: [],
                    parodies: [],
                    languages: []
                },
                lists: {
                    categories: [],
                    artists: [],
                    authors: [],
                    tags: [],
                    characters: [],
                    groups: [],
                    parodies: [],
                    languages: []
                },
                status: {
                    comics: 'loading',
                    categories: 'pending',
                    artists: 'pending',
                    authors: 'pending',
                    tags: 'pending',
                    characters: 'pending',
                    groups: 'pending',
                    parodies: 'pending',
                    languages: 'pending'
                },
                filters: {
                    q: this.$route.query.q ? this.$route.query.q : '',
                    sort: this.$route.query.sort ? this.$route.query.sort : 'uploaded_at',
                    order: this.$route.query.order ? this.$route.query.order : 'desc',
                    categories: this.getQuery('categories'),
                    artists: this.getQuery('artists'),
                    authors: this.getQuery('authors'),
                    tags: this.getQuery('tags'),
                    characters: this.getQuery('characters'),
                    groups: this.getQuery('groups'),
                    parodies: this.getQuery('parodies'),
                    languages: this.getQuery('languages'),
                    attributes: this.getQuery('attributes'),
                    duration: (DURATIONS.includes(this.$route.query.duration) ? this.$route.query.duration : 'day')
                }
            };
        },
        mounted() {
            this.verifyFilters();
            this.get();
            this.$meta({
                title: this.$t('meta.title.comics'),
                description: this.$t('meta.description.default')
            });
        },
        computed: {
            categoriesModel: {
                get: function () { return this.getData('categories') },
                set: function (val) { return this.setData('categories', val) } 
            },
            artistsModel: {
                get: function () { return this.getData('artists') },
                set: function (val) { return this.setData('artists', val) } 
            },
            authorsModel: {
                get: function () { return this.getData('authors') },
                set: function (val) { return this.setData('authors', val) } 
            },
            groupsModel: {
                get: function () { return this.getData('groups') },
                set: function (val) { return this.setData('groups', val) } 
            },
            charactersModel: {
                get: function () { return this.getData('characters') },
                set: function (val) { return this.setData('characters', val) } 
            },
            parodiesModel: {
                get: function () { return this.getData('parodies') },
                set: function (val) { return this.setData('parodies', val) } 
            },
            languagesModel: {
                get: function () { return this.getData('languages') },
                set: function (val) { return this.setData('languages', val) } 
            },
            tagsModel: {
                get: function () { return this.getData('tags') },
                set: function (val) { return this.setData('tags', val) } 
            },
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
            verifyFilters() {
                for (let key in this.lists) {
                    if (!this.filters[key].length) continue;
                    this.filters[key] = this.filters[key].filter(id => this.lists[key].find(item => item.id == parseInt(id)));
                }
            },
            getMessage(id, component, obj = {}) {
                return this.$t('app.filters.messages.' + id, {
                    name: this.$t('app.filters.' + component),
                    ...obj
                });
            },
            getQuery(key) {
                if (!this.$route.query[key]) return [];
                return (typeof this.$route.query[key] === "string" ? Array(this.$route.query[key]) : this.$route.query[key]);
            },
            search(key, query) {
                this.status[key] = 'loading';
                this.$api.get(key + '?q=' + query).then(response => {
                    this.results[key] = response.data.data;
                    if (response.data.data.length == 0) this.status[key] = 'none';
                    else this.status[key] = 'success';
                }).catch(error => {
                    this.status[key] = 'none';
                    alert('Failed to load ' + key);
                });
            },
            getData(key) {
                return this.filters[key].map(id => this.lists[key].find(item => item.id == parseInt(id)));
            },
            setData(key, value) {
                this.filters[key] = value.map(object => object.id);
                this.lists[key] = [
                    ...this.lists[key],
                    ...value.filter(obj => !this.lists[key].find(old => obj.id == old.id))
                ];
            },
            get() {
                this.status.comics = 'loading';
                this.$api.get('comics?page=' + this.pagination.current_page, { params: this.filters }).then(response => {
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
                    this.status.comics = 'done';
                }).catch(error => {
                    this.status.comics = 'error';
                });
            },
            paginate() {
                this.$router.replace({query: { page: this.pagination.current_page }});
                this.get();
            }
        }
    };
</script>
