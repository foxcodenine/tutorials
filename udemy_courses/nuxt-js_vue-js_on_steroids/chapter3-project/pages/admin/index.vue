<template>
  <div class="admin-page">

        <section class="new-post">
            <button 
                class="new-post__btn btn"
                @click="onClick()">Create Post</button>
        </section>

        <section class="existing-post">
            <h1 class="existing-post__title">Existing Post</h1>
            <app-post-section></app-post-section>
        </section>
  </div>
</template>



<script>
    import PostSection from "@/components/Post/PostSection";
    export default {
        components: {
            appPostSection: PostSection
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
        &__btn {
            padding: 1rem 2rem;
            font-size: 1.6rem;
        }
    }
    
    .existing-post {

        &__title {
            text-align: center;
        }
    }
</style>