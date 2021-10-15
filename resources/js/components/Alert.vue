<template>
    <div :class="'alert alert-' + type" role="alert" v-html="content">
    </div>
</template>
<script>
    export default {
        props: ["type", "content"]
    }
</script>
