export default function(context) {
    if (process.client) {
        context.store.dispatch('retrieveLocalStorage', 'tokenFlask');
        context.store.dispatch('retrieveLocalStorage', 'tokenFirebase');
        
    } 
    if (process.server){
        console.log(1111111)
        
        const payload = {
            tokenName: 'tokenFlask',
            req: context.req
        }
        context.store.dispatch('retrieveCookie', payload);
    }
}