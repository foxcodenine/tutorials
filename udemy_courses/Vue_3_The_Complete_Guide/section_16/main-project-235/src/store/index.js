import { createStore } from 'vuex'

import coaches from './modules/coaches'

// _____________________________________________________________________

export default createStore({

    state() {
      return {        
      }
    },

    getters: {
    },

    mutations: {
    },

    actions: {
    },

    modules: {
      coaches: coaches
    }
})
