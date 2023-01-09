<template >
    <div class="card mb-2 w-100">
        <div class="card-body">
            <h2 class="card-title">{{ itemTitle }}</h2>
            <p class="card-text">{{ itemDescription }}</p>
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    props: {
        'itemTitle': String, 
        'itemDescription': String, 
        'price': Number
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>