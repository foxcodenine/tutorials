<template>
    <div class="formbox" >

        <CloseAll></CloseAll>

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <p class="formbox__text mb-sm">{{subTitle}}</p>

        <form class="formbox__content" @submit.prevent="signIn()">
            <input 
                v-model="userInfo.email" 
                class="full-span" 
                type="text" 
                placeholder="Email"
                :class="{'invalid': validateField('email')}"
                @blur="$v.userInfo.email.$touch()">
            
            <input 
                v-model="userInfo.password" 
                class="full-span" 
                type="password" 
                placeholder="Password"
                :class="{'invalid': validateField('password')}"
                @blur="$v.userInfo.password.$touch()">
        

            <button  
                :class="{'disabled': $v.userInfo.$invalid}"
                class="full-span btn formbox__btn mb-sm mt-sm" 
                type="submit">
                Log In
            </button>

        </form>
        <small></small>

        <p class="formbox__text formbox__text--fp ">
            <a href="#" @click="forgotPassword()">Forgot Password?</a> &nbsp; &nbsp; 
            <a href="#" @click="resedEmail()" >Resend Email Link!</a>
        </p>
        
        
    </div>

    
    
</template>

<script>

    import CloseAll from "@/components/CloseAll";
    import { required, email, minLength } from "vuelidate/lib/validators";
    export default {
        components: {
            CloseAll
        },
        data() {
            return {
                mainTitle: 'Log In',
                subTitle: 'Hi, welcome back.',
                userInfo: {
                    email: '', 
                    password: ''
                }
            }
        },
        validations: {
            userInfo: {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(6)
                }
            }
        },
        methods: {
            signIn() {   
                if (this.$v.userInfo.$invalid) {
                    this.flashMessageInvalid()
                    return
                } 

                this.$store.dispatch('loginUser', {
                    email: this.userInfo.email,
                    password: this.userInfo.password
                })
                .then(data => {
                    if (data.state === 'error') {
                        
                        this.flashMessage.show({
                            html: data.message,
                            time: 8000,
                            status: 'warning',
                            blockClass: 'flash_massage_markup'
                        }); 

                    } 
                    else {
                        this.$store.dispatch('closeAll');

                        this.flashMessage.show({
                            html: data.message,
                            time: 8000,
                            status: 'info',
                            blockClass: 'flash_massage_markup'
                        }); 

                        const payload = {userInfo: data.userInfo, token: data.token};

                        this.$store.dispatch('userSignIn', payload);
                        
                        
                        // Fetching user picture from db
                        this.$store.dispatch('pictures/fetchUserBoxes') 
                        .then(res => {


                            if (res.length < 1 || !res) {
                                const payload_cookie = {userInfo: data.userInfo, token: data.token, userBoxes: []};
                                this.$store.dispatch('saveToCookie', payload_cookie);
                                return
                            }

                            this.$store.state.myBoxes = [...this.$store.state.myBoxes, ...res];
                            // console.log(this.$store.state.myBoxes)

                            const payload_cookie = {userInfo: data.userInfo, token: data.token, userBoxes: res};
                            this.$store.dispatch('saveToCookie', payload_cookie);


                        }) 

                    }
                    
                })
                .catch(err => {
                    console.log(err)
                })                    
                  
            },
            resedEmail() {
                this.$store.dispatch('setForm', {name: 'resendValEmailOn', action: true})
            },
            forgotPassword() {
                this.$store.dispatch('setForm', {name: 'resendPasswordOn', action: true})
            },
            flashMessageInvalid() {
                console.log('Invalid')

                let markup = ``;

                if (this.userInfo.email.trim() === '') {
                    markup += '<li>Email is required!</li>';
                } else if (this.$v.userInfo.email.$invalid) {
                    markup += '<li>Email address is invalid!</li>';
                } 


                if (this.userInfo.password.trim() === '') {
                    markup += '<li>Password is required!</li>';
                } else if (this.$v.userInfo.password.$invalid) {
                    markup += '<li>Password is too short!</li>';
                }

                const html = `<ul class="flash_massage_markup">${markup}</ul>`

                this.flashMessage.show({
                    html,
                    time: 10000,
                    status: 'warning',
                    blockClass: 'custom-block-class'
                })
            },
            validateField(field) {
                return  this.$v.userInfo[`${field}`].$invalid && 
                        this.$v.userInfo[`${field}`].$dirty

            },

        },
        mounted() {
            this.userInfo.email =  this.$store.getters.getUserInfo['email']
        }
    }

</script>

