<template>
        <button class="btn settings-btn" @click="toggleHeader()">
            <svg class="settings-btn__icon">
                <use xlink:href="../../img/icons/iconmoon.svg#icon-cog"></use>                
            </svg>
        </button> 
</template>

<script>
export default {
    props: ['headerOn'],
    methods: {
        toggleHeader() {
            this.$emit('headerStatus');
        }
    }
}
</script>

<style lang="scss">
    .settings-btn {

        position: absolute;
        bottom: 3rem;
        left: 3rem;

        &__icon {
            width: 1.8rem;
            height: 1.8rem;
        }
    }
</style>