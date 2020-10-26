<template>
  <div class="hompe-page">

    <section class="intro">
      <h1 class="intro__text">Get the latest tech news!</h1>
    </section>

    <PostSection :dataPost="dataPost"></PostSection>
  </div>
</template>

<script>
  import PostSection from "@/components/Post/PostSection";
  import postList from "@/Data/postList";
  
  export default {
    components: {
      PostSection
    },
    // _________________________________________________________________

    // Superseded code - Using asyncData instaed

    // data() {
    //   return {
    //     dataPost: []
    //   }
    // },

    // created() {
    //   fetch('http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}})
    //   .then(res => res.json())
    //   .then(data => this.dataPost = [...data].reverse())
    // },

    // _________________________________________________________________

    // Superseded code - Using fetch and retrive data from store with getter in computed

    // asyncData(context) {
    //   console.log('asyncData is executed!');
    //   // console.log(context);
    //   return fetch(
    //       'http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}}
    //       )
    //       .then(res => res.json())
    //       .then(data => {
    //           return {dataPost : [...data].reverse()}
    //         }          
    //       )
    //       .catch(e => {
    //         context.error({ statusCode: 404, message: 'Post not found'})
    //       })
    // },
    
    // _________________________________________________________________

    // Superseded code - Using nuxtServerInit(vuexContext, context) in store instead
    // And fetch data from store with getter in computed

    // fetch(context) {
    //   console.log('fetchData is executed!');
    //   // console.log(context);
    //   return fetch(
    //       'http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}}
    //       )
    //       .then(res => res.json())
    //       .then(data => {
    //           // return {dataPost : [...data].reverse()}
    //           context.store.dispatch('setPost', data)              
    //         }          
    //       )
    //       .catch(e => {
    //         context.error({ statusCode: 404, message: 'Post not found'})
    //       })
    // },

    // _________________________________________________________________
    computed: {
      dataPost() {
        const loadedPost = this.$store.getters.fetchPost;
        return loadedPost;
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
    background-image: url('~assets/images/Crypto-1.jpg');

    &__text {
      position: absolute;
      top: 10%;
      left: 5%;
      width: 90%;
      font-size: 1.5rem;
      color: rgba(0,0,0, .8);
      background-color: rgba(211, 211, 211,.3);
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0px 3px 6px rgba(0,0,0, .5);
      box-sizing: border-box;
      border: 1px solid rgba(0,0,0, .7);
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }
  }


</style>