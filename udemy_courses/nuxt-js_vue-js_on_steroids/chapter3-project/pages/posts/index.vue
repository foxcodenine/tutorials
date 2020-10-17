<template>
  <div class="posts-page">
      <app-post-section></app-post-section>
  </div>
</template>



<script>
    import PostSection from "@/components/Post/PostSection";
    export default {
        components: {
            appPostSection: PostSection
        }
    }
</script>



<style>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>