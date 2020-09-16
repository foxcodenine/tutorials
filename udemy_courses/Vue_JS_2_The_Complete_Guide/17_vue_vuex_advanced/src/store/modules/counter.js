const state = {
    counter: 0
}

const getters = {
    counter(state) {
        return state.counter;
    },
    doubleCounter(state) {
        return state.counter * 2;
    },
    stringCounter(state) {
        return `${state.counter} Clicks`
    }
}

const mutations = {
    increment(state)  {
        state.counter++;
    },
    decrement(state)  {
        state.counter--;
    },
    adjust(state, amount) {
        state.counter = amount;
    }
}

const actions = {
    increment(context) {
        context.commit('increment');
    },
    decrement(context) {
        context.commit('decrement');
    },
    asyncIncrement(context) {
        setTimeout(()=>{
            context.commit('increment')
        }, 1000)
    },
    asyncDecrement(context) {
        setTimeout(()=>{
            context.commit('decrement');
        }, 1000);
    },
    asyncAdjust(context, payload) {
        setTimeout(()=>{
            context.commit('adjust', payload.by);
        }, payload.delay);
    }   
}

export default {
    namespaced: true,
    state, 
    getters, 
    mutations, 
    actions
}