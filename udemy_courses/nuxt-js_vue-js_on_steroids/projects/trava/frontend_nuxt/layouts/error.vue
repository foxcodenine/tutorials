<template>
    <div class="container">

        <BoxGrid style="filter: blur(4px);"></BoxGrid>
        <NotSupported             
            :errorMessage="error.message">
        </NotSupported>

  </div>
</template>

<script>
import NotSupported from "@/components/NotSupported";
import BoxGrid from "@/components/BoxGrid";
export default {
    components: {
        NotSupported,
        BoxGrid
    },
    props: ['error']
}
</script>

<style>

</style>