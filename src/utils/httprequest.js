import axios from 'axios';

// use axios to call api
export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path,  options={}) => {
    const response = await httpRequest.get(path, options);
    return response.data;

};
