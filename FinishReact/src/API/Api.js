import axios from "axios";
const URL = "http://localhost:3000";
function CallApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${URL}/${endpoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  });
}
export default CallApi;
