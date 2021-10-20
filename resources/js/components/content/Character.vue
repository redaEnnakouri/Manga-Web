<template>
    <router-link :to="{ name: 'character', params: { slug: character.slug } }">
        <div class="character box clearfix d-flex flex-column h-100" :class="{lighter}">
            <div class="image" :style="'background-image: url(' + character.image_url + ');'"></div>
            <h6 class="title text-truncate font-weight-bolder m-0">{{ character.name }}</h6>
        </div>
    </router-link>
</template>
<script>
    export default {
        props: ["character", "lighter"]
    }
</script>
