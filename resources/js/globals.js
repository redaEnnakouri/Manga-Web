import Vue from 'vue';
import VueAnalytics, { page } from 'vue-analytics'
import Multiselect from 'vue-multiselect';
import VueLazyload from 'vue-lazyload'
import * as bootstrap from './bootstrap';
import api from './api';
import router from './router';
import Logo from './components/Logo';
import Alert from './components/Alert';
import Pagination from './components/Pagination';
import Placeholder from './components/content/Placeholder';

const requireComponent = require.context('./icons', false, /\w+\Icon.js$/);
requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/^\.\/(.*)\.\w+$/, '$1');
    Vue.component(componentName, componentConfig.default || componentConfig);
});

const cdnize = (path) => [app.cdn.replace(/\/$/, ''), path].join('');


Vue.use(VueAnalytics, {
    id: app.ua,
    ignoreRoutes: ['comic/reader'],
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    }
});

Vue.use(VueLazyload, {
    preLoad: 3,
    error: cdnize('/images/default.jpg'),
    loading: cdnize('/images/default.jpg'),
    attempt: 2
});

Vue.component('multiselect', Multiselect);
Vue.component('logo', Logo);
Vue.component('alert', Alert);
Vue.component('pagination', Pagination);
Vue.component('placeholder', Placeholder);

Vue.filter('capitalize', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
})

Vue.mixin({
    methods: {
        handle_response: (response, component, error) => {
            let html = '';
            if (typeof response == 'string') {
                html = response;
            } else if (typeof response.data.errors == 'object') {
                Object.values(response.data.errors).forEach((alert) => {
                    html = `${html + alert}<br/>`;
                });
            } else {
                html = response.data.message;
            }
            component.content = html;
            component.type = (error ? 'danger' : 'success');
            component.show = true;
        },
        copy: (content) => {
            const el = document.createElement('textarea');
            el.value = content;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        },
    },
});

Vue.prototype.$site = require('./site.json');
Vue.prototype.$api = api;
Vue.prototype.$app = app;
Vue.prototype.$bootstrap = bootstrap;
Vue.prototype.$cdn = cdnize;
Vue.prototype.$meta = (meta) => {
    const pageTitle = meta.title || '';
    const websiteTitle = app.title || '';
    const description = meta.description || app.description;
    document.title = (pageTitle == '' ? websiteTitle : `${pageTitle} | ${websiteTitle}`);
    Array.from(document.querySelectorAll('[data-meta]')).map(el => el.parentNode.removeChild(el));
    const attributes = {
        name: 'description',
        content: description,
        'data-meta': '',
    };
    const metaElement = document.createElement('meta');
    Object.keys(attributes).forEach(key => metaElement.setAttribute(key, attributes[key]));
    document.head.appendChild(metaElement);
    page(router);
};
