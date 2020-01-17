import axios from 'axios';

function getServices(url) {
    return axios.get(url);
}

export const restHelper = {
    getServices
};