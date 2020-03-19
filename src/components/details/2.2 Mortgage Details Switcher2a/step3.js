import React, { useState } from "react";
import { Row, Col, Select, Button } from "antd";
import "./step3.css";

const { Option } = Select;
function StepThree(props) {
  const [q4, setQ4] = useState(false);
  const [questions, setQuestions] = useState({
    bedrooms: "",
    howOldProp: "",
    propYear: "",
    currentValue: "",
    purchasePrice: "",
    lenderName: "",
    accNumber: "",
    outstandingBal: "",
    startingYear: "",
    rateType: "",
    yearsLeftOnMortgage: "",
    interestRate: "",
    monthlyRepay: "",
    missedPayments: ""
  });
  const lenders = [
    "KBC",
    "Ulster Bank",
    "AIB",
    "Bank of Ireland",
    "ICS",
    "PTSB",
    "EBS",
    "Other"
  ];
  const whatYears = [
    1970,
    1971,
    1972,
    1973,
    1974,
    1975,
    1976,
    1977,
    1978,
    1979,
    1980,
    1981,
    1982,
    1983,
    1984,
    1985,
    1986,
    1987,
    1988,
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
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
    console.log(e.target.value)
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
  function onChange(e) {
    setQuestions({ ...questions, [e.target.name]: e.target.value });
  }
  function handleChange(value) {}
  const handleRoute = route => {
    props.history.push(route);
  };
  return (
    <div className="details-step-three">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">
            Let's get some details on your current property and mortgage
          </h1>
        </Col>
        {/*
          <h6 className="h61">
            What year did you buy the property?
          </h6>

        <Col lg={24} className="q1 q3">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.purposeOfMortgage === "First Time Buyer"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="r1"
              id="r11"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="a"
            />
            <label for="r11">House</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.purposeOfMortgage === "House Mover"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="r1"
              id="r12"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="b"
            />
            <label for="r12">Appartment</label>
          </div>
        </Col> */}

        <Col lg={24}>
          <h6 className="h61">How many bedrooms does it have?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className={
                questions.bedrooms !== ""
                  ? "selectPRo maltaback" + " " + questions.bedrooms
                  : "selectPRo "
              }
              // className = "selectPRo maltaback"
              defaultValue="Select from options"
              // value = {questions.}
              onChange={value =>
                setQuestions({ ...questions, bedrooms: value })
              }
            >
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What year did you buy the property?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className={
                questions.propYear !== ""
                  ? "selectPRo maltaback" + " " + questions.propYear
                  : "selectPRo "
              }
              // className = "selectPRo maltaback"
              defaultValue="Select from options"
              // value = {questions.}
              onChange={value =>
                setQuestions({ ...questions, propYear: value })
              }
            >
              {whatYears.map((value, index) => {
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
          <h6 className="h61">How old is the property?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className={
                questions.howOldProp !== ""
                  ? "selectPRo maltaback" + " " + questions.howOldProp
                  : "selectPRo "
              }
              // className = "selectPRo maltaback"
              defaultValue="Select from options"
              // value = {questions.}
              onChange={value =>
                setQuestions({ ...questions, howOldProp: value })
              }
            >
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">
            What was the purchase price when you bought the property?
          </h6>
        </Col>
        <Col lg={24}>
          <div
             className={
              questions.purchasePrice !== ""
                ? "input2 inputMalta "
                : "input2 "
            }
          >
            <span className="pre">€</span>
            <input 
            
              onChange={onChange}
              name="purchasePrice"
              type="text"
              placeholder="########"
            />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61 mm">What is the current value of the property?</h6>
          <p className="mini-msg">
            (if you don't know an estimate is fine for now)
          </p>
        </Col>
        <Col lg={24}>
          <div
            className={
              questions.currentValue !== ""
                ? "input2 inputMalta "
                : "input2 "
            }
          >
            <span className="pre">€</span>
            <input
              name="currentValue"
              onChange={onChange}
              type="text"
              // name="value"
              placeholder="########"
            />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Name of Current lender?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className={  questions.lenderName !== ""
              ? "selectPRo maltaback" 
              : "selectPRo "
          }
              defaultValue="Select from options"
              onChange={value =>
                setQuestions({ ...questions, lenderName: value })
              }
              name="lenderName"
            >
              {lenders.map((value, index) => {
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
          <h6 className="h61">Mortgage account number?</h6>
        </Col>
        <Col lg={24}>
          <div   className={
              questions.accNumber !== ""
                ? "input2 inputMalta "
                : "input2 "
            }>
            <input 
            onChange={onChange}
            name="accNumber" type="text" placeholder="#######" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is the current outstading balance?</h6>
        </Col>
        <Col lg={24}>
          <div  className={
              questions.outstandingBal !== ""
                ? "input2 inputMalta "
                : "input2 "
            }>
            <span className="pre">€</span>
            <input
            onChange={onChange}
            name="outstandingBal" type="text" placeholder="########" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What year did you start the mortgate?</h6>
        </Col>
         <Col lg={24}>
          <div>
            <Select
              className={
                questions.startingYear !== ""
                  ? "selectPRo maltaback" + " " + questions.startingYear
                  : "selectPRo "
              }
              // className = "selectPRo maltaback"
              defaultValue="Select from options"
              // value = {questions.}
              onChange={value =>
                setQuestions({ ...questions, startingYear: value })
              }
            >
              {whatYears.map((value, index) => {
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
          <h6 className="h61">What type of rate you are on?</h6>
        </Col>
        <Col lg={24} className="q1 q3">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.purposeOfMortgage === "First Time Buyer"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="rateType"
              id="q21"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="a"
            />
            <label for="q21">Fixed</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.purposeOfMortgage === "House Mover"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="rateType"
              id="q22"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="b"
            />
            <label for="q22">Variable</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.purposeOfMortgage === "Switcher"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="rateType"
              id="q23"
              // checked={
              //   questions.purposeOfMortgage === "Switcher"
              // }
              className=""
              value="c"
            />
            <label for="q23">Tracker</label>
          </div>
        </Col>

     {questions.rateType == "a" ?    <div>
     <Col lg={24}>
          <h6 className="h61">How long is left on the fixed rate?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option2"
              defaultValue="Select Years"
              onChange={handleChange}
            >
              <Option value="<1">&lt;1</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="5+">5+</Option>
              
            </Select>
            <Select
              className="select-option2"
              defaultValue="Select Month"
              onChange={handleChange}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
              <Option value="7">7</Option>
              <Option value="8">8</Option>
              <Option value="9">9</Option>
              <Option value="10">10</Option>
              <Option value="11">11</Option>
              <Option value="12">12</Option>
            </Select>
          </div>
        </Col>
     </div>
 : null}
        <Col lg={24}>
          <h6 className="h61">How long is left on the mortgage?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              name="yearsLeftOnMortgage"
              className={
                questions.yearsLeftOnMortgage !== ""
                  ? "selectPRo maltaback" 
                  : "selectPRo "
              }
              defaultValue="Select Years"
              onChange={value =>
                setQuestions({ ...questions, yearsLeftOnMortgage: value })
              }
            >
              {years.map((value, index) => {
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
          <h6 className="h61">What interest rate are you paying??</h6>
        </Col>
        <Col lg={24}>
          <div className={
              questions.interestRate !== ""
                ? "input2 inputMalta "
                : "input2 "
            }>
            <span className="post">%</span>
            <input name="interestRate" type="text" placeholder=""
            onChange = {onChange} />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is your monthly repayment?</h6>
        </Col>
        <Col lg={24}>
          <div className={  questions.monthlyRepay !== ""
                ? "input2 inputMalta "
                : "input2 "
            }>
            <span className="pre">€</span>
            <input  onChange = {onChange} name="monthlyRepay" type="text" placeholder="########" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">
            Have you missed any payment over the last two years?
          </h6>
        </Col>
        <Col lg={24} className="q1 q4">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.purposeOfMortgage === "First Time Buyer"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="missedPayments"
              id="q31"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="a"
            />
            <label for="q31">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.purposeOfMortgage === "House Mover"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="missedPayments"
              id="q32"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="b"
            />
            <label for="q32">No</label>
          </div>
        </Col>

        <Col lg={10} offset={0}>
          <br />
          <br />
          <div className="btn-div">
            <Button
              style={{ height: "40px" }}
              onClick={() => {
                props.isMortgageFrom(0);
                props.setProgress(0);
              }}
              className="btn1"
            >
              Back
            </Button>
            <Button
              onClick={() => {
                props.setProgress(66);
                props.isMortgageFrom(2);
              }}
              // onClick={onsubmitForm}
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
              Countinue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default StepThree;
