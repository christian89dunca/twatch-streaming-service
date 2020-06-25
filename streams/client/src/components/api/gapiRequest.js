import axios from "axios";

export default axios.create({
  baseURL: "window.gapi.auth2.getAuthInstance()",
});
