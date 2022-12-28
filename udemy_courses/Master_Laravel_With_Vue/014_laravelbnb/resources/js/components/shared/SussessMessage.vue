<template >
    <div class="text-center success">
        <font-awesome-icon icon="fa-regular fa-thumbs-up"/>
        <h1 class="mt-4">Success!</h1>
        <h2>
            <slot>
                The operation was successfull!
            </slot>
        </h2>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script lang="js">
export default {
    
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    .success {
        color: #999;
        font-size: 10rem;
    }
</style>