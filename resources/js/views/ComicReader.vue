<template>
    <div class="reader-wrapper">
        <template v-if="status.comic == 'loading'">
            <div class="d-flex vh-100 align-items-center justify-content-center">
                <div class="spinner-border"></div>
            </div>
        </template>
        <div v-else-if="status.comic == 'error'" class="text-center py-5 my-5">{{ $t('app.something_went_wrong') }}</div>
        <template v-else>
            <div class="reader" :class="'mode-' + reader_mode + ' layout-' + reader_layout + ' direction-' + reader_direction">
                <template v-if="reader_layout == 'horizontal'">
                    <img data-pin-no-hover="true" v-lazy="current_image" :key="page">
                    <div class="reader-actions d-flex align-items-center justify-content-between" :class="{ 'flex-row-reverse': reader_direction == 'rtl'}">
                        <button v-if="page > 1" class="reader-action" :class="{ left: reader_direction == 'rtl' }" @click="updatePage(page - 1, false)">
                            <arrow-left-icon v-if="reader_direction == 'ltr'"/>
                            {{ $t('app.comic.reader.prev') }}
                            <arrow-right-icon v-if="reader_direction == 'rtl'"/>
                        </button>
                        <button v-if="page < pages" class="reader-action next" :class="{ left: reader_direction == 'rtl' }" @click="updatePage(page + 1, false)">
                            <arrow-left-icon v-if="reader_direction == 'rtl'"/>
                            {{ $t('app.comic.reader.next') }}
                            <arrow-right-icon v-if="reader_direction == 'ltr'"/>
                        </button>
                    </div>
                </template>
                <div v-for="(image, key) in images" :key="key" ref="pages" class="vertical-image" :id="'page-' + image.page" :data-page="image.page" v-else>
                    <img data-pin-no-hover="true" v-lazy="image.source_url" :alt="`${comic.title} page ${image.page}`">
                </div>
                <div class="pages-selector">
                    <select class="form-control" @change="(event) => updatePage(event.target.value)">
                        <option v-for="image in images" :key="image.id" :selected="image.page == page" :value="image.page">Page {{ image.page }}/{{ pages }}</option>
                    </select>
                </div>
            </div>
            <recommendations-wrapper type="comic" :entry="comic.id" :next="true" class="col-12 col-lg-9 mx-auto my-5"></recommendations-wrapper>
        </template>
        <div class="modal fade" id="settings-modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title font-weight-bolder"><settings-icon/> {{ $t('app.comic.reader.settings_modal') }}</h6>
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body reader-settings">
                        <div class="reader-setting">
                            <h6 class="font-weight-bold">{{ $t('app.comic.reader.mode') }}</h6>
                            <div class="reader-options d-flex justify-content-between">
                                <div class="reader-option col-6">
                                    <input type="radio" id="mode-webtoon" v-model="settings.mode" value="webtoon" checked>
                                    <label for="mode-webtoon"><webtoon-icon/> {{ $t('app.comic.reader.webtoon') }}</label>
                                </div>
                                <div class="reader-option col-6">
                                    <input type="radio" id="mode-manga" v-model="settings.mode" value="manga">
                                    <label for="mode-manga"><manga-icon/> {{ $t('app.comic.reader.manga') }}</label>
                                </div>
                            </div>
                        </div>
                        <div class="reader-setting mt-3" v-if="reader_mode == 'manga'">
                            <h6 class="font-weight-bold">{{ $t('app.comic.reader.layout') }}</h6>
                            <div class="reader-options d-flex justify-content-between">
                                <div class="reader-option col-6">
                                    <input type="radio" id="layout-vertical" v-model="settings.layout" value="vertical" checked>
                                    <label for="layout-vertical"><vertical-icon/> {{ $t('app.comic.reader.vertical') }}</label>
                                </div>
                                <div class="reader-option col-6">
                                    <input type="radio" id="layout-horizontal" v-model="settings.layout" value="horizontal">
                                    <label for="layout-horizontal"><book-open-icon/> {{ $t('app.comic.reader.horizontal') }}</label>
                                </div>
                            </div>
                        </div>
                        <div class="reader-setting mt-3" v-if="reader_layout == 'horizontal'">
                            <h6 class="font-weight-bold">{{ $t('app.comic.reader.direction') }}</h6>
                            <div class="reader-options d-flex justify-content-between">
                                <div class="reader-option col-6">
                                    <input type="radio" id="direction-ltr" v-model="settings.direction" value="ltr" checked>
                                    <label for="direction-ltr"><align-left-icon/> {{ $t('app.comic.reader.ltr') }}</label>
                                </div>
                                <div class="reader-option col-6">
                                    <input type="radio" id="direction-rtl" v-model="settings.direction" value="rtl">
                                    <label for="direction-rtl"><align-right-icon/> {{ $t('app.comic.reader.rtl') }}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import RecommendationsWrapper from '../components/RecommendationsWrapper';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            RecommendationsWrapper
        },
        data() {
            return {
                comic: {},
                chapter: {},
                images: [],
                status: {
                    comic: 'loading'
                },
                settings: {
                    mode: 'manga',
                    layout: 'vertical',
                    direction: 'ltr'
                },
                horizontal: {},
                previousEvents: []
            };
        },
        mounted() {
            this.get();
            if (this.$route.params.page) {
                this.updatePage(this.$route.params.page);
            } else this.updatePage(1);
            document.addEventListener('keydown', this.handleClick);
            document.addEventListener('scroll', this.handleScroll, false);            
        },
        destroyed() {
            document.removeEventListener('keydown', this.handleClick);
            document.removeEventListener('scroll', this.handleScroll);
        },
        updated() {
            this.$meta({
                title: this.$t('meta.title.reader', { title: this.comic.title }),
                description: this.comic.meta_description
            });
        },
        computed: {
            ...mapGetters(["isLoggedIn"]),
            reader_mode() {
                return this.settings.mode;
            },
            reader_layout() {
                return (this.settings.mode == 'manga' ? this.settings.layout : 'vertical');
            },
            reader_direction() {
                return (this.reader_layout == 'horizontal' ? this.settings.direction : 'ltr');
            },
            current_image() {
                return this.images.find(image => image.page == this.page).source_url;
            },
            pages() {
                return this.images.length;
            },
            page() {
                return this.$store.state.page;
            }
        },
        watch: {
            '$route' (to, from) {
                if (to.params.slug !== from.params.slug || to.params.chapter !== from.params.chapter) this.get();
                if (to.params.page !== from.params.page && this.page != to.params.page) this.updatePage(to.params.page, false);
            },
            page(to) {
                let percentage = (this.page / this.pages) * 100;
                let progress = 'started';
                if (percentage == 100) progress = 'finished';
                else if (percentage > 75) progress = '75%';
                else if (percentage > 50) progress = '50%';
                else if (percentage > 25) progress = '25%';
                if (!this.previousEvents.includes(progress)) {
                    this.$ga.event('reader', 'progress', progress);
                    this.previousEvents.push(progress);
                }
            }
        },
        methods: {
            handleScroll(event) {
                if (this.reader_layout != 'vertical') return;
                for (let el of document.querySelectorAll('.vertical-image')) {
                    let bounding = el.getBoundingClientRect();
                    if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
                        this.updatePage(el.dataset.page, false);
                        break;
                    }
                };
            },
            handleClick(event) {
                if (this.reader_layout != 'horizontal') return;
                let action = null;
                switch (event.key) { 
                    case "ArrowLeft":
                        action = -1; 
                        break; 
                    case "ArrowRight":
                        action = 1;
                        break;
                }
                if (this.reader_direction == 'rtl') action = (action * -1);
                this.updatePage(this.page + action, false);
            },
            current_element() {
                return document.querySelector('#page-' + this.page);
            },
            updatePage(newPage, scroll = true) {
                let page = parseInt(newPage);
                if (page === this.page || page < 1 || page > this.pages) return;
                this.$router.replace({params: { page }});
                this.$store.commit('updatePage', page);
                if (scroll) this.scrollToPage();
            },
            scrollToPage() {
                let element = this.current_element();
                if (this.reader_layout == 'vertical' && element) this.$nextTick(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                });
            },
            get() {
                this.status.comic = 'loading';
                const slug = this.$route.params.slug;
                const chapter = this.$route.params.chapter;
                this.$api.get('comics/' + slug + (chapter ? '/' + chapter : '') + '/images').then(response => {                    
                    this.comic = response.data.comic;
                    this.chapter = response.data.chapter;
                    if (this.comic.chapters_count && !this.chapter) this.$router.push({name: 'comic', params: {slug}});                    
                    this.images = response.data.images;
                    if (this.comic.tags.find(tag => ['webtoon'].includes(tag.slug)) || this.$site.features.includes('webtoons')) this.settings.mode = 'webtoon';
                    this.status.comic = 'done';
                    this.$root.$emit('header-data', {
                        ...this.comic,
                        next_chapter: response.data.next_chapter,
                        current_chapter: this.chapter,
                        toPage: this.toPage,
                        page: this.page,
                        openSettings: this.openSettings,
                    });
                    this.$nextTick(() => {
                        this.scrollToPage();
                    });
                }).catch(error => {
                    if (error.response.status === 404) this.$router.replace('/404');
                    this.status.comic = 'error';
                });
            },
            openSettings() {
                new this.$bootstrap.Modal(document.querySelector('#settings-modal')).show();
            }
        }
    };
</script>
