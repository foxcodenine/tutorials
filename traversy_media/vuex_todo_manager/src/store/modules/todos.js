import axios from 'axios';
// import { Stats } from 'webpack';

const state = {
    todos: [
        {id:1, title: 'Todo One'},
        {id:2, title: 'Todo Two'},
        {id:3, title: 'Todo Three'},
    ],
}

const getters = {
    allTodos(state) {
        return state.todos;
    },
}

const mutations = {
    setTodos(state, todos) {
        state.todos = todos;
    }
}

const actions = {
    async fetchTodos(context) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
        context.commit('setTodos', response.data);

    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}