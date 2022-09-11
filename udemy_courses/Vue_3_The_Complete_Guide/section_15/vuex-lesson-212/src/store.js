/* eslint-disable */
import { createStore } from 'vuex';

// _____________________________________________________________________


const store = createStore({
    state() {
        return {
            counter: 0,
            isLoggedIn: false
        };
    },

    getters: {
        finalCounter( state, getters ) {
            return state.counter * 2;
        },
        normalizedCounter( _, getters ) {
            const finalCounter = getters.finalCounter;

            if (finalCounter < 0) { return 0 };

            if (finalCounter > 100) { return 100 };

            return finalCounter;
        },
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
    mutations: {
        increment(state) {
            state.counter += 1;
        },
        increase(state, payload) {
            state.counter += payload.value;
        },
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth
        }
    },
    actions: {
        increment(context) {

            setTimeout(function() {
                context.commit('increment');
            }, 700);
            
        },
        increase(context, payload) {
            setTimeout(function() {
                context.commit('increase', payload);
            }, 700);            
        },
        login(context) {
            context.commit('setAuth', {isAuth: true}); 
        },
        logout(context) {
            context.commit('setAuth', {isAuth: false}); 
        },
    }
});

export default store;