const cart = {
    namespaced: true,

    state() {
        return {
            // cart: { items: [], total: 0, qty: 0 },
            items: [],
            total: 0,
            qty: 0
        };
    },
    getters: {
        products(state) {
            return state.items;
        },

        totalSum(state) {
            return Math.round(state.total * 100) / 100;
        },

        quantity(state) {
            return state.qty;
        },
    },

    mutations: {
        addProductToCart(state,  payload) {

            const productData = payload;

            const productInCartIndex = state.items.findIndex(
                (ci) => ci.productId === productData.id
            );

            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                state.items.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
        },

        removeProductFromCart(state, payload) {            
            const prodId = payload.prodId;
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
        },
    },

    actions: {
        addToCart(context, payload) {
            const prodId = payload.prodId;
            const products = context.rootGetters['prods/products'];
            const product = products.find(function(prod){ return prod.id === prodId });
 
            context.commit('addProductToCart', product );
        },
        removeToCart(context, payload) {
            context.commit('removeProductFromCart', payload);
        }
    },
}

// _____________________________________________________________________


export default cart;