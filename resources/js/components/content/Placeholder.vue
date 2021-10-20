<template>
    <div :class="classes">
        <div :class="'box placeholder ' + component"/>
    </div>
</template>
<script>
    export default {
        props: ["component", "classes"]
    }
</script>
