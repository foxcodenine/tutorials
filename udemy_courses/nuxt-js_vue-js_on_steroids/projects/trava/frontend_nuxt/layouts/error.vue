<template>
    <div class="container">

        <BoxGrid style="filter: blur(4px);"></BoxGrid>
        <ErrorMessage             
            :errorMessage="error.message">
        </ErrorMessage>

  </div>
</template>

<script>
import ErrorMessage from "@/components/ErrorMessage";
import BoxGrid from "@/components/BoxGrid";
export default {
    components: {
        ErrorMessage,
        BoxGrid
    },
    props: ['error']
}
</script>

<style>

</style>