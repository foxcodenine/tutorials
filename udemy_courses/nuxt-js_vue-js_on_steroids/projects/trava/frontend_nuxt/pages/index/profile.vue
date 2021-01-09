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

                <div class="profile__links">
                    <a href="#" @click="changePassword()">Change Password!</a>
                    <a href="#" @click="deleteAccount()">Delete Account!</a>
                </div>

        </div>
       
        <button 
 
            class="btn profile__btn--2 mt-sm"
            :class="{'disabled': !profileEdited}"
            @click="updateProfile()">Save Updates</button>
       
    </div>
    <FlashMessage :position="'right top'"></FlashMessage>
</div>

</template>

<script>
import CloseAll from "@/components/CloseAll";
import { ProfileField } from "@/components/ProfileField";
export default {
    data() {
        return {
            userInfo: {
                firstname: '',
                lastname: '', 
                email: '',               
                dob: '',
                signup: '',
                
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
        },
        deleteAccount() {
            this.$router.push('/')
            this.$store.dispatch('setForm', {name: 'deleteAccountOn', action: true})
        },
        updateProfile() {
            if (!this.profileEdited) {
                return;
            }
            let payload = {...this.userInfo};


            this.$store.dispatch('updateProfile', {
                userInfo: payload,
                token: this.$store.getters.getToken
            })
            .then( data => {   
                this.myThenFunction(data);         
               
            })
            .catch(err => console.log(err))
        },
        myThenFunction(data) {
            if (data.state === 'error') {

                this.flashMessage.show({
                    html: data.message,
                    time: 8000,
                    status: 'warning',
                    blockClass: 'flash_massage_markup'
                }); 

            } else {
                this.$store.dispatch('closeAll');
                this.$store.commit('setUserInfo', data.userInfo);  
                this.$store.dispatch('saveToCookie', {token: data.token, userInfo: data.userInfo})              
                this.profileEdited = false;
                this.updateData(); 

                this.flashMessage.show({
                    html: data.message,
                    time: 8000,
                    status: 'info',
                    blockClass: 'flash_massage_markup'
                });
            }
        },
        updateData() {
            
            const d = this.$store.getters.getUserInfo;
            this.$set(this.userInfo, 'firstname', d.firstname)
            this.$set(this.userInfo, 'lastname', d.lastname)
            this.$set(this.userInfo, 'email', d.email)
            this.$set(this.userInfo, 'dob', d.dob.split(' ').splice(0,4).join(' '))
            this.$set(this.userInfo, 'signup', d.signup.split(' ').splice(0,4).join(' '))

        },
        changePassword() {
            this.$router.replace('/')
            this.$store.dispatch('closeAll');
            this.$store.dispatch('setForm', {name: 'resetPasswordOn', action: true});
        }
    },
    beforeCreate() {       

        // if (!this.$store.getters.getIsUserLogedIn) {
        //     this.$router.replace('/');
        //     this.$store.dispatch('authUser');
        // }
    },
    async created() {
        await this.$store.dispatch('autoLogin');   //<-
        this.$store.dispatch('authUser');   //<- 

        this.updateData();



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

    position: absolute;
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


    &__links {
        grid-column: 1 / -1 ;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem 5rem ;
        border-top: 1px solid #fff;  
        margin-top: 1.5rem;
        
        

        a:link, a:visited {
            color: #fff;
            font-size: 1.8rem;
            font-family: 'Quicksand', sans-serif;
            text-decoration:  none;
            padding-top: 1.8rem;

            &:hover {
                text-decoration: underline;
            }
            &:focus {
                outline: none;
            }
        }
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