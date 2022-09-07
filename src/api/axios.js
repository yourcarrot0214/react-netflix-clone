import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e1d299794391004e6b254feed8f136f1",
    language: "ko-KR",
  },
});

export default instance;
