<template>
    <router-link :to="{ name: 'author', params: { slug: author.slug } }">
        <div class="author box clearfix d-flex flex-column h-100">
            <div class="image" :style="'background-image: url(' + author.image_url + ');'"></div>
            <h6 class="title text-truncate font-weight-bolder m-0">{{ author.name }}</h6>
        </div>
    </router-link>
</template>
<script>
    export default {
        props: ["author"]
    }
</script>