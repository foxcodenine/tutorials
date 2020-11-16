<template>
  <div class="admin-new-post-page">
      <section class="new-post">
          <AdminPostForm></AdminPostForm>
          <br>
          <small>https://thumbs.dreamstime.com/z/tv-test-image-card-rainbow-multi-color-bars-geometric-signals-retro-hardware-s-minimal-pop-art-print-suitable-89603635.jpg</small>
          <br><br>     
          <small>https://i.ytimg.com/vi/FatJUqlTqr4/maxresdefault.jpg</small>
      </section>
      
  </div>
</template>

<script>

import AdminPostForm from "~/components/Admin/AdminPostForm";
import axios from 'axios';

export default {
    layout: 'adminLayout',
    middleware: ['retrieveToken','auth'],
    components: {
        AdminPostForm,
    },
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