/* eslint-disable */

export default {
    async contactCoach(context, data) {

        const newRequest = {
            // id: new Date().toISOString,
            // coachId: data.coachId,
            userEmail: data.email,
            message: data.message
        };

        let url = process.env.VUE_APP_FIREBASE_URL + '/request/' + data.coachId + '.json';
        url += '?auth' + this.token;



        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();

        newRequest.id = responseData.name;
        newRequest.coachId = data.coachId;

        context.commit('addRequest', newRequest);
    },

    async fetchRequest({state, commit, rootGetters}) {

        const coachId = rootGetters.userId;

        let url =  process.env.VUE_APP_FIREBASE_URL + '/request/' + coachId  + '.json';
        url += '?auth=' + rootGetters.token;
        

        console.log(url)


        const response = await fetch(url);

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(response.message || 'Faild to fetch request.');
            throw error;
        }

        const requests = [];
        
        // for ( const [key, value] of Object.entries(responseData)) {
        //     console.log(key, value);
        // }

        for ( const index in responseData) {
            
            const request = {
                id: index, 
                coachId: coachId,
                message: responseData[index].message,
                userEmail: responseData[index].userEmail,
            };

            requests.push(request);
        }
        commit('setRequest', requests);
    }
}