<template>
    <div class="formbox" >

        <CloseAll></CloseAll>

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <p class="formbox__text mb-sm">{{subTitle}}</p>

        <form class="formbox__content" @submit.prevent="updatePassword()">

            
            <input 
                v-model="password1" 
                class="full-span" 
                type="password" 
                placeholder="Enter new password">

            <input 
                v-model="password2" 
                class="full-span" 
                type="password" 
                placeholder="Re-enter new password">
        

            <button  
                
                class="full-span btn formbox__btn mb-sm mt-sm" 
                type="submit">
                Update Password
            </button>

        </form>
        <small></small>       
        
    </div>

    
    
</template>

<script>

    import CloseAll from "@/components/CloseAll";
    import { required, minLength } from "vuelidate/lib/validators";
    export default {
        components: {
            CloseAll
        },
        data() {
            return {
                mainTitle: 'Reset Password',
                subTitle: 'Keep it secret!',
                password1: '', 
                password2: ''
                
            }
        },
        validations: {
            userInfo: {

                password1: {
                    required,
                    minLength: minLength(6)
                }
            }
        },
        methods: {
            updatePassword() {

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

