import axios from 'axios';

export default axios.create({
  baseURL: 'https://dashboard-sobre-violencia-default-rtdb.firebaseio.com/'
});
