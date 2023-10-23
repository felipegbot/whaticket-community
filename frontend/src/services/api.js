import axios from "axios";
import { getBackendUrl } from "../config";

console.log(process.env.REACT_APP_BACKEND_URL, "backendurl");

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:3000",
  withCredentials: true,
});

export default api;
