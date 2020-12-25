import { slice } from "core-js/fn/array";

const actions = {

    addPicture(vuexContext, payload) {
        return this.$axios.$post('trava/pictures/addPicture/', payload)
        .then(res => {
            
            console.log(res)
            return res;
            
        })
    },

    async deletePicture({rootGetters}) {

        const token = rootGetters.getToken;

        // Selecting only the image id from the image url
        let toDelete = rootGetters.getBoxToDelete;        
        toDelete = toDelete.map(i => i.split('.').slice(-2, -1));
        toDelete = toDelete.map(i => i[0].split('/').slice(-1)[0]);

        const payload = {toDelete, token};
        // console.log(payload);
        
        try {
            const response = await this.$axios.$post('trava/pictures/deletePicture/', payload);
            console.log(response);
            return response;

        } catch (err) {
            console.log(err)
        }
    },

    async fetchUserBoxes({commit, dispatch, rootGetters, rootState}) {
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