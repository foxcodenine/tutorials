

const actions = {
    addPicture(context, payload) {

        console.log('>>>', payload)
        this.$axios.$post('trava/pictures/addPicture/', payload)
        .then(res => console.log(res))
    }
}

export default {
    actions,
    namespaced: true
}