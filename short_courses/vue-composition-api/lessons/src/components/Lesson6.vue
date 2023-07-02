<template >
    <div class="layout">
        <Lesson6ChildComponentVue />
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { provide, reactive, watch } from 'vue';
import Lesson6ChildComponentVue from './Lesson6ChildComponent.vue';
export default {
    components: {Lesson6ChildComponentVue},
    setup() {
        const settings = reactive({
            theme: 'light'
        });
        provide('settings', settings);

        watch(settings, (current, previous) => {
            console.log(settings.theme);
        })
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