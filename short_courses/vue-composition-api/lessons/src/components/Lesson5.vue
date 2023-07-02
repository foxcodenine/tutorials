<template >
    <div class="layout">
        <div class="box box--a">
            A
            <Teleport to=".main" :disabled="disable">
                <button class="btn" @click="disable = !disable">move box</button>
            </Teleport>
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { ref } from 'vue';
export default {
    setup() {
        const disable = ref(false);
        return { disable }
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
    .box {
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: solid green 1px;
        border-radius: 5px;
    }
    .btn {
        padding: 3px 10px;
        border: solid green 1px;
        border-radius: 3px;
        margin: 16px;
        color: green;
        background-color: white;
        cursor: pointer;
    }
</style>