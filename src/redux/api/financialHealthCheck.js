import * as actions from "../actions/financial_health/financial_Action";
import { message } from "antd";
import { baseurl } from "./index";

let timeoutGlobel = 10000;

const token = localStorage.getItem("tokenas");
const financialDataPost = (data, callback) => dispatch => {
  dispatch(actions.LoadingFinancialData(true));
  console.log("data json", data);
  const options = {
    method: "POST",
    body: JSON.stringify({ ...data }),
    headers: new Headers({
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    })
  };
  fetch(baseurl + "/financialHealth/saveDetails", options)
    .then(res => {
      dispatch(actions.LoadingFinancialData(false));
      if (res.status === 201)
        res.json().then(res => {
          console.log(res.data.applicants);
          dispatch(actions.setFinancialData({ ...res.data.applicants }));
          callback();
        });
    })
    .catch(err => {
      console.log(err);
      dispatch(actions.LoadingFinancialData(false));
      alert("Some thing going wrong! man");
    });
};

const financialDataGet = id => dispatch => {
  dispatch(actions.LoadingFinancialData(true));

  const options = {
    method: "GET",
    headers: new Headers({
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    })
  };
  fetch(baseurl + `/financialHealth/getDetails/${id}`, options)
    .then(res => {
      dispatch(actions.LoadingFinancialData(true));
      if (res.status === 200)
        res.json().then(res => {
          if (res.details) {
            dispatch(actions.setFinancialData({ ...res.details.applicants }));
          } else {
            dispatch(actions.removeFinancialData({}));
          }
        });
      else if (res.status === 500) {
        res.json().then(err => {
          dispatch(actions.removeFinancialData({}));
        });
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(actions.LoadingFinancialData(true));
      alert(err.msg);
    });
};

const fillDataSheet = id => dispatch => {
  warning("We are calculating your results!");
  console.log(id);
  const options = {
    method: "GET",
    headers: new Headers({
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    })
  };
  fetch(baseurl + `/financialHealth/fillSpreadSheet/${id}`, options)
    .then(res => {
      // dispatch(actions.LoadingFinancialData(true));
      if (res.status === 201)
        res.json().then(res => {
          timeoutGlobel = 0;
          success("We Received Results from Bank 1");
        });
    })
    .catch(err => {
      console.log(err);
      timeoutGlobel = 0;
      error("some thing going wrong testing");
    });
};

const Api = {
  financialDataPost,
  financialDataGet,
  fillDataSheet
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
