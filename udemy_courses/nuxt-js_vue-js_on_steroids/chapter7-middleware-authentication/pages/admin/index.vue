<template>
  <div class="admin-page">

        <section class="new-post">
            <AppButton                 
                @click="onClick()"
                btn-style="blue">Create Post
            </AppButton>
        </section>

        <section class="existing-post">
            <h1 class="existing-post__title">Existing Post</h1>
            <PostSection isAdmin :dataPost="dataPost"></PostSection>
        </section>
  </div>
</template>



<script>
    import PostSection from "~/components/Post/PostSection";
    import AppButton from "~/components/UI/AppButton";
    export default {
        layout: 'adminLayout',
        middleware: ['retrieveToken','auth'],
        components: {
            PostSection,
            AppButton
        },
    // _________________________________________________________________

    // Superseded code - Using asyncData instaed
    // Superseded code - Using fetch and retrive data from store with getter in computed

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

    
        async fetch(context) {
            // return fetch(
            //     'http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}}
            //     )
            //     .then(res => res.json())
            //     .then(data => {
            //         context.store.dispatch('setPost', data.reverse())
            //     }
            // )
        // _____________________________________________________________
            console.log(`>>> Private .env server only ${context.$config.testPrivate}`)
            const response = await fetch(
                'http://127.0.0.1:5000/nuxtAPI/', 
                {headers: {'API-Nuxt-Key': '123#456#789'}}
            );
            const data = await response.json()
            context.store.dispatch('setPost', data.reverse());
        // _____________________________________________________________

            const responseFB = await fetch(
                'https://nuxtblogproject.firebaseio.com/post.json'
            );
            const dataFB = await responseFB.json()

            let firebaseData = [];

            for (let key in dataFB) {

                firebaseData.unshift({
                    id: key,                    
                    author: dataFB[key].author,
                    title: dataFB[key].title,
                    sampleText: dataFB[key].sample_text,
                    thumbnail: dataFB[key].thumbnail,                            
                    flaskId: dataFB[key].flaskId,                            
                })
            }
            context.store.dispatch('setFirebasePost', firebaseData);
            

        },
        computed: {
            dataPost() {
                return this.$store.getters.fetchPost
            }
        },
        methods: {
            onClick() {
                this.$router.push('/admin/new-post')
            }
        },

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