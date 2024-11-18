import axios from "axios";

const basicAPIWithJSONFormate = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  /*
  Sets a maximum time (in milliseconds) for the request. If the request takes longer than 10000ms (10 seconds), it will throw a timeout error
  */
  timeout: 10000,
  //
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
//! before every request ( success handler , error handler )
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Response interceptor
//! after every response ( success handler , error handler )
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("token");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default basicAPIWithJSONFormate;
