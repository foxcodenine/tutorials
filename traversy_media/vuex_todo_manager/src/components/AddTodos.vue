<template>
  <div>
      <h3>Add Todos</h3>
      <div class="add">
              <form>
        <input type="text" v-model="title" placeholder="Add todo...">
        <button @click.prevent="addNewTodo()">Submit</button>
        <!-- <input type="submit"> -->
      </form>
      </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  export default {    
    data() {
      return {
        title: '',
        lastId: 0
      }
    },
    computed: {
      ...mapGetters({
        nextId: 'todos/nextId'
      }), 
    },
    methods: {
      ...mapActions({
        addTodo: 'todos/addTodo'
      }),
      addNewTodo() {
        console.log('<>',this.nextId)
        this.addTodo({title: this.title, id: this.nextId});
        this.title = '';
      }

    }
  }

</script>

<style scoped>
  form {
    display: flex;
  }
    input[type='text']{
      flex: 10;
      padding: 10px;
      border: 1px solid #41b883;
      outline: 0;
    }
    input[type='submit'],
    button {
      flex: 2;
      background:  #41b883;
      color: #fff;
      cursor: pointer;
      border: 1px solid #41b883;
    }
</style>