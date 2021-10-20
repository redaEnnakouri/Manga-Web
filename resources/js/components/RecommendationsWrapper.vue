<template>
    <div>
        <div v-if="status.recommendations == 'loading'" class="box text-center py-5 w-100"><div class="spinner-border"></div></div>
        <div id="recommendations-slider" class="box clearfix d-flex flex-column w-100" v-else-if="recommendations.length && this.status.recommendations != 'error'">
            <h6 class="box-header">
                <compass-icon/> {{ next ? $t('app.recommendations.next') : $t('app.recommendations.title') }}
                <div class="float-right" data-glide-el="controls" v-if="recommendations.length > 5">
                    <button class="slider__arrow slider__arrow--prev" data-glide-dir="<"><arrow-left-icon/></button>
                    <button class="slider__arrow slider__arrow--next" data-glide-dir=">"><arrow-right-icon/></button>
                </div>
            </h6>
            <div class="recommendations-slider">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides py-1" style="padding: 10px 0px;">
                        <li class="glide__slide" v-for="(recommendation, index) in recommendations" :key="index">
                            <slot :recommendation="recommendation"><comic :comic="recommendation" :lighter="true"/></slot>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Glide from '@glidejs/glide';
    import Comic from '../components/content/Comic';

    export default {
        props: ['type', 'name', 'entry', 'next'],
        components: {
            Comic
        },
        data() {
            return {
                recommendations: [],
                status: {
                    recommendations: 'loading'
                },
                slider: false,
            };
        },
        mounted() {
            this.get();
        },
        updated() {
            this.initSlider();
        },
        destroyed() {
            if (this.slider) setTimeout(() => { this.slider.destroy(); }, 3000);
        },
        methods: {
            get() {
                this.$api.get('recommendations/' + [this.type, this.entry].join('/')).then(response => {
                    this.recommendations = response.data;
                    this.status.recommendations = 'done';
                }).catch(error => {
                    this.status.recommendations = 'error';
                });
            },
            initSlider() {
                let options = {
                    startAt: 0,
                    perView: 5,
                    peek: { before: 15, after: 15 },
                    keyboard: true,
                    bound: true,
                    rewind: false,
                    gap: 20,
                    breakpoints: {
                        1200: {
                            perView: 4,
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
                };
                if (this.recommendations.length) this.slider = new Glide('#recommendations-slider', options).mount();
            }
        }
    };
</script>
