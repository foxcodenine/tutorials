<template>
    <div class="header-container">
        <header class="header" :class="{'blue': isAdmin}">
            <app-the-side-nav-toggle @toggle="sideNaveToggle()"></app-the-side-nav-toggle>
            <div class="header__logo">
                <nuxt-link to="/" class="header__link">
                    <svg class="icon icon-blog"><use xlink:href="@/static/icomoon/icomoon.svg/#icon-blog"></use></svg>
                </nuxt-link>
            </div>
            <div class="header__spacer"></div>
            <div class="nav" :class="{'admin': isAdmin}">
                <ul class="nav__list">                                
                    <li class="nav__list-item"><nuxt-link to="/posts" class="nav__link">Blog</nuxt-link></li>
                    <li class="nav__list-item"><nuxt-link to="/about" class="nav__link">About</nuxt-link></li>
                    <li class="nav__list-item"><nuxt-link to="/admin" class="nav__link">Admin</nuxt-link></li>
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
            }
        },
        components: {
            appTheSideNavToggle : TheSideNavToggle,
        },
        methods: {
            sideNaveToggle() {
                console.log('eee')
                this.$emit('sideNavToggle');
            }
        },
        mounted() {
            console.log(this.isAdmin)
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
    }
}
.admin {
    display: block;
    
}
.blue {
    background-color: #1034a6;
}



</style>