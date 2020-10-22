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
        components: {
            PostSection,
            AppButton
        },
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
        // data() {
        //     return {
        //         dataPost: []
        //     }
        // },
        methods: {
            onClick() {
                this.$router.push('/admin/new-post')
            }
        },
        // created() {
        //     fetch('http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}})
        //     .then(res => res.json())
        //     .then(data => this.dataPost = [...data].reverse())
        // }
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