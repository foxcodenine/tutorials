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
    //     data() {
    //         return {
    //             dataPost: []
    //         }
    //     },
        asyncData() {
            return fetch(
                'http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}}
                )
                .then(res => res.json())
                .then(data => {
                    return {dataPost : [...data].reverse()}
                }
            )
        },
    //     created() {
    //         fetch('http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}})
    //         .then(res => res.json())
    //         .then(data => this.dataPost = [...data].reverse())
    //     }
    }
</script>



<style>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>