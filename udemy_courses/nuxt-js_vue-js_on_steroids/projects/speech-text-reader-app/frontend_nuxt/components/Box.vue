<template>
  <div class="box" @click="boxSelected($event)">
      <img :src="getImgUrl" :alt="item.text">
      <p>{{item.text}}</p>
  </div>
</template>

<script>

export default {
    props: ['item'],
    computed: {
        getImgUrl() {
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
        height: 25rem;
        overflow: hidden;
        background-color: $color-primary-dark;
        border-radius: 1rem;

        img {
            object-fit: cover;
            height: 20rem;
        }

        p {
            align-self: center;
            padding: 1rem;
            font-size: 2.2rem;
            color: #fff;
            font-family: 'Quicksand','Source Sans Pro';
            text-transform: uppercase;
            letter-spacing: 1px;
            
        }

    }
    .active {
        box-shadow: 0 0 1.5rem .5rem rgba($color-primary-dark, 1);
    }

</style>