<template>
    <router-link :to="{ name: 'comic', params: { slug: comic.slug } }">
        <div class="comic box clearfix d-flex flex-column h-100" :class="{'no-hover': noHover, lighter, editable: user.role === 'admin', premium: comic.premium }">
            <div class="image" :style="'background-image: url(' + comic.thumb_url + ');'" role="img" :aria-label="`${comic.title} cover`"></div>
            <comic-details :comic="comic" :tags="tags"/>
            <comic-details class="hover-drawer" :comic="comic" :tags="tags"/>
            <div v-if="user.role === 'admin'" class="edit">
                <button class="btn btn-danger" @click.prevent="remove"><trash-icon/></button>
                <button class="btn btn-primary ml-2" @click.prevent="edit"><edit-icon/></button>
            </div>
        </div>
    </router-link>
</template>
<script>
    import Vue from 'vue';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            'comic-details': {
                props: ["comic", "tags"],
                template: `<div class="comic-details">
                    <h6 class="title font-weight-bolder m-0" :title="comic.title"><img v-if="comic.language" class="comic-language" :src="comic.language.icon_url" :alt="comic.language.name"/> {{ comic.title }}</h6>
                    <div class="badges">
                        <span v-for="tag in tags" :key="tag.id" class="badge badge-primary" :style="'background-color:' + tag.color">{{ tag.name }}</span>
                    </div>
                </div>`
            }
        },
        props: ["comic", "noHover", "lighter"],
        computed: {
            ...mapGetters(["isLoggedIn", "user"]),
            tags: function () {
                return this.comic.tags.filter(tag => !['big-breasts', 'sole-female', 'group','sole-male'].includes(tag.slug)).slice(0, 3);
            }
        },
        methods: {
            edit() {
                this.$router.push({ name: 'admin/comics', params: { slug: this.comic.slug } })
            },
            remove() {
                if (!window.confirm("Do you really want to delete this comic?")) return;
                this.$api.delete('comics/' + this.comic.id).then((response) => location.reload());
            }
        }
    }
</script>
