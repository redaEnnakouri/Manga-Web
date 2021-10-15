<template>
    <div class="col-md-4 p-0 my-5 mx-auto card card-default">
        <div class="card-header text-center py-5">
            <span v-if="status == 'loading'" class="icon-wrapper icon-wrapper-primary"><span class="spinner-border spinner-border-sm"></span></span>
            <span v-else-if="status == 'failed'" class="icon-wrapper icon-wrapper-danger"><close-icon/></span>
            <span v-else-if="status == 'verified'" class="icon-wrapper icon-wrapper-success"><check-icon/></span>
            <h5 class="card-title mt-3 mb-0 font-weight-bold">{{ content }}</h5>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: "loading",
                content: this.$t('auth.verifying')
            }
        },
        mounted() {
            this.$api.get('email/verify/' + this.$route.params.hash, {
                params: { ...this.$route.query, lang: null },
            }).then(response => {
                this.$ga.event('users', 'verified');
                this.status = "verified";
                this.content = response.data.message;
                this.$root.$emit('user-updated');
            }).catch(error => {
                this.status = "failed";
                this.content = error.response.data.message;
            });
        }
    }
</script>
