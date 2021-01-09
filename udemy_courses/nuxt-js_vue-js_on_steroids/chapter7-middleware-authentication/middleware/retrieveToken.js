// Nuxt Context:
// https://nuxtjs.org/docs/2.x/internals-glossary/context
// _____________________________________________________________________
export default function(context) {
    if (process.client) {
        context.store.dispatch('retrieveLocalStorage', 'tokenFlask');
        context.store.dispatch('retrieveLocalStorage', 'tokenFirebase'); 


    } 
    if (process.server){
        // ___________________________________
        let payload = {
            tokenName: 'tokenFlask',
            req: context.req
        }
        context.store.dispatch('retrieveCookie', payload);
        // ___________________________________

        payload.tokenName = 'tokenFirebase'
        context.store.dispatch('retrieveCookie', payload);
    }
}