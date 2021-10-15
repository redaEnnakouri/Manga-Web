<template>
    <div class="container">
        <div class="comic-header d-flex align-items-center w-100">
            <logo placement="header" class="mr-0"/>
            <h5 class="d-inline-block comic-title font-weight-bold mb-0 text-truncate">{{ headerData.title }}</h5>
            <div class="navbar-nav flex-row flex-shrink-0 ml-auto">
                <div class="dropdown">
                    <a class="nav-item btn btn-link" data-toggle="dropdown" href="#"><share-icon class="btn-icon"/> {{ $t('app.share.share') }}</a>
                    <div class="dropdown-menu dropdown-menu-left">
                        <a class="dropdown-item" target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=' + url"><facebook-icon/> {{ $t('app.share.facebook') }}</a>
                        <a class="dropdown-item" target="_blank" :href="'https://twitter.com/intent/tweet/?url=' + url"><twitter-icon/> {{ $t('app.share.twitter') }}</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" @click="copy(url)"><clipboard-icon/> {{ $t("app.share.copy") }}</a>
                    </div>
                </div>
                <router-link :to="{ name: 'comic/reader', params: { slug: headerData.slug, chapter: headerData.first_chapter ? headerData.first_chapter.slug : undefined } }" :event="canRead ? 'click' : ''" @click.native.prevent="canRead ? null : $root.$emit('open-modal', 'Login') && $ga.event('comics', 'guest-premium')" class="btn btn-primary nav-item"><book-open-icon class="btn-icon"/> {{ $t('app.comic.read') }}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';

    export default {
        props: ["headerData"],
        computed: {
            ...mapGetters(["isLoggedIn"]),
            url() {
                return this.headerData.short_url || window.location.href;
            },
            canRead() {
                return !this.headerData.premium || this.isLoggedIn;
            }
        }
    }
</script>
