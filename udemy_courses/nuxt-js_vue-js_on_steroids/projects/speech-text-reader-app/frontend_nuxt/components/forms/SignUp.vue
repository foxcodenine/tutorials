<template>
    <div class="formbox" >

        <CloseAll></CloseAll>

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <p class="formbox__text mb-sm">{{subTitle}}</p>

        <div class="formbox__content">
            <input type="text" placeholder="First name">
            <input type="text" placeholder="Last name">
            <input type="email" placeholder="Email">
            <input type="password" placeholder="New password">
            <input class="full-span" type="date" placeholder="Birthday">
        </div>

        <button 
            class="btn formbox__btn" 
            @click="submitForm()">Sign Up</button>
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
                mainTitle: 'Sign Up',
                subTitle: 'It’s quick and easy.'
            }
        },
        methods: {
            submitForm() {                
            },
        },
    }

</script>

