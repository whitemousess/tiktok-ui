import axios from 'axios';
// use axios to call api
export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path,  options={}) => {
    const response = await request.get(path, options);
    return response.data;

};
