<template>

    <div class="filter-container">
        <input type="text" id="filter" class="filter" placeholder="Filter post..."
                v-model="term">
    </div>

</template>


<script>

    export default {

        props: ['value'],

        data: ()=>{
            return {
                term: ''
            }
        },

        watch: {
            term() {
                this.$emit('input', this.term.toUpperCase());
                
            }
        }
    }

</script>
