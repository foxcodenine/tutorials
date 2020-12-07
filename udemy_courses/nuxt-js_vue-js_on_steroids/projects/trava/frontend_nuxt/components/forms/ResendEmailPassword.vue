<template>
    <div class="formbox" >

        <CloseAll></CloseAll>

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <p class="formbox__text mb-sm">{{subTitle}}</p>

        <form class="formbox__content" @submit.prevent="onSubmit()">

            
            <input 
                v-model="email" 
                class="full-span" 
                type="text" 
                placeholder="Enter your email"
                @blur="$v.email.$touch()"
                :class="{'invalid': validateField('email')}">     

            <button  
                v-if="taskSendEmail"                
                class="full-span btn formbox__btn mb-tn " 
                type="submit"
                :class="{'disabled': $v.email.$invalid}">                
                Send Email
            </button>

            <button
                v-if="taskSendPassword"                  
                class="full-span btn formbox__btn mb-tn " 
                type="submit"
                :class="{'disabled': $v.email.$invalid}">                
                Send Password
            </button>

        </form>
        <small></small>       
        
    </div>

    
    
</template>

<script>


    import CloseAll from "@/components/CloseAll";
    import { required, email } from "vuelidate/lib/validators";
    const jwt = require('jsonwebtoken');
    
    export default {
        components: {
            CloseAll
        },
        props: ['mainTitle', 'subTitle', 'taskSendEmail', 'taskSendPassword'],
        data() {
            return {
                email: '',                
            }
        },
        validations: {

            email: {
                required,
                email
            }
            
        },
        methods: {
            onSubmit() {
                if (this.$v.email.$invalid) {
                    this.flashMessageInvalid();
                    return
                } 
                if (this.taskSendEmail) {
                    this.sendEmail();
                }
                if (this.taskSendPassword) {
                    this.sendPassword();
                    return
                }
            },
            jwtCreate(email) {
                const token = jwt.sign({                    
                    email
                }, `${this.$config.BESK}`, { expiresIn: 600 });
                return token;
            },
            sendPassword() {
                const token = this.jwtCreate(this.email);

                this.$store.dispatch('resetPassword', token )
                .then(data => {
                    this.myThenFunction(data);
                })
                .catch(err => console.log(err))


            },
            sendEmail() {                    
                this.$store.dispatch('resendEmail', this.email)
                .then(data => {
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

                    this.flashMessage.show({
                        html: data.message,
                        time: 8000,
                        status: 'info',
                        blockClass: 'flash_massage_markup'
                    });
                }
            },

            flashMessageInvalid() {                

                let markup = ``;

                // statments
                if (this.email.trim() === '') {
                    markup += '<li>Email is required!</li>';
                } else if (this.$v.email.$invalid) {
                    markup += '<li>Email address is invalid!</li>';
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
                return  this.$v[`${field}`].$invalid && 
                        this.$v[`${field}`].$dirty

            },
        },
        mounted() {
        }
    }

</script>

