import React, { useState } from "react";
import { Row, Col, Select, Button, DatePicker } from "antd";
import "./incomDetailsPAYE.css";

const { Option } = Select;
function IncomeDetailsPAYE(props) {
  const [q4, setQ4] = useState(false);
  const [disEstimate, setDisEstimate] = useState(true);
  const [addP, setAddP] = useState(undefined);
  const [questions, setQuestions] = useState({
    currency:"€ Euro"
  });
  const purposes = [
    "Extension",
    "Kitchen",
    "Home improvements",
    "Furniture",
    "Other"
  ];
  const sources = [
    "earnings",
    "gift",
    "inheritance",
    "sale of assets",
    "equity relase",
    "other"
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
  const maritalStatus = [
    "Single",
    "Married",
    "Cohabitant",
    "Seperated",
    "Divorced",
    "Widowed",
    "Remarried"
  ];
  const additionaProperties = [1, 2, 3, 4, "4+"];
  const numberOfChilds = [1, 2, 3, 4, 5, 6];
  const occupyers = [1, 2, 3, 4, 5];
  const [count, setCount] = useState([]);
  const [countO, setCountO] = useState([]);
  const goBy = ["Mr", "Mrs", "Miss", "Dr.", "Other"];
  const currency = [
    {name:"€ Euro",sign:"€"},
    {name:"£ GBP",sign:"£"},
    {name:"$ US Dollar",sign:"$"},
    {name:"other",sign:" "},

   ];
  const relations = ["Son", "Daughter", "Father", "Friend", "Other"];
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
    var qs = questions;
    qs[e.target.name] = e.target.value;
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
  function handleAdditionalP(value) {
    setAddP(value);
  }
  function handleInput(e) {
    setQuestions({ ...questions, [e.target.name]: e.target.value });
  }
  function handleCurrency(value) {
    setQuestions({ ...questions, county: value });
  }
  function handlePreCounty(value, name) {
    setQuestions({ ...questions, currency: value });
  }
  function handleChange(value, name) {
    console.log(`${name} ${value}`);
    // setQuestions({ ...questions, county: value });
  }
  function handleSource(value) {
    setQuestions({ ...questions, source: value });
  }
  function handleMaritalS(value) {
    setQuestions({ ...questions, maritalStatus: value });
  }
  function handleRelationWith(value) {
    setQuestions({ ...questions, relationWithApplicant: value });
  }
  function handleOccuoyers(value) {
    setQuestions({ ...questions, numberOfOccupyer: value });
    var arr = [];
    for (var i = 1; i <= value; i++) {
      arr = [...arr, i];
      if (i === value) setCountO(arr);
    }
  }
  function handleChilds(value) {
    setQuestions({ ...questions, numberOfChilds: value });
    var arr = [];
    for (var i = 1; i <= value; i++) {
      arr = [...arr, i];
      if (i === value) setCount(arr);
    }
  }
  function onChange(e, person) {
    console.log(e._d.toDateString(), person);

    setQuestions({ ...questions, [person]: e._d.toDateString() });
  }
  function handlePurpose(value) {
    setQuestions({ ...questions, purpose: value });
  }
  const handleRoute = route => {
    if (addP && addP > 0) props.history.push(route + "/" + addP);
    else props.history.push("/home/details/final_page");
  };
  function onsubmitForm(e) {
    // props.getData(questions);
    // props.onSubmitData();
    props.changeProfRoute(4);
    // props.setProgress(0);
  }
  return (
    <div className="incom-details-paye">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">
            Please details that best describe your income, if you have none
            please enter zero
          </h1>
        </Col>
        <Col lg={24}>
          <h6 className="h6 inline currency">
            Currency
          </h6>
          <div>
            <Select
              className={
                questions.currency
                  ? "select-option1 bg-o"
                  : "select-option1"
              }
              name="maritalStatus"
              defaultValue={currency[0].name}
              onChange={handleCurrency}
            >
              {currency.map((value, index) => {
                return (
                  <Option key={index} value={value.name}>
                    {value.name}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <Row className="th-row">
            <Col className="th" lg={6}></Col>
            <Col className="th" lg={6}>This Year</Col>
            <Col className="th" lg={6}>Last Year</Col>
            <Col className="th" lg={6}>Previous Year</Col>
          </Row>
        </Col>
        <Col lg={24}>
          <Row className="details-row">
            <Col className="" lg={6}>
              <h6 className="h6-d">
                What is your basic salary
              </h6>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.basicSalaryThisYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="basicSalaryThisYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.basicSalaryLastYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="basicSalaryLastYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.basicSalaryPrevYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="basicSalaryPrevYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>

          </Row>
        </Col>
        <Col lg={24}>
          <Row className="details-row">
            <Col className="" lg={6}>
              <h6 className="h6-d dl">
              How much bonus do you earn in a year? 
              </h6>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.bonusEarnThisYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="bonusEarnThisYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.bonusEarnLastYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="bonusEarnLastYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.bonusEarnPrevYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="bonusEarnPrevYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>

          </Row>
        </Col>
        <Col lg={24}>
          <Row className="details-row">
            <Col className="" lg={6}>
              <h6 className="h6-d dl">
                How much overtime do you earn in a year?
              </h6>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.overtimeEarnThisYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="overtimeEarnThisYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.overtimeEarnLastYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="overtimeEarnLastYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.overtimeEarnPrevYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="overtimeEarnPrevYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>

          </Row>
        </Col>
        <Col lg={24}>
          <Row className="details-row">
            <Col className="" lg={6}>
              <h6 className="h6-d dl">
                How much commission do you earn in a year?
              </h6>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.commissionEarnThisYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="commissionEarnThisYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.commissionEarnLastYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="commissionEarnLastYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.commissionEarnPrevYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="commissionEarnPrevYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>

          </Row>
        </Col>
        <Col lg={24}>
          <Row className="details-row">
            <Col className="" lg={6}>
              <h6 className="h6-d tl">
                Do you receive any guaranteed allowances e.g. car/rent allowance?
              </h6>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.allowanceEarnThisYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="allowanceEarnThisYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.allowanceEarnLastYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="allowanceEarnLastYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.allowanceEarnPrevYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="allowanceEarnPrevYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>

          </Row>
        </Col>

        <Col lg={24}>
          <Row className="details-row">
            <Col className="" lg={6}>
              <h6 className="h6-d dl">
                Do you have any other form of income (non rental)?
              </h6>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.otherIncome1EarnThisYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="otherIncome1EarnThisYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.otherIncome1EarnLastYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="otherIncome1EarnLastYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.otherIncome1EarnPrevYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="otherIncome1EarnPrevYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>

          </Row>
        </Col>

        <Col lg={24}>
          <Row className="details-row">
            <Col className="" lg={6}>
              <h6 className="h6-d dl">
                Do you have any other form of income (non rental)?
              </h6>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.otherIncome2EarnThisYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="otherIncome2EarnThisYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.otherIncome2EarnLastYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="otherIncome2EarnLastYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>
            <Col className="" lg={6}>
              <div className={questions.otherIncome2EarnPrevYear ? "input2 bg-o" : "input2"}>
                <span className="pre">€</span>
                <input
                  type="text"
                  name="otherIncome2EarnPrevYear"
                  onChange={handleInput}
                  placeholder=""
                />
              </div>
            </Col>

          </Row>
        </Col>

        <Col lg={24}>
          <h1 className="heading1 heading2">
            Thank for these details, we now need to get information on your savings and any financial commitments you have
          </h1>
        </Col>


        <Col lg={10} offset={0}>
          <div className="btn-div">
            <Button
              style={{ height: "40px" }}
              onClick={() => {
                // props.secPageMethod(false);
                props.changeProfRoute(2);
                // props.setProgress(0);
              }}
              className="btn1"
            >
              Back
            </Button>
            <Button
              onClick={onsubmitForm}
              className="btn2"
            // loading={props.financial_data.loading}
            // disabled={
            //   (questions.filedBankruptcy &&
            //     questions.failedToPayLoan &&
            //     questions.purposeOfMortgage &&
            //     questions.peopleOnMortgage === "one") ||
            //     (questions.filedBankruptcy &&
            //       questions.failedToPayLoan &&
            //       questions.purposeOfMortgage &&
            //       questions.peopleOnMortgage === "two" &&
            //       questions.firstNameSecondApplicant &&
            //       questions.lastNameSecondApplicant &&
            //       questions.emailSecondApplicantValidation &&
            //       questions.emailSecondApplicantreValidation)
            //     ? false
            //     : true
            // }
            >
              Save & Countinue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default IncomeDetailsPAYE;
