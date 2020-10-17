<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post__title">Title of the Post</h1>
            <div class="post__details">
                <div class="post__date">Last updated on XXX</div>
                <div class="post__author">Written by Name</div>   
            </div>
            <p class="post__content">
                Content of the post
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

}
</script>

<style scoped lang="scss">
    .single-post-page{
        padding: 3rem;
        text-align: center;
        box-sizing: border-box;
    }
    .post {
        width: 100%;

        @media (min-width: 768px) {
            width: 600px;
            margin: auto;
            // color: red;
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