<template>
  <div class="sidenav__container">
      <!-- <p>Display test</p> -->
    <div 
        class="sidenav__backdrop"
        v-if="show"
        @click="$emit('close')">               
    </div>

    <transition name="slide-side">
        <div 
            class="sidenav__nav"
            v-if="show">

            <ul class="sidenav__list" @click="$emit('close')">
                <li class="sidenav__list-item"><nuxt-link to="/posts" class="sidenav__link">Blog</nuxt-link></li>
                <li class="sidenav__list-item"><nuxt-link to="/about" class="sidenav__link">About</nuxt-link></li>
                <li class="sidenav__list-item"><nuxt-link to="/admin" class="sidenav__link">Admin</nuxt-link></li>
            </ul>

        </div>
    </transition>

  </div>
</template>



<script>
    export default {
        name: "TheSidenav",
        props: {
            show: {
                type: Boolean,
                default: false
            }
        }
    };
</script>



<style lang="scss">
    .sidenav {

        &__container {
            height: 100%;
            width: 100%;
        }

        &__backdrop {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1000;
            position: fixed;
            top: 0;
            left: 0;
        }

        &__nav {
            height: 100%;
            width: 300px;
            background-color: white;
            z-index: 10000;
            position: fixed;
            top: 0;
            left: 0;
            box-sizing: border-box;
            padding: 30px;
        }

        &__list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        &__list-item {
            margin: 20px 0;
            // color: palevioletred;


        }
        &__link {
            text-decoration: none;
            color: black;
            font-size: 2.4rem;
            cursor: pointer;


            &:hover, &:active {
                color: palevioletred
            }              
        }
    }


    .slide-side-enter-active,
    .slide-side-leave-active {
    transition: all .5s ease-out;
    }

    .slide-side-enter,
    .slide-side-leave-to {
    transform: translateX(-100%);
    }

</style>