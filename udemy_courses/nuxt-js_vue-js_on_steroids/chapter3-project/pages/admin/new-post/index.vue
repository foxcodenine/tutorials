<template>
  <div class="admin-new-post-page">
      <section class="new-post">
          <AdminPostForm></AdminPostForm>
      </section>
  </div>
</template>

<script>

import AdminPostForm from "~/components/Admin/AdminPostForm";


export default {
    layout: 'adminLayout',
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