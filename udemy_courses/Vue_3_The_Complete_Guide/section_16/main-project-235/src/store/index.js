/* eslint-disable */
// _____________________________________________________________________

import { createStore } from 'vuex'
import coaches from './modules/coaches'
import requests from "./modules/requests";

// _____________________________________________________________________

export default createStore({

    state() {
      return {  
        userId: 'c1'      
      }
    },

    getters: {
      userId(state) {
        return state.userId;
      }
    },

    mutations: {
    },

    actions: {
    },

    modules: {
      coaches: coaches,
      requests: requests
    }
})
