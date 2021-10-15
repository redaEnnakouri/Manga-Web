import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
});

api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const token = document.head.querySelector('meta[name="csrf-token"]');
if (token) api.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
api.interceptors.request.use(config => {
    config.params = config.params || {};
    config.params['nsfw'] = app.nsfw;
    return config;
});

export default api;
