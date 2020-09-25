import stocks from '../../data/stocks'

const state = {
    stocks: []
};

const getters = {
    stocks(state) {
        return state.stocks
    }
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state) {

    }
};

const actions = {
    // buyStock(context, order) {
    //     context.commit();
    // },
    initStocks(context) {
        context.commit('SET_STOCKS', stocks);
    },
    randomizeStocks(context) {
        context.commit('RND_STOCKS');
    }
};



export default {
    namespaced: true,
    state,
    getters,
    mutations, 
    actions
};