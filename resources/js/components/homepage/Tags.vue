<template>
    <div id="discover-tags-slider" class="box clearfix d-flex flex-column w-100 pb-0 mb-3">
        <div class="box-title mx-1">
            <h6 class="float-left font-weight-bolder my-1"><tag-icon/> {{ $t('app.homepage.tags') }}</h6>
            <div class="float-right" data-glide-el="controls" v-if="tags.length > 5">
                <button class="slider__arrow slider__arrow--prev" data-glide-dir="<"><arrow-left-icon/></button>
                <button class="slider__arrow slider__arrow--next" data-glide-dir=">"><arrow-right-icon/></button>
            </div>
        </div>
        <div class="tags-slider" v-if="tags.length > 0">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides" style="padding-top: 10px;">
                    <li class="glide__slide" v-for="(tag, index) in tags" :key="index">
                        <router-link :to="{ name: 'tag', params: { slug: tag.slug } }">
                        <div class="tag-button text-truncate" :style="'background: ' + tag.color"><tag-icon/> {{ tag.name }}</div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import Glide from '@glidejs/glide'

    export default {
        props: ["tags"],
        data() {
            return {
                slider: false
            };
        },
        mounted() {
            if (this.tags.length > 0) {
                var slider = new Glide('#discover-tags-slider', {
                    startAt: 0,
                    perView: 7,
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
