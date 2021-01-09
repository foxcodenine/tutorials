<template>
    <form class="new-post__form" @submit.prevent="onSave()">
            <app-controll-input v-model="editPost.author">Author Name</app-controll-input>
            <app-controll-input v-model="editPost.title">Title</app-controll-input>
            <app-controll-input v-model="editPost.thumbnailLink">Thumbnail Link</app-controll-input>
            <app-controll-input
                    control-type="textarea"
                    v-model="editPost.content">Content</app-controll-input>

            <AppButton 
                btn-style="blue"
                type="submit">{{updatePost ? 'Update' : 'Save'}}</AppButton>
            
            <AppButton
                type="button"
                style="margin-left: 10px"
                btn-style="cancel"
                @click="onCancel">Cancel</AppButton>
            
            <AppButton
                v-if="updatePost"
                type="button"
                style="margin-left: 10px"
                btn-style="cancel"
                @click="onDelete">Delete</AppButton>

            
    </form>
</template>


<script>

import AppButton from "~/components/UI/AppButton";
import AppControllInput from "~/components/UI/AppControllInput";

export default {
    components: {
        AppButton,
        AppControllInput
        
    },
    props: {
        loadedPost: {
            type: Object,
            required: false
        },
        updatePost: {
            type: Boolean,
            default: false
        }
        
    },
    data() {
        return {
            postMethod: this.updatePost ? 'PUT' : 'POST',
            postURL: this.updatePost ? `http://127.0.0.1:5000/nuxtAPI/update/${this.$route.params.postId}/` : 'http://127.0.0.1:5000/nuxtAPI/',
            editPost: this.loadedPost ? {...this.loadedPost} : {
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
            console.log(this.$route.params.postId)

            this.$router.push('/admin')
        },
        onSave() {
            // _________________________________________________________
            // Save or Updating the post 

            // fetching the data from this.editPost and 
            // set in in to an object to send it with fetch post or put
            const data = {
                'title': this.editPost.title,
                'author': this.editPost.author,
                'sample_text': this.editPost.content,
                'thumbnail': this.editPost.thumbnailLink
            }


            fetch(this.postURL, {
                method: this.postMethod,
                // mode: 'no-cors',                

                body: JSON.stringify(data),

                
                headers: {
                    'API-Nuxt-Key': '123#456#789',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch((error) => {
                console.error('Error:', error);
            })

            // redirecting to admin page after half a sec
            setTimeout(() => this.$router.push('/admin'), 300);
            // _________________________________________________________          
        },
        
        onDelete() {
            // Delete a post 

            if (confirm("Press 'OK' to delete post, else press 'Cancel'")) {

                fetch(this.postURL, {
                    method: 'DELETE',
                    headers: {'API-Nuxt-Key': '123#456#789', 'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS'}
                })
                .catch(e => {
                    console.log('error >>', e)
                })               
                
                setTimeout(() => this.$router.push('/admin'), 300);
            };
        }
    },
    mounted() {
        console.log(this.loadedPost)
    }
}
</script>