
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-69442.firebaseio.com/',
});

export default instance;