import { createStore } from 'vuex';


const store = createStore({
    state() {
		return {
			lastSearch: {
				from: null,
				to: null,
			}
		}
	},
    getters: {
		lastSearchFrom(state) {
			return state.lastSearch.from;
		},
		lastSearchTo(state) {
			return state.lastSearch.to;
		},
	},
    mutations: {
		setLastSearch(state, payload) {
			console.log(payload)
			state.lastSearch = payload;
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
		}		
	},
});



export default store;