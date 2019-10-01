import axios from 'axios';

const kaziAPI =  axios.create({
  baseURL: 'https://kazi.azurewebsites.net',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default kaziAPI;
