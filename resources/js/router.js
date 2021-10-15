import Vue from 'vue';
import VueRouter from 'vue-router';
import {
    loadLanguage,
    availableLanguages,
    i18n,
} from './i18n';
import store from './store';
const site = require('./site.json');

import Home from './views/Home';
import NotFound from './views/NotFound';

const Comics = () => import(/* webpackChunkName: "comics" */ './views/Comics');
const Comic = () => import(/* webpackChunkName: "comics" */ './views/Comic');
const ComicReader = () => import(/* webpackChunkName: "reader" */ './views/ComicReader');
const Tags = () => import(/* webpackChunkName: "tags" */ './views/Tags');
const Tag = () => import(/* webpackChunkName: "tags" */ './views/Tag');
const Groups = () => import(/* webpackChunkName: "groups" */ './views/Groups');
const Group = () => import(/* webpackChunkName: "groups" */ './views/Group');
const Parodies = () => import(/* webpackChunkName: "parodies" */ './views/Parodies');
const Parody = () => import(/* webpackChunkName: "parodies" */ './views/Parody');
const Relationships = () => import(/* webpackChunkName: "relationships" */ './views/Relationships');
const Relationship = () => import(/* webpackChunkName: "relationships" */ './views/Relationship');
const Characters = () => import(/* webpackChunkName: "characters" */ './views/Characters');
const Character = () => import(/* webpackChunkName: "characters" */ './views/Character');
const Artists = () => import(/* webpackChunkName: "artists" */ './views/Artists');
const Artist = () => import(/* webpackChunkName: "artists" */ './views/Artist');
const Authors = () => import(/* webpackChunkName: "authors" */ './views/Authors');
const Author = () => import(/* webpackChunkName: "authors" */ './views/Author');
const Language = () => import(/* webpackChunkName: "languages" */ './views/Language');
const Category = () => import(/* webpackChunkName: "categories" */ './views/Category');
const ComicHeader = () => import(/* webpackChunkName: "comics" */ './components/headers/Comic');
const ComicReaderHeader = () => import(/* webpackChunkName: "reader" */ './components/headers/ComicReader');
const Dmca = () => import(/* webpackChunkName: "pages" */ './views/Dmca');
const USC2257 = () => import(/* webpackChunkName: "pages" */ './views/USC2257');

const Login = () => import(/* webpackChunkName: "auth" */ './components/auth/Login');
const Register = () => import(/* webpackChunkName: "auth" */ './components/auth/Register');
const PasswordReset = () => import(/* webpackChunkName: "auth" */ './components/auth/PasswordReset');
const NewPassword = () => import(/* webpackChunkName: "auth" */ './views/NewPassword');
const VerifyEmail = () => import(/* webpackChunkName: "auth" */ './views/VerifyEmail');
const Profile = () => import(/* webpackChunkName: "auth" */ './views/Profile');
const Settings = () => import(/* webpackChunkName: "auth" */ './views/Settings');

const AdminWrapper = () => import(/* webpackChunkName: "admin" */ './views/admin/Wrapper');
const AdminComicEditor = () => import(/* webpackChunkName: "admin" */ './views/admin/ComicEditor');
const AdminComments = () => import(/* webpackChunkName: "admin" */ './views/admin/Comments');
const AdminArtists = () => import(/* webpackChunkName: "admin" */ './views/admin/Artists');
const AdminAuthors = () => import(/* webpackChunkName: "admin" */ './views/admin/Authors');
const AdminAds = () => import(/* webpackChunkName: "admin" */ './views/admin/Ads');

const comic_url = site.features.includes('webtoons') ? 'webtoon' : 'comic';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
	{
        path: '/:lang',
        component: {
            template: '<transition name="fade" mode="out-in" appear v-on:after-enter="afterEnter"><router-view/></transition>',
            methods: {
                afterEnter: () => {
                    BSN.initCallback();
                },
            },
        },
        children: [
            {
               path: '/home',
                name: 'home',
                component: Home,
            },
            {
                path: 'latest',
                name: 'comics',
                component: Comics,
            },
            {
                path: comic_url + '/:slug',
                name: 'comic',
                component: Comic,
                meta: {
                    headerComponent: ComicHeader,
                },
                children: [
                    {
                        path: 'characters',
                        name: 'comic/characters',
                        meta: {
                            headerComponent: ComicHeader,
                        },
                    },
                    {
                        path: 'download',
                        name: 'comic/download',
                        meta: {
                            headerComponent: ComicHeader,
                            requiresAuth: true,
                        },
                    },
                    {
                        path: 'comments/:identifier?',
                        name: 'comic/comments',
                        meta: {
                            headerComponent: ComicHeader,
                        },
                    },
                ]
            },
            {
                path: comic_url + '/:slug/:chapter?/reader/:page?',
                name: 'comic/reader',
                component: ComicReader,
                meta: {
                    headerComponent: ComicReaderHeader,
                    forceHeader: true,
                    hideFooter: true
                },
            },
            ...(site.features.includes('tags') ? [
                {
                    path: 'tags',
                    name: 'tags',
                    component: Tags,
                },
                {
                    path: 'tag/:slug',
                    name: 'tag',
                    component: Tag,
                }
            ] : []),
            ...(site.features.includes('groups') ? [
                {
                    path: 'groups',
                    name: 'groups',
                    component: Groups,
                },
                {
                    path: 'group/:slug',
                    name: 'group',
                    component: Group,
                },
            ] : []),
            ...(site.features.includes('parodies') ? [
                {
                    path: 'parodies',
                    name: 'parodies',
                    component: Parodies,
                },
                {
                    path: 'parody/:slug',
                    name: 'parody',
                    component: Parody,
                },
            ] : []),
            ...(site.features.includes('relationships') ? [
                {
                    path: 'relationships',
                    name: 'relationships',
                    component: Relationships,
                },
                {
                    path: 'relationship/:slug',
                    name: 'relationship',
                    component: Relationship,
                }
            ] : []),
            ...(site.features.includes('characters') ? [
                {
                    path: 'characters',
                    name: 'characters',
                    component: Characters,
                },
                {
                    path: 'character/:slug',
                    name: 'character',
                    component: Character,
                    children: [
                        {
                            path: 'comments/:identifier?',
                            name: 'character/comments'
                        },
                    ]
                },
            ] : []),
            ...(site.features.includes('artists') ? [
                {
                    path: 'artists',
                    name: 'artists',
                    component: Artists
                },
                {
                    path: 'artist/:slug',
                    name: 'artist',
                    component: Artist,
                    children: [
                        {
                            path: 'comments/:identifier?',
                            name: 'artist/comments'
                        },
                    ]
                },
            ] : []),
            ...(site.features.includes('authors') ? [
                {
                    path: 'authors',
                    name: 'authors',
                    component: Authors
                },
                {
                    path: 'author/:slug',
                    name: 'author',
                    component: Author,
                    children: [
                        {
                            path: 'comments/:identifier?',
                            name: 'author/comments'
                        },
                    ]
                },
            ] : []),
            ...(site.features.includes('languages') ? [
                {
                    path: 'language/:slug',
                    name: 'language',
                    component: Language,
                },
            ] : []),
            ...(site.features.includes('categories') ? [
                {
                    path: 'category/:slug',
                    name: 'category',
                    component: Category,
                },
            ] : []),
            ...(site.features.includes('dmca') ? [
                {
                    path: 'dmca',
                    name: 'dmca',
                    component: Dmca,
                },
                {
                    path: 'USC2257',
                    name: 'USC2257',
                    component: USC2257,
                },
            ] : []),
            {
                path: 'login',
                name: 'login',
                component: Login,
            },
            {
                path: 'register',
                name: 'register',
                component: Register,
            },
            {
                path: 'password-reset',
                name: 'password-reset',
                component: PasswordReset,
            },
            {
                path: 'password-reset/:token',
                name: 'new-password',
                component: NewPassword,
            },
            {
                path: 'verify/:hash',
                name: 'verify',
                component: VerifyEmail,
            },
            {
                path: 'profile/:username',
                name: 'profile',
                component: Profile,
            },
            {
                path: 'settings',
                name: 'settings',
                component: Settings,
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: 'admin',
                component: AdminWrapper,
                children: [
                    {
                        path: 'comics/:slug?',
                        name: 'admin/comics',
                        component: AdminComicEditor,
                    },
                    {
                        path: 'comments',
                        name: 'admin/comments',
                        component: AdminComments,
                    },
                    {
                        path: 'artists',
                        name: 'admin/artists',
                        component: AdminArtists,
                    },
                    {
                        path: 'authors',
                        name: 'admin/authors',
                        component: AdminAuthors,
                    },
                    {
                        path: 'ads',
                        name: 'admin/ads',
                        component: AdminAds,
                    },
                ],
                meta: {
                    requiresAuth: true,
                    adminOnly: true,
                },
            },
            {
                path: '*',
                name: '404',
                component: NotFound,
            },
        ],
    }],
});

router.beforeEach((to, from, next) => {
    if (
        to.name !== 'comic/reader'
        && (
            !to.query.page
            || to.query.page != from.query.page
        )
    ) window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    let { lang } = to.params;    
    
    if (!lang || !(lang in availableLanguages)) {
        lang = i18n.locale || 'en';
        to.params.lang = lang;       

	    if (to.name !== 'home') {
            router.push({
                path: `/${lang}${to.fullPath}`,
            });
        }
    }
    (loadLanguage)(lang).then(() => next());
    if (to.matched.some(record => record.meta.requiresAuth) && store.state.isLoggedIn == false) {
        next({ name: 'login' });
    } else if (to.matched.some(record => record.meta.adminOnly) && store.getters.user.role != 'admin') {
        next({ path: '404', replace: true });
    }
    next();
});
export default router;