import Vue from 'vue';

// Use Vue.http instead Vue.$http becasue your are passing the json
// object not the address.

export const loadData = (context) => {
    Vue.http.get('data.json')
        .then(res => res.json())
        .then(data => {
            if (data) {
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;                
                const stocks = data.stocks;

                const portfolio = {
                    funds,
                    stockPortfolio
                }

                context.commit('stocks/SET_STOCKS', stocks);
                context.commit('portfolio/SET_PORTFOLIO', portfolio);

            }
        })
        
}