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
                type="submit">Save</AppButton>

            <AppButton
                type="button"
                style="margin-left: 10px"
                btn-style="cancel"
                @click="onCancel">Cancel</AppButton>
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
        }
    },
    data() {
        return {
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
            this.$router.push('/admin')
        },
        onSave() {
            // Save the post
            console.log(this.editPost)

            const data = {
                'title': this.editPost.title,
                'author': this.editPost.author,
                'sample_text': this.editPost.content,
                'thumbnail': this.editPost.thumbnailLink
            }
            console.log('>>',JSON.stringify(data))

            fetch('http://127.0.0.1:5000/nuxtAPI/', {
                method: 'POST',
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

            this.editPost = {
                author: '',
                title: '',
                thumbnailLink: '',
                content: ''
            }
            this.$router.push('/admin')
        }
    },
    mounted() {
        console.log(this.loadedPost)
    }
}
</script>