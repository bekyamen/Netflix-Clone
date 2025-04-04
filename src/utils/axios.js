
import axios from "axios";
const instance = axios.create({
baseURL: "https://api.themoviedb.org/3",
params: {
    api_key: "e31b0b73dea58ce90709efc6001feb3a", // 🔑 Replace with your actual API key
  },
});
export default instance;