<template>
    <div class="formbox" >

        <CloseAll></CloseAll>

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <p class="formbox__text mb-sm">{{subTitle}}</p>

        <form class="formbox__content">

            <div class="formbox__subinput full-span">
               <input  type="text" placeholder="Image Name"> 
               <button class="btn formbox__btn">
                <svg class="icon icon-play3">
                <use xlink:href="@/assets/icomoon/symbol-defs.svg#icon-play3"></use>
                </svg>
               </button>
            </div>

            <input class="full-span" type="text" placeholder="Enter image address or url">
            
            <button  class="btn formbox__btn mt-sm full-span" @click="submitForm()">
                Create
            </button>
        
        </form>




        
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
                mainTitle: 'Add new frame',
                subTitle: 'Speak it louder.'
            }
        },
        methods: {

            submitForm() {                
            },
        },
        beforeCreate() {
            this.$store.dispatch('authUser'); 
        },
    }

</script>

