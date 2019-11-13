// export default 'I am an exported string.';

import axios from 'axios';
import { key, proxy } from './config';

export default class Search {
    constructor(query) {
        this.query = query;

    }
    async getResults() {

        // const proxy = 'https://crossorigin.me/';
        // const proxy = 'https://cros-anywhere.herokuapp.com/';

        // food2fork API Key : 48727150ac3ef4f3e0359c50ebb5216f
        // https://www.food2fork.com/api/search
        // const key = '48727150ac3ef4f3e0359c50ebb5216f';
        try {
            // const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            // const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            // const recipes = res.data.recipes
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
        
    }
}
