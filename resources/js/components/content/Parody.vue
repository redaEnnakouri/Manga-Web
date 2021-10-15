<template>
    <div :id="'comics-slider-' + parody.slug" class="parody box clearfix d-flex flex-column w-100 mb-3">
        <div class="box-title mx-1">
            <router-link class="float-left" :to="{ name: 'parody', params: { slug: parody.slug } }">
                <h6 class="font-weight-bolder my-1"><copy-icon/> {{ parody.name }} ({{ $tc('app.total_comics',  parody.comics_count) }})</h6>
            </router-link>
            <div class="float-right" data-glide-el="controls" v-if="parody.comics.length > 5">
                <button class="slider__arrow slider__arrow--prev" data-glide-dir="<"><arrow-left-icon/></button>
                <button class="slider__arrow slider__arrow--next" data-glide-dir=">"><arrow-right-icon/></button>
            </div>
        </div>
        <div class="comics-slider" v-if="parody.comics.length > 0">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide" v-for="(comic,index) in parody.comics" :key="index">
                        <comic :comic="comic" :lighter="true"/>
                    </li>
                </ul>
                <div class="slider__desciption">
                    <p v-if="parody.description">{{ parody.description.substr(0, 250) + '...' }}</p>
                    <router-link :to="{ name: 'parody', params: { slug: parody.slug } }" class="mt-auto"><button class="btn btn-link p-0">{{ $t('app.more_comics') }} <arrow-right-icon/></button></router-link>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="parody__desciption pt-2">
                <p>{{ parody.description }}</p>
                <router-link :to="{ name: 'parody', params: { slug: parody.slug } }" class="mt-auto"><button class="btn btn-link p-0">{{ $t('app.more_details') }} <arrow-right-icon/></button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import Glide from '@glidejs/glide'
    import Comic from './Comic';

    export default {
        components: {
            Comic
        },
        props: ["parody"],
        data() {
            return {
                slider: false
            };
        },
        mounted() {
            if (this.parody.comics.length > 0) {
                this.slider = new Glide('#comics-slider-' + this.parody.slug, {
                    startAt: 0,
                    perView: 5,
                    peek: { before: 270, after: 20 },
                    keyboard: true,
                    bound: true,
                    rewind: false,
                    gap: 20,
                    breakpoints: {
                        1200: {
                            perView: 4,
                        },
                        992: {
                            perView: 3,
                        },
                        768: {
                            perView: 3,
                            peek: { before: 20, after: 20 },
                        },
                        400: {
                            perView: 2,
                            peek: { before: 20, after: 20 },
                        }
                    }
                });
                var parody = this.parody.slug;
                this.slider.on('move', function({ movement }) {
                    var style = document.querySelector('#comics-slider-' + parody + ' .slider__desciption').style;
                    if (movement > 0) {
                        style.filter = 'blur(' + (4 * (movement / 143)) + 'px)';
                        style.opacity = (1 - (movement / 143));
                    } else {
                        style.filter = 'blur(0px)';
                        style.opacity = '1';
                    }
                }).mount();
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
