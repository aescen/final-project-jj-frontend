import axios from 'axios';

export const baseUrl = process.env.REACT_APP_API_URI;

const api = axios.create({ baseURL: baseUrl });

export default api;
