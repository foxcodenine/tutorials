<template>
    <div class="blur">
        <div class="textbox" :class="{'active': this.$store.getters.getTextBoxOn}">

            <p class="textbox__reload"
            @click="reload()"
            >&#x21bb;</p>

            <h2 class="heading-2 mb-sm">{{errorMessage}}</h2>

            <div class="buttons" style="text-align: center;">
                <button class="btn" @click="$router.push('/')">Home</button>
                <button class="btn" @click="reload()">Refresh</button>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        props: {            
            errorMessage: {
                type: String,
                required: false
            }
        },
        data() {
            return {
                myPcVoices: [],
                myText: '',
                selectedVoice: 'English (Great Britain)'
            }
        },
        methods: {
            reload() {
                this.$store.dispatch('setNoBrowserSupport', false);
                setTimeout(()=> {
                    location.reload();
                },700)
            },
        },   
    }

</script>

<style lang="scss" scoped>
    .blur {

        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba( #fff, .2);
        z-index: 10;
        backdrop-filter: blur(4px);
    }


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

        transform: translate(-50%, -20px);

        transition: all .5s ease-in-out;
        
        &__reload{
            align-self: flex-end;
            font-size: 2.2rem;
            cursor: pointer;

            &:hover {
               font-weight: bolder;
            }
        }

        h2 {
            width: 100%;
            text-align: center;
        }
    }

</style>