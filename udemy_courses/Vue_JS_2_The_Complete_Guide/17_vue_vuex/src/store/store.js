import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        redValue: 'red fox!',
        blueValue: 'blue trout!',
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        },
        stringCounter(state) {
            return `${state.counter} Clicks`
        },
        redValue(state) {
            return state.redValue;
        },
        blueValue(state) {
            return state.blueValue;
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
        },
        updateRedValue(state, amount) {
            state.redValue = amount;
        },
        updateBlueValue(state, amount) {
            state.blueValue = amount;
        },
    },
    actions: {
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
        },
        updateRedValue({commit}, payload) {
            commit('updateRedValue', payload);
        },
        updateBlueValue({commit}, payload) {
            commit('updateBlueValue', payload);
        },
    }
});