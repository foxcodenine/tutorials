// export default `I'm an export string!`
// _____________________________________________________________________________

import axios from 'axios'
import { myKey } from '../config'


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        
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




