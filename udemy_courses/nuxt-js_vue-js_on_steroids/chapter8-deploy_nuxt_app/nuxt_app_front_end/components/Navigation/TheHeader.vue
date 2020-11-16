<template>
    <div class="header-container">
        <header class="header" :class="{'blue': isAdmin}">
            <app-the-side-nav-toggle @toggle="sideNaveToggle()" v-if="!isAdmin"></app-the-side-nav-toggle>
            <div class="header__logo">
                <nuxt-link title="home" to="/" class="header__link">
                    <svg class="icon icon-blog"><use xlink:href="@/static/icomoon/icomoon.svg/#icon-blog"></use></svg>
                </nuxt-link>
                <div title="flask" class="header__backend" v-show="isAdmin" v-if="!isFirebase" @click="backendToggle()">
                    <svg class="icon icon-blog"><use xlink:href="@/static/icomoon/icomoon.svg/#icon-flask"></use></svg>
                </div>
                <div title="firebase" class="header__backend" v-show="isAdmin" v-if="isFirebase" @click="backendToggle()">
                    <svg class="icon icon-blog"><use xlink:href="@/static/icomoon/icomoon.svg/#icon-firebase"></use></svg>
                </div>
            </div>
            <div class="header__spacer"></div>
            <div class="nav" :class="{'admin': isAdmin}">
                <ul class="nav__list">  
                    <li title="sign in"  v-if="!isUserLogin" @click="login()"><svg class="icon icon-blog"><use xlink:href="@/static/icomoon/icomoon.svg/#icon-sign-in"></use></svg></li>                              
                    <li title="sign out"  v-else @click="logout()"><svg  class="icon icon-blog"><use xlink:href="@/static/icomoon/icomoon.svg/#icon-sign-out"></use></svg></li>                              
                    <li class="nav__list-item"><nuxt-link to="/posts" class="nav__link">Blog</nuxt-link></li>
                    <li class="nav__list-item"><nuxt-link to="/about" class="nav__link">About</nuxt-link></li>
                    <li class="nav__list-item" v-if="isUserLogin"><nuxt-link to="/admin" class="nav__link">Admin</nuxt-link></li>
                </ul>
            </div>
        </header>
    </div>
</template>




<script>
    import TheSideNavToggle from "./TheSideNavToggle";
    export default {
        name: "TheHeader",
        props: {
            isAdmin: {
                type: Boolean,
                default: false
            },
        },
        components: {
            appTheSideNavToggle : TheSideNavToggle,
        },
        computed: {
            isFirebase() {
                return this.$store.getters.fetchSelectedBackend
            },
            isUserLogin() {
                return this.$store.getters.isUserLogin
            }
        },
        methods: {
            sideNaveToggle() {
                this.$emit('sideNavToggle');
            },
            backendToggle() {
                this.$store.dispatch('toggleBackend')
            },
            logout() {
                this.$store.dispatch('logout');
                this.$router.push('/');
            },
            login() {
                this.$router.push('/admin/auth');
            }
        },
        mounted() {
            // console.log(this.isAdmin)
        }
    }
</script>





<style lang="scss">

.header-container {
    height: 6rem;
    
}

.header {
    width: 100%;
    height: 6rem;    
    
    z-index: 100;
    position: fixed;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #000;    
    box-sizing: border-box;
    padding: 0 2rem;

    &__logo {
        margin: 0;
        font-size: 2.1rem;
        display: flex;
    }
    &__backend {
        margin-left: 2rem;
        
        svg {
            fill: yellow;
        }
    }

    &__link {
        text-decoration: none;
        color: white;
    }

    &__spacer {
        flex: 1;
    }    
}

.nav {
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
    

    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        
    }

    &__list-item {
        margin: 0 10px
    }

    &__link {
        text-decoration: none;
        color: white;

        &:hover,
        &:active,
        &.nuxt-link-active{
            color: crimson;
        }
    }

}

.icon-blog {
    fill: #fff;
    width: 2.5rem;
    height: 2.5rem;
    // border: 1px solid #fff; 
    // padding: .5rem;
    border-radius: 3px;

    &:hover,
    &:active {
        fill: crimson;
        cursor: pointer;
    }
}
.admin {
    display: block;
    
}
.blue {
    background-color: #1034a6;
}



</style>