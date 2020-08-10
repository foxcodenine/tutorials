<template>
    <div>
        <h3>This is the Red component</h3>
        <button v-on:click='score++'>Add Score</button>
        <h5>{{ score }}</h5>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            score: 1
        }
    },
    destroyed() {
        console.log('Component Destroyed!');
    },
    activated() {
        console.log('Component Activated!');
    },
    deactivated() {
        console.log('Component Deactivated!');
    }
}
</script>

<style lang="scss" scoped>
    div {
        border: 1px solid red;
        
        padding: 10px 20px;
        background: rgba(red, .2);
        margin: 30px auto;
        text-align: center;
    }
</style>