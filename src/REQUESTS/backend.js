import axios from "axios";

const instance = axios.create({
  baseURL: "https://backendrage.herokuapp.com/api/",
});

export default instance;