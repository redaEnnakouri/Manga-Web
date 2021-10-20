<template>
    <div>
        <div v-if="status == 'done'" id="latest-updates-slider" class="box clearfix d-flex flex-column w-100 mb-3">
            <div class="box-title mx-1">
                <h6 class="float-left font-weight-bolder my-1">
                    <zap-icon/> {{ $t('app.homepage.latest_updates') }}
                    <router-link :to="{ name: 'comics' }" class="ml-2 text-muted">{{ $t('app.view_all') }} <arrow-right-icon/></router-link>
                </h6>
                <div class="float-right" data-glide-el="controls" v-if="comics.length > 5">
                    <button class="slider__arrow slider__arrow--prev" data-glide-dir="<"><arrow-left-icon/></button>
                    <button class="slider__arrow slider__arrow--next" data-glide-dir=">"><arrow-right-icon/></button>
                </div>
            </div>
            <div class="comics-slider" v-if="comics.length > 0">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides" style="padding: 10px 0px;">
                        <li class="glide__slide" v-for="(comic, index) in comics" :key="index">
                            <comic :comic="comic" :lighter="true"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <placeholder v-else component="latest-updates" classes="mb-3"/>
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
                comics: []
            };
        },
        mounted() {
            this.$api.get("comics", {
                params: {
                    latest: true,
                    per_page: 12
                }
            }).then(response => {
                this.comics = response.data;
                this.status = "done";
                this.$nextTick(() => {
                    this.loadSlider();
                });
            });
        },
        methods: {
            loadSlider() {
                if (this.comics.length > 0) {
                    this.slider = new Glide('#latest-updates-slider', {
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
