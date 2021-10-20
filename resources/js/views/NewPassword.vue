<template>
    <div :class="(modal ? '' : 'col-md-4 p-0 my-5 mx-auto ') + 'card card-default'">
        <div class="card-header text-center">
            <span class="icon-wrapper icon-wrapper-primary"><save-icon/></span>
            <h5 class="card-title font-weight-bold">{{ $t('auth.new_password') }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ $t('auth.new_password_text') }}</h6>
        </div>
        <div class="card-body">
            <form @submit.prevent="login">
                <alert v-show="alert.show" :type="alert.type" :content="alert.content"></alert>
                <div class="form-group input-group">
                    <div class="input-group-prepend"><span class="input-group-text"><lock-icon/></span></div>
                    <input type="password" v-model="password" :placeholder="$t('auth.new_password')" class="form-control">
                </div>
                <div class="text-center">
                    <button type="button" class="btn mt-4 btn-primary btn-lg btn-block" @click.prevent="save" :disabled="submitting || disabled"><span class="spinner-border spinner-border-sm align-baseline" v-if="submitting"></span><template v-else>{{ $t('auth.save') }}</template></button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            modal: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                alert: {
                    show: false,
                    type: "danger",
                    content: "",
                },
                token: "",
                password: "",
                submitting: false,
                disabled: true
            }
        },
        mounted() {
            this.$api.get('password/find/' + this.$route.params.token).then(response => {
                this.token = response.data.token;
                this.disabled = false;
            }).catch(error => {
                this.handle_response(error.response, this.alert, true);
            });
        },
        methods: {
            save(e) {
                this.submitting = true;
                this.status = 'loading';
                this.$api.post('password/reset', { token: this.token, password: this.password }).then(response => {
                    this.handle_response(response, this.alert, false);
                    this.submitting = false;
                }).catch(error => {
                    this.handle_response(error.response, this.alert, true);
                    this.submitting = false;
                });
            }
        }
    }
</script>
