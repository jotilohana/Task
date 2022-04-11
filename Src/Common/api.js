import axios from 'axios';

const API_URL = axios.create({
  baseURL: `https://veramobile.mios.com/test_android/items.test`,
});

export default API_URL;
