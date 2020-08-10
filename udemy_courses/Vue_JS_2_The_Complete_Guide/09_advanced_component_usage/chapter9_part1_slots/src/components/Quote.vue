<template>
    <div>
        <div>
            <p>{{ quote }}</p>
            <slot></slot>        
        </div>

        <div>
            <slot name='content'></slot>
            <span style="color: gold;"><slot name='subtitle' > Default Subtitle (This is displayed if no named slot is avalible for subtitle</slot></span>            
        </div>            
    </div>
</template>

<script>
export default {
    props: ['quote']
}
</script>

<style lang="scss" scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto;
        margin: 30px auto;
        text-align: center;
    }
    h2 {
        color: crimson;
    }
</style>