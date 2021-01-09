<template>
    <div class="formbox" >

        <CloseAll></CloseAll>

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <p class="formbox__text mb-sm">{{subTitle}}</p>
        

        <form class="formbox__content" @submit.prevent="signUp()">
            <input 
                v-model="userInfo.firstname" 
                @blur="$v.userInfo.firstname.$touch()"
                :class="{'invalid': validateField('firstname')}"
                type="text" 
                placeholder="First name">
            <!-- <small>{{$v}}</small> -->
            <input 
                v-model="userInfo.lastname" 
                @blur="$v.userInfo.lastname.$touch()"
                :class="{'invalid': validateField('lastname')}"
                type="text" 
                placeholder="Last name">
            <input 
                v-model="userInfo.email" 
                @blur="$v.userInfo.email.$touch()"
                :class="{'invalid': validateField('email')}"
                type="text" 
                placeholder="Email">
            <input 
                v-model="userInfo.password" 
                @blur="$v.userInfo.password.$touch()"
                :class="{'invalid': validateField('password')}"
                type="password" 
                placeholder="New password">
            <input 
                v-model="userInfo.dob" class="full-span" 
                @blur="$v.userInfo.dob.$touch()"
                :class="{'invalid': validateField('dob')}"
                type="date" 
                placeholder="Birthday">

            <button 
                class="btn formbox__btn full-span mt-md"
                :class="{'disabled': $v.userInfo.$invalid || checkAge()}"
                type="submit">Sign Up</button>
           
        </form>
        <!-- <small>{{$v.userInfo.password.$invalid}}</small> -->
        <!-- <small>{{$v.userInfo.$invalid}}</small> -->

        
    </div>
    
</template>

<script>
    import CloseAll from "@/components/CloseAll";
    import {required, minLength, email} from 'vuelidate/lib/validators'
    export default {
        components: {
            CloseAll
        },
        data() {
            return {
                mainTitle: 'Sign Up',
                subTitle: 'It’s quick and easy.',
                userInfo: {
                    firstname: 'Chris',
                    lastname: 'Farruga',
                    email: 'chris12aug@yahoo.com',
                    password: 'aaaaaaaaaaaaaaa',
                    dob: ''
                }
            }
        },
        validations: {
            userInfo: {
                firstname: {
                    required,
                },
                lastname: {
                    required
                },
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(6)
                },
                dob: {
                    required
                },
            }
        },
        methods: {

            signUp() {   
                
                if (this.$v.userInfo.$invalid || this.checkAge()) {
                    this.flashMessageInvalid()
                    return
                }                

                
                this.$store.dispatch('adduser', this.userInfo)
                .then(data => {

                    if(data.state === 'error') {
                        this.flashMessage.show({
                            html: data.message,
                            time: 8000,
                            status: 'warning',
                            blockClass: 'flash_massage_markup'
                        });                          
                        console.log(data)  

                    } else {
                        
                        this.flashMessage.show({
                            html: data.message,
                            time: 8000,
                            status: 'info',
                            blockClass: 'flash_massage_markup'
                        }); 

                        this.clearUserInfo();
                        this.$store.dispatch('setForm', {name: 'signInOn', action: true});
                    }
                })
                .catch(e => { 
                    console.log(e);
                })
            },
            clearUserInfo() {
                this.userInfo = {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    dob: ''
                }
            },
            validateField(field) {
                return  this.$v.userInfo[`${field}`].$invalid && 
                        this.$v.userInfo[`${field}`].$dirty

            },
            checkAge() {
                return this.userInfo.dob.split('-')[0] >= new Date().getFullYear() - 12;
            },
            flashMessagefunction(html, time, status) {
                
                this.flashMessage.show({
                    html,
                    time,
                    status,
                    blockClass: 'custom-block-class'
                });
            },
            flashMessageInvalid() {

                let markup = ``;

                if (this.userInfo.firstname.trim() === '') {
                    markup += '<li>First name is required!</li>';
                }
                if (this.userInfo.lastname.trim() === '') {
                    markup += '<li>Last name is required!</li>';
                }
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
                if (this.userInfo.dob.trim() === '') {
                    markup += '<li>Date of birth is required!</li>';
                } else if (this.checkAge() ) {
                    markup += '<li>You must be at least 13 years old to register!</li>';
                }

                markup = `<ul class="flash_massage_markup">${markup}</ul>`                

                this.flashMessagefunction(markup, 8000, 'warning')
            },
        },
    }

</script>

<style lang="scss">
    .flash_massage_markup {
        padding: 2rem;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.8;

        li {
            list-style: none;
            margin-left: 1rem;
        }
    }
</style>

