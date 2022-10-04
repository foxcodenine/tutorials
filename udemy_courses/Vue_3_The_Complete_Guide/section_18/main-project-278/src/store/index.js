/* eslint-disable */
// _____________________________________________________________________

import { createStore } from 'vuex'
import coaches from './modules/coaches'
import requests from "./modules/requests";
import auth from './modules/auth/index';

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
      coaches: coaches,
      requests: requests,
      auth: auth
    }
})
