<template>
  <div class="modal fade" id="auth-modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <transition name="fade" mode="out-in">
          <component :modal="true" :is="component" v-if="component"></component>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "auth-modal",
    data() {
        return {
            component: {
                template: '<div class="spinner-border my-5 mx-auto"></div>'
            }
        };
    },
    methods: {
        openModal(component) {
            this.component = () => ({
                component: import(/* webpackMode: "lazy-once", webpackChunkName: "auth.bundle" */ `./auth/${component}`),
                loading: {
                    template: '<div class="spinner-border my-5 mx-auto"></div>'
                },
                error: {
                    template: '<div class="my-5 mx-auto">{{ $t("app.something_went_wrong") }}</div>'
                },
                delay: 200,
                timeout: 5000
            })
            var modal = document.querySelector('#auth-modal');
            if (!modal.classList.contains('show')) {
                new this.$bootstrap.Modal(modal).show();
            }
        },
        hideModal() {
            new this.$bootstrap.Modal(document.querySelector('#auth-modal')).hide();
        }
    }
};
</script>
