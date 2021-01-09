<template>
    <nuxt-link class="post__link" :to="postLink" >
        <article class="post__preview">
            <div class="post__thumbnail" :style="{backgroundImage: `url(${thumbnail})`}"></div>
            <div class="post__content">
                <h1 class="post__title">{{title}}</h1>
                <p class="post__text-sample">{{sampleText}}</p>
            </div>
        </article>
    </nuxt-link>
</template>



<script >

    export default {
        props: {
            id: {
                // type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            sampleText: {
                type: String,
                required: true
            },
            thumbnail: {
                type: String,
                required: true
            },
            isAdmin: {
              type: Boolean,
              required: true
            }            
        },
        computed: {
          postLink() {
            return this.isAdmin ? `/admin/${this.id}`  : `/posts/${this.id}`
          }
        }
    }

</script>



<style lang="scss" scoped>

  .post {   

      

    a {
      text-decoration: none;
      color: black;
      

}

    &__link {
      margin-bottom: 2rem;
    //   display: inline-block;
      
    //   border: red 2px dashed;

    }

    &__preview {
      border: 1px solid #ccc;
      box-shadow: 0 2px 2px #ccc;
      background-color: white;
      width: 100%;

      @media (min-width: 750px) {
        width: 350px;
        margin: 10px;
      }
    }

    &__thumbnail {
      width: 100%;
      height: 200px;
      background-position: center;
      background-size: cover;      


      
    }

    &__content {
      padding: 10px;
      text-align: center;
      // border: 1px red dashed;

      &:hover, &:active {
        background-color: #ccc;
      }
      
    }


    &__title {
        height: 100px;
        overflow: hidden;
    }
    &__text-sample {
        height: 200px;
        overflow: hidden;
    }    
  }
</style>