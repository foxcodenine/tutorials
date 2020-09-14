import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        },
        stringCounter(state) {
            return `${state.counter} Clicks`
        },
    },
    mutations: {
        increment()  {
            this.state.counter++;
        },
        decrement()  {
            this.state.counter--;
        },
        adjust(state, amount) {
            state.counter = amount;
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },
        decrement(context) {
            context.commit('decrement')
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
});