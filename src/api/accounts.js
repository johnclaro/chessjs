import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://www.pylance.com/accounts' : 'http://www.localhost:8000/accounts'
})