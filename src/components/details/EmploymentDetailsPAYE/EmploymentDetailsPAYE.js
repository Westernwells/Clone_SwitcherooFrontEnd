import React, { useState } from "react";
import { Row, Col, Select, Button, DatePicker } from "antd";
import "./EmploymentDetailsPAYE.css";
import { countries } from "./Countries";

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
  const occupationsSector = [
    "Agriculture, hunting, forestry",
    "Fishing",
    "Mining and quarring",
    "Manufacturing",
    "Electricity, gas, water supply",
    "Construction",
    "Wholesale and retail trade",
    "Hotel and restaurant",
    "Transport, storage and comunications",
    "Financial intermediation",
    "Real estate, renting and business activities",
    "Publin administration and defence",
    "Education",
    "Heath and social work",
    "Other services",
    "Private household with employed persons",
    "Extra-territorial organisations and bodies"
  ];
  const occupations = [
    "Manager or Administrator",
    "Professional",
    "Associate Profesional and Technical",
    "Clerical and Secreterial",
    "Craft and Related",
    "Personal and Proactive Services",
    "Sales",
    "Plant and Machine Operative",
    "Other"]

  const employmentTypes = ["PAYE", "Self Employed", "Homemaker", "Other"];
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
  function handleEmployersCounty(value) {
    setQuestions({ ...questions, employersCounty: value });
  }
  function handleAccountantCounty(value) {
    setQuestions({ ...questions, accountantCounty: value });
  }
  function handleBusinessCounty(value) {
    setQuestions({ ...questions, businessCounty: value });
  }
  function handlePrevEmployersCounty(value) {
    setQuestions({ ...questions, prevEmployersCounty: value });
  }
  function handlePreCounty(value, name) {
    setQuestions({ ...questions, previous_county: value });
  }
  function handleChange(value, name) {
    console.log(`${name} ${value}`);
    // setQuestions({ ...questions, county: value });
  }
  function handleSource(value) {
    setQuestions({ ...questions, source: value });
  }
  function handleEmploymentType(value) {
    setQuestions({ ...questions, employmentType: value });
  }
  function handleOccupation(value) {
    setQuestions({ ...questions, occupation: value });
  }
  function handleOccupationSector(value) {
    setQuestions({ ...questions, occupationSector: value });
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
  function onsubmitForm(value) {
    props.changeProfRoute(4)
  }
  const handleRoute = route => {
    if (addP && addP > 0) props.history.push(route + "/" + addP);
    else props.history.push("/home/details/final_page");
  };

  console.log(questions);

  return (
    <div className="emp-details">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">Details on your Employment</h1>
          <h6 className="h61">What type of employment are you in?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className={
                questions.employmentType ? "select-option1 bg-o" : "select-option1"
              }
              name="birthPlace"
              defaultValue="Select from options"
              onChange={handleEmploymentType}
            >
              {employmentTypes.map((value, index) => {
                return (
                  <Option key={index} value={value}>
                    {value}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Col>
        {questions.employmentType && questions.employmentType === "Other" &&
          <>
            <Col lg={24}>
              <h6 className="h61">If Other please provide details</h6>
            </Col>

            <Col lg={24}>
              <div
                className={
                  questions.employmentDetail ? "textarea-input bg-o" : "textarea-input"
                }
              >
                <textarea
                  name="employmentDetail"
                  onChange={handleInput}
                  placeholder="Please provide details"
                ></textarea>
              </div>
            </Col>
          </>}
        {questions.employmentType && questions.employmentType !== "Self Employed" &&
          <>
            <Col lg={24}>
              <h6 className="h61">Do you work in the public or private sector ?</h6>
            </Col>
            <Col lg={24} className="q1 q4">
              <div
                onClick={e => clickRadio(e)}
                className={
                  questions.workingSector === "Public"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="workingSector"
                  id="workingSector1"
                  className=""
                  // checked={questions.purposeOfMortgage === "a"}
                  value="Public"
                />
                <label for="workingSector1">Public</label>
              </div>
              <div
                onClick={clickRadio}
                className={
                  questions.workingSector === "Private"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="workingSector"
                  id="workingSector2"
                  // checked={questions.purposeOfMortgage === "House Mover"}
                  className=""
                  value="Private"
                />
                <label for="workingSector2">Private</label>
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">What is your occupation? (plesae provide best fit)</h6>
            </Col>
            <Col lg={24}>
              <div>
                <Select
                  className={
                    questions.occupation
                      ? "select-option1 bg-o"
                      : "select-option1"
                  }
                  name="occupation"
                  defaultValue="Select from options"
                  onChange={handleOccupation}
                >
                  {occupations.map((value, index) => {
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
              <h6 className="h61">If Other please describe</h6>
            </Col>
            <Col lg={24}>
              <div
                className={
                  questions.occupationDetails ? "textarea-input bg-o" : "textarea-input"
                }
              >
                <textarea
                  name="occupationDetails"
                  onChange={handleInput}
                  placeholder="Please provide details"
                ></textarea>
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">What is the name of your employer?</h6>
            </Col>
            <Col lg={24} className="q1">
              <div
                className={
                  questions.nameOfEmployer
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="nameOfEmployer"
                  onChange={handleInput}
                  placeholder="name"
                />
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">What sector is it in ? (please select best fit)</h6>
            </Col>
            <Col lg={24}>
              <div>
                <Select
                  className={
                    questions.occupationSector
                      ? "select-option1 bg-o"
                      : "select-option1"
                  }
                  name="occupationSector"
                  defaultValue="Select from options"
                  onChange={handleOccupationSector}
                >
                  {occupationsSector.map((value, index) => {
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
              <h6 className="h61">What type of position is this?</h6>
            </Col>
            <Col lg={24} className="q1 q3">
              <div
                onClick={e => clickRadio(e)}
                className={
                  questions.positionType === "Permanent"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="positionType"
                  id="positionType1"
                  className=""
                  // checked={questions.purposeOfMortgage === "a"}
                  value="Permanent"
                />
                <label for="positionType1">Permanent</label>
              </div>
              <div
                onClick={clickRadio}
                className={
                  questions.positionType === "Temporary"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="positionType"
                  id="positionType2"
                  // checked={questions.purposeOfMortgage === "House Mover"}
                  className=""
                  value="Temporary"
                />
                <label for="positionType2">Temporary</label>
              </div>
              <div
                onClick={clickRadio}
                className={
                  questions.positionType === "Contract"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="positionType"
                  id="positionType3"
                  // checked={questions.purposeOfMortgage === "House Mover"}
                  className=""
                  value="Contract"
                />
                <label for="positionType3">Contract</label>
              </div>
            </Col>




            <Col lg={24}>
              <h6 className="h61">What is your employers address?</h6>
            </Col>

            <Col lg={24}>
              <div className={questions.employersAddress ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="employersAddress"
                  placeholder="Address Line 1"
                />
              </div>
              <div className={questions.employersCity ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="employersCity"
                  placeholder="City"
                />
              </div>
              <div className="input">
                {/* <input type="text" name="Country" placeholder="County" /> */}
                <Select
                  name="employersCounty"
                  className={
                    questions.employersCounty
                      ? "select-option1 select-option-big bg-o"
                      : "select-option1 select-option-big"
                  }
                  defaultValue="County"
                  onChange={handleEmployersCounty}
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
              <div className={questions.employersEircode ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="employersEircode"
                  placeholder="Eircode"
                />
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">How long have you been with this employer?</h6>
            </Col>

            <Col lg={24} className="q1">
              <div
                className={
                  questions.yearsWorkingWithEmp
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="yearsWorkingWithEmp"
                  onChange={handleInput}
                  placeholder="Years"
                />
              </div>
              <div
                className={
                  questions.MonthsWorkingWithEmp
                    ? "ml-4 input2 input2simple bg-o"
                    : "ml-4 input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="MonthsWorkingWithEmp"
                  onChange={handleInput}
                  placeholder="Months"
                />
              </div>

            </Col>


            <Col lg={24}>
              <h6 className="h61">What is the name of your previous employer?</h6>
            </Col>
            <Col lg={24} className="q1">
              <div
                className={
                  questions.nameOfPrevEmployer
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="nameOfPrevEmployer"
                  onChange={handleInput}
                  placeholder="name"
                />
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">What type of position is this?</h6>
            </Col>
            <Col lg={24} className="q1 q3">
              <div
                onClick={e => clickRadio(e)}
                className={
                  questions.prevPositionType === "Permanent"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="prevPositionType"
                  id="prevPositionType1"
                  className=""
                  // checked={questions.purposeOfMortgage === "a"}
                  value="Permanent"
                />
                <label for="prevPositionType1">Permanent</label>
              </div>
              <div
                onClick={clickRadio}
                className={
                  questions.prevPositionType === "Temporary"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="prevPositionType"
                  id="prevPositionType2"
                  // checked={questions.purposeOfMortgage === "House Mover"}
                  className=""
                  value="Temporary"
                />
                <label for="prevPositionType2">Temporary</label>
              </div>
              <div
                onClick={clickRadio}
                className={
                  questions.prevPositionType === "Contract"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="prevPositionType"
                  id="prevPositionType3"
                  // checked={questions.purposeOfMortgage === "House Mover"}
                  className=""
                  value="Contract"
                />
                <label for="prevPositionType3">Contract</label>
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">What is your previous employer's address?</h6>
            </Col>
            <Col lg={24}>
              <div className={questions.prevEmployersAddress ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="prevEmployersAddress"
                  placeholder="Address Line 1"
                />
              </div>
              <div className={questions.prevEmployersCity ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="prevEmployersCity"
                  placeholder="City"
                />
              </div>
              <div className="input">
                {/* <input type="text" name="Country" placeholder="County" /> */}
                <Select
                  name="prevEmployersCounty"
                  className={
                    questions.prevEmployersCounty
                      ? "select-option1 select-option-big bg-o"
                      : "select-option1 select-option-big"
                  }
                  defaultValue="County"
                  onChange={handlePrevEmployersCounty}
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
              <div className={questions.prevEmployersEircode ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="prevEmployersEircode"
                  placeholder="Eircode"
                />
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">How long were you with this previous employer?</h6>
            </Col>

            <Col lg={24} className="q1">
              <div
                className={
                  questions.yearsWorkedWithPrevEmp
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="yearsWorkedWithPrevEmp"
                  onChange={handleInput}
                  placeholder="Years"
                />
              </div>
              <div
                className={
                  questions.monthsWorkedWithPrevEmp
                    ? "ml-4 input2 input2simple bg-o"
                    : "ml-4 input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="monthsWorkedWithPrevEmp"
                  onChange={handleInput}
                  placeholder="Months"
                />
              </div>

            </Col>
          </>}

        {questions.employmentType && questions.employmentType === "Self Employed" &&
          <>
            <Col lg={24}>
              <h6 className="h61">Do you work in the public or private sector ?</h6>
            </Col>
            <Col lg={24} className="q1 q4">
              <div
                onClick={e => clickRadio(e)}
                className={
                  questions.workingSector === "Public"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="workingSector"
                  id="workingSector1"
                  className=""
                  // checked={questions.purposeOfMortgage === "a"}
                  value="Public"
                />
                <label for="workingSector1">Public</label>
              </div>
              <div
                onClick={clickRadio}
                className={
                  questions.workingSector === "Private"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="workingSector"
                  id="workingSector2"
                  // checked={questions.purposeOfMortgage === "House Mover"}
                  className=""
                  value="Private"
                />
                <label for="workingSector2">Private</label>
              </div>
            </Col>
            <Col lg={24}>
              <h6 className="h61">What is the nature of your business?</h6>
            </Col>
            <Col lg={24} className="q1">
              <div
                className={
                  questions.natureOfBusiness
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="natureOfBusiness"
                  onChange={handleInput}
                  placeholder="white in words"
                />
              </div>
            </Col>
            <Col lg={24}>
              <h6 className="h61">What sector is it in ? (please select best fit)</h6>
            </Col>
            <Col lg={24}>
              <div>
                <Select
                  className={
                    questions.occupationSector
                      ? "select-option1 bg-o"
                      : "select-option1"
                  }
                  name="occupationSector"
                  defaultValue="Select from options"
                  onChange={handleOccupationSector}
                >
                  {occupationsSector.map((value, index) => {
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
              <h6 className="h61">What is the  trading name of your business?</h6>
            </Col>
            <Col lg={24} className="q1">
              <div
                className={
                  questions.businessName
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="businessName"
                  onChange={handleInput}
                  placeholder="business name"
                />
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">What year was it established?</h6>
            </Col>
            <Col lg={24} className="q1">
              <div
                className={
                  questions.establishYear
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="establishYear"
                  onChange={handleInput}
                  placeholder="write year"
                />
              </div>
            </Col>
            <Col lg={24}>
              <h6 className="h61">What % ownership do you have in this business?</h6>
            </Col>
            <Col lg={24}>
              <div className={questions.businessOwnPercentage ? "input2 bg-o" : "input2"}>
                <input
                  type="text"
                  name="businessOwnPercentage"
                  onChange={handleInput}
                  placeholder=""
                />
                <span className="post">%</span>
              </div>
            </Col>


            <Col lg={24}>
              <h6 className="h61">What is the address of your business ?</h6>
            </Col>

            <Col lg={24}>
              <div className={questions.businessAddress ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="businessAddress"
                  placeholder="Address Line 1"
                />
              </div>
              <div className={questions.businessCity ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="businessCity"
                  placeholder="City"
                />
              </div>
              <div className="input">
                {/* <input type="text" name="Country" placeholder="County" /> */}
                <Select
                  name="businessCounty"
                  className={
                    questions.businessCounty
                      ? "select-option1 select-option-big bg-o"
                      : "select-option1 select-option-big"
                  }
                  defaultValue="County"
                  onChange={handleBusinessCounty}
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
              <div className={questions.businessEircode ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="businessEircode"
                  placeholder="Eircode"
                />
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">What is the name of the accountancy firm you use?</h6>
            </Col>
            <Col lg={24} className="q1">
              <div
                className={
                  questions.accountancyFirm
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="accountancyFirm"
                  onChange={handleInput}
                  placeholder="name"
                />
              </div>
            </Col>
            <Col lg={24}>
              <h6 className="h61">Contact person?</h6>
            </Col>

            <Col lg={24} className="q1">
              <div
                className={
                  questions.contactPersonFName
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="contactPersonFName"
                  onChange={handleInput}
                  placeholder="first name"
                />
              </div>
              <div
                className={
                  questions.contactPersonSName
                    ? "ml-4 input2 input2simple bg-o"
                    : "ml-4 input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="contactPersonSName"
                  onChange={handleInput}
                  placeholder="surname"
                />
              </div>
            </Col>
            <Col lg={24}>
              <h6 className="h61">What is the address of your accountant?</h6>
            </Col>

            <Col lg={24}>
              <div className={questions.accountantAddress ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="accountantAddress"
                  placeholder="Address Line 1"
                />
              </div>
              <div className={questions.accountantCity ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="accountantCity"
                  placeholder="City"
                />
              </div>
              <div className="input">
                {/* <input type="text" name="Country" placeholder="County" /> */}
                <Select
                  name="accountantCounty"
                  className={
                    questions.accountantCounty
                      ? "select-option1 select-option-big bg-o"
                      : "select-option1 select-option-big"
                  }
                  defaultValue="County"
                  onChange={handleAccountantCounty}
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
              <div className={questions.accountantEircode ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="accountantEircode"
                  placeholder="Eircode"
                />
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">What is the phone number of your accountant?</h6>
            </Col>
            <Col lg={24} className="q1">
              <div
                className={
                  questions.accountantPhone
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="number"
                  name="accountantPhone"
                  onChange={handleInput}
                  placeholder="phone"
                />
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">Are threee years audited acccounts available?</h6>
            </Col>
            <Col lg={24} className="q1 q4">
              <div
                onClick={e => clickRadio(e)}
                className={
                  questions.accountsAvailable === "Yes"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="accountsAvailable"
                  id="accountsAvailable1"
                  className=""
                  // checked={questions.purposeOfMortgage === "a"}
                  value="Yes"
                />
                <label for="accountsAvailable1">Yes</label>
              </div>
              <div
                onClick={clickRadio}
                className={
                  questions.accountsAvailable === "No"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="accountsAvailable"
                  id="accountsAvailable2"
                  // checked={questions.purposeOfMortgage === "House Mover"}
                  className=""
                  value="No"
                />
                <label for="accountsAvailable2">No</label>
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">Are tax affairs up to date?</h6>
            </Col>
            <Col lg={24} className="q1 q4">
              <div
                onClick={e => clickRadio(e)}
                className={
                  questions.taxAffairsUpToDate === "Yes"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="taxAffairsUpToDate"
                  id="taxAffairsUpToDate1"
                  className=""
                  // checked={questions.purposeOfMortgage === "a"}
                  value="Yes"
                />
                <label for="taxAffairsUpToDate1">Yes</label>
              </div>
              <div
                onClick={clickRadio}
                className={
                  questions.taxAffairsUpToDate === "No"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="taxAffairsUpToDate"
                  id="taxAffairsUpToDate2"
                  // checked={questions.purposeOfMortgage === "House Mover"}
                  className=""
                  value="No"
                />
                <label for="taxAffairsUpToDate2">No</label>
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">How long have you worked in this business?</h6>
            </Col>

            <Col lg={24} className="q1">
              <div
                className={
                  questions.yearWorkedInBusiness
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="number"
                  name="yearWorkedInBusiness"
                  onChange={handleInput}
                  placeholder="years"
                />
              </div>
              <div
                className={
                  questions.monthsWorkedInBusiness
                    ? "ml-4 input2 input2simple bg-o"
                    : "ml-4 input2 input2simple"
                }
              >
                <input
                  type="number"
                  name="monthsWorkedInBusiness"
                  onChange={handleInput}
                  placeholder="months"
                />
              </div>
            </Col>


            <Col lg={24}>
              <h6 className="h61">What is the name of your previous employer?</h6>
            </Col>
            <Col lg={24} className="q1">
              <div
                className={
                  questions.nameOfPrevEmployer
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="nameOfPrevEmployer"
                  onChange={handleInput}
                  placeholder="name"
                />
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">What type of position was this?</h6>
            </Col>
            <Col lg={24} className="q1 q3">
              <div
                onClick={e => clickRadio(e)}
                className={
                  questions.prevPositionType === "Permanent"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="prevPositionType"
                  id="prevPositionType1"
                  className=""
                  // checked={questions.purposeOfMortgage === "a"}
                  value="Permanent"
                />
                <label for="prevPositionType1">Permanent</label>
              </div>
              <div
                onClick={clickRadio}
                className={
                  questions.prevPositionType === "Temporary"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="prevPositionType"
                  id="prevPositionType2"
                  // checked={questions.purposeOfMortgage === "House Mover"}
                  className=""
                  value="Temporary"
                />
                <label for="prevPositionType2">Temporary</label>
              </div>
              <div
                onClick={clickRadio}
                className={
                  questions.prevPositionType === "Contract"
                    ? "radio-container container_malta"
                    : "radio-container"
                }
              >
                <input
                  onChange={e => handleQ(e)}
                  type="radio"
                  name="prevPositionType"
                  id="prevPositionType3"
                  // checked={questions.purposeOfMortgage === "House Mover"}
                  className=""
                  value="Contract"
                />
                <label for="prevPositionType3">Contract</label>
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">What is your previous employer's address?</h6>
            </Col>
            <Col lg={24}>
              <div className={questions.prevEmployersAddress ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="prevEmployersAddress"
                  placeholder="Address Line 1"
                />
              </div>
              <div className={questions.prevEmployersCity ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="prevEmployersCity"
                  placeholder="City"
                />
              </div>
              <div className="input">
                {/* <input type="text" name="Country" placeholder="County" /> */}
                <Select
                  name="prevEmployersCounty"
                  className={
                    questions.prevEmployersCounty
                      ? "select-option1 select-option-big bg-o"
                      : "select-option1 select-option-big"
                  }
                  defaultValue="County"
                  onChange={handlePrevEmployersCounty}
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
              <div className={questions.prevEmployersEircode ? "input bg-orange" : "input"}>
                <input
                  type="text"
                  onChange={e => handleInput(e)}
                  name="prevEmployersEircode"
                  placeholder="Eircode"
                />
              </div>
            </Col>

            <Col lg={24}>
              <h6 className="h61">How long were you with this previous employer?</h6>
            </Col>

            <Col lg={24} className="q1">
              <div
                className={
                  questions.yearsWorkedWithPrevEmp
                    ? "input2 input2simple bg-o"
                    : "input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="yearsWorkedWithPrevEmp"
                  onChange={handleInput}
                  placeholder="Years"
                />
              </div>
              <div
                className={
                  questions.monthsWorkedWithPrevEmp
                    ? "ml-4 input2 input2simple bg-o"
                    : "ml-4 input2 input2simple"
                }
              >
                <input
                  type="text"
                  name="monthsWorkedWithPrevEmp"
                  onChange={handleInput}
                  placeholder="Months"
                />
              </div>

            </Col>
          </>
        }


        <Col lg={10} offset={0}>
          <br />
          <br />
          <div className="btn-div">
            <Button
              style={{ height: "40px" }}
              onClick={() => {
                props.changeProfRoute(1)
                props.setProgress(50)
              }}
              className="btn1"
            >
              Back
            </Button>
            <Button
              onClick={() => handleRoute("/home/details/additional_p")}
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
export default Declaration;
