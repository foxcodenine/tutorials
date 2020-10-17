<template>
  <div class="admin-new-post-page">
      <section class="new-post">
          <form class="new-post__form" @submit.prevent="onSave()">
                <app-controll-input v-model="editPost.author">Author Name</app-controll-input>
                <app-controll-input v-model="editPost.title">Title</app-controll-input>
                <app-controll-input v-model="editPost.thumbnailLink">Thumbnail Link</app-controll-input>
                <app-controll-input
                        control-type="textarea"
                        v-model="editPost.content">Content</app-controll-input>

                <AppButton type="submit">Save</AppButton>

                <AppButton
                    type="button"
                    style="margin-left: 10px"
                    btn-style="cancel"
                    @click="onCancel">Cancel</AppButton>
          </form>
      </section>
  </div>
</template>

<script>

import AppButton from "~/components/UI/AppButton";
import AppControllInput from "~/components/UI/AppControllInput";

export default {
    components: {
        AppButton,
        AppControllInput
    },
    data() {
        return {
            editPost: {
                author: '',
                title: '',
                thumbnailLink: '',
                content: ''
            }
        }
    },
    methods: {
        onCancel() {
            // Navigate back
            this.$router.push('/admin')
        },
        onSave() {
            // Save the post
            console.log(this.editPost)

            this.editPost = {
                author: '',
                title: '',
                thumbnailLink: '',
                content: ''
            }
        }
    }
}

</script>

<style>

</style>