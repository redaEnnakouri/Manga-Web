<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <profile-card :status="status" :user="user"/>
            </div>
            <div class="col-md-9">
                <div class="form box">
                    <div class="form-header">
                        <h5 class="form-title">{{ $t('auth.settings') }}</h5>
                    </div>
                    <div class="form-body">
                        <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border"></div></div>
                        <div class="text-center py-5 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
                        <form v-else @submit.prevent="submit">
                            <alert v-show="alert.show" :type="alert.type" :content="alert.content"></alert>
                            <div class="form-group mb-3">
                                <input v-model="user.username" :placeholder="$t('auth.username')" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <input v-model="user.email" :placeholder="$t('auth.email')" type="email" class="form-control">
                            </div>
                            <div class="form-group mb-3">
                                <input v-model="user.password" :placeholder="$t('auth.password')" type="password" class="form-control">
                            </div>
                            <div class="form-group mb-3 custom-file">
                                <input type="file" class="custom-file-input" id="avatar" v-on:change="upload">
                                <label class="form-control custom-file-label" for="avatar">{{ attachment.status }}</label>
                            </div>
                        </form>
                    </div>
                    <div class="form-footer">
                        <button type="button" class="btn btn-primary" @click="submit" :disabled="submitting"><span class="spinner-border spinner-border-sm" v-if="submitting"></span><template v-else>{{ $t('auth.update') }}</template></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import profileCard from '../components/profile/Card';

    export default {
        components: {
            profileCard,
        },
        data() {
            return {
                alert: {
                    show: false,
                    type: "danger",
                    content: "",
                },
                user: {
                    name: '',
                    email: '',
                    password: '',
                    avatar: '',
                    avatar_url: '',
                },
                attachment: {
                    file: null,
                    status: "Upload avatar",
                },
                submitting: false,
                status: false
            };
        },
        mounted() {
            this.fill();
            this.$meta({
                title: this.$t('meta.title.settings'),
                description: this.$t('meta.description.default')
            });
        },
        methods: {
            fill() {
                this.status = 'loading';
                this.$api.get('account').then(response => {
                    this.user = response.data;
                    this.status = 'done';
                }).catch(error => {
                    this.status = 'error';
                });
            },
            upload(event) {
                this.attachment.file = event.target.files[0];
                var formData = new FormData();
                formData.append("image", this.attachment.file);
                let headers = {'Content-Type': 'multipart/form-data'};
                let onUploadProgress = progressEvent => this.attachment.status = 'Uploading: ' + Math.floor((progressEvent.loaded * 100) / progressEvent.total) + '%';
                this.$api.post("upload", formData, {headers, onUploadProgress}).then(response => {
                    this.user.avatar = response.data.file;
                    this.attachment.status = response.data.message;
                }).catch(error => {
                    this.attachment.status = error.response.data.message;
                });
            },
            submit() {
                this.submitting = true;
                this.$api.put('account', this.user).then((response) => {
                    this.handle_response(response, this.alert, false);
                    this.submitting = false;
                    this.fill();
                    this.$root.$emit('user-updated');
                }).catch((error) => {
                    this.handle_response(error.response, this.alert, true);
                    this.submitting = false;
                });
            }
        }
    };
</script>
