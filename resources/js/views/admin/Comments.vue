<template>
    <div>
        <div class="title clearfix">
            <h5 class="float-left py-2 m-0"><message-square-icon/> Comments</h5>
        </div>
        <div class="box">
            <comments-wrapper :type="null" :entry="null" :headless="true" :list="true"/>
        </div>
    </div>
</template>
<script>
    import CommentsWrapper from '../../components/comments/Wrapper';

    export default {
        components: {
            CommentsWrapper
        },
        mounted() {
            this.$meta({
                title: 'Comments',
                description: this.$t('meta.description.default')
            });
        }
    };
</script>
