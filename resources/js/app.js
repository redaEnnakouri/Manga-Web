import Vue from 'vue';
import store from './store';
import router from './router';
import { i18n } from './i18n';
import App from './views/App';

require('./globals');

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App),
});
