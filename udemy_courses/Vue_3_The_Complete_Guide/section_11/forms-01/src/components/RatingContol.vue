<template>
    <ul>

        <li v-bind:class="isPoor" v-on:click="activate('poor')">
            <button type="button" >Poor</button>
        </li>

        <li v-bind:class="isAverage" v-on:click="activate('average')">
            <button type="button" >Average</button>
        </li>

        <li v-bind:class="isGreat" v-on:click="activate('great')">
            <button type="button" >Great</button>
        </li>

    </ul>
</template>

<!--------------------------------------------------------------------->

<script>
export default {
    props: ['modelValue'],                     // <- (modelValue prop is passed automatically with vmodel)
    emits: ['update:modelValue'],              // <- (update:modelValue is emited automatically with vmodel)
                                               //    (if you use vmodel on a custom component)
    // data() {
    //     return {
    //         activeOption: this.modelValue,  // <- (value from prop)
    //     }
    // },

    computed: {
        isPoor() {
            return { 'active': this.modelValue === 'poor'};
         },
        isAverage() { 
            return { 'active': this.modelValue === 'average'};
         },
        isGreat() { 
            return { 'active': this.modelValue === 'great'};
         },

    },
    methods: {
        activate(option) {
            this.activeOption = option;
            this.$emit('update:modelValue', option);
        }
    }
}
</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>

 ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}
li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    color: red;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
}
button {
    font: inherit;
    border: none;
    background-color: transparent;    
}

.active {
    border-color: #a00078;

    & button {
        color: #a00078;
    }
}
</style>