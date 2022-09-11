
import { createStore } from 'vuex';

import rootGetters from './getters.js';
import rootMutations from './mutations.js';
import rootActions from './actions.js';

import counterModule from './modules/counterModule.js'

// _____________________________________________________________________

const store = createStore({
    modules: {
        counterModule: counterModule
    },

    state() {
        return {
            isLoggedIn: false
        };
    },

    getters: rootGetters,
    mutations: rootMutations,
    actions: rootActions,
});


// _____________________________________________________________________

export default store;