<template>
    <div class="container mx-auto row align-items-center not-found">
        <div class="col-md-6 details">
            <h1>{{ $t("app.not-found.404") }}</h1>
            <h3>{{ $t("app.not-found.description") }}</h3>
            <i18n path="app.not-found.advice" tag="p">
                <router-link :to="{name: 'home'}">{{ $t("app.not-found.link") }}.</router-link>
            </i18n>
        </div>
        <div class="col-md-6 illustration">
            <img src="/images/not-found.svg"/>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.$meta({
                title: this.$t("meta.title.404"),
                description: this.$t('meta.description.default')
            });
        }
    }
</script>
