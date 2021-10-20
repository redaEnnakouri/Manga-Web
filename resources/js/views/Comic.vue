<template>
    <div class="container comic-page">
        <div class="row">
            <div class="col-12 col-lg-3">
                <template v-if="status.comic == 'loading'">
                    <div class="box mb-4 text-center py-5 w-100"><div class="spinner-border my-5"></div></div>
                    <div class="box mb-4 text-center py-5 w-100"><div class="spinner-border"></div></div>
                </template>
                <div v-else-if="status.comic == 'error'" class="box text-center py-5 w-100">{{ $t('app.something_went_wrong') }}</div>
                <template v-else>
                    <div class="comic-card box mb-4">
                        <div class="comic-sauce" v-if="$site.id === 'Manga-Web'">
                            <span :class="{ expanded }" @click="expanded=true; copy(comic.id)">Sauce <strong>{{ comic.id }}</strong></span>
                        </div>
                        <div class="comic-image my-4">
                            <router-link :to="{ name: 'comic/reader', params: { slug: comic.slug, chapter: comic.first_chapter ? comic.first_chapter.slug : undefined } }"><img class="w-100" :src="comic.image_url" :alt="`${comic.title} cover`"/></router-link>
                        </div>
                        <div class="comic-card-details">
                            <h5 class="comic-title font-weight-bold mb-2">{{ comic.title }}</h5>
                            <h6 class="comic-alternative-title text-muted mb-0">{{ comic.alternative_title }}</h6>
                            <div class="comic-card-badges">
                                <span v-if="comic.rewritten" class="badge badge-primary">{{ $t('app.attributes.rewritten') }}</span>
                                <span v-if="comic.translated" class="badge badge-primary">{{ $t('app.attributes.translated') }}</span>
                                <span v-if="comic.speechless" class="badge badge-primary">{{ $t('app.attributes.speechless') }}</span>
                            </div>
                            <div class="comic-card-buttons">
                                <router-link v-if="comic.downloadable" :to="{ name: 'comic/download', params: { slug: comic.slug } }" class="btn btn-primary mt-4 w-100" :event="isLoggedIn ? 'click' : ''" @click.native.prevent="isLoggedIn ? null : $root.$emit('open-modal', 'Login') && $ga.event('comics', 'guest-download')"><download-icon/> {{ $t('app.comic.download') }}</router-link>
                                <button class="btn btn-danger mt-2 w-100" @click="isLoggedIn ? favorite() : $root.$emit('open-modal', 'Login')"><heart-icon :style="{ fill: comic.favorited ? 'white' : 'none' }"/> {{ $t('app.comic.favorite') }} ({{ comic.favorites }})</button>
                            </div>
                        </div>
                    </div>
                    <div class="details-card box mb-4" v-if="comic.tags.length > 0">
                        <h6 class="box-header"><tag-icon/> {{ $t('app.comic.tags') }}</h6>
                        <template v-for="(tag, key) in comic.tags">
                            <router-link :to="{ name: 'tag', params: { slug: tag.slug } }"  class="tag-link" :key="key" :style="'background:' + tag.color">
                                <tag-icon/>
                                {{ tag.name }}
                            </router-link>
                        </template>
                    </div>
                    <div v-if="$app.is_mobile">
                        <div v-if="canRead && status.chapters === 'loading' && status.images === 'loading'" class="box mb-4 text-center py-5 w-100"><div class="spinner-border"></div></div>
                        <comic-premium v-else-if="!canRead"/>
                        <comic-chapters v-else-if="comic.chapters_count" :comic="comic" :chapters="chapters"/>
                        <comic-gallery v-else-if="comic.pages" :comic="comic" :images="images"/>
                    </div>
                    <div class="comic-details box mb-4">
                        <h6 class="box-header"><info-icon/> {{ $t('app.comic.details') }}</h6>
                        <div class="comic-detail clearfix" v-if="comic.language">
                            <h6 class="float-left">{{ $t('app.comic.language') }}:</h6>
                            <router-link :to="{ name: 'language', params: { slug: comic.language.slug } }"  class="float-right tag-link m-0"><img class="flag" :src="comic.language.icon_url" :alt="comic.language.name">{{ comic.language.name }}</router-link>
                        </div>
                        <div class="comic-detail clearfix" v-if="comic.category">
                            <h6 class="float-left">{{ $t('app.comic.category') }}:</h6>
                            <router-link :to="{ name: 'category', params: { slug: comic.category.slug } }"  class="float-right tag-link m-0">{{ comic.category.name }}</router-link>
                        </div>
                        <div class="comic-detail clearfix" v-if="comic.status">
                            <h6 class="float-left">{{ $t('app.comic.status') }}:</h6>
                            <span class="float-right">{{ $t('app.statuses.' + comic.status) }}</span>
                        </div>
                        <div class="comic-detail clearfix">
                            <h6 class="float-left">{{ $t('app.comic.uploaded_at') }}:</h6>
                            <span class="float-right">{{ comic.uploaded_at }}</span>
                        </div>
                    </div>
                    <div class="details-card box mb-4" v-if="comic.characters.length > 0">
                        <h6 class="box-header"><image-icon/> {{ $t('app.comic.characters') }}</h6>
                        <template v-for="(character, key) in comic.characters">
                            <router-link :to="{ name: 'character', params: { slug: character.slug } }"  class="tag-link" :key="'character-' + key">
                                {{ character.name }}
                            </router-link>
                        </template>
                    </div>
                    <div class="details-card box mb-4" v-if="comic.artists.length > 0">
                        <h6 class="box-header"><image-icon/> {{ $t('app.comic.artists') }}</h6>
                        <template v-for="(artist, key) in comic.artists">
                            <router-link :to="{ name: 'artist', params: { slug: artist.slug } }"  class="tag-link" :key="'artist-' + key">
                                {{ artist.name }}
                            </router-link>
                        </template>
                    </div>
                    <div class="details-card box mb-4" v-if="comic.authors.length > 0">
                        <h6 class="box-header"><book-open-icon/> {{ $t('app.comic.authors') }}</h6>
                        <template v-for="(author, key) in comic.authors">
                            <router-link :to="{ name: 'author', params: { slug: author.slug } }"  class="tag-link" :key="'author-' + key">
                                {{ author.name }}
                            </router-link>
                        </template>
                    </div>
                    <div class="details-card box mb-4" v-if="comic.parodies.length">
                        <h6 class="box-header"><copy-icon/> {{ $t('app.comic.parodies') }}</h6>
                        <template v-for="(parody, key) in comic.parodies">
                            <router-link :to="{ name: 'parody', params: { slug: parody.slug } }"  class="tag-link" :key="'author-' + key">
                                {{ parody.name }}
                            </router-link>
                        </template>
                    </div>
                    <div class="details-card box mb-4" v-if="comic.relationships.length">
                        <h6 class="box-header"><relationship-icon/> {{ $t('app.comic.relationships') }}</h6>
                        <template v-for="(relationship, key) in comic.relationships">
                            <router-link :to="{ name: 'relationship', params: { slug: relationship.slug } }"  class="tag-link" :key="'author-' + key">
                                {{ relationship.name }}
                            </router-link>
                        </template>
                    </div>
                    <div class="details-card box mb-4" v-if="comic.groups.length">
                        <h6 class="box-header"><users-icon/> {{ $t('app.comic.groups') }}</h6>
                        <template v-for="(group, key) in comic.groups">
                            <router-link :to="{ name: 'group', params: { slug: group.slug } }"  class="tag-link" :key="'author-' + key">
                                {{ group.name }}
                            </router-link>
                        </template>
                    </div>
                </template>
            </div>
            <div class="col-12 col-lg-9">
                <template v-if="status.comic == 'loading'">
                    <div class="box mb-4 text-center py-5 w-100"><div class="spinner-border"></div></div>
                    <div class="box mb-4 text-center py-5 w-100"><div class="spinner-border my-3"></div></div>
                    <div class="box mb-4 text-center py-5 w-100"><div class="spinner-border my-5"></div></div>
                    <div class="box mb-4 text-center py-5 w-100"><div class="spinner-border my-5"></div></div>
                    <div class="box mb-4 text-center py-5 w-100"><div class="spinner-border my-5"></div></div>
                </template>
                <div v-else-if="status.comic == 'error'" class="box text-center py-5 w-100">{{ $t('app.something_went_wrong') }}</div>
                <template v-else>
                    <template v-if="section == 'download'">
                        <div id="download" class="box mb-4">
                            <h6 class="box-header mb-2">
                                <download-icon/> {{ $t('app.comic.download_title') }}
                            </h6>
                            <div class="comic-download col-md-8 text-center mx-auto py-5">
                                <p>{{ $t('app.comic.download_text') }}</p>
                                <div class="progress mb-4" v-show="download.progress">
                                    <div class="progress-bar" :class="{ 'bg-success': download.progress == 100, 'bg-danger': download.failed }" :style="{ width: download.progress + '%' }"></div>
                                </div>
                                <button class="btn btn-primary mx-auto px-4" @click="initDownload()" :disabled="download.disabled"><download-icon/> {{ $t('app.comic.download') }}</button>
                            </div>
                        </div>
                    </template>
                    <template v-if="section == 'characters'">
                        <div class="box filters d-flex justify-content-between">
                            <h6 class="align-self-center py-2 my-0 mx-1"><star-icon/> {{ $t('app.comic.characters') }}</h6>
                        </div>
                        <div class="row my-3">
                            <div v-for="(character,index) in comic.characters" :key="index" class="col-6 col-sm-4 col-md-4 col-lg-3 p-3"><character :character="character"/></div>
                        </div>
                    </template>
                    <template v-else-if="section == 'main'">
                        <div class="box mb-4" v-if="comic.description">
                            <h6 class="box-header"><align-left-icon/> {{ $t('app.comic.description') }}</h6>
                            <div>
                                <p class="comic-description my-0">
                                    {{ comic.description }}
                                </p>
                            </div>
                        </div>
                        <div v-if="!$app.is_mobile || $site.id === 'hentaihand'">
                            <div v-if="canRead && status.chapters === 'loading' && status.images === 'loading'" class="box mb-4 text-center py-5 w-100"><div class="spinner-border"></div></div>
                            <comic-premium v-else-if="!canRead"/>
                            <comic-chapters v-else-if="comic.chapters_count" :comic="comic" :chapters="chapters"/>
                            <comic-gallery v-else-if="comic.pages" :comic="comic" :images="images"/>
                        </div>
                    </template>
                    <comments-wrapper v-if="['main', 'comments'].includes(section)" type="comic" :entry="comic.id" :parent_id="$route.params.identifier"/>
                    <recommendations-wrapper v-if="section == 'main'" type="comic" :entry="comic.id" class="mt-4"></recommendations-wrapper>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    import Glide from '@glidejs/glide';
    import RecommendationsWrapper from '../components/RecommendationsWrapper';
    import CommentsWrapper from '../components/comments/Wrapper';
    import Character from '../components/content/Character';
    import Comic from '../components/content/Comic';
    import AdSpot from '../components/AdSpot';
    import { mapGetters } from 'vuex';

    const ComicPremium = {
        data: () => ({
            component: {
                template: '<div class="text-center"><div class="spinner-border my-5 mx-auto"></div></div>'
            }
        }),
        mounted() {
            this.component = () => ({
                component: import(/* webpackMode: "lazy", webpackChunkName: "auth.bundle" */ `../components/auth/Register`),
                loading: {
                    template: '<div class="text-center"><div class="spinner-border my-5 mx-auto"></div></div>'
                },
                error: {
                    template: '<div class="text-center my-5">{{ $t("app.something_went_wrong") }}</div>'
                },
                delay: 200,
                timeout: 5000
            })
        },
        template: `<transition name="fade" mode="out-in">
            <component :subtitle="$t('app.comic.premium')" :modal="true" class="col-md-6 p-0 mb-4 mx-auto" :is="component" v-if="component"><span class="icon-wrapper icon-wrapper-premium"><lock-icon/></span></component>
        </transition>`
    };

    const ComicGallery = {
        data: () => ({
            collapsed: true,
        }),
        props: ['comic', 'images'],
        mounted() {
            if (this.images.length <= 12) this.collapsed = false;
        },
        template: `<div class="box mb-4">
            <h6 class="box-header mb-2">
                <list-icon/> {{ $t('app.comic.gallery') }} ({{ comic.pages }})
            </h6>
            <div class="comic-gallery d-flex flex-wrap" :class="{collapsed}">
                <div v-for="(image, key) in images" :key="key" class="gallery-image col-6 col-md-3 py-3">
                    <router-link :to="{ name: 'comic/reader', params: { slug: comic.slug, page: image.page } }"><img class="w-100 rounded-sm" v-lazy="image.thumbnail_url" :alt="\`\${comic.title} thumbnail page \${image.page}\`"></router-link>
                </div>
                <div v-if="collapsed" class="box-actions d-flex align-items-center justify-content-center">
                    <button class="btn btn-secondary mx-2" @click="collapsed = false"><arrow-down-icon/> {{ $t('app.comic.load_more') }}</button>
                    <router-link :to="{ name: 'comic/reader', params: { slug: comic.slug } }"  class="btn btn-primary mx-2"><book-open-icon/> {{ $t('app.comic.read') }}</router-link>
                </div>
            </div>
        </div>`
    };

    const ComicChapters = {
        data: () => ({
            collapsed: true,
        }),
        props: ['comic', 'chapters'],
        mounted() {
            if (this.chapters.length <= 12) this.collapsed = false;
        },
        template: `<div class="box mb-4">
            <h6 class="box-header mb-2">
                <list-icon/> {{ $t('app.comic.chapters') }} ({{ comic.chapters_count }})
                <router-link :to="{ name: 'comic/reader', params: { slug: comic.slug, chapter: comic.first_chapter.slug } }" class="btn btn-outline-light py-0 ml-3">{{ $t('app.comic.read_first') }}</router-link>
            </h6>
            <div class="comic-chapters" :class="{collapsed}">
                <router-link v-for="(chapter, key) in chapters" :key="key" :to="{ name: 'comic/reader', params: { slug: comic.slug, chapter: chapter.slug } }" class="comic-chapter py-2" :class="{ 'read': chapter.read }">{{ chapter.name }}<span class="chapter-date float-right text-muted">{{ chapter.added_at }}</span></router-link>
                <div v-if="collapsed" class="box-actions d-flex align-items-center justify-content-center">
                    <button class="btn btn-secondary mx-2" @click="collapsed = false"><arrow-down-icon/> {{ $t('app.comic.load_more') }}</button>
                    <router-link :to="{ name: 'comic/reader', params: { slug: comic.slug, chapter: comic.first_chapter.slug } }" class="btn btn-primary mx-2"><book-open-icon/> {{ $t('app.comic.read') }}</router-link>
                </div>
            </div>
        </div>`
    };

    export default {
        components: {
            'comic-premium': ComicPremium,
            'comic-gallery': ComicGallery,
            'comic-chapters': ComicChapters,
            RecommendationsWrapper,
            CommentsWrapper,
            Character,
            AdSpot,
            Comic
        },
        data() {
            return {
                expanded: false,
                alert: {
                    show: false,
                    type: "danger",
                    content: "",
                },
                comic: {},
                chapters: [],
                images: [],
                status: {
                    comic: 'loading',
                    images: 'loading',
                    chapters: 'loading'
                },
                section: 'main',
                download: {
                    disabled: false,
                    failed: false,
                    progress: null
                }
            };
        },
        mounted() {
            this.fill();
        },
        updated() {
            this.$meta({
                title: this.$t('meta.title.comic', { title: this.comic.title }),
                description: this.comic.meta_description
            });
            this.updateSection();
        },
        computed: {
            ...mapGetters(["isLoggedIn"]),
            canRead() {
                return !this.comic.premium || this.isLoggedIn;
            }
        },
        watch: {
            '$route' (to, from) {
                if (to.params.slug !== from.params.slug) {
                    this.fill();
                }
                this.updateSection();
            },
            isLoggedIn() {
                this.fill();
            }
        },
        methods: {
            updateSection() {
                if (this.$route.name === 'comic/characters') this.section = 'characters';
                else if (this.$route.name === 'comic/comments') this.section = 'comments';
                else if (this.$route.name === 'comic/download' && this.comic.downloadable) {
                    this.section = 'download';
                    this.$nextTick(() => {
                        document.querySelector('#download').scrollIntoView({ behavior: 'smooth' });
                    });
                }
                else this.section = 'main';
            },
            fill() {
                let slug = this.$route.params.slug;
                this.status.comic = 'loading';
                this.status.chapters = 'loading';
                this.status.images = 'loading';
                this.$api.get(['comics', slug].join('/')).then(response => {
                    this.comic = response.data;
                    this.status.comic = 'done';
                    this.$root.$emit('header-data', {
                        ...this.comic
                    });
                    if (!this.canRead) return;
                    if (this.comic.chapters_count) this.$api.get(['comics', slug, 'chapters'].join('/'))
                        .then(response => {
                            this.chapters = response.data;
                            this.status.chapters = 'done';
                        })
                        .catch(error => this.status.chapters = 'error');
                    else this.$api.get(['comics', slug, 'images'].join('/'))
                        .then(response => {
                            this.images = response.data.images;
                            this.status.images = 'done';
                        })
                        .catch(error => this.status.images = 'error');
                }).catch(error => {
                    if (error.response.status == 404) {
                        this.$router.replace('/404')
                    }
                    this.status.comic = 'error';
                });
            },
            favorite() {
                this.$api.post(['comics', this.comic.slug, 'favorite'].join('/')).then(response => {
                    this.comic.favorited = response.data.favorited;
                    this.comic.favorites = response.data.favorites;
                    this.$ga.event('comics', response.data.favorited ? 'favorited' : 'unfavorited');
                });
            },
            initDownload() {
                this.download.disabled = true;
                this.download.failed = false;
                this.$api.get(['comics', this.comic.slug, 'download'].join('/')).then(response => {
                    this.$api.get(response.data.download_url, {
                        responseType: 'blob',
                        onDownloadProgress: (progressEvent) => {
                            this.download.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        },
                        transformRequest: [(data, headers) => {
                            delete headers.common['X-Requested-With'];
                            delete headers.common['X-CSRF-TOKEN'];
                            delete headers.common['Authorization'];
                            return data;
                        }]
                    }).then(({ data }) => {
                        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
                        const link = document.createElement('a');
                        link.href = downloadUrl;
                        link.setAttribute('download', this.comic.title + '.zip');
                        document.body.appendChild(link);
                        link.click();
                        link.remove();
                        this.$ga.event('comics', 'downloaded');
                    }).catch(() => {
                        this.download.failed = true;
                    }).finally(() => {
                        this.download.disabled = false;
                    });
                }).catch((e) => {
                    this.download.failed = true;
                    this.download.disabled = false;
                });
            }
        }
    };
</script>
