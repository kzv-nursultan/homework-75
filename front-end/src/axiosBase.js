import axios from 'axios';

const axiosBase = axios.create({
    baseURL:'http://localhost:8000/'
});

export default axiosBase;