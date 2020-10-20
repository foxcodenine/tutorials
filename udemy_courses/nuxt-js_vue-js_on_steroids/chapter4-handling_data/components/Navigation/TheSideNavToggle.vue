<template>
<div 
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">

    <div class="drawer-toggle__bar"></div>
    <div class="drawer-toggle__bar"></div>
    <div class="drawer-toggle__bar"></div>
</div>
</template>



<script>
export default {

}
</script>

<style scoped lang="scss">

.drawer-toggle {
    position: absolute;
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
    width: 35px;
    cursor: pointer;

    padding: 2px 0;

    &:hover {
        padding: 0;
    }
    &:active {
        padding:  4px 0;
    }

    @media (min-width: 768px) {
        display: none;
    }

    &__bar {
        width: 90%;
        height: 2px;
        background-color: white;


    }
}




</style>
