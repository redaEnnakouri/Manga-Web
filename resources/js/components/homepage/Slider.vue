<template>
    <div id="slider" class="mb-3" v-if="slides.length > 0">
        <div class="glide__track m-0" data-glide-el="track">
            <ul class="glide__slides" style="padding: 10px 0px;">
                <li class="glide__slide" v-for="(slide, index) in slides" :key="index">
                    <a :href="slide.link ? slide.link : '#'" class="slide_wrapper container">
                        <div class="position-relative">
                            <img class="slide_image desktop" :class="{ mobile: !slide.images.mobile }" :src="slide.images.desktop" data-pin-nopin="nopin">
                            <img v-if="slide.images.mobile" class="slide_image mobile" :src="slide.images.mobile" data-pin-nopin="nopin">
                            <div class="slide_details">
                                <h1 class="slide_headline">{{ slide.headline }}</h1>
                                <p class="slide_text">{{ slide.text }}</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]" v-if="slides.length > 1">
            <button v-for="(slide, index) in slides" :key="index" class="glide__bullet" :data-glide-dir="'=' + index" ></button>
        </div>
    </div>
</template>
<script>
    import Glide from '@glidejs/glide'

    export default {
        props: ["slides"],
        data() {
            return {
                slider: false
            };
        },
        mounted() {
            if (this.slides.length > 0) {
                this.slider = new Glide('#slider', {
                    startAt: 0,
                    perView: 1,
                    peek: { before: 90, after: 90 },
                    keyboard: true,
                    rewind: false,
                    autoplay: 4000,
                    gap: 0,
                    breakpoints: {
                        992: {
                            peek: { before: 0, after: 0 },
                        }
                    }
                }).on('build.after', () => this.$emit('loaded')).mount();
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
