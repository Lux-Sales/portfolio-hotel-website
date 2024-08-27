import axios from "axios";

const api = axios.create({
  baseURL: "www.example.com/",
});

export default api;
