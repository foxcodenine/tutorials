/* eslint-disable */
// _____________________________________________________________________

const counterModule = {
    namespaced: true,
    
    state() {
        return {
            counter: 0,
        }
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

        testAuth(state, getters, rootState, rootGetters) {
            return rootState.isLoggedIn;
        }
    },

    mutations: {
        increment(state) {
            state.counter += 1;
        },

        increase(state, payload) {
            state.counter += payload.value;
            // console.log(state);
        },
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
    }
}

// _____________________________________________________________________


export default counterModule;