import * as actions from "../actions/backAccounts/bankAcc";
import { message } from "antd";
import { baseurl } from "./index";

let timeoutGlobel = 10000;

// const token = localStorage.getItem("tokenas");

const bankAccountsGet = id => dispatch => {
  console.log("BANK ACC API");
  dispatch(actions.LoadingAccountsData(true));

  const options = {
    method: "GET"
    // headers: new Headers({
    //   Authorization: "Bearer " + token,
    //   "Content-Type": "application/json"
    // })
  };
  fetch(
    `http://localhost:3000/documentation/accNumbers/5e39814edbebc641e42ebefa`,
    options
  )
    .then(res => {
      dispatch(actions.LoadingAccountsData(true));
      console.log("BANK ACC API", res);
      if (res.status === 200)
        res.json().then(res => {
          if (res.details) {
            dispatch(actions.SetAccountsData({ ...res }));
          } else {
            dispatch(actions.RemoveAccountsData({}));
          }
        });
      else if (res.status === 500) {
        res.json().then(err => {
          dispatch(actions.RemoveAccountsData({}));
        });
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(actions.LoadingAccountsData(true));
      alert(err.msg);
    });
};

const Api = {
  bankAccountsGet
};
export default Api;

const success = data => {
  message.success(data);
};

const error = data => {
  message.error(data);
};

const warning = data => {
  const hide = message.loading(data, 0);
  setTimeout(hide, timeoutGlobel);
};
