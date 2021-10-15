<template>
    <div class="row mx-auto justify-content-center" ref="element"></div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import postscribe from 'postscribe';

    export default {
        props: {
            spot: {
                type: String,
                default: 'top'
            }
        },
        data() {
            return {
                injected_at: null
            };
        },
        mounted() {
            this.inject();
        },
        watch: {
            '$i18n.locale': function () {
                this.inject(true);
            },
            '$route.path': function (to, from) {
                if (to.includes('reader')) return;
                this.inject();
            }
        },
        methods: {
            injected() {
                return this.injected_at && new Date().getTime() < this.injected_at + 5000;
            },
            inject(force = false) {
                if (!force && this.injected()) return;
                this.injected_at = new Date().getTime();
                const ads = (this.$app.ads[this.spot] || []).filter(ad => (!ad.language || ad.language == this.$i18n.locale)).map(ad => ad.code);
                if (ads.length > 1) ads = ads.map((tag, i) => `<div class="mr-${(i + 1) == ads.length ? '0' : '4'}">${tag}</div>`);
                const code = ads.join();
                this.$refs.element.innerHTML = "";
                postscribe(this.$refs.element, code);
            }
        }
    }
</script>