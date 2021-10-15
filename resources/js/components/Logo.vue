<template>
    <router-link :to="{name: 'home'}" :class="{ 'brand-font': !$site.features.includes('logo'), 'navbar-brand': placement === 'header' || $site.features.includes('logo') }">
        <img v-if="$site.features.includes('logo') && showName" :src="$cdn('/images/logo.png')">
        <img v-else-if="$site.features.includes('logo')" :src="$cdn('/images/icon.png')">
        <template v-else>
            <span :class="'logo' + (placement != 'header' ? ' mx-0 my-1' : '')">{{ $site.letter }}</span>
            <template v-if="showName">{{ $t('app.name') }}</template>
        </template>
    </router-link>
</template>

<script>
    export default {
        props: ["placement", "showName"],
    }
</script>
