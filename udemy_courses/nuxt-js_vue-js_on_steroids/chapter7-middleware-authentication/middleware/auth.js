export default function(context) {
    if (context.store.getters.isNotAuthenticated) {
        context.redirect('/admin/auth')
    }
}