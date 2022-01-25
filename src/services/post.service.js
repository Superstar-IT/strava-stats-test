import axios from "axios";

const apiURL = 'https://jsonplaceholder.typicode.com';

export const getRecentPosts = async () => {
    return axios.get(`${apiURL}/posts`)
        .then((res) => res.data)
        .catch((err) => { 
            throw new Error(err.message);
        });
}

export const getPostsByUser = async (userId) => {
    return axios.get(`${apiURL}/users/${userId}/posts`)
        .then((res) => res.data)
        .catch((err) => {
            throw new Error(err.message);
        });
}