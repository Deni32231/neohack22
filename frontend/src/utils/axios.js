import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://prj-581.neohack2022.codenrock.com/api',
})



export default instance