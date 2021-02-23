import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID Z0aHBMPn7gP-pAIjlvAQcXADSk6WlMtN-L0x_acmDAk'
    }
});