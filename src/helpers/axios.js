import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://zerodevtask-api.onrender.com";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

//All request will wait 5 seconds before timeout
axiosClient.defaults.timeout = 5000;

export default axiosClient;
