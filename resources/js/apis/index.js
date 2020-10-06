import axios from 'axios';

let Req = axios.create({
    baseURL: 'https://dog.ceo/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default class Api {

    random(){
        return Req.get('breeds/image/random');
    }
}
