<template>
     <div class="single-post-page">
        <div class="post__background" :style="{'background-image':  `url(${dataPost.thumbnail})`}"></div>
        <section class="post">
            <h1 class="post__title">{{dataPost.title}}</h1>
            <div class="post__details">
                <div class="post__date">Last updated on {{dataPost.date}}</div>
                <div class="post__author">{{dataPost.author}}</div>   
            </div>
            <p class="post__content">
                {{dataPost.sampleText}}
            </p>
        </section>
        <section class="feedback">
            <p class="feedback__details">
                Let me know what you think about the post, send me an
                email to: <a
                href="mailto:feedback@my-awsome-domain.com">feedback@my-awsome-domain.com</a>
            </p>
        </section>
    </div>
</template>

<script>

export default {
    asyncData(context) {
        console.log(context.params);
        return fetch(
            'http://127.0.0.1:5000/nuxtAPI/', {headers: {'API-Nuxt-Key': '123#456#789'}}
            )
        .then(res =>res.json())
        .then(data => {
            
            const dataPost = data.filter(p => {
                return p.id == context.route.params['id']
                // return p.id == context.params['id']  // or you can do this <--
            })
            dataPost[0].date = new Date().toLocaleString()
            return {dataPost: dataPost[0]}
        })
        .catch(e => {
            context.error({ statusCode: 404, message: 'Post not found'})
        })
    }
}
</script>

<style scoped lang="scss">
    .single-post-page{
        padding: 3rem;
        text-align: center;
        box-sizing: border-box;
        
        height: 100%;
        
        // border: maroon dashed 2px;
        position: relative;
    }
    .post {
        width: 100%;
        

        @media (min-width: 768px) {
            width: 600px;
            margin: auto;
            // color: red;
        }

        &__background {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            min-height: 100vh;

            z-index: -1;
            opacity: .2;

            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            // border: maroon dashed 2px;
            
        }

        &__title {
            margin: 0;
        }
        &__details {
            padding: 10px;
            box-sizing: border-box;
            // border-bottom: 3px solid #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            @media (min-width: 768px) {                
                flex-direction: row;   
                color: red;         
            }
        }
        &__date, &__author {
            color: rgb(88, 88, 88);
            margin: 0 10px;
        }

        &__content {
            margin: 3rem 0;
            color: navy;
            text-align: justify;
            white-space: pre-line;
        }
    }
    .feedback {

        &__details  {

            a:link, a:visited {
                color: red;
                text-decoration: none;

                &:hover, &:active {
                    color: salmon;
                }
            }            
        }
    }
</style>