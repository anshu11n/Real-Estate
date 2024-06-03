import axios from "axios";

const apiRequest = axios.create({
  baseURL: VITE_BACKEND_URL,
  withCredentials: true,
});

export default apiRequest;
