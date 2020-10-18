<template>
  <div class="admin-page">

        <section class="new-post">
            <AppButton                 
                @click="onClick()">Create Post
            </AppButton>
        </section>

        <section class="existing-post">
            <h1 class="existing-post__title">Existing Post</h1>
            <PostSection isAdmin></PostSection>
        </section>
  </div>
</template>



<script>
    import PostSection from "~/components/Post/PostSection";
    import AppButton from "~/components/UI/AppButton";
    export default {
        components: {
            PostSection,
            AppButton
        },
        methods: {
            onClick() {
                this.$router.push('/admin/new-post')
            }
        }
    }
</script>



<style lang="scss" scoped>
    .admin-page {
        padding: 2rem;
    }
    
    .new-post {
        text-align: center;
        border-bottom: 2px solid #ccc;
        padding-bottom: 1rem;
    }
    
    .existing-post {

        &__title {
            text-align: center;
        }
    }
</style>