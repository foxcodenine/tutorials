<template>
  <div class="hompe-page">

    <section class="intro">
      <h1 class="intro__text">Get the latest tech news!</h1>
    </section>

    <section class="featured-post post" >

      <app-post-preview
          v-for="(p, index) in postData" :key="index"
          :id="p.id"
          :title="p.title"
          :sampleText="p.sampleText"
          :thumbnail="p.thumbnail">
      </app-post-preview>
      
    </section>
  </div>
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

  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;

    &__text {
      position: absolute;
      top: 10%;
      left: 5%;
      width: 90%;
      font-size: 1.5rem;
      color: black;
      background-color: rgb(211, 211, 211);
      padding: 10px;
      border-radius: 10px;
      box-shadow: 3px 3px 3px black;
      box-sizing: border-box;
      border: 1px solid black;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }
  }
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