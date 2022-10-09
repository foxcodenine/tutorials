<template >
    <div>
        <h2>{{ fullName }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
/* eslint-disable */

import {computed} from 'vue';

export default {
    props: ['firstName', 'lastName',  'age'],

    setup(props, context) {    
        
        // -------------------------------------------------------------

        const fullName = computed(function() {
            return `${props.firstName} ${props.lastName}`
        });

        // -------------------------------------------------------------

        console.info(context);

        // -------------------------------------------------------------

        context.emit('save-data', 1);  // this.$emit('save-data', 1);

        // -------------------------------------------------------------

        return {
            fullName,
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss" scoped>
    
</style>