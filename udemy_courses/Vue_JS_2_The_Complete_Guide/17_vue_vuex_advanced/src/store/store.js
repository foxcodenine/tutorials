import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter'


import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        redValue: 'red fox!',
        blueValue: 'blue trout!',
    },
    getters: {

        redValue(state) {
            return state.redValue;
        },
        blueValue(state) {
            return state.blueValue;
        },
    },
    mutations: mutations,

    actions,        
    
    modules: {
        counter,  
    }
});