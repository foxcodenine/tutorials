<template >
    <div class="text-center error">
        <font-awesome-icon icon="fa-solid fa-bomb"/>
        <h1 class="mt-4">We've encountered a problem</h1>
        <h2>{{getErrorMessage}}</h2>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    props: {
        errorMessage: [String, null, Array],
    },
    computed: {
        getErrorMessage() {
            return this.errorMessage || 'Unfortunately we cannot proceed';
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    .error {
        color: #999;
        font-size: 10rem;
    }
</style>