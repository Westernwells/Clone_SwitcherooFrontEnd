import React, { useState } from "react";
import { Row, Col, Select, Button, DatePicker } from "antd";
import "./MonthlyOutgoings.css";
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
    "Other"
  ];

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
  const handleRoute = route => {
    if (addP && addP > 0) props.history.push(route + "/" + addP);
    else props.history.push("/home/details/final_page");
  };

  console.log(questions);

  return (
    <div className="m-outgoings">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">Details of your financial wellbeing</h1>
          <h6 className="h61">Do you have monthly childminding costs?</h6>
        </Col>

        <Col lg={24}>
          <div
            className={questions.childmindingCost ? "input2 bg-o" : "input2"}
          >
            <span className="pre">€</span>
            <input
              type="number"
              name="childmindingCost"
              onChange={handleInput}
              placeholder=""
            />
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">
            Do you have monthly spousal/maintenance costs?
          </h6>
        </Col>
        <Col lg={24}>
          <div className={questions.maintenanceCost ? "input2 bg-o" : "input2"}>
            <span className="pre">€</span>
            <input
              type="number"
              name="maintenanceCost"
              onChange={handleInput}
              placeholder=""
            />
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">Do you have private school fees? (annual)</h6>
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
          <h6 className="h61">
            Do you have social/sporting club subscriptions? (annual)
          </h6>
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
        <Col lg={24}>
          <h1 className="heading1 heading2">
            Ok, Now let's understand what credit commitments you have
          </h1>
        </Col>

        <Col lg={10} offset={0}>
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
