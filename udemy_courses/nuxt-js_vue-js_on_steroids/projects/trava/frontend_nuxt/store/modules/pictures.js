const actions = {

    addPicture(vuexContext, payload) {
        return this.$axios.$post('trava/pictures/addPicture/', payload)
        .then(res => {
            
            console.log(res)
            return res;
            
        })
    },

    async fetchUserBoxes({commit, dispatch, rootGetters}) {
        const token = await rootGetters.getToken;

        try {
            const respons =  await this.$axios.$post(
                'trava/pictures/fetchPictures/', {token});



            const userPictures = respons.user_pictures;
            return userPictures;

        } catch(err) {
            console.log(err);
        }

        
    },
}

export default {
    actions,
    namespaced: true
}