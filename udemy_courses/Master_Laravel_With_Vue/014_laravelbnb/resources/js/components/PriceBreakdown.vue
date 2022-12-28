<template >
    <div>
        <h5 class="text-uppercase text-secondary font-weight-bolder">
            price breakdown
        </h5>
        <div v-for="(days, price) in price.breakdown" class="py-2 border-bottom border-top d-flex justify-content-between">
            <span>{{ days }} x {{ price }},</span> 
            <span>${{ days * price }}</span>
        </div>
        <div class="pt-2 font-weight-bolder d-flex justify-content-between">
            <span>Total</span>
            <span>${{ price.total }}</span>
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    props: {
        price: Object
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="" >
    
</style>