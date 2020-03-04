import React, { useState } from "react";
import { Row, Col, Select, Button, DatePicker, Dropdown } from "antd";
import "./personalDetails.css";
import moment from "moment";
import { connect } from "react-redux";
import * as Actions from "../../../redux/actions/details/detailsAction";
import Api from "../../../redux/api/detailsApi";
import { withRouter } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import SelectBoxa from "../../utils/Selectbox";
const { Option } = Select;

function PersonalDetails1(props) {
  const [q4, setQ4] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  //Edit
  const [dateOfBirthEmpty, setDateOfBirthEmpty] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  // const [dateOfBirth, setDateOfBirth] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");

  //End Edit
  const [disEstimate, setDisEstimate] = useState(true);
  const [addP, setAddP] = useState(undefined);
  const [questions, setQuestions] = useState({
    youGoBy: "",
    firstName: "",
    surName: "",
    middleName: "",
    maidenName: "",
    yourIdentification: "",
    phone: "",
    email: "",
    dateOfBirth: ""
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
  const additionaProperties = [1, 2, 3, 4, "4+"];
  const goBy = ["Mr", "Mrs", "Miss", "Dr.", "Other"];
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
  function handleChild(value) {
    setDropdownValue(value);
    setIsOpenDropDown(false);
  }
  function onChangeDate(date, dateString) {
    return (
      setQuestions({ ...questions, dateOfBirth: date }),
      setDateOfBirthEmpty(false)
    );
  }
  function handleAdditionalP(value) {
    setAddP(value);
  }
  function handleInput(e) {
    setQuestions({ ...questions, [e.target.name]: e.target.value });
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function handleSource(value) {
    setQuestions({ ...questions, source: value });
  }
  function handlePurpose(value) {
    setQuestions({ ...questions, youGoBy: value });
  }
  function onsubmitForm(e) {
    // e.preventDefault();

    console.log("Question final result", questions);
    props.set_Personal_Details({
      userId: props.userId,
      applicant2: {
        ...questions
      }
    });
    props.changeProfRout(2)

  }
  const handleRoute = route => {
    alert("asidflkj");
    props.changeProfRout(2);
  };
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  return (
    <div className="personal-details1">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">
            Now let's get some personal details about yourself
          </h1>
          <h6 className="h61">You go by?</h6>
        </Col>

        <Col lg={24}>
          <div>
            {/* <SelectBoxa 
          valueItem={dropdownValue}
          optionsItem={goBy}
          handlebedFunc={handleChild}
          /> */}
            <Select
              className={
                questions.youGoBy !== ""
                  ? "selectPRo maltaback" + " " + questions.youGoBy
                  : "selectPRo "
              }
              defaultValue="Select from options"
              onChange={handlePurpose}
            >
              {goBy.map((value, index) => {
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
          <h6 className="h61">What is your first name?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            className={
              disEstimate
                ? "input2 input2simple input2disabled "
                : "input2 input2simple"
            }
          >
            {/* <span className="pre">€</span> */}
            <input
              type="text"
              disabled={disEstimate}
              name="firstName"
              placeholder="First name"
              onChange={handleInput}
            />
          </div>
          <div className="input-edit-btn" onClick={() => setDisEstimate(false)}>
            <span className="far fa-edit span1"></span>
            <span className=".span">Edit</span>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is your surname?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            className={
              disEstimate
                ? "input2 input2simple input2disabled "
                : "input2 input2simple"
            }
          >
            <input
              type="text"
              disabled={disEstimate}
              name="surName"
              placeholder="Surname"
              onChange={handleInput}
            />
          </div>
          <div className="input-edit-btn" onClick={() => setDisEstimate(false)}>
            <span className="far fa-edit span1"></span>
            <span className=".span">Edit</span>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is your middle name if applicable?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            className={
              questions.middleName
                ? "input2 input2simple"
                : "input2 input2simple input2disabled"
            }
          >
            <input
              type="text"
              name="middleName"
              onChange={handleInput}
              placeholder="middle name"
              onChange={handleInput}
            />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is your maiden name if applicable?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            className={
              questions.maidenName
                ? "input2 input2simple"
                : "input2 input2simple input2disabled"
            }
          >
            <input
              type="text"
              name="maidenName"
              onChange={handleInput}
              placeholder="maiden name"
              onChange={handleInput}
            />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">You identify yourself as </h6>
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
              name="yourIdentification"
              id="genderM"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Male"
            />
            <label for="genderM">Male</label>
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
              name="yourIdentification"
              id="genderF"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="Female"
            />
            <label for="genderF">Female</label>
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
              name="yourIdentification"
              id="genderO"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="Other"
            />
            <label for="genderO">Other</label>
          </div>
        </Col>
        {/* 
        <Col lg={24}>
        <div className="input">
              <h6 className="input-lbl">What's their Phone Number?</h6>
              <div
                className={
                  questions.phone
                    ? "ifExitaNu mysetting aaa"
                    : "mysetting aaa"
                }
              >
                <PhoneInput
                 disabled={disEstimate}
                  country={"ie"}
                  value={questions.phone}
                  onChange={phone =>
                    setQuestions({
                      ...questions,
                      phone,
                      phoneEmpty: false
                    })
                  }
                  className="inputPhonepok"
                  name="phone"
                  placeholder=" ###########"
                />
                {questions.phoneEmpty && (
                  <span>* This field cannot be empty</span>
                )}
              </div>
            </div>
          <div className="input-edit-btn" onClick={() => setDisEstimate(false)}>
            <span className="far fa-edit span1"></span>
            <span className=".span">Edit</span>
          </div>
        </Col> */}
        {/* <Col lg={24}>
          <div className="input2">
            <span className="pre">€</span>
            <input type="text" placeholder="########" />
          </div>
        </Col> */}

        <Col lg={24}>
          <h6 className="h61">What's their Phone Number?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            className={
              disEstimate
                ? "input2 input2simple input2disabled "
                : "input2 input2simple"
            }
          >
            {/* <span className="pre">€</span> */}
            <input
              type="number"
              disabled={disEstimate}
              onChange={handleInput}
              name="phone"
              placeholder="xxx-xxx-xxxx"
            />
          </div>
          <div className="input-edit-btn" onClick={() => setDisEstimate(false)}>
            <span className="far fa-edit span1"></span>
            <span className=".span">Edit</span>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Whats your email address?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div
            className={
              disEstimate
                ? "input2 input2simple input2disabled "
                : "input2 input2simple"
            }
          >
            {/* <span className="pre">€</span> */}
            <input
              type="email"
              disabled={disEstimate}
              name="email"
              placeholder="Email Address"
              onChange={handleInput}
            />
          </div>
          <div className="input-edit-btn" onClick={() => setDisEstimate(false)}>
            <span className="far fa-edit span1"></span>
            <span className=".span">Edit</span>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">What is your date of birth?</h6>
          {dateOfBirthEmpty && (
            <span className="errormissting">* This field cannot be empty</span>
          )}
        </Col>
        <Col lg={24} className="q1">
          <div className="datepic">
            <DatePicker
              format={dateFormatList}
              className={
                questions.dateOfBirth !== ""
                  ? "radio-container container_malta"
                  : "radio-container"
              }
              onChange={onChangeDate}
              defaultValue={moment(
                questions.dateOfBirth ? questions.dateOfBirth : Date.now()
              )}
              // placeholder="Please Select "
            />
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
              // onClick={() =>props.changeProfRout(2)}
              onClick={()=>{onsubmitForm()}}
              className="btn2"
            >
              Save & Countinue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = ({
  userReducer: {
    user: { _id }
  }
}) => ({
  userId: _id
});

const mapDispatchToProps = dispacth => ({
  set_Personal_Details: props => dispacth(Api.personalDetailsDataPost(props))
  //  onSaveQ4Data : (data) => dispacth(Actions.saveQ4Data(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonalDetails1));
