<template>
    <div class="textbox">
        <p class="textbox__close">&times;</p>
        <h2 class="heading-2 mb-sm">Choose Voice</h2>

        <select class="textbox__select mb-sm"
            >
            
            <option 
                v-for="voice in myPcVoices" 
                :key="`${voice.lang}${voice.name}`"
                :value="voice.lang">
                    {{voice.name}} - {{voice.lang}}
            </option>

        </select>

        <textarea rows="8" class="textbox__textarea mb-sm" placeholder="Enter text to read..."></textarea>

        <button class="btn textbox__btn" @click="testVoice()">Read Text</button>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                myPcVoices: [],
            }
        },
        methods: {
            testVoice() {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Hey'));
            }
        },
        
        mounted() {
            setTimeout(()=>{
                let myPcVoices = this.$store.getters.getVoices;

               myPcVoices.sort( (a, b) =>  {
                   if (a.lang > b.lang) {
                       return 1
                   } else {
                       return -1
                   }
               });
                this.myPcVoices = myPcVoices;
            }, 300);         
        }
    }
</script>

<style lang="scss" scoped>
    .textbox {

        width: 80vw;
        max-width: 108rem;
        min-height: 10rem;
        background-color: $color-gray-1;
        border: 1px solid #000;
        border-radius: .5rem;

        padding: 2rem;

        position: absolute;
        top: 20rem;
        left: 50%;

        display: flex;
        flex-direction: column;

        color: #fff;

        transform: translateX(-50%);

        &__close {
            align-self: flex-end;
            font-size: 2.2rem;
            cursor: pointer;

            &:hover {
               font-weight: bolder;
            }
        }

        &__textarea {
            border: none;
            border-radius: .5rem;
            font-size: 1.6rem;
            padding: 1rem;            
        }

        &__select {            
            background-color: $color-primary-dark;   
            border: 0;
            color: #fff;
            font-size: 1.2rem;
            height: 3rem;
            width: 100%;
            outline: none;

            & :active {
                outline: none;
            }
        }
    }
</style>