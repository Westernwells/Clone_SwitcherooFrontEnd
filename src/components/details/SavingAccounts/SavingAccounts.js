import React, { useState } from "react";
import { Row, Col, Select, Button } from "antd";
import "./SavingAccounts.css";

const { Option } = Select;
function SavingAccounts(props) {
  const [q4, setQ4] = useState(false);
  const [questions, setQuestions] = useState({
    rateType: ""
  });
  const lenders = [
    "Aib",
    "Haven",
    "Bank of Ireland",
    "EBS",
    "KBC",
    "PTSB",
    "Ulster bank",
    "Other"
  ];

  const county = [
    "Carlow",
    "Cavan",
    "Clare",
    "Cork City",
    "Cork County",
    "Denegal",
    "Dublin 1",
    "Dublin 2",
    "Dublin 3",
    "Dublin 4",
    "Dublin 5",
    "Dublin 6",
    "Dublin 6w",
    "Dublin 7",
    "Dublin 8",
    "Dublin 9",
    "Dublin 10",
    "Dublin 11",
    "Dublin 12",
    "Dublin 13",
    "Dublin 14",
    "Dublin 15",
    "Dublin 16",
    "Dublin 17",
    "Dublin 18",
    "Dublin 20",
    "Dublin 22",
    "Dublin 24",
    "Dublin Country(North)",
    "Dublin Country(South)",
    "Dublin Country(West)",
    "Galway City",
    "Galway Country",
    "Kerry",
    "Kildare",
    "Kilkenny",
    "Laois",
    "Leitrim City",
    "Limerick Country",
    "Longford",
    "Louth",
    "Mayo",
    "Meath",
    "Monaghan",
    "Offaly",
    "Roscommon",
    "Sligo",
    "Tipperary",
    "Waterford City",
    "Waterford Country",
    "Westmeath",
    "Wexford",
    "Wicklow"
  ];
  const bedrooms = [1, 2, 3, 4, 5, "5+"];
  const accountWith = [
    "AIB",
    "An Post",
    "Bank of Ireland",
    "KBC",
    "ptsb",
    "Ulster Bank",
    "Credit Union",
    "Other"
  ];
  const years = [];
  for (var i = 1; i <= 35; i++) {
    years.push(i);
  }
  function clickRadio(e) {
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  }
  var handleQ = e => {
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    setQuestions({ ...questions, [e.target.name]: e.target.value });
    setQ4(!q4);
    // validateRadio(e.target.name, e.target.value);
    for (var i = 0; i < radioContainers.length; i++) {
      var input = radioContainers[i].childNodes[0];
      if (input.checked) {
        input.parentNode.style.background = "#fb9500";
        input.parentNode.style.border = "2px solid #fb9500";
      } else {
        input.parentNode.style.background = "lightgray";
        input.parentNode.style.border = "2px solid gray";
      }
    }
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const handleRoute = route => {
    props.history.push(route);
  };
  function handleInput(e) {
    setQuestions({ ...questions, [e.target.name]: e.target.value });
  }
  function handleAccountWith(value) {
    setQuestions({ ...questions, accountWith: value });
  }

  return (
    <div className="details-additional-p">
      <Row className="d-row-s1">
        <Col lg={24}>
          <div>
            <Select
              className={
                questions.accountWith
                  ? "select-option1 bg-o"
                  : "select-option1"
              }
              name="accountWith"
              defaultValue="Select from options"
              onChange={handleAccountWith}
            >
              {accountWith.map((value, index) => {
                return (
                  <Option key={index} value={value}>
                    {value}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">What is the account number?</h6>
        </Col>
        <Col lg={24}>
          <div className={questions.maintenanceCost ? "input2 bg-o" : "input2"}>
            <input
              type="text"
              name="maintenanceCost"
              onChange={handleInput}
              placeholder="account number"
            />
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">What is current balance?</h6>
        </Col>
        <Col lg={24}>
          <div
            className={questions.privateSchoolFees ? "input2 bg-o" : "input2"}
          >
            <span className="pre">€</span>
            <input
              type="number"
              name="privateSchoolFees"
              onChange={handleInput}
              placeholder=""
            />
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">What is your monthhly saving amount?</h6>
        </Col>
        <Col lg={24}>
          <div
            className={
              questions.socialClubSubscription ? "input2 bg-o" : "input2"
            }
          >
            <span className="pre">€</span>
            <input
              type="number"
              name="socialClubSubscription"
              onChange={handleInput}
              placeholder=""
            />
          </div>
        </Col>
        <br></br>
      </Row>
    </div>
  );
}
export default SavingAccounts;
