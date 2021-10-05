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
            console.log('111',error)
        }    
    }

};


// test if api still works
// https://api.spoonacular.com/recipes/complexSearch?query=red&number=100&apiKey=57f70fde3bf84b6188194d0b5f8d4400
