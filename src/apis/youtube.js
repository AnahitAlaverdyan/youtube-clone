import axios from "axios";

const KEY = "AIzaSyAxjk7m09v-dG9BWPQTdi-H5iP31wXKWL8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
