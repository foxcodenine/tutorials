import { createStore } from 'vuex';
import { isLoggedIn, logOut } from './components/shared/utils/auth';


const store = createStore({
    state() {
		return {
			lastSearch: {
				from: null,
				to: null,
			},
			basket: {
				items: []
			},
			isLoggedIn: false,
			user: {}
		}
	},
    getters: {
		lastSearchFrom: (state) => state.lastSearch.from,

		lastSearchTo:	(state) => state.lastSearch.to,
		
		itemsInBasket: 	(state) => state.basket.items.length,

		inBasketAlready (state) {
			return function(id) {
				return state.basket.items.reduce((result, item) => {
					return result || item.bookable.id === id
				}, false);
			}
		}
	},
    mutations: {
		setLastSearch(state, payload) {
			state.lastSearch = payload;
		},
		addToBasket(state, payload) {
			state.basket.items.push(payload);
		},
		removeFromBasket(state, payload) {
			state.basket.items = state.basket.items.filter((item) => {
				return item.bookable.id !== payload.bookable;
			})
		},
		setBasket(state, payload) {
			state.basket = payload;
		},
		setUser(state, payload) {
			state.user = payload;
		},
		setLoggedIn(state, payload) {
			state.isLoggedIn = payload;
		}
	},
    actions: {

		setLastSearch(context, payload) {
			context.commit('setLastSearch', payload);
			localStorage.setItem('lastSearch', JSON.stringify(payload));
		},

		loadStoredState(context) {
			const lastSearch = localStorage.getItem('lastSearch');
			if (lastSearch) {				
				context.commit('setLastSearch', JSON.parse(lastSearch));
			}

			const basket = localStorage.getItem('basket');
			if (basket) {
				context.commit('setBasket', JSON.parse(basket));
			}
		},

		addToBasket(context, payload) {			
            context.commit('addToBasket', {
                bookable: payload.bookable,
                price: payload.price,
                dates: context.state.lastSearch
            });
			localStorage.setItem('basket', JSON.stringify(context.state.basket));
        },

		removeFromBasket(context, payload) {
	
			context.commit('removeFromBasket', {
                bookable: payload.bookable.id,                
            })
			localStorage.setItem('basket', JSON.stringify(context.state.basket));
		},

		clearBasket({commit, state}, payload) {
			commit("setBasket", { items: [] });
			localStorage.setItem("basket", JSON.stringify(state.basket));
		},

		async loadUser({commit, dispatch}) {
			if (isLoggedIn()) {
				try {
					let user =  (await axios.get('/user')).data;
					commit("setUser", user);
					commit("setLoggedIn", true);
					// console.log(user);

				} catch (error) {
					// if (401 === error.response.status) {
						dispatch("logout");
					// }
				}
			} else {
				console.log('not logged')
			}
		},

		logout({commit}) {
			commit("setUser", {});
			commit("setLoggedIn", false);
			logOut();
		}

	},
});



export default store;