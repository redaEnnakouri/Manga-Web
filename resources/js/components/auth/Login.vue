<template>
    <div :class="(modal ? '' : 'col-md-4 p-0 my-5 mx-auto ') + 'card card-default'">
        <div class="card-header text-center">
            <span class="icon-wrapper icon-wrapper-primary"><log-in-icon/></span>
            <h5 class="card-title font-weight-bold">{{ $t('auth.login') }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ $t('auth.login_text') }}</h6>
        </div>
        <div class="card-body">
            <form @keyup.enter="submitting ? null : login()">
                <alert v-show="alert.show" :type="alert.type" :content="alert.content"></alert>
                <div class="form-group mb-3 input-group">
                    <div class="input-group-prepend"><span class="input-group-text"><user-icon/></span></div>
                    <input v-model="username" :placeholder="$t('auth.username')" class="form-control" autofocus>
                </div>
                <div class="form-group input-group">
                    <div class="input-group-prepend"><span class="input-group-text"><lock-icon/></span></div>
                    <input type="password" v-model="password" :placeholder="$t('auth.password')" class="form-control">
                </div>
                <div class="d-flex">
                    <div class="custom-control custom-checkbox col-md-6">
                        <input type="checkbox" v-model="remember_me" id="remember_me" class="custom-control-input">
                        <label class="custom-control-label" for="remember_me">
                            {{ $t('auth.remember_me') }}
                        </label>
                    </div>
                    <div class="col-md-6 pr-0 text-right">
                        <router-link :to="{name: 'password-reset'}" :event="''" @click.native.prevent="openModal('PasswordReset')">{{ $t("auth.reset_password") }}</router-link>
                    </div>
                </div>
                <div class="text-center">
                    <button type="button" class="btn mt-4 btn-primary btn-lg btn-block" @click.prevent="login" :disabled="submitting"><span class="spinner-border spinner-border-sm align-baseline" v-if="submitting"></span><template v-else>{{ $t('auth.login') }}</template></button>
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
                username: "",
                password: "",
                remember_me: false,
                submitting: false
            }
        },
        methods: {
            login(e) {
                this.submitting = true;
                this.$store.dispatch("login", {
                    username: this.username,
                    password: this.password,
                    remember_me: this.remember_me
                }).then(response => {
                    this.$ga.event('users', 'logged-in');
                    if (this.modal) {
                        this.$parent.hideModal();
                    }
                }).catch(error => {
                    this.handle_response(error.response, this.alert, true);
                    this.submitting = false;
                });
            },
            openModal(component) {
                if (this.modal) {
                    var parent = this.$parent;
                } else {
                    var parent = this.$parent.$parent;
                }
                parent.openModal(component);
            }
        }
    }
</script>
