<template>
  <div>
      <h3>Todos</h3>
      <div class="legend">
          <span>Double click to mark as complete</span>
          <span>
              <span class="incomplete-box"></span> = Incomplete
          </span>
          <span>
              <span class="complete-box"></span> = Complete
          </span>
      </div>
      <div class="todos">
          <div class="todo" 
                v-for="(todo, index) in allTodos.slice(0, getFilter)" 
                :key="index"
                :class="{'complete': todo.completed}"
                @dblclick="onDblClick(todo, (allTodos.length - index) -1)">
            {{ todo.title }}
            <span class="id">{{ todo.id }}</span>            
            <i class="fas fa-trash-alt remove" @click='deleteTodo(todo.id)'></i>
        </div>
      </div>

  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
         
        computed: {
            ...mapGetters({
                allTodos: 'todos/allTodos',
                getFilter: 'todos/getFilter',
            })
        },
        methods: {
            ...mapActions({
                fetchTodos: 'todos/fetchTodos',
                deleteTodo: 'todos/deleteTodo',
                updateTodos: 'todos/updateTodos',
            }),
            onDblClick(todo, index) {
                const updTodo = {
                    id: todo.id,
                    title: todo.title,
                    completed: !todo.completed
                }
                this.updateTodos({updTodo, index})
            }
        },
        mounted() {
            this.fetchTodos();
        }
    }
</script>

<style scoped lang="scss">
    .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .todo {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }


    .remove {
        position: absolute;
        color: #fff;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
        transition: all .1s;

        &:hover {
            opacity: .5;        }
    }
    .id {        
        position: absolute;
        color: #fff;
        top: 2px;
        left:10px;
        font-size: 12px;
        
    }
    .legend {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
    .incomplete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
    }
    .complete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #35495e;
    }
    @media(max-width: 500px) {
        .todos {
            grid-template-columns: 1fr;
        }
    }
    .complete {
        background: #35495e;
    }
</style>