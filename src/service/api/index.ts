import axios from 'axios';

const api = axios.create({
  baseURL: 'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com',
});

export default api;
