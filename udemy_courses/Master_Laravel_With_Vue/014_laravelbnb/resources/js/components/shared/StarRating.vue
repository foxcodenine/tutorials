<template >
    <div d-flex >
        <font-awesome-icon icon="fa-solid fa-star" v-for="star in fullStars" :key="'full' + star"/>
        <font-awesome-icon icon="fa-solid fa-star-half-alt"  v-for="star in halfStars" :key="'half' + star"/>
        <font-awesome-icon icon="fa-regular fa-star"  v-for="star in emptyStars" :key="'empty' + star"/>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    props: {
        rating: Number
    },
    computed: {
        fullStars() {
            return Math.round(this.rating);
        },
        halfStars() {
            const fraction = Math.round((this.rating - Math.floor(this.rating)) * 100);
            console.log(fraction > 0 && fraction < 50)
            return fraction > 0 && fraction < 50 ? 1 : 0;
        },
        emptyStars() {
            return 5 - Math.ceil(this.rating);;
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>