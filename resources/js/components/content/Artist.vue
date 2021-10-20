<template>
    <router-link :to="{ name: 'artist', params: { slug: artist.slug } }">
        <div class="artist box clearfix d-flex flex-column h-100">
            <div class="image" :style="'background-image: url(' + artist.image_url + ');'"></div>
            <h6 class="title text-truncate font-weight-bolder m-0">{{ artist.name }}</h6>
        </div>
    </router-link>
</template>
<script>
    export default {
        props: ["artist"]
    }
</script>