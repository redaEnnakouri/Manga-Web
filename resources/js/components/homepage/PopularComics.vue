<template>
    <div>
        <div v-if="status == 'done'" id="popular-comics-slider" class="box clearfix d-flex flex-column w-100 mb-3">
            <div class="box-title mx-1">
                <h6 class="float-left font-weight-bolder my-1">
                    <trending-up-icon/> {{ $t('app.homepage.popular_comics') }}
                    <router-link :to="{ name: 'comics', query: { sort: 'popularity', duration } }" class="ml-2 text-muted">{{ $t('app.view_all') }} <arrow-right-icon/></router-link>
                </h6>
                <div class="float-right" data-glide-el="controls" v-if="comics.length > 5">
                    <button class="slider__arrow slider__arrow--prev" data-glide-dir="<"><arrow-left-icon/></button>
                    <button class="slider__arrow slider__arrow--next" data-glide-dir=">"><arrow-right-icon/></button>
                </div>
                <div class="float-right dropdown">
                    <button class="btn btn-link py-0 dropdown-toggle" data-toggle="dropdown"><calendar-icon/> {{ $t('app.filters.durations.' + duration) }}</button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <template v-for="option in durations">
                            <a class="dropdown-item" @click="duration = option" :key="option" v-bind:class="{ active: duration == option }">{{ $t('app.filters.durations.' + option) }}</a>
                        </template>
                    </div>
                </div>
            </div>
            <div class="comics-slider" v-if="comics.length">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides" style="padding: 10px 0px;">
                        <li class="glide__slide" v-for="(comic, index) in comics" :key="index">
                            <comic :comic="comic" :lighter="true"/>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-else class="my-5 py-5 text-center">{{ $t('app.no_results') }}</div>
        </div>
        <placeholder v-else component="popular-comics" classes="mb-3"/>
    </div>
</template>
<script>
    import Glide from '@glidejs/glide'
    import Comic from '../content/Comic';

    export default {
        components: {
            Comic
        },
        data() {
            return {
                slider: false,
                status: false,
                duration: 'week',
                durations: [
                    'day',
                    'week',
                    'month',
                    'year',
                    'all'
                ],
                comics: []
            };
        },
        mounted() {
            this.loadComics();
        },
        watch: {
            duration(currently, before) {
                this.loadComics();
            }
        },
        methods: {
            loadComics() {
                this.status = "loading";
                this.$api.get("comics", {
                    params: {
                        sort: 'popularity',
                        duration : this.duration,
                        per_page: 12
                    }
                }).then(response => {
                    this.comics = response.data.data;
                    this.status = "done";
                    this.$nextTick(() => {
                        this.loadSlider();
                    });
                });
            },
            loadSlider() {
                if (this.comics.length > 0) {
                    this.slider = new Glide('#popular-comics-slider', {
                        startAt: 0,
                        perView: 6,
                        peek: { before: 15, after: 15 },
                        keyboard: false,
                        bound: true,
                        rewind: false,
                        gap: 20,
                        breakpoints: {
                            1200: {
                                perView: 5,
                            },
                            992: {
                                perView: 4,
                            },
                            768: {
                                perView: 3,
                            },
                            400: {
                                perView: 2,
                            }
                        }
                    }).mount();
                }
                BSN.initCallback();
            }
        },
        destroyed() {
            if (this.slider) {
                setTimeout(() => {
                    this.slider.destroy();
                }, 3000);
            }
        }
    }
</script>
