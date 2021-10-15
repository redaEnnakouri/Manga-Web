<template>
    <div class="col-md-3 p-3">
        <div class="ad box clearfix d-flex flex-column h-100">
            <p>{{ ad.code.substr(0, 60) + '...' }}</p>
            <div class="mt-auto">
                <button class="btn btn-sm btn-link float-left" @click="$parent.edit(ad.id)">Edit</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["ad"]
    }
</script>
