<template>
  <div class="modal fade" id="artist-modal">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">{{ artist_id ? $t('admin.edit_artist') : $t('admin.add_artist') }}</h5>
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
            <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border"></div></div>
            <div class="text-center py-5 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
            <form v-else @submit.prevent="submit">
                <alert v-show="alert.show" :type="alert.type" :content="alert.content"></alert>
                <div class="form-group mb-3">
                    <input v-model="artist.name" :placeholder="$t('app.fields.name')" class="form-control">
                </div>
                <div class="form-group mb-3">
                    <textarea v-model="artist.description" :placeholder="$t('app.fields.description')" class="form-control"></textarea>
                </div>
                <div class="form-group mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="artist.gender" id="artist-unknown" :value="null">
                        <label class="form-check-label" for="artist-unknown">Unknown</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="artist.gender" id="artist-male" value="male">
                        <label class="form-check-label" for="artist-male">{{ $t('app.genders.male') }}</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="artist.gender" id="artist-female" value="female">
                        <label class="form-check-label" for="artist-female">{{ $t('app.genders.female') }}</label>
                    </div>
                </div>
                <div v-for="(object, key) in artist.platforms" :key="key" class="form-group input-group mb-3">
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
            <button type="button" class="btn btn-danger mr-auto" @click="remove" v-if="artist_id"><span class="spinner-border spinner-border-sm" v-if="deleting"></span><template v-else>{{ $t('admin.delete') }}</template></button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('admin.close') }}</button>
            <button type="button" class="btn btn-primary" @click="submit" :disabled="submitting"><span class="spinner-border spinner-border-sm" v-if="submitting"></span><template v-else>{{ artist_id ? $t('admin.edit_artist') : $t('admin.add_artist') }}</template></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "artist-editor",
        props: {
            artist_id: {
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
                artist: {
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
            artist_id (currently, before) {
                Object.assign(this.$data, this.$options.data.apply(this))
                if (currently) {
                    this.fill(this.artist_id);
                }
            }
        },
        methods: {
            fill(artist_id) {
                this.status = 'loading';
                this.$api.get('artists/' + artist_id).then(response => {
                    this.artist = response.data;
                    this.status = 'done';
                }).catch(error => {
                    this.status = 'error';
                });
            },
            add_platform() {
                this.artist.platforms.push({ platform: 'Website', details: '' });
            },
            submit() {
                this.submitting = true;
                let request = this.artist_id ? this.$api.put('artists/' + this.artist.id, this.artist) : this.$api.post('artists', this.artist) ;
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
                this.$api.delete('artists/' + this.artist.id).then((response) => {
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
