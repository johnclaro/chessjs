import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://www.pylance.com/chess/ai' : 'http://localhost:8000/chess/ai'
})