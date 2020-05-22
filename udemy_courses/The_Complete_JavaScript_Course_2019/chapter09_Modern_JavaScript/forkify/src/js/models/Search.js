// export default `I'm an export string!`
// _____________________________________________________________________________

import axios from 'axios'


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const myKey = 'b3bb9752f3d1449bbf6a1cf302da308e';
        try {
            const res = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${this.query}&number=100&apiKey=${myKey}`);
            this.results = res.data.results
            // console.log(this.results)
        }
        catch(error) {
            alert(error)
        }    
    }

};




