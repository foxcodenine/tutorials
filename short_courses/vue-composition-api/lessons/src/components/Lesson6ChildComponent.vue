<template >
    <button class="btn" @click="toggleMode" :class="{'dark-mode': settings.theme === 'dark'}">
        Switch to {{ oppsiteTheme }} mode
    </button>
        
   
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { computed, inject } from 'vue';
export default {
    setup() {
        const settings = inject('settings');
        const oppsiteTheme = computed(()=>{
            return settings.theme === 'dark' ? 'light' : 'dark';
        });
        function toggleMode() { settings.theme = oppsiteTheme.value; }

        return { settings, oppsiteTheme, toggleMode }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    .btn {
        padding: 8px 16px;
        background-color: white;
        color: black;
        border: black 1px solid;
    }
    .dark-mode {
        background-color: black;
        color: white;
        border: black;
    }
</style>