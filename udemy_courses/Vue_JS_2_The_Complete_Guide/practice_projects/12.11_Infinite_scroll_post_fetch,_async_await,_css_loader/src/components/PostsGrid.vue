<template>
    <div id="post-container">

        <app-post
            v-for="(post, index ) in posts"
            v-bind:key="index"
            v-bind:post="post"

            
        ></app-post>
    </div>


</template>






<script>
    import Post from './Post'

    export default {
        data: function() {
            return {
                
            }
        },
        components: {
            AppPost: Post
        },
        props: ['posts', 'term'],

        watch: {
            term() {
                if (this.term.trim() !== '') {

                    let newPost = [];
                    let postLength = 0;

                    this.posts.forEach((post, index) => {

                        postLength++;

                        const postTitle = post.title.toUpperCase();
                        const postBody = post.body.toUpperCase();
                        
                        

                        if (postTitle.includes(this.term) || postBody.includes(this.term)){
                            
                            newPost.push(post);
                        } 
                    });
                    this.posts.splice(0, postLength, ...newPost);
                }
            }
        }
        
    }
</script>

