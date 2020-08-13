<template>
    <div>
        <div class="form-group">
          <label>Name: </label>
          <input type="text" class="form-control" v-model.lazy="name">
        </div>
        
        <div class="form-group">
          <label>Surname: </label>
          <input type="text" class="form-control" v-model.lazy="surname">
        </div>
    </div>

</template>

<script>
    export default {
        props: ['value'],

        data() {
            return {
                name: '',
                surname: ''
            }
        },
        
        watch: {
            name() {
                this.value= `${this.name} ${this.surname}`  
            },
            surname() {
                this.value = `${this.name} ${this.surname}`  
            },
            value() {
                this.$emit('input', this.value)
            }
        },
    }
</script>