<template >
    <div class="layout">
        Lazy Loadings
        <Lesson9ChildComponentVue />
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { provide, reactive, watch } from 'vue';
const Lesson9ChildComponentVue = defineAsyncComponent(()=>{
    return  import('./Lesson9ChildComponent.vue')

});
import { ref, defineAsyncComponent } from 'vue';
export default {
    components: {Lesson9ChildComponentVue},
    setup() {

    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    .layout {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 16px;
        margin-top: 16px;
    }
</style>