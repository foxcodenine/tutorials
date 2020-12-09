<template>
<div class="blur">
    <div class="profile">
        <CloseAll   />
        <h2 class="heading-1 mb-tn">Profile</h2>        

        <div class="profile__grid">

            <ProfileField 
                v-for="(value, key, index) in userInfo" 
                :key="index" 
                :fieldKey="key"
                :fieldValue="value"
                @fieldChange="updateField($event, key)"/> 

        </div>

        <p class="formbox__text formbox__text--fp mt-sm" 
            style=" border-bottom: 1px #fff solid; 
                    align-self: auto; 
                    padding-bottom: 2rem;
                    display: flex;
                    justify-content: flex-start;                    
                    font-size: 1.6rem;">

            <a href="#" style="color: #fff;">Change Password!</a>
        </p>


        
        <button 
 
            class="btn profile__btn--2 mt-sm"
            :class="{'disabled': !profileEdited}">Save Updates</button>

       
    </div>
</div>

</template>

<script>
import CloseAll from "@/components/CloseAll";
import { ProfileField } from "@/components/ProfileField";
export default {
    data() {
        return {
            userInfo: {
                fistname: 'Christopher',
                lastname: 'Farrugia', 
                email: 'chris12agu@yahoo.com',               
                'date of birth': '12/08/1984',
                'registerd on': '01/12/2020',
                
            },
            profileEdited: false
        }
    },
    components: {
        ProfileField,
        CloseAll
    },
    methods: {
        updateField(value, key) {
            this.profileEdited = true;
            this.userInfo[key] = value;
        }
    },
    beforeCreate() {
        if (!this.$store.getters.getIsUserLogedIn) {
            this.$router.replace('/');
        }
    },
    created() {
        const d = this.$store.getters.getUserInfo;
        this.userInfo.fistname = d.firstname;
        this.userInfo.lastname = d.lastname;
        this.userInfo.email = d.email;
        this.userInfo['date of birth'] = d.dob.split(' ').splice(0,4).join(' ');
        this.userInfo['registerd on'] = d.signup.split(' ').splice(0,4).join(' ');

        // console.log(typeof d.dob);
    }
    
}
</script>

<style lang="scss">
    .blur {
        
        position: absolute ;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba( #fff, .5);
        z-index: 10;
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        -ms-backdrop-filter: blur(4px);
        -moz-backdrop-filter: blur(4px);        
    }

.profile {
    width: 80vw;
    min-width: 50rem;
    max-width: 50rem;
    min-height: 10rem;
    background-color: $color-gray-1;
    border: 1px solid #000;
    border-radius: .5rem;


    padding: 2rem;

    position: fixed;
    top: 10rem;
    left: 50%;

    display: flex;
    flex-direction: column;

    color: #fff;

    transform: translate(-50%, -20px);

    transition: all .5s ease-in-out;  

    .heading-1 {
        font-size: 2.5rem;
        border-bottom: 1px #fff solid;
        padding-bottom: 1rem;
    }

    &__grid {
        
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, minmax(20rem, 1fr));
        grid-gap: 1rem 5rem ;
        padding-bottom: 1.5rem;
        border-bottom: 1px #fff solid;
        grid-auto-rows: 6rem;
    }

    &__field {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:nth-child(3) {
            grid-column: 1 / -1;
        }
    }

    &__text {
        font-family: 'Quicksand', sans-serif;
        font-size: 1.8rem;
        line-height: 1.6;

        small {
            text-transform: uppercase;
            font-size: 1.1rem;
           
        }
        
    }
    &__btn--2 {
        align-self: center;
    }

    &__btn--1 {
        min-width: 0rem;
        padding: 1rem .5rem .5rem .5rem;
        background: none;
        align-self: flex-end;

        svg {
            width: 1.7rem;
            height: 1.7rem;
            fill: rgba(#fff, .2);
            transition: .1s all;
            
        }
        &:hover svg {
            fill: #fff;
        }
        &:active{
            
            background: none;
            box-shadow: none;
            svg {
                fill: $color-primary-dark;
            }
        }

    }
    &__confirm {
        cursor: pointer;
        color: rgba(#fff, .2);
        padding: 3rem 0 0 0;
        
        font-size: 2rem;
        width: 35%;
        text-align: right;
        
        
        span {

            display: inline-block;
            transition: all .1s;

            &:hover {
                color: #fff;
            }

            &.yes:active {
                color: $color-primary-dark;
            }
            &.no:active {
                color: crimson;
            }
        }


    }
    
    
}
</style>