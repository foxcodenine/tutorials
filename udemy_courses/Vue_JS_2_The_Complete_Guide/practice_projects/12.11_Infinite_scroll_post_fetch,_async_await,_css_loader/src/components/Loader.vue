<template>
    <div class="loader" v-bind:class="{'show': showLoader}">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
    </div>
</template>

<script>
    export default {
        props:['showLoader'],
        
    }
</script>