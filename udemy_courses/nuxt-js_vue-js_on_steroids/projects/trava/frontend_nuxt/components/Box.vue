<template>
  <div class="box" @click="boxSelected($event)">
      <input class="box__check" type="checkbox" v-if="item.image.length > 50">
      <img :src="getImgUrl" :alt="item.text">
      <p>{{item.text}}</p>
  </div>
</template>

<script>

export default {
    props: ['item'],
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

        &__check {
            position: absolute;
            transform: translate(32.5rem, 1rem);
            -webkit-appearance: none;
            background-color: #fafafa;
            border: 1px solid $color-primary-dark;            
            padding: 9px;
            border-radius: 3px;
            display: inline-block;
        }

    }
    .active {
        box-shadow: 0 0 1.5rem .5rem rgba($color-primary-dark, 1);
    }

</style>