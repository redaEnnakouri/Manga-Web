import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        user: localStorage.getItem('user') || false,
        page: 1
    },
    mutations: {
        updatePage(state, page) {
          state.page = page
        },
        login(state) {
            state.isLoggedIn = true;
            state.user = localStorage.getItem('user');
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = false;
        }
    },
    actions: {
        login({
            commit,
        }, creds) {
            return new Promise((resolve, reject) => {
                api.post('login', creds).then((response) => {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    localStorage.setItem('token', response.data.auth.access_token);
                    commit('login');
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        update({
            commit,
            dispatch
        }) {
            return new Promise((resolve, reject) => {
                api.get('account').then((response) => {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    commit('login');
                    resolve(response);
                }).catch((error) => {
                    dispatch('logout');
                    reject(error);
                });
            });
        },
        passwordReset({
            commit,
        }, creds) {
            return new Promise((resolve, reject) => {
                api.post('password/create', creds).then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        register({
            commit,
        }, creds) {
            return new Promise((resolve, reject) => {
                api.post('register', creds).then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                });
            });
        },
        logout({
            commit,
        }) {
            api.get('logout');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            commit('logout');
            router.push({ name: 'home' });
        },
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        user: state => JSON.parse(state.user)
    },
});
