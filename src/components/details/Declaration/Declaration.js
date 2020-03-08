import React, { useState } from "react";
import { Row, Col, Select, Button, DatePicker } from "antd";
import "./Declaration.css";
import { countries } from "./Countries"

const { Option } = Select;
function Declaration(props) {
  const [q4, setQ4] = useState(false);
  const [disEstimate, setDisEstimate] = useState(true);
  const [addP, setAddP] = useState(undefined);
  const [questions, setQuestions] = useState({
    q1: ""
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
  function handleCounty(value, name) {
    // console.log(`${name} ${value}`);
    setQuestions({ ...questions, county: value });
  }
  function handlePreCounty(value, name) {
    // console.log(`${name} ${value}`);
    setQuestions({ ...questions, previous_county: value });
  }
  function handleChange(value, name) {
    console.log(`${name} ${value}`);
    // setQuestions({ ...questions, county: value });
  }
  function handleSource(value) {
    setQuestions({ ...questions, source: value });
  }
  function handleBirthPlace(value) {
    setQuestions({ ...questions, birthPlace: value });
  }
  function handleResidentCountry(value) {
    setQuestions({ ...questions, residentCountry: value });
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
    if (e) {
      console.log(e._d.toDateString(), person);
      setQuestions({ ...questions, [person]: e._d.toDateString() });
    } else {
      setQuestions({ ...questions, [person]: "" });
    }
  }
  function handlePurpose(value) {
    setQuestions({ ...questions, purpose: value });
  }
  const handleRoute = route => {
    if (addP && addP > 0) props.history.push(route + "/" + addP);
    else props.history.push("/home/details/final_page");
  };

  console.log(questions);

  return (
    <div className="declarations">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">Details of your declarations</h1>
          <h6 className="h61">What is your place of birth?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className={
                questions.birthPlace ? "select-option1 bg-o" : "select-option1"
              }
              name="birthPlace"
              defaultValue="Select from options"
              onChange={handleBirthPlace}
            >
              {countries.map((value, index) => {
                return (
                  <Option key={index} value={value.label}>
                    {value.label}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is your Irish PPS number?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            className={
              questions.irishPPSNum
                ? "input2 input2simple bg-o"
                : "input2 input2simple"
            }
          >
            <input
              type="text"
              name="irishPPSNum"
              onChange={handleInput}
              placeholder="########"
            />
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">How long have you lived in Ireland?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            className={
              questions.yearsLivedInIreland
                ? "input2 input2simple bg-o"
                : "input2 input2simple"
            }
          >
            <input
              type="text"
              name="yearsLivedInIreland"
              onChange={handleInput}
              placeholder="Years"
            />
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">Do you require a visa to work in ireland ?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.visaRequired === "Yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="visaRequired"
              id="visaRequired1"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Yes"
            />
            <label for="visaRequired1">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.visaRequired === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="visaRequired"
              id="visaRequired2"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="No"
            />
            <label for="visaRequired2">No</label>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What type of Visa do you have?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            className={
              questions.visaType
                ? "input2 input2simple bg-o"
                : "input2 input2simple"
            }
          >
            <input
              type="text"
              name="visaType"
              onChange={handleInput}
              placeholder="White here"
            />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61"> What is the expiry date of your visa?</h6>
        </Col>

        <Col lg={24} className="q1">
          <div
            className={
              questions.visaExpiryDate
                ? "input2 input2simple bg-o"
                : "input2 input2simple"
            }
          >
            <DatePicker
              className="date-picker"
              onChange={e => onChange(e, "visaExpiryDate")}
            />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Are you a US citizen?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.USCitizen === "Yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="USCitizen"
              id="USCitizen1"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Yes"
            />
            <label for="USCitizen1">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.USCitizen === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="USCitizen"
              id="USCitizen2"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="No"
            />
            <label for="USCitizen2">No</label>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Are you US tax resident?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.USTaxResident === "Yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="USTaxResident"
              id="USTaxResident1"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Yes"
            />
            <label for="USTaxResident1">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.USTaxResident === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="USTaxResident"
              id="USTaxResident2"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="No"
            />
            <label for="USTaxResident2">No</label>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Please proive your TIN</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            className={
              questions.TIN ? "input2 input2simple bg-o" : "input2 input2simple"
            }
          >
            <input
              type="number"
              name="TIN"
              onChange={handleInput}
              placeholder="XXX-XX-XXX"
            />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Are you resident in a foreign country?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.foreignResident === "yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="foreignResident"
              id="foreignResident1"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Yes"
            />
            <label for="foreignResident1">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.foreignResident === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="foreignResident"
              id="foreignResident2"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="No"
            />
            <label for="foreignResident2">No</label>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">What country are you resident in ?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className={
                questions.residentCountry ? "select-option1 bg-o" : "select-option1"
              }
              name="maritalStatus"
              defaultValue="Select from options"
              onChange={handleResidentCountry}
            >
              {countries.map((value, index) => {
                return (
                  <Option key={index} value={value.label}>
                    {value.label}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">
            Are you aware of any future changes to your circumstances that may affect your ability to repay your proposed mortgage?
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.awareOfFuture === "yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="awareOfFuture"
              id="awareOfFuture1"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Yes"
            />
            <label for="awareOfFuture1">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.awareOfFuture === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="awareOfFuture"
              id="awareOfFuture2"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="No"
            />
            <label for="awareOfFuture2">No</label>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Please provide details</h6>
        </Col>
        <Col lg={24}>
          <div className={questions.futureDetails ? "textarea-input bg-o" : "textarea-input"}>
            <textarea
              name="futureDetails"
              onChange={handleInput} placeholder="Please provide details"></textarea>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">
            Are you aware of any health issues that may affect your ability to work and meet the repayment of your proposed mortgage?
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.awareOfFutureHealth === "yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="awareOfFutureHealth"
              id="awareOfFutureHealth1"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Yes"
            />
            <label for="awareOfFutureHealth1">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.awareOfFutureHealth === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="awareOfFutureHealth"
              id="awareOfFutureHealth2"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="No"
            />
            <label for="awareOfFutureHealth2">No</label>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">Please provide details</h6>
        </Col>
        <Col lg={24}>
          <div className={questions.futureHealthDetails ? "textarea-input bg-o" : "textarea-input"}>
            <textarea
              name="futureHealthDetails"
              onChange={handleInput} placeholder="Please provide details"></textarea>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">
            Have you ever been made bankrupt, made any arrangements to restructure your obligations with creditors, had any court judgements for debt made against you or been in arrears with any existing or previous loans?
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.everMadeBankrupt === "yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="everMadeBankrupt"
              id="everMadeBankrupt1"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Yes"
            />
            <label for="everMadeBankrupt1">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.everMadeBankrupt === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="everMadeBankrupt"
              id="everMadeBankrupt2"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="No"
            />
            <label for="everMadeBankrupt2">No</label>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Please provide details</h6>
        </Col>
        <Col lg={24}>
          <div className={questions.bankrupDetails ? "textarea-input bg-o" : "textarea-input"}>
            <textarea
              name="bankrupDetails"
              onChange={handleInput} placeholder="Please provide details"></textarea>
          </div>
        </Col>


        <Col lg={24}>
          <h6 className="h61">
            Have you ever been refused a mortgage on this or any other property?
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.refusedMortgage === "yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="refusedMortgage"
              id="refusedMortgage1"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Yes"
            />
            <label for="refusedMortgage1">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.refusedMortgage === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="refusedMortgage"
              id="refusedMortgage2"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="No"
            />
            <label for="refusedMortgage2">No</label>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Please provide details</h6>
        </Col>
        <Col lg={24}>
          <div className={questions.refusedMortgageDetails ? "textarea-input bg-o" : "textarea-input"}>
            <textarea
              name="refusedMortgageDetails"
              onChange={handleInput} placeholder="Please provide details"></textarea>
          </div>
        </Col>



        <Col lg={10} offset={0}>
          <br />
          <br />
          <div className="btn-div">
            <Button
              style={{ height: "40px" }}
              onClick={() => window.history.back()}
              className="btn1"
            >
              Back
            </Button>
            <Button
              onClick={() => handleRoute("/home/details/additional_p")}
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
              Save & Countinue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Declaration;
