import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4190/api/",
});

export default instance;