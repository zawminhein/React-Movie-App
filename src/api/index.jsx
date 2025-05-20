import axios from 'axios';

export const api_key = '7cb58781737e77d5729e33664963295a';

export const api = axios.create({
   baseURL : 'https://api.themoviedb.org/3'
});