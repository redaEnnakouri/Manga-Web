<template>
  <div class="modal fade" id="author-modal">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">{{ author_id ? $t('admin.edit_author') : $t('admin.add_author') }}</h5>
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
            <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border"></div></div>
            <div class="text-center py-5 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
            <form v-else @submit.prevent="submit">
                <alert v-show="alert.show" :type="alert.type" :content="alert.content"></alert>
                <div class="form-group mb-3">
                    <input v-model="author.name" :placeholder="$t('app.fields.name')" class="form-control">
                </div>
                <div class="form-group mb-3">
                    <textarea v-model="author.description" :placeholder="$t('app.fields.description')" class="form-control"></textarea>
                </div>
                <div class="form-group mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="author.gender" id="author-unknown" :value="null">
                        <label class="form-check-label" for="author-unknown">Unknown</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="author.gender" id="author-male" value="male">
                        <label class="form-check-label" for="author-male">{{ $t('app.genders.male') }}</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="author.gender" id="author-female" value="female">
                        <label class="form-check-label" for="author-female">{{ $t('app.genders.female') }}</label>
                    </div>
                </div>
                <div v-for="(object, key) in author.platforms" :key="key" class="form-group input-group mb-3">
                    <select class="form-control" v-model="object.platform">
                        <option value="Facebook">Facebook</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Flickr">Flickr</option>
                        <option value="Phone">Phone</option>
                        <option value="Email">Email</option>
                        <option value="Website">Website</option>
                    </select>
                    <input type="text" :placeholder="$t('app.fields.details')" class="form-control" v-model="object.details">
                </div>
                <button type="button" class="btn btn-secondary" @click="add_platform">{{ $t('admin.add_platform') }}</button>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger mr-auto" @click="remove" v-if="author_id"><span class="spinner-border spinner-border-sm" v-if="deleting"></span><template v-else>{{ $t('admin.delete') }}</template></button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('admin.close') }}</button>
            <button type="button" class="btn btn-primary" @click="submit" :disabled="submitting"><span class="spinner-border spinner-border-sm" v-if="submitting"></span><template v-else>{{ author_id ? $t('admin.edit_author') : $t('admin.add_author') }}</template></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "author-editor",
        props: {
            author_id: {
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
                author: {
                    name: '',
                    description: '',
                    gender: null,
                    platforms: []
                },
                submitting: false,
                deleting: false,
                status: false
            };
        },
        watch: {
            author_id (currently, before) {
                Object.assign(this.$data, this.$options.data.apply(this))
                if (currently) {
                    this.fill(this.author_id);
                }
            }
        },
        methods: {
            fill(author_id) {
                this.status = 'loading';
                this.$api.get('authors/' + author_id).then(response => {
                    this.author = response.data;
                    this.status = 'done';
                }).catch(error => {
                    this.status = 'error';
                });
            },
            add_platform() {
                this.author.platforms.push({ platform: 'Website', details: '' });
            },
            submit() {
                this.submitting = true;
                let request = this.author_id ? this.$api.put('authors/' + this.author.id, this.author) : this.$api.post('authors', this.author) ;
                request.then((response) => {
                    this.handle_response(response, this.alert, false);
                    this.submitting = false;
                    this.$root.$emit('changed');
                }).catch((error) => {
                    this.handle_response(error.response, this.alert, true);
                    this.submitting = false;
                });
            },
            remove() {
                this.deleting = true;
                this.$api.delete('authors/' + this.author.id).then((response) => {
                    this.handle_response(response, this.alert, false);
                    this.$root.$emit('changed');
                    this.deleting = false;
                }).catch((error) => {
                    this.handle_response(error.response, this.alert, true);
                    this.deleting = false;
                });
            }
        }
    };
</script>
