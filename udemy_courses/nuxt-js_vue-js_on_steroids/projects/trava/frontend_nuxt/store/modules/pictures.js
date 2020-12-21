

const actions = {

    addPicture(context, payload) {
        this.$axios.$post('trava/pictures/addPicture/', payload)
        .then(res => console.log(res))
    },

    async fetchUserBoxes({commit, dispatch, rootGetters}) {
        const token = await rootGetters.getToken;

        try {
            const respons =  await this.$axios.$post(
                'trava/pictures/fetchPictures/', {token});

            console.log(respons);

        } catch(err) {
            console.log(err);
        }

        
    },
}

export default {
    actions,
    namespaced: true
}