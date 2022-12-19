<template >
    <div>
        <div class="invalid-feedback" v-for="(error, index) in errors" :key="createKey(index)">
            {{error}}
        </div>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    props: {
        errors: [],
    },
    methods: {
        createKey(index){
            return `validation_error${Math.random()}${index}`;
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    .form-control.is-invalid ~  div .invalid-feedback{
        display: block;
    }
</style>