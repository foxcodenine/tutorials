export default function(context) {
    if (process.client) {
        context.store.dispatch('retrieveLocalStorage', 'tokenFlask');
        context.store.dispatch('retrieveLocalStorage', 'tokenFirebase');
    }
}