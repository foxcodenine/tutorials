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
                placeholder="Enter your email">     

            <button                  
                class="full-span btn formbox__btn mb-tn " 
                type="submit">
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
                mainTitle: 'Recover Password',
                subTitle: 'We have you coved!',
                email: '',
                
            }
        },
        validations: {
            userInfo: {

                email: {
                    required,
                    email
                }
            }
        },
        methods: {
            sendEmail() {

            },

            flashMessageInvalid() {                

                let markup = ``;

                // statments

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

        }
    }

</script>

