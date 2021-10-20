<template>
    <div class="container">
        <div class="reader-header d-flex align-items-center w-100">
            <logo placement="header" class="mr-0"/>
            <h5 class="d-inline-block comic-title font-weight-bold mb-0 text-truncate"><router-link :to="{ name: 'comic', params: { slug: headerData.slug } }">{{ headerData.title }} <small v-if="headerData.current_chapter" class="text-muted">({{ headerData.current_chapter.name }})</small></router-link></h5>
            <div class="navbar-nav flex-row flex-shrink-0 ml-auto">
                <button class="btn btn-link nav-item" v-if="headerData.openSettings" @click="headerData.openSettings"><settings-icon class="btn-icon"/> {{ $t('app.comic.reader.settings') }}</button>
                <router-link v-if="headerData.next_chapter" :to="{ name: 'comic/reader', params: { slug: headerData.slug, chapter: headerData.next_chapter.slug, page: 1 } }" class="btn btn-primary nav-item"><fast-forward-icon class="btn-icon"/> {{ $t('app.comic.read_next') }}</router-link>
                <router-link v-else-if="headerData.downloadable" :to="{ name: 'comic/download', params: { slug: headerData.slug } }" class="btn btn-primary nav-item" :event="isLoggedIn ? 'click' : ''" @click.native.prevent="$root.$emit('open-modal', 'Login')"><download-icon class="btn-icon"/> {{ $t('app.comic.download') }}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapState } from 'vuex';

    export default {
        props: ["headerData"],
        data() {
            return {
                url: window.location.href,
                show: true,
                timeout: false
            }
        },
        computed: {
            ...mapGetters(["isLoggedIn"]),
            ...mapState(["page"])
        },
        mounted() {
            document.addEventListener('mousemove', this.handleMovement);
            document.addEventListener('click', this.handleClick);
            this.scheduleHide();
        },
        destroyed() {
            this.updateVisibility(true, false);
            document.removeEventListener('mousemove', this.handleMovement);
            document.removeEventListener('click', this.handleClick);
        },
        methods: {
            handleClick() {
                this.updateVisibility(true)
            },
            updateVisibility(visible, hide = true) {
                document.querySelectorAll('.navbar, .pages-selector').forEach((el) => {
                    el.style.opacity = (visible ? 1 : 0);
                });
                this.show = visible;
                if (visible) {
                    this.scheduleHide(hide);
                }
            },
            handleMovement(event) {
                if ((Math.abs(event.movementX) + Math.abs(event.movementY) > 4) || event.clientY < 100) this.updateVisibility(true, event.clientY > 100);
            },
            scheduleHide(hide = true) {
                if (this.timeout) this.cancelHide();
                if (hide && !this.timeout) this.timeout = setTimeout(() => {
                    if (this.show = true) this.updateVisibility(false);
                    this.cancelHide();
                }, 3000);
            },
            cancelHide() {
                clearTimeout(this.timeout);
                this.timeout = false;
            }
        }
    }
</script>
