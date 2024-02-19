import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://localhost:3000";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

//All request will wait 5 seconds before timeout
axiosClient.defaults.timeout = 5000;

export default axiosClient;
