import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: `AIzaSyBY-OYhX6Sq8NDYgVUosejxKbX93OjbpF4`,
  },
});
