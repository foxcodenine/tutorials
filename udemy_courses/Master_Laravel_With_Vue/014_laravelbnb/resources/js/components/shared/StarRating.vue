<template >
    <div d-flex >
        <font-awesome-icon icon="fa-solid fa-star" v-for="star in fullStars" :key="'full' + star" @click="emitRatingChage(star)"/>
        <font-awesome-icon icon="fa-solid fa-star-half-alt"  v-for="star in halfStars" :key="'half' + star"/>
        <font-awesome-icon icon="fa-regular fa-star"  v-for="star in emptyStars" :key="'empty' + star" @click="emitRatingChage(fullStars + star)"/>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    props: {
        modelValue: Number
    },
    emits: ['update:modelValue'],
    computed: {
        fullStars() {
            return Math.round(this.modelValue);
        },
        halfStars() {
            const fraction = Math.round((this.modelValue - Math.floor(this.modelValue)) * 100);
            // console.log(fraction > 0 && fraction < 50)
            return fraction > 0 && fraction < 50 ? 1 : 0;
        },
        emptyStars() {
            return 5 - Math.ceil(this.modelValue);
        }
    },
    methods: {
        emitRatingChage(star) {            
            this.$emit('update:modelValue', star)
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>