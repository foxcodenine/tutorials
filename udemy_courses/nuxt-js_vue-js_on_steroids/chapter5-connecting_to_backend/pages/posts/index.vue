<template>
  <div class="posts-page">
      <PostSection :dataPost="dataPost"></PostSection>
  </div>
</template>



<script>
    import PostSection from "@/components/Post/PostSection";
    export default {
        components: {
            PostSection
        },
    // _________________________________________________________________
        // Superseded code - Using asyncData instaed

        // data() {
        //     return {
        //         dataPost: []
        //     }
        // },
        // created() {
        //     fetch('http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}})
        //     .then(res => res.json())
        //     .then(data => this.dataPost = [...data].reverse())
        // },
    // _________________________________________________________________

        // Superseded code - Using nuxtServerInit(vuexContext, context) in store instead
        // And fetch data from store with getter in computed
    
        // asyncData() {
        //     return fetch(
        //         'http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}}
        //         )
        //         .then(res => res.json())
        //         .then(data => {
        //             return {dataPost : [...data].reverse()}
        //         }
        //     )
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



<style>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>