<template>
    <div :id="'comics-slider-' + relationship.slug" class="relationship box clearfix d-flex flex-column w-100 mb-3">
        <div class="box-title mx-1">
            <router-link class="float-left" :to="{ name: 'relationship', params: { slug: relationship.slug } }">
                <h6 class="font-weight-bolder my-1"><relationship-icon/> {{ relationship.name }} ({{ $tc('app.total_comics',  relationship.comics_count) }})</h6>
            </router-link>
            <div class="float-right" data-glide-el="controls" v-if="relationship.comics.length > 5">
                <button class="slider__arrow slider__arrow--prev" data-glide-dir="<"><arrow-left-icon/></button>
                <button class="slider__arrow slider__arrow--next" data-glide-dir=">"><arrow-right-icon/></button>
            </div>
        </div>
        <div class="comics-slider" v-if="relationship.comics.length > 0">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide" v-for="(comic,index) in relationship.comics" :key="index">
                        <comic :comic="comic" :lighter="true"/>
                    </li>
                </ul>
                <div class="slider__desciption">
                    <p v-if="relationship.description">{{ relationship.description.substr(0, 250) + '...' }}</p>
                    <router-link :to="{ name: 'relationship', params: { slug: relationship.slug } }" class="mt-auto"><button class="btn btn-link p-0">{{ $t('app.more_comics') }} <arrow-right-icon/></button></router-link>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="relationship__desciption pt-2">
                <p>{{ relationship.description }}</p>
                <router-link :to="{ name: 'relationship', params: { slug: relationship.slug } }" class="mt-auto"><button class="btn btn-link p-0">{{ $t('app.more_details') }} <arrow-right-icon/></button></router-link>
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
        props: ["relationship"],
        data() {
            return {
                slider: false
            };
        },
        mounted() {
            if (this.relationship.comics.length > 0) {
                this.slider = new Glide('#comics-slider-' + this.relationship.slug, {
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
                var relationship = this.relationship.slug;
                this.slider.on('move', function({ movement }) {
                    var style = document.querySelector('#comics-slider-' + relationship + ' .slider__desciption').style;
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
