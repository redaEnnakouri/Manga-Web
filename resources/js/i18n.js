import Vue from 'vue';
import VueI18n from 'vue-i18n';
import api from './api';
import en from './translations/en.json';

Vue.use(VueI18n);
export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
    },
});

export const availableLanguages = app.languages;

export const loadedLanguages = ['en'];

function setI18nLanguage(lang) {
    i18n.locale = lang;
    api.defaults.headers.common['Accept-Language'] = lang;
    api.defaults.params = {};
    api.defaults.params['lang'] = lang;
    document.querySelector('html').setAttribute('lang', lang);
    return lang;
}

export const loadLanguage = (lang) => {
    if (!loadedLanguages.includes(lang)) {
        return import(/* webpackChunkName: "lang-[request]" */ `./translations/${lang}`).then((msgs) => {
            i18n.setLocaleMessage(lang, msgs);
            loadedLanguages.push(lang);
            return Promise.resolve(setI18nLanguage(lang));
        });
    }
    return Promise.resolve(setI18nLanguage(lang));
};
