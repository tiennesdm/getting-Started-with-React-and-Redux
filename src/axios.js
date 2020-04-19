// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com'
// });

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// // instance.interceptors.request...

// export default instance;
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default axios;