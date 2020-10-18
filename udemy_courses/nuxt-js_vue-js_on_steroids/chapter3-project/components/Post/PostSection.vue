<template>
    <section class="featured-post post" >
      <PostPreview
          v-for="(p, index) in postData" :key="index"
          :id="p.id"
          :title="p.title"
          :is-admin="isAdmin"
          :sampleText="p.sampleText"
          :thumbnail="p.thumbnail">
      </PostPreview>
      
    </section>
</template>

<script>
    import postData from "@/Data/postList";
    import PostPreview from "@/components/Post/PostPreview";

    export default {
        props: {
          isAdmin: {
            type: Boolean,
            default: false
          }
        },
        components: {
            PostPreview
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