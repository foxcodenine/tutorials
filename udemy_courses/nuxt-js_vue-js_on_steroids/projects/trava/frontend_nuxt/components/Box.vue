<template>
  <div class="box" @click="boxSelected($event)">
      <!-- <input class="box__check" type="checkbox" v-if="item.image.length > 50"> -->

    <label class="check__container" v-if="item.image.length > 50" >
        <input type="checkbox" class="check__box" @click="deleteBox = !deleteBox">
        <span class="check__mark"></span>
    </label>

      <img :src="getImgUrl" :alt="item.text">
      <p>{{item.text}}</p>
  </div>
</template>

<script>

export default {
    props: ['item'],
    data() {
        return {
            deleteBox: false
        }
    },
    watch: {
        deleteBox() {
            if (this.deleteBox) {
                this.$store.commit('addBoxToDelete', this.item.image);
            } else {
                this.$store.commit('removeBoxToDelete', this.item.image);
            }
            // console.log(this.$store.state.boxToDelete);
        }
    },
    computed: {
        getImgUrl() {
            if (this.item.image.length > 50) {
                return this.item.image
            }
            return require(`@/assets/img/${this.item.image.split('/')[2]}`)
        }
    },
    methods: {
        boxSelected(e) {

            if (
                e.target.classList.value === "check__mark" || e.target.classList.value === "check__box"
            ) {
                return
            }
            console.log(e.target.classList)
            
            e.target.parentElement.classList.add('active');

            setTimeout(() => {
                e.target.parentElement.classList.remove('active');
            }, 800);


            this.$store.getters.getUtterance.text = this.item.text;
        
            speechSynthesis.speak(this.$store.getters.getUtterance);
        },
    }
}
</script>

<style lang="scss" scoped>
    .box {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 27rem;
        overflow: hidden;
        background-color: $color-primary-dark;
        border-radius: 1rem;
        position: relative;

        img {
            object-fit: cover;
            height: 20rem;
        }

        p {
            align-self: center;
            text-align: center;
            padding: 1rem;
            font-size: 2rem;
            color: #fff;
            font-family: 'Quicksand','Source Sans Pro';
            text-transform: uppercase;
            letter-spacing: 1px;
            
        }
    }
    .active {
        box-shadow: 0 0 1.5rem .5rem $color-primary-dark !important;

    }
    
.check{
    &__container {
        position: absolute;
        right: 1rem;
        top: 1rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        height: 1rem;
        width: 1rem;
        padding: 1rem;
        background: #fff;

    }
    &__box {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        
    }
    &__mark{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    /* On mouse-over, add a grey background color */
    &__container:hover &__box ~ &__mark {
        background-color: #ccc;
    }
    /* When the checkbox is checked, add a blue background */
    &__container &__box:checked ~ &__mark {
        background-color: coral;
    }
    /* Create the checkmark/indicator (hidden when not checked) */
    &__mark::after {
        content: '';
        position: absolute;
        display: none;
    }
    /* Show the checkmark when checked */
    &__container &__box:checked  ~ &__mark::after {
        display: block;
    }
    /* Show the checkmark when checked */
    &__container   &__mark::after {
        content: '✖';
        color: #fff;
        font-size: 2.2rem;
        margin-left: -1px;


    }
}
</style>