import axios from 'axios';
// import { Stats } from 'webpack';

const state = {
    todos: [
        {id:1, title: 'Todo One'},
        {id:2, title: 'Todo Two'},
        {id:3, title: 'Todo Three'},
    ],
    filter: 999,
}

const getters = {
    allTodos(state) {
        const renderArray = [...state.todos];
        return renderArray.reverse()

    },
    nextId(state) {
        return state.todos[state.todos.length -1].id + 1
    },
    getFilter(state) {
        return state.filter;
    }
}

const mutations = {
    setTodos(state, todos) {
        state.todos = todos;
    },
    newTodo(state, todo) {
        state.todos.push(todo);
    },
    removeTodo(state, id) {
        state.todos = state.todos.filter( (todo) => {
            return todo.id !== id;
        })
    },
    setFilter(state, qty) {
        console.log(qty)
        state.filter = qty;
    },
    toggleCompleteIncomplete(state, payload) {
        
        // let todo = state.todos[index];
        // todo.completed === true ? todo.completed = false : todo.completed = true;
        // state.todos.splice(index, 1, todo);

        
        let {updTodo, index} = payload;
        state.todos.splice(index, 1, updTodo);

    }
}

const actions = {
    async fetchTodos(context) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
        context.commit('setTodos', response.data);

    },
    async addTodo(context, payload) {

        // const response = await axios.post(            
        //     'https://jsonplaceholder.typicode.com/todos',
        //     {title: payload.title, id: payload.id, completed: false}
        // );

        // context.commit('newTodo', response.data);
  
        context.commit('newTodo', {title: payload.title, id: payload.id});

    },
    async deleteTodo(context, id) {
        // const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        context.commit('removeTodo', id);

    },
    updateFilter(context, payload) {
        context.commit('setFilter', payload)
    },
    updateTodos(context, payload) {
        context.commit('toggleCompleteIncomplete', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}