<template>
  <div class="admin-new-post-page">
      <section class="new-post">
          <AdminPostForm @addingPost="addPost"></AdminPostForm>
      </section>
  </div>
</template>

<script>

import AdminPostForm from "~/components/Admin/AdminPostForm";
import axios from 'axios';

export default {
    layout: 'adminLayout',
    components: {
        AdminPostForm,
    },
    methods: {        
        addPost(postData) {

            axios.post('https://nuxtblogproject.firebaseio.com/post.json', postData)
            .then(result => console.log(result))
            .catch(e => console.log(e))
        }
    }
}

</script>

<style scoped lang="scss">

.new-post {
    width: 90%;
    margin: 2rem auto;

    @media (min-width: 769px) {
        width: 50rem;
    }
}

</style>