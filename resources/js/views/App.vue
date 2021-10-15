<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <transition name="fade" mode="out-in" v-on:after-enter="initBS()">
                <component v-if="header.component && (header.force || header.visible)" :is="header.component" :headerData="header.data"></component>
                <div v-else class="container">
                    <logo class="order-1" placement="header" showName="true"/>
                    <div class="navbar-nav collapse navbar-collapse flex-grow-0 order-3 order-lg-2" id="navbar">
                        <router-link :to="{name: 'home'}" class="nav-item nav-link"><home-icon/> {{ $t("app.home") }}</router-link>
                        <router-link :to="{name: 'comics'}" class="nav-item nav-link"><grid-icon/> {{ $t("app.comics") }}</router-link>
                        <router-link v-if="$site.features.includes('tags')" :to="{name: 'tags'}" class="nav-item nav-link"><tag-icon/> {{ $t("app.tags") }}</router-link>
                        <router-link v-if="$site.features.includes('groups')" :to="{name: 'groups'}" class="nav-item nav-link"><users-icon/> {{ $t("app.groups") }}</router-link>
                        <router-link v-if="$site.features.includes('parodies')" :to="{name: 'parodies'}" class="nav-item nav-link"><copy-icon/> {{ $t("app.parodies") }}</router-link>
                        <router-link v-if="$site.features.includes('characters')" :to="{name: 'characters'}" class="nav-item nav-link"><star-icon/> {{ $t("app.characters") }}</router-link>
                        <router-link v-if="$site.features.includes('artists')" :to="{name: 'artists'}" class="nav-item nav-link"><image-icon/> {{ $t("app.artists") }}</router-link>
                        <router-link v-if="$site.features.includes('authors')" :to="{name: 'authors'}" class="nav-item nav-link"><book-open-icon/> {{ $t("app.authors") }}</router-link>
                        <a v-if="['nhentai', 'pcomix', 'hentaihand'].includes($site.id)" href="https://rebrand.ly/NhentaiClicker" class="nav-item nav-link" rel="nofollow" target="_blank">Free Hentai Games</a>
                        <a v-if="['nhentai', 'pcomix', 'hentaihand'].includes($site.id)" href="https://theporndude.com/" class="nav-item nav-link" rel="nofollow" target="_blank">PornDude</a>
                        <a v-if="$site.id === 'nhentai'" href="https://hentaisphere.com/" class="nav-item nav-link" target="_blank">nHentai App</a>
                    </div>
                    <div class="navbar-nav flex-row order-2 order-lg-3">
                        <a href="#navbar" class="nav-item nav-link d-lg-none" data-toggle="collapse" data-target="#navbar"><menu-icon/></a>
                        <a href="#search" class="nav-item nav-link" @click.prevent="openModal('Search')"><search-icon/></a>
                        <template v-if="!isLoggedIn">
                            <router-link :to="{name: 'login'}" class="nav-item btn btn-link" :event="''" @click.native.prevent="openModal('Login')">{{ $t("auth.login") }}</router-link>
                            <router-link :to="{name: 'register'}" class="nav-item btn btn-primary" :event="''" @click.native.prevent="openModal('Register')">{{ $t("auth.register") }}</router-link>
                        </template>
                        <template v-else>
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"><user-icon/></a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <router-link :to="{ name: 'profile', params: {username: user.username} }" class="dropdown-item profile" ><img :src="user.avatar_url"> {{ user.username }}</router-link>
                                    <router-link :to="{ name: 'settings' }" class="dropdown-item" ><settings-icon/> {{ $t("auth.settings") }}</router-link>
                                    <template v-if="user.role == 'admin'">
                                        <div class="dropdown-divider"></div>
                                        <h6 class="dropdown-header">{{ $t("auth.administration") }}</h6>
                                        <router-link :to="{ name: 'admin/comics' }" class="dropdown-item" ><grid-icon/> {{ $t("admin.comics") }}</router-link>
                                        <router-link :to="{ name: 'admin/ads' }" class="dropdown-item" ><layers-icon/> Ad management</router-link>
                                        <router-link :to="{ name: 'admin/comments' }" class="dropdown-item" ><message-square-icon/> Comments</router-link>
                                        <router-link v-if="$site.features.includes('artists')" :to="{ name: 'admin/artists' }" class="dropdown-item" ><image-icon/> {{ $t("admin.artists") }}</router-link>
                                        <router-link v-if="$site.features.includes('authors')" :to="{ name: 'admin/authors' }" class="dropdown-item" ><book-open-icon/> {{ $t("admin.authors") }}</router-link>
                                    </template>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" @click="logout"><log-out-icon/> {{ $t("auth.logout") }}</a>
                                </div>
                            </div>
                        </template>
                        <div v-if="$site.features.includes('nsfw')" class="nsfw-toggle custom-control custom-switch align-self-center">
                            <input type="checkbox" class="custom-control-input" v-model="nsfw_toggle" id="nsfw-switch">
                            <label class="custom-control-label" for="nsfw-switch">{{ $t("app.nsfw") }}</label>
                        </div>
                    </div>
                </div>
            </transition>
        </nav>
        <main class="py-4">
            <div class="container" v-if="user && !user.verified">
                <div class="alert alert-warning" role="alert">{{ $t('auth.verify') }}<button class="action float-right" @click="resend" :disabled="email_status != $t('auth.resend')">{{ email_status }}</button></div>
            </div>
            <ad-spot class="mb-4" spot="top"/>
            <router-view/>
            <ad-spot class="mt-4" spot="bottom"/>
            <auth-modal ref="authModal"/>
            <search-modal ref="searchModal"/>
        </main>
        <footer class="bg-dark py-3" v-show="footer.show">
            <div class="d-flex container justify-content-between align-items-center">
                <div class="dropup">
                    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown"><globe-icon/> {{ languages[this.$i18n.locale].name }}</button>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" v-for="(language, i) in languages" :key="`language${i}`" @click="changeLanguage(i)"><img class="language-flag" :src="$cdn(language.icon)">{{ language.name }}</a>
                    </div>
                </div>
                <logo placement="footer"/>
                <div class="d-flex align-items-center">
                    <router-link v-if="$site.features.includes('dmca')" class="mr-3" :to="{ name: 'dmca' }">DMCA</router-link>
                    <router-link v-if="$site.features.includes('dmca')" :to="{ name: 'USC2257' }">18 U.S.C. 2257</router-link>
                    <div class="social-links">
                        <a v-for="(link, network) in networks" :key="network" :href="link" target="_blank" class="float-right">
                            <component :is="network + '-icon'"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { availableLanguages } from '../i18n';
    import AuthModal from '../components/AuthModal';
    import SearchModal from '../components/SearchModal';
    import AdSpot from '../components/AdSpot';

    export default {
        data() {
            return {
                networks: {},
                header: {
                    component: false,
                    visible: false,
                    force: false,
                    data: {},
                },
                footer: {
                    show: true
                },
                email_status: this.$t('auth.resend'),
                authComponent: "Login",
                languages: availableLanguages,
                scroll: {
                    previous: window.pageYOffset,
                    current: window.pageYOffset,
                },
                nsfw_toggle: app.nsfw
            }
        },
        components: {
            AuthModal,
            SearchModal,
            AdSpot
        },
        computed: {
            ...mapGetters(["isLoggedIn", "user"])
        },
        methods: {
            ...mapActions(["logout", "update"]),
            openModal(component) {
                if (component == "Search") {
                    return this.$refs.searchModal.openModal();
                }
                this.$refs.authModal.openModal(component);
            },
            changeLanguage(language) {
                this.$i18n.locale = language;
                this.$router.replace({ path: this.$router.path, params: { lang: this.$i18n.locale }, query: this.$router.query });
            },
            handleScroll() {
                if (this.header.force) return;
                this.scroll.current = window.pageYOffset;
                if (this.scroll.current < 60) {
                    this.header.visible = false;
                } else {
                    this.header.visible = true;
                }
                this.scroll.previous = this.scroll.current;
            },
            animateLogo(data, promise, stop) {
                let logos = document.querySelectorAll('.logo');
                if (stop) {
                    logos.forEach(function (el) { el.classList.remove("animate") });
                } else {
                    logos.forEach(function (el) { el.classList.add("animate") });
                }
                return (promise ? Promise.reject(data) : data);
            },
            initBS() {
                BSN.initCallback();
            },
            resend() {
                this.email_status = this.$t('auth.resending');
                this.$api.post('email/resend').then((response) => {
                    this.email_status = response.data.message;
                }).catch((error) => {
                    this.email_status = error.response.data.message;
                });
            }
        },
        watch: {
            isLoggedIn (currently, before) {
                if (currently) {
                    this.$api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
                    this.$ga.set('userId', this.user.id);
                } else {
                    this.$api.defaults.headers.common['Authorization'] = '';
                }
                this.$ga.set('logged-in', currently);
            },
            nsfw_toggle (currently, before) {
                var searchParams = new URLSearchParams();
                searchParams.set("nsfw", currently);
                window.location = '/?' + searchParams.toString();
            },
            $route (to, from) {
                this.$refs.searchModal.hideModal();
                if (to.meta.headerComponent) {
                    this.header.component = to.meta.headerComponent;
                } else {
                    this.header.component = false;
                }
                this.header.force = !!to.meta.forceHeader;
                this.footer.show = !to.meta.hideFooter;
            }
        },
        created () {
            this.$site.social.forEach(link => {
                let network = ['twitter', 'instagram'].find(network => new RegExp(network).test(link)) || 'external-link';
                this.networks[network] = link;
            });
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll);
            this.initBS();
            this.$ga.set('logged-in', this.isLoggedIn);
            if (this.isLoggedIn) {
                this.$api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
                this.$ga.set('userId', this.user.id);
                this.update();
            }
            this.$api.interceptors.request.use(config => this.animateLogo(config, false, false), error => this.animateLogo(error, true, true));
            this.$api.interceptors.response.use(response => this.animateLogo(response, false, true), error => this.animateLogo(error, true, true));
            this.$root.$on('user-updated', () => {
                this.update();
            });
            this.$root.$on('header-data', (data) => {
                this.header.data = data;
            });
            this.$root.$on('open-modal', (modal) => {
                this.openModal(modal);
            });
        },
        updated () {
            this.initBS();
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>
