import Axios from "axios";
import axios from 'axios'

const baseURL = 'https://developers.zomato.com/api/v2.1/';
const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY;

export const fetchCity = ( cityQuery ) => {

    const res = axios.get( baseURL + '/cities', {
        params: {
            q: cityQuery,
        },
        headers: {
            'user-key': API_KEY,
        }
    } );

    return res;

};

export const fetchRestaurant = ( cityID ) => {

    const res = axios.get(URL + '/search', {
        params: {
            entity_id: cityID,
            entity_type: 'city',
            count: 5,
            start: 0,
        },
        headers: {
            'user-key': API_KEY,
        }
    })

    return res;

};