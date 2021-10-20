<template>
    <div class="profile-card clearfix box mb-4">
        <div class="text-center py-5 w-100" v-if="status == 'loading'"><div class="spinner-border"></div></div>
        <div class="text-center py-5 w-100" v-else-if="status == 'error'">{{ $t('app.something_went_wrong') }}</div>
        <template v-else>
            <img :src="user.avatar_url" class="profile-avatar">
            <div class="profile-details float-left py-1 px-2">
                <h5 class="profile-username mb-0">{{ user.username }} <span v-if="user.role == 'admin'" class="badge badge-secondary">{{ $t('auth.moderator') }}</span></h5>
                <p class="profile-date mb-0">{{ $t('auth.signed_up') + ' ' + user.signed_up }}</p>
            </div>
        </template>
    </div>
</template>
<script>
    export default {
        props: ["user", "status"]
    }
</script>
