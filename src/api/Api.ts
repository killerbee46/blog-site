import axios from "axios";

export const baseUrl = "https://68f52c1db16eb6f468368e27.mockapi.io/";

const API = axios.create({
    baseURL: `${baseUrl}/api`,
});

// --- Interceptor to send header with each request in case of real token ---
// API.interceptors.request.use(
//     async (config: any) => {
//         config.headers = {
//             Authorization: `Bearer ${getToken()}`,
//             "Content-Type": "application/json",
//         };
//         return config;
//     },

//     (error:any) => {
//         Promise.reject(error);
//     }
// );

export default API;
