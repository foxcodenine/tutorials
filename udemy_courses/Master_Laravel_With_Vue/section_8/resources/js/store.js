import { createStore } from 'vuex';


const store = createStore({
    state() {
        return {
            lastSearch: {
                from: null,
                to: null,
            }
        }
    },
    mutations: {
      setLastSearch(state, payload) {
        state.lastSearch = payload;
      }
    }
});

store.commit('increment');
store.commit('increment');
store.commit('increment');
store.commit('changeName', 'Chris');

export default store;