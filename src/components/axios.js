import axios from "axios";

export default axios.create({
    baseURL: "https://randomuser.me/api/?results=200&nat=us",
    responseType: "json"
  });