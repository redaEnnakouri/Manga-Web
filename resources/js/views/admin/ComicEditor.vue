<template>
    <div>
        <div class="title clearfix">
            <h5 class="float-left py-2 m-0"><grid-icon/>  {{ $t('admin.comics') }}</h5>
            <router-link :to="{ name: 'admin/comics' }" class="btn btn-primary float-right" v-if="comic_slug"><plus-icon/> New comic</router-link>
        </div>
        <div class="form box mt-4">
            <div class="form-header">
                <h5 class="form-title">{{ comic_slug ? $t('admin.edit_comic') : $t('admin.add_comic') }}</h5>
            </div>
            <div class="form-body">
                <div class="text-center py-5 w-100" v-if="status.comic === 'loading'"><div class="spinner-border"></div></div>
                <div class="text-center py-5 w-100" v-else-if="status.comic == 'error'">{{ $t('app.something_went_wrong') }}</div>
                <form v-else @submit.prevent="submit">
                    <alert v-show="alert.show" :type="alert.type" :content="alert.content"></alert>
                    <div class="form-group mb-3">
                        <input v-model="comic.title" :placeholder="$t('app.fields.title')" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <input v-model="comic.slug" placeholder="Slug" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <input v-model="comic.alternative_title" :placeholder="$t('app.fields.alternative_title')" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <textarea v-model="comic.description" :placeholder="$t('app.fields.description')" class="form-control"></textarea>
                    </div>
                    <div class="form-group mb-3 custom-file">
                        <input type="file" class="custom-file-input" id="image" v-on:change="upload">
                        <label class="form-control custom-file-label" for="image">{{ attachment.status }}</label>
                    </div>
                    <div class="form-group mb-3" v-if="$site.features.includes('languages')">
                        <multiselect v-model="languagesModel" label="name" track-by="id" placeholder="Language" :options="results.languages" :searchable="true" :loading="status.languages === 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :show-no-results="status.languages == 'none'" @search-change="query => search('languages', query)"><span slot="noOptions">Start searching...</span></multiselect>
                    </div>
                    <div class="form-group mb-3" v-if="$site.features.includes('categories')">
                        <multiselect v-model="categoriesModel" label="name" track-by="id" placeholder="Category" :options="results.categories" :searchable="true" :loading="status.categories === 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :show-no-results="status.categories == 'none'" @search-change="query => search('categories', query)"><span slot="noOptions">Start searching...</span></multiselect>
                    </div>
                    <div class="form-group mb-3" v-if="$site.features.includes('tags')">
                        <multiselect v-model="tagsModel" label="name" track-by="id" placeholder="Tags" :options="results.tags" :multiple="true" :searchable="true" :loading="status.tags === 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :show-no-results="status.tags == 'none'" @search-change="query => search('tags', query)"><span slot="noOptions">Start searching...</span></multiselect>
                    </div>
                    <div class="form-group mb-3" v-if="$site.features.includes('artists')">
                        <multiselect v-model="artistsModel" label="name" track-by="id" placeholder="Artists" :options="results.artists" :multiple="true" :searchable="true" :loading="status.artists === 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :show-no-results="status.artists == 'none'" @search-change="query => search('artists', query)">
                            <span slot="noResult" class="multiselect__add" @click="openModal('artist')"><plus-icon/> {{ $t('admin.add_artist') }}</span>
                            <span slot="noOptions">Start searching...</span>
                        </multiselect>
                    </div>
                    <div class="form-group mb-3" v-if="$site.features.includes('authors')">
                        <multiselect v-model="authorsModel" label="name" track-by="id" placeholder="Authors" :options="results.authors" :multiple="true" :searchable="true" :loading="status.authors === 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :show-no-results="status.authors == 'none'" @search-change="query => search('authors', query)">
                            <span slot="noResult" class="multiselect__add" @click="openModal('artist')"><plus-icon/> {{ $t('admin.add_artist') }}</span>
                            <span slot="noOptions">Start searching...</span>
                        </multiselect>
                    </div>
                    <div class="form-group mb-3" v-if="$site.features.includes('characters')">
                        <multiselect v-model="charactersModel" label="name" track-by="id" placeholder="Characters" :options="results.characters" :multiple="true" :searchable="true" :loading="status.characters === 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :show-no-results="status.characters == 'none'" @search-change="query => search('characters', query)"><span slot="noOptions">Start searching...</span></multiselect>
                    </div>
                    <div class="form-group mb-3" v-if="$site.features.includes('parodies')">
                        <multiselect v-model="parodiesModel" label="name" track-by="id" placeholder="Parodies" :options="results.parodies" :multiple="true" :searchable="true" :loading="status.parodies === 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :show-no-results="status.parodies == 'none'" @search-change="query => search('parodies', query)"><span slot="noOptions">Start searching...</span></multiselect>
                    </div>
                    <div class="form-group mb-3" v-if="$site.features.includes('relationships')">
                        <multiselect v-model="relationshipsModel" label="name" track-by="id" placeholder="Relationships" :options="results.relationships" :multiple="true" :searchable="true" :loading="status.relationships === 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :show-no-results="status.relationships == 'none'" @search-change="query => search('relationships', query)"><span slot="noOptions">Start searching...</span></multiselect>
                    </div>
                    <div class="form-group mb-3" v-if="$site.features.includes('groups')">
                        <multiselect v-model="groupsModel" label="name" track-by="id" placeholder="Groups" :options="results.groups" :multiple="true" :searchable="true" :loading="status.groups === 'loading'" :internal-search="false" :clear-on-select="false" :close-on-select="false" :show-no-results="status.groups == 'none'" @search-change="query => search('groups', query)"><span slot="noOptions">Start searching...</span></multiselect>
                    </div>
                    <div class="form-group mb-3" v-if="$site.features.includes('statuses')">
                        <multiselect v-model="comic.status" :options="statuses" :allow-empty="true" :searchable="false" placeholder="Status"><span slot="option" slot-scope="props">{{ $t('app.statuses.' + props.option) }}</span></multiselect>
                    </div>
                    <div class="form-group mb-3">
                        <input type="datetime-local" v-model="formatted_date" placeholder="Upload date" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="comic.rewritten" id="rewritten" class="custom-control-input">
                            <label class="custom-control-label" for="rewritten">Rewritten</label>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="comic.speechless" id="speechless" class="custom-control-input">
                            <label class="custom-control-label" for="speechless">Speechless</label>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="comic.translated" id="translated" class="custom-control-input">
                            <label class="custom-control-label" for="translated">Translated</label>
                        </div>
                    </div>
                    <div class="form-section mb-3">
                        <h5 class="font-weight-bold">Sources ({{ comic.sources.length }})</h5>
                        <div class="source d-flex mb-3 align-items-center" v-for="(source, key) in comic.sources" :key="key">
                            <input v-model="source.link" placeholder="Link" class="form-control">
                            <div class="custom-control custom-checkbox mx-3">
                                <input type="checkbox" v-model="source.disabled" :id="source.id + 'disabled'" class="custom-control-input">
                                <label class="custom-control-label" :for="source.id + 'disabled'">Disabled</label>
                            </div>
                        </div>
                        <button type="button" class="btn btn-secondary" @click="add_source">Add source</button>
                    </div>
                    <div class="form-section">
                        <h5 class="font-weight-bold">Chapters ({{ comic.chapters.length }})</h5>
                        <div class="chapter d-flex mt-3 align-items-center" v-for="(chapter, key) in comic.chapters" :key="key">
                            <div class="flex-fill font-weight-bold">{{ chapter.name }}</div>
                            <div class="mx-3">{{ chapter.added_at }}</div>
                            <button type="button" class="btn btn-danger btn-sm" @click="remove_chapter(key)">Delete chapter</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="form-footer">
                <button type="button" class="btn btn-danger mr-auto" @click="remove" v-if="comic_slug"><span class="spinner-border spinner-border-sm" v-if="deleting"></span><template v-else>{{ $t('admin.delete') }}</template></button>
                <button type="button" class="btn btn-primary" @click="submit" :disabled="submitting"><span class="spinner-border spinner-border-sm" v-if="submitting"></span><template v-else>{{ comic_slug ? $t('admin.edit_comic') : $t('admin.add_comic') }}</template></button>
            </div>
        </div>
        <artist-editor/>
        <author-editor/>
    </div>
</template>
<script>
    import ArtistEditor from '../../components/admin/ArtistEditor';
    import AuthorEditor from '../../components/admin/AuthorEditor';

    export default {
        name: "comic-editor",
        components: {
            ArtistEditor,
            AuthorEditor
        },
        data() {
            return {
                statuses: [
                    'complete',
                    'ongoing',
                    'canceled',
                    'onhold'
                ],
                alert: {
                    show: false,
                    type: "danger",
                    content: "",
                },
                results: {
                    categories: [],
                    artists: [],
                    authors: [],
                    tags: [],
                    characters: [],
                    groups: [],
                    parodies: [],
                    relationships: [],
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
                    relationships: [],
                    languages: []
                },
                status: {
                    comic: 'loading',
                    categories: 'pending',
                    artists: 'pending',
                    authors: 'pending',
                    tags: 'pending',
                    characters: 'pending',
                    groups: 'pending',
                    parodies: 'pending',
                    relationships: 'pending',
                    languages: 'pending'
                },
                comic: {
                    title: '',
                    slug: '',
                    alternative_title: '',
                    description: '',
                    image: null,
                    language_id: null,
                    category_id: null,
                    rewritten: false,
                    speechless: false,
                    translated: false,
                    tags: [],
                    authors: [],
                    artists: [],
                    characters: [],
                    parodies: [],
                    relationships: [],
                    groups: [],
                    status: null,
                    uploaded_at: new Date(),
                    chapters: [],
                    sources: []
                },
                attachment: {
                    file: null,
                    status: "Choose comic's image",
                },
                submitting: false,
                deleting: false
            };
        },
        mounted() {
            this.fill();
        },
        watch: {
            comic_slug(value) {
                this.fill();
            }
        },
        computed: {
            comic_slug: function () {
                return this.$route.params.slug
            },
            formatted_date: {
                get: function () { return new Date(this.comic.uploaded_at).toISOString().slice(0, 19) },
                set: function (val) { this.comic.uploaded_at = val }
            },
            categoriesModel: {
                get: function () { return this.getData('categories', 'category_id') },
                set: function (val) { return this.setData('categories', val, 'category_id') } 
            },
            languagesModel: {
                get: function () { return this.getData('languages', 'language_id') },
                set: function (val) { return this.setData('languages', val, 'language_id') } 
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
            relationshipsModel: {
                get: function () { return this.getData('relationships') },
                set: function (val) { return this.setData('relationships', val) } 
            },
            tagsModel: {
                get: function () { return this.getData('tags') },
                set: function (val) { return this.setData('tags', val) } 
            }
        },
        methods: {
            openModal(modal) {
                new this.$bootstrap.Modal(document.querySelector('#' + modal + '-modal')).show();
            },
            search(key, query) {
                this.status[key] = 'loading';
                this.$api.get(key, { params: { q: query } }).then(response => {
                    this.results[key] = response.data.data;
                    if (response.data.data.length == 0) this.status[key] = 'none';
                    else this.status[key] = 'success';
                }).catch(error => {
                    this.status[key] = 'none';
                    alert('Failed to load ' + key);
                });
            },
            getData(key, comic_key = null) {
                let value = this.comic[comic_key || key];
                return Array.isArray(value) ? value.map(id => this.lists[key].find(item => item.id == parseInt(id))) : this.lists[key].find(item => item.id == parseInt(value));
            },
            setData(key, value, comic_key = null) {
                this.comic[comic_key || key] = Array.isArray(value) ? value.map(object => object.id) : (value?.id || null);
                this.lists[key] = [
                    ...this.lists[key],
                    ...Array.isArray(value) ? value.filter(obj => !this.lists[key].find(old => obj.id == old.id)) : (value ? [value] : [])
                ];
            },
            add_source() {
                this.comic.sources.push({ link: '', disabled: false });
            },
            fill() {
                this.status.comic = 'loading';
                if (!this.comic_slug) {
                    Object.assign(this.$data, this.$options.data());
                    return this.status.comic = 'done';
                }
                this.$api.get('comics/' + this.comic_slug, { params: { with: 'chapters,sources' } }).then(response => {
                    Object.keys(response.data).map((k) => {
                        let v = response.data[k];
                        if ((k + 'Model') in this) {
                            this[k + 'Model'] = v;
                        } else if (k in this.comic || k === 'id') {
                            this.comic[k] = v;
                        }
                    });
                    this.status.comic = 'done';
                })
            },
            upload(event) {
                this.attachment.file = event.target.files[0];
                var formData = new FormData();
                formData.append("image", this.attachment.file);
                let headers = {'Content-Type': 'multipart/form-data'};
                let onUploadProgress = progressEvent => this.attachment.status = 'Uploading: ' + Math.floor((progressEvent.loaded * 100) / progressEvent.total) + '%';
                this.$api.post("upload", formData, {headers, onUploadProgress}).then(response => {
                    this.comic.image = response.data.file;
                    this.attachment.status = response.data.message;
                }).catch(error => {
                    this.attachment.status = error.response.data.message;
                });
            },
            submit() {
                this.submitting = true;
                let request = this.comic_slug ? this.$api.put('comics/' + this.comic.id, this.comic) : this.$api.post('comics', this.comic) ;
                request.then((response) => {
                    this.handle_response(response, this.alert, false);
                    this.submitting = false;
                    this.$root.$emit('changed');
                }).catch((error) => {
                    this.handle_response(error.response, this.alert, true);
                    this.submitting = false;
                });
            },
            remove() {
                if (!window.confirm('Do you really want to delete this comic?')) return;
                this.deleting = true;
                this.$api.delete('comics/' + this.comic.id).then((response) => {
                    this.handle_response(response, this.alert, false);
                    this.$root.$emit('changed');
                    this.deleting = false;
                }).catch((error) => {
                    this.handle_response(error.response, this.alert, true);
                    this.deleting = false;
                });
            },
            remove_chapter(chapter_key) {
                let chapter_id = this.comic.chapters[chapter_key].id;
                if (!window.confirm('Do you really want to delete this chapter?')) return;
                this.$api.delete('comics/' + this.comic.id + '/chapters/' + chapter_id).then((response) => {
                    this.comic.chapters.splice(chapter_key, 1);
                }).catch((error) => {
                    alert(error.response.message);
                });
            }
        }
    };
</script>
