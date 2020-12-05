<template>
    <div class="formbox" >

        <CloseAll></CloseAll>

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <p class="formbox__text mb-sm">{{subTitle}}</p>

        <form class="formbox__content" @submit.prevent="sendEmail()">

            
            <input 
                v-model="email" 
                class="full-span" 
                type="text" 
                placeholder="Enter your email"
                @blur="$v.email.$touch()"
                :class="{'invalid': validateField('email')}">     

            <button                  
                class="full-span btn formbox__btn mb-tn " 
                type="submit"
                :class="{'disabled': $v.email.$invalid}">                
                Send
            </button>

        </form>
        <small></small>       
        
    </div>

    
    
</template>

<script>

    import CloseAll from "@/components/CloseAll";
    import { required, email } from "vuelidate/lib/validators";
    export default {
        components: {
            CloseAll
        },
        data() {
            return {
                mainTitle: 'Send Validation Email',
                subTitle: 'Make it quick!',
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
            sendEmail() {
                if (this.$v.email.$invalid) {
                    this.flashMessageInvalid()
                    return
                } 
                    
                this.$store.dispatch('resendEmail', this.email)
                .then(data => {
                    if (data.state === 'error') {

                        this.flashMessage.show({
                            message: data.message,
                            time: 8000,
                            status: 'warning',
                            blockClass: 'flash_massage_markup'
                        }); 
                    } else {
                        this.$store.dispatch('closeAll');
                        
                        this.flashMessage.show({
                            message: data.message,
                            time: 8000,
                            status: 'info',
                            blockClass: 'flash_massage_markup'
                        });
                    }
                })
                .catch(err => console.log(err))

                
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

