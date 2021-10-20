<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="search-modal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="form-group mb-3 input-group">
                    <div class="input-group-prepend"><span class="input-group-text"><span class="spinner-border spinner-border-sm align-baseline" v-if="status == 'loading'"></span><search-icon v-else/></span></div>
                    <input v-model.lazy="query" type="search" :placeholder="$t('app.search.placeholder')" class="form-control pl-0">
                </div>
                <transition-group name="results-animation" tag="div">
                    <div class="search-results box tags mb-3" key="tags" v-if="query && results.tags.length">
                        <h6 class="results-header clearfix">
                            <tag-icon/>
                            {{ $t('app.search.tags') }}
                            <router-link :to="{ name: 'tags', query: { q: query } }" class="btn btn-link p-0 float-right">
                                {{ $t('app.search.more') }}
                                <arrow-right-icon/>
                            </router-link>
                        </h6>
                        <div class="results-wrapper">
                            <transition-group name="items-animation" tag="div">
                                <template v-for="(tag, key) in results.tags">
                                    <router-link :to="{ name: 'tag', params: { slug: tag.slug } }"  class="tag-item" :key="key" :style="'background:' + tag.color">
                                        <tag-icon/>
                                        {{ tag.name }}
                                    </router-link>
                                </template>
                            </transition-group>
                        </div>
                    </div>
                    <div class="search-results box comics mb-3" key="comics" v-if="query && results.comics.length">
                        <h6 class="results-header clearfix">
                            <grid-icon/>
                            {{ $t('app.search.comics') }}
                            <router-link :to="{ name: 'comics', query: { q: query } }" class="btn btn-link p-0 float-right">
                                {{ $t('app.search.more') }}
                                <arrow-right-icon/>
                            </router-link>
                        </h6>
                        <div class="results-wrapper">
                            <transition-group name="items-animation" tag="div">
                                <template v-for="(comic, key) in results.comics">
                                    <router-link :to="{ name: 'comic', params: { slug: comic.slug } }"  class="comic-item clearfix" :key="key">
                                        <div class="thumbnail" :style="'background-image: url(' + comic.thumb_url + ');'"></div>
                                        <div class="details">
                                            <h6 class="text-truncate font-weight-bold mb-0" :title="comic.title">{{ comic.title }}</h6>
                                            <small>{{ comic.alternative_title }}</small>
                                        </div>
                                    </router-link>
                                </template>
                            </transition-group>
                        </div>
                    </div>
                    <div class="search-results box groups mb-3" key="groups" v-if="query && results.groups.length">
                        <h6 class="results-header clearfix">
                            <users-icon/>
                            {{ $t('app.search.groups') }}
                            <router-link :to="{ name: 'groups', query: { q: query } }" class="btn btn-link p-0 float-right">
                                {{ $t('app.search.more') }}
                                <arrow-right-icon/>
                            </router-link>
                        </h6>
                        <div class="results-wrapper">
                            <transition-group name="items-animation" tag="div">
                                <template v-for="(group, key) in results.groups">
                                    <router-link :to="{ name: 'group', params: { slug: group.slug } }"  class="group-item clearfix" :key="key">
                                        <div class="details">
                                            <h6 class="text-truncate font-weight-bold mb-0">{{ group.name }}</h6>
                                            <small>{{ $tc('app.total_comics', group.comics_count) }}</small>
                                        </div>
                                    </router-link>
                                </template>
                            </transition-group>
                        </div>
                    </div>
                    <div class="search-results box parodies mb-3" key="parodies" v-if="query && results.parodies.length">
                        <h6 class="results-header clearfix">
                            <copy-icon/>
                            {{ $t('app.search.parodies') }}
                            <router-link :to="{ name: 'parodies', query: { q: query } }" class="btn btn-link p-0 float-right">
                                {{ $t('app.search.more') }}
                                <arrow-right-icon/>
                            </router-link>
                        </h6>
                        <div class="results-wrapper">
                            <transition-group name="items-animation" tag="div">
                                <template v-for="(parody, key) in results.parodies">
                                    <router-link :to="{ name: 'parody', params: { slug: parody.slug } }"  class="parody-item clearfix" :key="key">
                                        <div class="details">
                                            <h6 class="text-truncate font-weight-bold mb-0">{{ parody.name }}</h6>
                                            <small>{{ $tc('app.total_comics', parody.comics_count) }}</small>
                                        </div>
                                    </router-link>
                                </template>
                            </transition-group>
                        </div>
                    </div>
                    <div class="search-results box relationships mb-3" key="relationships" v-if="query && results.relationships.length">
                        <h6 class="results-header clearfix">
                            <relationship-icon/>
                            {{ $t('app.search.relationships') }}
                            <router-link :to="{ name: 'relationships', query: { q: query } }" class="btn btn-link p-0 float-right">
                                {{ $t('app.search.more') }}
                                <arrow-right-icon/>
                            </router-link>
                        </h6>
                        <div class="results-wrapper">
                            <transition-group name="items-animation" tag="div">
                                <template v-for="(relationship, key) in results.relationships">
                                    <router-link :to="{ name: 'relationship', params: { slug: relationship.slug } }"  class="relationship-item clearfix" :key="key">
                                        <div class="details">
                                            <h6 class="text-truncate font-weight-bold mb-0">{{ relationship.name }}</h6>
                                            <small>{{ $tc('app.total_comics', relationship.comics_count) }}</small>
                                        </div>
                                    </router-link>
                                </template>
                            </transition-group>
                        </div>
                    </div>
                    <div class="search-results box characters mb-3" key="characters" v-if="query && results.characters.length">
                        <h6 class="results-header clearfix">
                            <star-icon/>
                            {{ $t('app.search.characters') }}
                            <router-link :to="{ name: 'characters', query: { q: query } }" class="btn btn-link p-0 float-right">
                                {{ $t('app.search.more') }}
                                <arrow-right-icon/>
                            </router-link>
                        </h6>
                        <div class="results-wrapper">
                            <transition-group name="items-animation" tag="div">
                                <template v-for="(character, key) in results.characters">
                                    <router-link :to="{ name: 'character', params: { slug: character.slug } }"  class="character-item clearfix" :key="key">
                                        <div class="thumbnail" :style="'background-image: url(' + character.image_url + ');'"></div>
                                        <div class="details">
                                            <h6 class="text-truncate font-weight-bold mb-0">{{ character.name }}</h6>
                                            <small>{{ $tc('app.total_comics', character.comics_count) }} <em class="character-gender mb-0" v-if="character.gender"> - {{ $t('app.genders.' + character.gender) }}</em><template v-if="character.gender && character.hair"> - </template><em class="character-hair mb-0" v-if="character.hair">{{ $t('app.character.hair', { color: character.hair }) }}</em></small>
                                        </div>
                                    </router-link>
                                </template>
                            </transition-group>
                        </div>
                    </div>
                    <div class="search-results box authors mb-3" key="authors" v-if="query && results.authors.length">
                        <h6 class="results-header clearfix">
                            <book-open-icon/>
                            {{ $t('app.search.authors') }}
                            <router-link :to="{ name: 'authors', query: { q: query } }" class="btn btn-link p-0 float-right">
                                {{ $t('app.search.more') }}
                                <arrow-right-icon/>
                            </router-link>
                        </h6>
                        <div class="results-wrapper">
                            <transition-group name="items-animation" tag="div">
                                <template v-for="(author, key) in results.authors">
                                    <router-link :to="{ name: 'author', params: { slug: author.slug } }"  class="author-item clearfix" :key="key">
                                        <div class="thumbnail" :style="'background-image: url(' + author.image_url + ');'"></div>
                                        <div class="details">
                                            <h6 class="text-truncate font-weight-bold mb-0">{{ author.name }}</h6>
                                            <small>{{ $tc('app.total_comics', author.comics_count) }} <em class="author-gender mb-0" v-if="author.gender"> - {{ $t('app.genders.' + author.gender) }}</em></small>
                                        </div>
                                    </router-link>
                                </template>
                            </transition-group>
                        </div>
                    </div>
                    <div class="search-results box artists mb-3" key="artists" v-if="query && results.artists.length">
                        <h6 class="results-header clearfix">
                            <image-icon/>
                            {{ $t('app.search.artists') }}
                            <router-link :to="{ name: 'artists', query: { q: query } }" class="btn btn-link p-0 float-right">
                                {{ $t('app.search.more') }}
                                <arrow-right-icon/>
                            </router-link>
                        </h6>
                        <div class="results-wrapper">
                            <transition-group name="items-animation" tag="div">
                                <template v-for="(artist, key) in results.artists">
                                    <router-link :to="{ name: 'artist', params: { slug: artist.slug } }"  class="artist-item clearfix" :key="key">
                                        <div class="thumbnail" :style="'background-image: url(' + artist.image_url + ');'"></div>
                                        <div class="details">
                                            <h6 class="text-truncate font-weight-bold mb-0">{{ artist.name }}</h6>
                                            <small>{{ $tc('app.total_comics', artist.comics_count) }} <em class="artist-gender mb-0" v-if="artist.gender"> - {{ $t('app.genders.' + artist.gender) }}</em></small>
                                        </div>
                                    </router-link>
                                </template>
                            </transition-group>
                        </div>
                    </div>
                </transition-group>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                query: '',
                results: {
                    parodies: [],
                    groups: [],
                    artists: [],
                    authors: [],
                    tags: [],
                    comics: [],
                    characters: [],
                    relationships: []
                },
                status: ''
            };
        },
        watch: {
            query (current, previous) {
                if (current.length) {
                    this.search();
                }
            }
        },
        methods: {
            search() {
                let i = 0;
                this.status = 'loading';
                const requests = Object.keys(this.results).filter(feature => feature === 'comics' || this.$site.features.includes(feature));
                Promise.all(requests.map(key => {
                    return this.$api.get(key + '?q=' + this.query + '&per_page=6').then(response => {
                        this.results[key] = response.data.data;
                    }).catch(error => {
                        this.status = 'error';
                        alert('Failed to load results for ' + key);
                    });
                })).then(() => this.status = 'done');
            },
            openModal(modal) {
                new this.$bootstrap.Modal(document.querySelector('#search-modal')).show();
            },
            hideModal(modal) {
                modal = document.querySelector('#search-modal');
                if (modal.classList.contains('show')) {
                    new this.$bootstrap.Modal(modal).hide();
                }
            },
        }
    };
</script>
