import axios from 'axios';

const service = axios.create({
    baseURL: 'https://m.aolix.cn',
    timeout: 5000
});

export default service;