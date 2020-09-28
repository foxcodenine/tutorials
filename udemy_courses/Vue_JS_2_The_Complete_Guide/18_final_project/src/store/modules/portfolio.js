

const state = {
    funds: 10000,
    stocks: [],

};

// https://vuex.vuejs.org/guide/modules.html

const getters = {

    stockPortfolio(state, getters, rootState, rootGetters) {
        
        return state.stocks.map(stock => {
            // console.log('>>',{state, getters, rootState, rootGetters})
            const record = rootGetters['stocks/stocks'].find(element => element.id === stock.id)

            return {
                id: stock.id,
                name: record.name,
                quantity: stock.quantity,
                price: record.price
            }
        });
    },
    fundsPortfolio(state) {
        return state.funds
    },
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id === stockId);

        if (state.funds < stockPrice * quantity) {
            quantity = state.funds / stockPrice;
        }

        if (quantity > 0) {

            if (record) {
                record.quantity += parseFloat(quantity);
            } else {
                state.stocks.push({id: stockId, quantity:parseFloat(quantity)});
            }
    
            state.funds -= stockPrice * quantity;
        }
        
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id === stockId);

        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            quantity = record.quantity;
            state.stocks.splice(state.stocks.indexOf(record), 1);            
        }
        state.funds += parseFloat(stockPrice) * parseFloat(quantity);
    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    buyStock({commit}, order) {
        commit('BUY_STOCK', order);
    },
    sellSTOCK({commit}, order) {
        commit('SELL_STOCK', order);
    }
};



export default {
    namespaced: true,
    state,
    getters,
    mutations, 
    actions
};