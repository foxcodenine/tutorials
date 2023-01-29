<template>
    <div class="text-4xl">
        Hello from Vue {{ testVue }}
    </div>
</template>
<!-- --------------------------------------------------------------- -->
<script lang="js">
    export default {
        data() {
            return {
                appWorking : true
            }
        },
        computed: {
            testVue() {
                return this.appWorking  ? ':)' : ':('
            }
        }
    }
</script>
<!-- --------------------------------------------------------------- -->
<style lang="scss" scoped>

</style>