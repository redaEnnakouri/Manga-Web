<template>
    <div class="col-md-3 p-3">
        <div class="group box clearfix d-flex flex-column h-100">
            <router-link :to="{ name: 'group', params: { slug: group.slug } }">
                <h5 class="font-weight-bolder">{{ group.name }}</h5>
            </router-link>
            <p v-if="group.description">{{ group.description.substr(0, 60) + '...' }}</p>
            <div class="d-flex justify-content-between align-items-center mt-2">
                <div class="text-muted font-weight-bold"><grid-icon/> {{ $tc('app.total_comics',  group.comics_count) }}</div>
                <router-link :to="{ name: 'group', params: { slug: group.slug } }"><button class="btn btn-sm btn-primary float-right">{{ $t('app.all_comics') }} <arrow-right-icon/></button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["group"]
    }
</script>
