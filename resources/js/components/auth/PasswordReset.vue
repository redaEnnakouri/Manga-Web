<template>
    <div :class="(modal ? '' : 'col-md-4 p-0 my-5 mx-auto ') + 'card card-default'">
        <div class="card-header text-center">
            <span class="icon-wrapper icon-wrapper-primary"><lock-icon/></span>
            <h5 class="card-title font-weight-bold">{{ $t('auth.reset_password') }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ $t('auth.reset_password_text') }}</h6>
        </div>
        <div class="card-body">
            <form @submit.prevent="reset">
                <alert v-show="alert.show" :type="alert.type" :content="alert.content"></alert>
                <div class="form-group mb-3 input-group">
                    <div class="input-group-prepend"><span class="input-group-text"><mail-icon/></span></div>
                    <input v-model="email" :placeholder="$t('auth.email')" class="form-control" autofocus>
                </div>
                <div class="text-center">
                    <button type="button" class="btn mt-4 btn-primary btn-lg btn-block" @click.prevent="reset"><span class="spinner-border spinner-border-sm align-baseline" v-if="submitting"></span><template v-else>{{ $t('auth.reset_password') }}</template></button>
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
                email: "",
                password: "",
                remember_me: false,
                submitting: false
            }
        },
        methods: {
            reset(e) {
                this.submitting = true;
                this.$store.dispatch("passwordReset", {
                    email: this.email
                }).then(response => {
                    this.$ga.event('users', 'passowrd-reset');
                    this.handle_response(response, this.alert, false);
                    this.submitting = false;
                }).catch(error => {
                    this.handle_response(error.response, this.alert, true);
                    this.submitting = false;
                });
            },
            openModal(component) {
                if (this.modal == true) {
                    var parent = this.$parent;
                } else {
                    var parent = this.$parent.$parent;
                }
                parent.openModal(component);
            }
        }
    }
</script>
