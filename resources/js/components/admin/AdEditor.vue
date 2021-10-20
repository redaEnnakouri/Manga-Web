<template>
  <div class="modal fade" id="ad-modal">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">{{ ad_id ? 'Edit ad tag' : 'Add ad tag' }}</h5>
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
            <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border"></div></div>
            <div class="text-center py-5 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
            <form v-else @submit.prevent="submit">
                <alert v-show="alert.show" :type="alert.type" :content="alert.content"></alert>
                <div class="form-group mb-3">
                    <select class="form-control" v-model="ad.language">
                        <option :value=null>Global</option>
                        <option :value="iso" selected v-for="(language, iso) in $app.languages" :key="iso">{{ language.name }}</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <select class="form-control" v-model="ad.spot">
                        <option value="popup" selected>Popup</option>
                        <option value="top">Top</option>
                        <option value="bottom">Bottom</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <select class="form-control" v-model="ad.nsfw_enabled">
                        <option :value="true">NSFW only</option>
                        <option :value="false">non-NSFW only</option>
                        <option :value="null" selected>All versions</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <textarea v-model="ad.code" placeholder="Script tag/HTML content" class="form-control"></textarea>
                </div>
                <div class="form-group mb-3">
                    <input v-model="ad.include" placeholder="Target countries (comma separated)" class="form-control">
                </div>
                <div class="form-group mb-3">
                    <input v-model="ad.exclude" placeholder="Excluded countries (comma separated)" class="form-control">
                </div>
                <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" v-model="ad.enabled" id="enabled" class="custom-control-input">
                    <label class="custom-control-label" for="enabled">
                        Enable ad
                    </label>
                </div>
                <h6>Devices</h6>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="ad.desktop" id="desktop" class="custom-control-input">
                    <label class="custom-control-label" for="desktop">
                        Desktop
                    </label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="ad.mobile" id="mobile" class="custom-control-input">
                    <label class="custom-control-label" for="mobile">
                        Mobile
                    </label>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger mr-auto" @click="remove" v-if="ad_id"><span class="spinner-border spinner-border-sm" v-if="deleting"></span><template v-else>{{ $t('admin.delete') }}</template></button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('admin.close') }}</button>
            <button type="button" class="btn btn-primary" @click="submit" :disabled="submitting"><span class="spinner-border spinner-border-sm" v-if="submitting"></span><template v-else>{{ ad_id ? 'Update tag' : 'Add tag' }}</template></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "ad-editor",
        props: {
            ad_id: {
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
                ad: {
                    spot: 'popup',
                    code: '',
                    desktop: false,
                    mobile: false,
                    enabled: true,
                    include: null,
                    exclude: null,
                    language: null,
                    nsfw_enabled: null
                },
                submitting: false,
                deleting: false,
                status: false
            };
        },
        watch: {
            ad_id (currently, before) {
                Object.assign(this.$data, this.$options.data.apply(this))
                if (currently) {
                    this.fill(this.ad_id);
                }
            }
        },
        methods: {
            fill(ad_id) {
                this.status = 'loading';
                this.$api.get('ads/' + ad_id).then(response => {
                    this.ad = response.data;
                    this.status = 'done';
                }).catch(error => {
                    this.status = 'error';
                });
            },
            submit() {
                this.submitting = true;
                let request = this.ad_id ? this.$api.put('ads/' + this.ad.id, this.ad) : this.$api.post('ads', this.ad) ;
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
                this.$api.delete('ads/' + this.ad.id).then((response) => {
                    this.handle_response(response, this.alert, false);
                    this.$root.$emit('changed');
                    this.deleting = false;
                }).catch((error) => {
                    this.handle_response(error.response, this.alert, true);
                    this.deleting = false;
                });
            },
        }
    };
</script>
