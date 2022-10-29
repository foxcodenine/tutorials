<template >
    <div class="card mb-2">
        <div class="card-body">
            <h2 class="card-title">{{ itemTitle }}</h2>
            <p class="card-text">{{ itemContent }}</p>
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    props: {
        'itemTitle': String, 
        'itemContent': String, 
        'price': Number
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>