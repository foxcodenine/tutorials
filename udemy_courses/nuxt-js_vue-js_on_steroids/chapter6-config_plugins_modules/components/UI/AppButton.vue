<template>
    <button 
        class="btn"
        :class="btnStyle"
        v-bind="$attrs"
        v-on="$listeners"><slot /></button>
</template>




<script>
    export default {
        name: 'AppButton',
        props: {
            btnStyle: {
                type: String,
                default: ''
            }
        }
    }
</script>



<style scoped lang="scss">
    .btn {
        font: inherit;
        background-color: #000;
        color: #fff;
        padding: .5rem;
        cursor: pointer;
        border: 1px solid #000;

        &:hover,
        &:active {
            background-color: rgb(51, 51, 51);
            border: 1px solid #000;
            outline: none;
        }
    }
    .blue {
        background-color: #1034a6;
        color: white;
        border: 1px solid transparent;

        &:hover,
        &:active {
            background-color: crimson; 
            border: 1px solid transparent;        
        }        
    }
    .inverted {
        background-color: white;
        color: black;
        border: 1px solid transparent;

        &:hover,
        &:active {
            color: #ccc;
            background-color: white;
            border: 1px solid transparent;          
        }        
    }
    .cancel {
        background-color: crimson;
        color: white;
        border: 1px solid transparent;   

        &:hover,
        &:active {
            background-color: salmon;
            border: 1px solid transparent;
            color: white;           
        }
    }
    *:focus {
        outline: none;
        border-radius: none;
    }

</style>