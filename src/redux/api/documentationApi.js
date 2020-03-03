import * as actions from "../actions/documentation/docActions";
import { message } from "antd";
import { baseurl } from "./index";
// import axios from "axios";

const token = localStorage.getItem("tokenas");

const docFiles = data => dispatch => {
  console.log("data json doc", data);

  //   axios.post("http://localhost:8000/upload", data, options).then(res => {
  //     console.log("CHECK UPLOAD STATUS", res.statusText);
  //   });

  const options = {
    //   method: "POST",
    body: JSON.stringify({ ...data })
    //   headers: new Headers({
    //   Authorization: "Bearer " + token,
    //   "Content-Type": "multipart/form-data"
    // })
  };

  fetch(baseurl + "/documentation/uploadDocument", options)
    .then(res => {
      if (res.status === 200 || res.status === 201)
        res.json().then(res => {
          console.log("new response data======>", res);
        });
    })
    .catch(err => {
      console.log(err);
      alert("Some thing going wrong! man");
    });
};

const Api = {
  docFiles
};
export default Api;
