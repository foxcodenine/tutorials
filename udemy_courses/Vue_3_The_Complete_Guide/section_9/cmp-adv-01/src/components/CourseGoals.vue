<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot v-bind:itemProp="goal" another-prop="some text"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Finish the course', 'Learn Vue']
        }
    }
}
</script>

<style>

</style>