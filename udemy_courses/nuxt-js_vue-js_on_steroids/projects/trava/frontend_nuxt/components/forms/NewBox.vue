<template>
    <div class="formbox" >

        <CloseAll></CloseAll>

        <h2 class="heading-2 mb-tn">{{mainTitle}}</h2>
        <p class="formbox__text mb-sm">{{subTitle}}</p>

        <form class="formbox__content" @submit.prevent="submitForm()">

            <div class="formbox__subinput full-span">

               <input  type="text" placeholder="Enter image text" v-model="imageText" @keyup.enter="readText()"> 

               <button class="btn formbox__btn" type="button" @click="readText()">
                    <svg class="icon icon-play3">
                    <use xlink:href="@/assets/icomoon/symbol-defs.svg#icon-play3"></use>
                    </svg>
               </button>

            </div>

            <input  
                class="full-span input--file" 
                type="file" 
                placeholder="Enter image address or url"
                ref="imageFileInput"
                @change="onFileChange($event)">
            
            <button  class="btn formbox__btn mt-sm full-span" type="submit">
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
                subTitle: 'Speak it louder.',                
                imageFile: null,
                imageText: ''
                
            }
        },
        watch: {
            
            imageFile() {
                if (this.imageFile == null) return

                const acceptedImageType = ['image/gif', 'image/jpeg', 'image/png'];

                if (!acceptedImageType.includes(this.imageFile['type'])) {
                    console.log(this.$refs)
                    
                    this.$refs['imageFileInput'].value = null;
                    this.imageFile = null;
                }
            }
        },
        methods: {

            submitForm() {   
                if (this.imageFile === null || this.imageText.trim() === '') {
                    console.log('there is nothing to send')
                    return
                }   
 
                this.$store.dispatch('pictures/addPicture', this.createImagePayload())
                // .then(respons => console.log(respons))
                // .catch(err => console.log(err))
                
            },
            readText() {              
                this.$store.getters.getUtterance.text = this.imageText;
                speechSynthesis.speak(this.$store.getters.getUtterance);               
            },
            testFrams() {
                // this.$store.dispatch('pictures/addPicture', 'Hi there!')
                this.$store.dispatch('testAction')
            },
            onFileChange(e) {
                const files = e.target.files || e.dataTransfer.files


                if (!files.length) return


                this.imageFile = files[0];
                
                
            },
            createImagePayload() {
                const payload = new FormData();                

                payload.append('token', this.$store.getters.getToken)
                payload.append('imageText', this.imageText)
                payload.append('imageFile', this.imageFile)

                return payload;
            }
        },
        beforeCreate() {
            this.$store.dispatch('authUser'); 
        },
    }

</script>

<style lang="scss">

input.input--file {
    background-color: #fff !important;
    position: relative;
    color: #000;

    padding-left: 12rem;

    &::-webkit-file-upload-button,
    &::file-selector-button {
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        background-color: $color-primary-dark;
        border: none;
        cursor: pointer;
        width: 11rem;

        
    }
}
</style>