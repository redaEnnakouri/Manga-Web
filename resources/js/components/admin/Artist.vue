<template>
    <div class="col-md-3 p-3">
        <div class="artist box clearfix d-flex flex-column h-100">
            <h5 class="font-weight-bolder">{{ artist.name }}</h5>
            <p>{{ artist.description && artist.description.substr(0, 60) + '...' }}</p>
            <div class="mt-auto">
                <button v-if="admin" class="btn btn-sm btn-link float-left" @click="$parent.edit(artist.slug)">Edit</button>
                <router-link :to="{ name: 'artist', params: { slug: artist.slug } }"><button class="btn btn-sm btn-primary float-right">More details</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["admin","artist"]
    }
</script>
