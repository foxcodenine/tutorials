<template>
    <div class="formbox" >

        <CloseAll></CloseAll>

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <p class="formbox__text mb-sm">{{subTitle}}</p>

        <form class="formbox__content">
            <input class="full-span" type="email" placeholder="Email">
            <input class="full-span" type="password" placeholder="Password">
        

            <button  class="full-span btn formbox__btn mb-sm mt-sm" @click="submitForm()">
                Log In
            </button>

        </form>

        <p class="formbox__text formbox__text--fp ">Forgot Password?</p>


        
    </div>

    
    
</template>

<script>
    import CloseAll from "@/components/CloseAll";
    export default {
        components: {
            CloseAll
        },
        data() {
            return {
                mainTitle: 'Log In',
                subTitle: 'Hi, welcome back.'
            }
        },
        methods: {
            submitForm() {                
            },
        },
    }

</script>

