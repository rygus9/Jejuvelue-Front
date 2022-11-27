import axios from "axios";

const client = axios.create();
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  client.defaults.baseURL = "http://localhost:3000";
} else {
  client.defaults.baseURL = "http://20.200.209.6:8080";
}

export default client;
