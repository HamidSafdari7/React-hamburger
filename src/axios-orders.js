import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-humberger-default-rtdb.firebaseio.com/'
});

export default instance;