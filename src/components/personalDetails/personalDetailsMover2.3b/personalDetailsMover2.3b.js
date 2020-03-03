import React, { useState } from "react";
import { Row, Col, Select, Button, DatePicker, Checkbox } from "antd";
import "./personalDetailsMover2.3b.css";
const { Option } = Select;
function PersonalDetailsMover2p3b(props) {
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
  const numberOfChilds = [0, 1, 2, 3, 4, 5, 6];
  const occupyers = [0, 1, 2, 3, 4, 5];
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
  function onCheckChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className="personal-details2p3b">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">
            Now let's get some personal details about yourself
          </h1>
          <h6 className="h611">Your Current address is:</h6>
          <Checkbox onChange={onCheckChange}>
            Tick if same as first applicant
          </Checkbox>
        </Col>
        <Col lg={24}>
          <div className={questions.address1 ? "input bg-orange" : "input"}>
            <input
              type="text"
              onChange={e => handleInput(e)}
              name="address1"
              placeholder="Address Line 1"
            />
          </div>
          <div className={questions.city ? "input bg-orange" : "input"}>
            <input
              type="text"
              onChange={e => handleInput(e)}
              name="city"
              placeholder="City"
            />
          </div>
          <div className="input">
            {/* <input type="text" name="Country" placeholder="County" /> */}
            <Select
              name="county"
              className={
                questions.county
                  ? "select-option1 select-option-big bg-o"
                  : "select-option1 select-option-big"
              }
              defaultValue="County"
              onChange={handleCounty}
            >
              {county.map((value, index) => {
                return (
                  <Option key={index} value={value}>
                    {value}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className={questions.eircode ? "input bg-orange" : "input"}>
            <input
              type="text"
              onChange={e => handleInput(e)}
              name="eircode"
              placeholder="Eircode"
            />
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">Is this the family home ?</h6>
        </Col>
        <Col lg={24} className="q1">
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
              name="areyou"
              id="areyou1"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Yes"
            />
            <label for="areyou1">Yes</label>
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
              name="areyou"
              id="areyou2"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="No"
            />
            <label for="areyou2">No</label>
          </div>
        </Col>
        {/* <Col lg={24}>
          <h6 className="h61">What rent do you pay each month, if any?</h6>
        </Col>
        <Col lg={24}>
          <div className={questions.rent ? "input2 bg-o" : "input2"}>
            <span className="pre">€</span>
            <input
              type="text"
              name="rent"
              onChange={handleInput}
              placeholder="########"
            />
          </div>
        </Col> */}

        <Col lg={24}>
          <h6 className="h61">How long have you lived there?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            className={
              questions.year
                ? "input2 input2simple bg-o"
                : "input2 input2simple"
            }
          >
            <input
              type="number"
              name="year"
              onChange={handleInput}
              placeholder="years"
            />
          </div>
        </Col>
        {questions.year && questions.year < 3 && (
          <Col lg={24}>
            <h6 className="h611">What was your previous address?</h6>
            <Checkbox onChange={onCheckChange}>
              Tick if same as first applicant
            </Checkbox>
          </Col>
        )}
        {questions.year && questions.year < 3 && (
          <Col lg={24}>
            <div
              className={
                questions.previous_address1 ? "input bg-orange" : "input"
              }
            >
              <input
                type="text"
                onChange={e => handleInput(e)}
                name="previous_address1"
                placeholder="Address Line 1"
              />
            </div>
            <div
              className={questions.previous_city ? "input bg-orange" : "input"}
            >
              <input
                type="text"
                onChange={e => handleInput(e)}
                name="previous_city"
                placeholder="City"
              />
            </div>
            <div className="input">
              {/* <input type="text" name="Country" placeholder="County" /> */}
              <Select
                name="previous_county"
                className={
                  questions.previous_county
                    ? "select-option1 select-option-big bg-o"
                    : "select-option1 select-option-big"
                }
                defaultValue="County"
                onChange={handlePreCounty}
              >
                {county.map((value, index) => {
                  return (
                    <Option key={index} value={value}>
                      {value}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div
              className={
                questions.previous_eircode ? "input bg-orange" : "input"
              }
            >
              <input
                type="text"
                onChange={e => handleInput(e)}
                name="previous_eircode"
                placeholder="Eircode"
              />
            </div>
          </Col>
        )}
        <Col lg={24}>
          <h6 className="h61">What is your marital status?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className={
                questions.maritalStatus
                  ? "select-option1 bg-o"
                  : "select-option1"
              }
              name="maritalStatus"
              defaultValue="Select from options"
              onChange={handleMaritalS}
            >
              {maritalStatus.map((value, index) => {
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
          <h6 className="h61">
            How many children are financially dependent on you?
          </h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className={
                questions.numberOfChilds
                  ? "select-option1 bg-o"
                  : "select-option1"
              }
              defaultValue="Select from options"
              onChange={handleChilds}
            >
              {numberOfChilds.map((value, index) => {
                return (
                  <Option key={index} value={value}>
                    {value}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Col>
        {count.map((value, index) => {
          return (
            <>
              <Col lg={24}>
                <h6 className="h61">
                  What age is the {index + 1}
                  {index === 0 ? "st" : ""}
                  {index === 1 ? "nd" : ""}
                  {index === 2 ? "rd" : ""}
                  {index > 2 ? "th" : ""} child?
                </h6>
              </Col>
              <Col lg={24} className="q1">
                <div
                  className={
                    questions["child" + index + "age"]
                      ? "input2 input2simple bg-o"
                      : "input2 input2simple"
                  }
                >
                  <input
                    type="number"
                    name={"child" + index + "age"}
                    onChange={handleInput}
                    placeholder="years"
                  />
                </div>
              </Col>
            </>
          );
        })}

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
export default PersonalDetailsMover2p3b;
