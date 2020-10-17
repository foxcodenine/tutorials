<template>
    <section class="featured-post post" >
      <app-post-preview
          v-for="(p, index) in postData" :key="index"
          :id="p.id"
          :title="p.title"
          :sampleText="p.sampleText"
          :thumbnail="p.thumbnail">
      </app-post-preview>
      
    </section>
</template>

<script>
    import postData from "@/Data/postList";
    import PostPreview from "@/components/Post/PostPreview";

    export default {
        components: {
            appPostPreview: PostPreview
        },
        data() {
            return {
                postData
            }
        }
    }
</script>

<style lang="scss" scoped>
  .post {
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    flex-direction: row-reverse;
    width: 100%;
    // background: crimson;
    // min-height: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
</style>