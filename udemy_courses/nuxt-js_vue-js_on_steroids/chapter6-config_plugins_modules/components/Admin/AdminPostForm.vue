<template>
    <form class="new-post__form" @submit.prevent="onSave()">
            <app-controll-input v-model="editPost.author">Author Name</app-controll-input>
            <app-controll-input v-model="editPost.title">Title</app-controll-input>
            <app-controll-input v-model="editPost.thumbnail">Thumbnail Link</app-controll-input>
            <app-controll-input
                    control-type="textarea"
                    v-model="editPost.sample_text">Content</app-controll-input>

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
            flaskId: '',
            firebaseId: '',
            postMethod: this.updatePost ? 'PUT' : 'POST',
            postURL: this.updatePost ? `http://127.0.0.1:5000/nuxtAPI/update/${this.$route.params.postId}/` : 'http://127.0.0.1:5000/nuxtAPI/',
            editPost: this.loadedPost ? {...this.loadedPost} : {
                author: '',
                title: '',
                thumbnail: '',
                sample_text: '',
                flaskId: ''
            }
        }
    },
    methods: {
        onCancel() {
            // Navigate back
            
            // console.log(this.$route.params.postId)

            this.$router.push('/admin')
        },
        fetchIds() {     

            if(this.$store.getters.fetchSelectedBackend) {
                this.firebaseId = this.$route.params.postId;         

                this.flaskId = this.$store.getters.fetchFlaskPost.filter(post => {                    
                    return post.thumbnail === this.loadedPost.thumbnail
                })[0].id; 

            } else {                

                this.flaskId = this.$route.params.postId;
                let firebaseId = this.$store.getters.fetchFirebasePost.filter(post => {
                    return post.thumbnail === this.loadedPost.thumbnail
                })[0];                

                if (firebaseId) {
                    this.firebaseId = firebaseId.id;
                    
                } else {                    
                    this.firebaseId = null;                    
                }               
            }            
        },
        onSave() {
            // _________________________________________________________
            // // Flask backend  -  Save or Updating the post 

            // _________________________________________________________

            if (this.postMethod !== 'POST') {
                this.fetchIds();
            }            

            // _________________________________________________________
            // fetching the data from this.editPost and 
            // set in in to an object to send it with fetch post or put
            
            const data = {
                'title': this.editPost.title,
                'author': this.editPost.author,
                'sample_text': this.editPost.sample_text,
                'thumbnail': this.editPost.thumbnail
            }


            fetch(this.updatePost ? `http://127.0.0.1:5000/nuxtAPI/update/${this.flaskId}/` : 'http://127.0.0.1:5000/nuxtAPI/', {
                method: this.postMethod,
                // mode: 'no-cors',                

                body: JSON.stringify(data),
                
                headers: {
                    'API-Nuxt-Key': '123#456#789',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(res => res.json())
            .then(data => {                
                
                this.editPost.flaskId = data.id;

            })
            .catch((error) => {
                console.error('Error:', error);
            })
            // _________________________________________________________ 
            // FireBase backend 

            if(this.postMethod === 'POST' || this.firebaseId === null) {

                setTimeout(()=>{

                    fetch('https://nuxtblogproject.firebaseio.com/post.json', {
                        body: JSON.stringify(this.editPost),
                        method: 'POST'
                    })
                    .then(result => console.log(result))
                    .catch(e => console.log(e))
                    }, 900
                )
            } else if (this.postMethod === 'PUT') {
                fetch(
                    `https://nuxtblogproject.firebaseio.com/post/${this.firebaseId}.json`,
                    {
                        method: 'PUT',
                        body: JSON.stringify(this.editPost),
                    }
                )
            }

            // _________________________________________________________ 

            // redirecting to admin page after half a sec
            setTimeout(() => this.$router.push('/admin'), 1000);                   
        },
        
        onDelete() {
            // Delete a post 

            if (confirm("Press 'OK' to delete post, else press 'Cancel'")) {
                // Delete from flask
                this.fetchIds();

                fetch(`http://127.0.0.1:5000/nuxtAPI/update/${this.flaskId}/`, {
                    method: 'DELETE',
                    headers: {'API-Nuxt-Key': '123#456#789', 'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS'}
                })
                .catch(e => {
                    console.log('error pos1 >>', e)
                }) 
                // _____________________________________________________
                // Delete from firebase
                
                fetch(`https://nuxtblogproject.firebaseio.com/post/${this.firebaseId}.json`, {
                    method: 'DELETE'
                })
                .catch(e => {
                    console.log('error pos2 >>', e)
                })
                
                setTimeout(() => this.$router.push('/admin'), 500);
            };
        }
    },
    mounted() {
        console.log(this.loadedPost)
    }
}
</script>