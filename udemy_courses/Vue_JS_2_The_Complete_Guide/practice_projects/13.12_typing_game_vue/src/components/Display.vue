<template>
  <div class="display">
            
        <div class="display__title">
            <svg class="display__icon">
                <use xlink:href="../../img/icons/iconmoon.svg#icon-emoji-happy"></use>                
            </svg>
            Speed Typer
            <svg class="display__icon">
                <use xlink:href="../../img/icons/iconmoon.svg#icon-emoji-sad"></use>                
            </svg>
        </div>

        <small class="display__small">
            <span class="display__time">Time left: {{time}}s</span>
            <span>Type the following:</span>
            <span class="display__score">Score: {{ score }}</span>
        </small>

        <h1 id="word" lass="display__word">{{ words[0] }}</h1>
        <input ref="input" v-model="word" type="text" class="display__input" placeholder="Type the word here..." :class="{'incorrect': !letterCorrect}">
  </div>
</template>

<script>

    export default {
        props: ['words', 'score', 'time'],
        data() {
            return {
                word: '',
                letterCorrect: true,
            }
        },
        watch: {
            word() {
                if (this.word === this.words[0]) {
                    console.log(this.word, this.words[0]);
                    this.word = '';
                    this.$emit('correctWord');
                }

                const letterIndex = this.word.length - 1;

                if (this.word[letterIndex] !== this.words[0][letterIndex]){
                    this.letterCorrect = false;
                    const  audio = new Audio('../../audio/0494.wav');
                    audio.play();
                } else {
                    this.letterCorrect = true;
                }
            }
        },
        computed: {

        },
        methods: {
            focusInput() {
                this.$refs.input.focus();
            }
        },
        mounted() {
            this.focusInput();
        }
    }

</script>

<style lang="scss">
    .display{
        width: 50rem;
        min-height: 25rem;
        border-radius: .3rem;
        background-color: var(--col-secondary);
        color: var(--col-display-text);

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: relative;

        &__title {
            font-size: 2.5rem;
            font-weight: 500;
            
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90%;
            padding: .7rem;
            background-color: rgba(0,0,0, .3);
            border-radius: .3rem;
            margin: 2rem 0;
            
        }
        &__icon {
            width: 2rem;
            height: 2rem;
            fill: var(--col-display-text);
            margin: 0 2rem;
        }

        &__small{
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            
        }
        &__time {
                position: absolute;
                left: 0; 
            }
        &__score {
                position: absolute;
                right: 0; 
            }

        &__input {
            border: 0;
            border-radius: .3rem;
            font-size: 1.4rem;
            width: 30rem;
            padding: 1.2rem 2rem;
            margin-top: 0rem;
            position: absolute;
            bottom: 2.5rem;
            text-align: center;
           

            &:focus, &:active {
                border: none;
                outline: none;
            }
        }
    }
    .incorrect {
        color: crimson;
    }
</style>