import React, { useState, useEffect } from "react";
import { Row, Col, Button, Select, Modal } from "antd";
import { withRouter } from "react-router-dom";
import "./getStarted.css";
import Api from "../../../redux/api/financialHealthCheck";
import { connect } from "react-redux";
const phoneno = /^\d{10}$/;
const { Option } = Select;
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function info1() {
  Modal.info({
    title:
      "Sorry we don't do Investment Properties yet - check back with us later"
  });
}
function info2() {
  Modal.info({
    title:
      "Sorry we don't do Self-build properties yet - check back with us later"
  });
}
function GetStarted(props) {
  const [questions, setQuestions] = useState({
    filedBankruptcy: "",
    filedBankruptcyValidation: false,
    filedBankruptcyHelp: "",
    filedBankruptcyValidationStatus: "error",
    filedBankruptcyEmpty: false,

    failedToPayLoan: "",
    failedToPayLoanValidation: false,
    failedToPayLoanHelp: "",
    failedToPayLoanValidationStatus: "error",
    failedToPayLoanEmpty: false,

    purposeOfMortgage: "",
    purposeOfMortgageValidation: "",
    purposeOfMortgageHelp: "",
    purposeOfMortgageValidationStatus: "error",
    purposeOfMortgageEmpty: false,

    peopleOnMortgage: "one",

    firstNameSecondApplicant: "",
    lastNameSecondApplicant: "",
    contructionNature: "",
    contructionNatureEmpty: false,
    emailSecondApplicant: "",
    emailSecondApplicantValidation: false,
    emailSecondApplicantHelp: "",
    emailSecondApplicantValidationStatus: "error",
    firstNameSecondApplicantEmpty: false,
    lastNameSecondApplicantEmpty: false,
    emailSecondApplicantEmpty: false,

    emailSecondApplicantre: "",
    emailSecondApplicantreValidation: false,
    emailSecondApplicantreHelp: "",
    emailSecondApplicantreValidationStatus: "error",
    emailSecondApplicantreEmpty: false,

    phoneSecondApplicant: "",
    phoneSecondApplicantValidateStatus: "error",
    phoneSecondApplicanteHelp: "Enter a phone Number!",
    phoneSecondApplicantIsValid: false,
    phoneSecondApplicantEmpty: false,

    overAllFormValidate: false
  });
  const [q4, setQ4] = useState(false);
  function clickRadio(e) {
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  }

  const validateRadio = (name, value) => {
    switch (name) {
      case "filedBankruptcy":
      case "failedToPayLoan":
      case "purposeOfMortgage":
      case "contructionNature":
        if (value === "") {
          setQuestions({
            ...questions,
            [name]: value,
            [`${name}Validation`]: false,
            [`${name}Help`]: "please Select one of above",
            [`${name}ValidationStatus`]: false,
            [`${name}Empty`]: false
          });
        } else {
          setQuestions({
            ...questions,
            [name]: value,
            [`${name}Validation`]: true,
            [`${name}Help`]: "",
            [`${name}ValidationStatus`]: true,
            [`${name}Empty`]: false,
            overAllFormValidate: true
          });
        }
        break;
      case "emailSecondApplicant":
        if (!emailPattern.test(value)) {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantValidationStatus: "error",
            emailSecondApplicantHelp: "You email is not valid",
            emailSecondApplicantValidation: false,
            [`${name}Empty`]: false
          });
        } else {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantValidationStatus: "success",
            emailSecondApplicantHelp: "",
            emailSecondApplicantValidation: true,
            [`${name}Empty`]: false,
          });
        }
        break;
      case "emailSecondApplicantre":
        if (value !== questions.emailSecondApplicant) {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantreValidationStatus: "error",
            emailSecondApplicantreHelp: "You email is not match",
            emailSecondApplicantreValidation: false,
            [`${name}Empty`]: false
          });
        } else {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantreValidationStatus: "success",
            emailSecondApplicantreHelp: "",
            emailSecondApplicantreValidation: true,
            [`${name}Empty`]: false,
            overAllFormValidate: true
          });
        }
        break;
      case "phoneSecondApplicant":
        if (!phoneno.test(value)) {
          setQuestions({
            ...questions,
            [name]: value,
            phoneSecondApplicantValidateStatus: "error",
            phoneSecondApplicanteHelp: "Enter a valid Number!",
            phoneSecondApplicantIsValid: false,
            [`${name}Empty`]: false
          });
        } else {
          setQuestions({
            ...questions,
            [name]: value,
            phoneSecondApplicantValidateStatus: "success",
            phoneSecondApplicantHelp: "",
            phoneSecondApplicantIsValid: true,
            [`${name}Empty`]: false,
            overAllFormValidate: true
          });
        }
        break;
    }
  };
  var handleQ = e => {
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    var qs = questions;
    qs[e.target.name] = e.target.value;
    setQ4(!q4);
    validateRadio(e.target.name, e.target.value);
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

  const handleinput = e => {
    if (
      e.target.name === "emailSecondApplicant" ||
      e.target.name === "emailSecondApplicantre" ||
      e.target.name === "phoneSecondApplicant"
    ) {
      validateRadio(e.target.name, e.target.value);
    } else {
      debugger;
      setQuestions({
        ...questions,
        overAllFormValidate: true,
        [e.target.name]: e.target.value
      });
    }
    if (e.target.value !== "") {
      e.target.style.background = "#fb9500";
      e.target.style.border = "2px solid #fb9500";
    } else {
      e.target.style.background = "lightgray";
      e.target.style.border = "2px solid gray";
    }
  };
  useEffect(() => {
    if (props.financial_back_data.filedBankruptcy) {
      const {
        filedBankruptcy,
        failedToPayLoan,
        purposeOfMortgage,
        peopleOnMortgage,
        firstNameSecondApplicant,
        lastNameSecondApplicant,
        emailSecondApplicant,
        contructionNature,
        phoneSecondApplicant
      } = props.financial_back_data;

      setQuestions({
        ...questions,
        filedBankruptcy,
        failedToPayLoan,
        purposeOfMortgage,
        peopleOnMortgage,
        firstNameSecondApplicant,
        lastNameSecondApplicant,
        contructionNature,
        emailSecondApplicant,
        emailSecondApplicantre: emailSecondApplicant,
        phoneSecondApplicant,
        emailSecondApplicantreValidationStatus: "success",
        emailSecondApplicantreHelp: "",
        emailSecondApplicantreValidation: true,
        emailSecondApplicantValidationStatus: "success",
        emailSecondApplicantHelp: "",
        emailSecondApplicantValidation: true,
        phoneSecondApplicantValidateStatus: "success",
        phoneSecondApplicantHelp: "",
        phoneSecondApplicantIsValid: true
      });
    }
  }, [props.filedBankruptcy]);

  const onsubmitForm = () => {
    let overAllFormValidate = true;
    let filedBankruptcyEmpty = false;
    let failedToPayLoanEmpty = false;
    let contructionNatureEmpty = false;
    let purposeOfMortgageEmpty = false;
    let firstNameSecondApplicantEmpty = false;
    let phoneSecondApplicantEmpty = false;
    let lastNameSecondApplicantEmpty = false;
    let emailSecondApplicantEmpty = false;
    let emailSecondApplicantreEmpty = false;

    const {
      filedBankruptcy,
      failedToPayLoan,
      purposeOfMortgage,
      peopleOnMortgage,
      firstNameSecondApplicant,
      lastNameSecondApplicant,
      emailSecondApplicant,
      contructionNature,
      phoneSecondApplicant,
      emailSecondApplicantre
    } = questions;
    if (filedBankruptcy === "") {
      overAllFormValidate = false;
      filedBankruptcyEmpty = true;
    }
    if (!failedToPayLoan) {
      overAllFormValidate = false;
      failedToPayLoanEmpty = true;
    }
    if (!purposeOfMortgage) {
      overAllFormValidate = false;
      purposeOfMortgageEmpty = true;
    }
    if (!contructionNature) {
      overAllFormValidate = false;
      contructionNatureEmpty = true;
    }
    if (peopleOnMortgage === "two") {
      if (!firstNameSecondApplicant) {
        overAllFormValidate = false;
        firstNameSecondApplicantEmpty = true;
      }
      if (!lastNameSecondApplicant) {
        lastNameSecondApplicantEmpty = true;
        overAllFormValidate = false;
      }
      if (!emailSecondApplicant) {
        emailSecondApplicantEmpty = true;
        overAllFormValidate = false;
      }
      if (!emailSecondApplicantre) {
        emailSecondApplicantreEmpty = true;
        overAllFormValidate = false;
      }
      if (!phoneSecondApplicant) {
        phoneSecondApplicantEmpty = true;
        overAllFormValidate = false;
      }
    }

    setQuestions({
      ...questions,
      filedBankruptcyEmpty,
      failedToPayLoanEmpty,
      contructionNatureEmpty,
      purposeOfMortgageEmpty,
      firstNameSecondApplicantEmpty,
      phoneSecondApplicantEmpty,
      lastNameSecondApplicantEmpty,
      emailSecondApplicantEmpty,
      emailSecondApplicantreEmpty
    });
    const sigle = {
      filedBankruptcy,
      failedToPayLoan,
      purposeOfMortgage,
      peopleOnMortgage,
      contructionNature
    };
    const double = {
      filedBankruptcy,
      failedToPayLoan,
      purposeOfMortgage,
      peopleOnMortgage,
      firstNameSecondApplicant,
      lastNameSecondApplicant,
      emailSecondApplicant,
      contructionNature,
      phoneSecondApplicant
    };
    if (overAllFormValidate) {
      if (
        peopleOnMortgage === "two" &&
        emailSecondApplicantreValidation &&
        emailSecondApplicantValidation
      ) {
        props.set_financial_BackGround(
          {
            userId: props.userId,
            applicants: {
              ...props.financial_back_data,
              ...double
            }
          },
          callback
        );
      } else {
        props.set_financial_BackGround(
          {
            userId: props.userId,
            applicants: {
              ...props.financial_back_data,
              ...sigle
            }
          },
          callback
        );
      }
    }
  };
  const callback = () => {
    props.present && props.changeProfRout(1);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const {
    filedBankruptcyEmpty,
    failedToPayLoanEmpty,
    purposeOfMortgageEmpty,
    firstNameSecondApplicantEmpty,
    lastNameSecondApplicantEmpty,
    emailSecondApplicantEmpty,
    contructionNatureEmpty,
    phoneSecondApplicantEmpty,
    emailSecondApplicantreEmpty,
    emailSecondApplicantValidation,
    emailSecondApplicantreValidation,
    overAllFormValidate
  } = questions;
  return (
    <div className="financial-health innerIConinner">
      <Row className="fh-row-gs">
        <Col lg={24} className="col3 mysetting">
          <p className="heading3">What is the mortgage for?</p>
          {purposeOfMortgageEmpty && <span>* This field cannot be empty</span>}
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
              name="purposeOfMortgage"
              id="mortf"
              className=""
              checked={questions.purposeOfMortgage === "First Time Buyer"}
              value="First Time Buyer"
            />
            <label for="mortf">First Time Buyer</label>
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
              name="purposeOfMortgage"
              id="mortf1"
              checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="House Mover"
            />
            <label for="mortf1">Moving House</label>
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
              name="purposeOfMortgage"
              id="mortf2"
              checked={questions.purposeOfMortgage === "Switcher"}
              className=""
              value="Switcher"
            />
            <label for="mortf2">Switching to better rate</label>
          </div>
          <div
            onClick={info1}
            className={
              questions.purposeOfMortgage === "Looking For Investment Property"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="purposeOfMortgage"
              id="mortfp"
              className=""
              checked={
                questions.purposeOfMortgage ===
                "Finance for investment property"
              }
              value="Finance for investment property"
            />
            <label for="mortfp">Finance for investment property</label>
          </div>
        </Col>

        <Col lg={24} className="col3 mysetting">
          <p className="heading3">Nature of the construction?</p>
          {contructionNatureEmpty && <span>* This field cannot be empty</span>}
        </Col>
        <Col lg={24} className="q1 q3">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.contructionNature === "Part of a new development"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="contructionNature"
              id="mortfl"
              checked={
                questions.contructionNature === "Part of a new development"
              }
              value="Part of a new development"
            />
            <label for="mortfl">Part of a new development</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.contructionNature === "Second-hand property"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="contructionNature"
              id="mortf1s"
              checked={questions.contructionNature === "Second-hand property"}
              className=""
              value="Second-hand property"
            />
            <label for="mortf1s">Second-hand property</label>
          </div>
          <div
            onClick={info2}
            className={
              questions.contructionNature === "Self-Build"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="contructionNature"
              id="mortf2b"
              checked={questions.contructionNature === "Self-build"}
              className=""
              value="Self-build"
            />
            <label for="mortf2b">Self-build</label>
          </div>
        </Col>
        <Col lg={24} className="col2 mysetting">
          <p className="heading3">
            How many people do you want named on the mortgage?
          </p>
        </Col>
        <Col lg={24} className="note-col mysetting">
          <p className="heading2">
            It's ok if the person you're applying with doesn't have an income,
            they can still be named on your mortgage. choose option "Two" if
            you'd like to own the property together.
          </p>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.peopleOnMortgage === "one"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="peopleOnMortgage"
              id="q41"
              className=""
              checked={questions.peopleOnMortgage === "one"}
              value="one"
            />
            <label for="q41">One</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.peopleOnMortgage === "two"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="peopleOnMortgage"
              id="q42"
              className=""
              checked={questions.peopleOnMortgage === "two"}
              value="two"
            />
            <label for="q42">Two</label>
          </div>
        </Col>
        {questions.peopleOnMortgage === "two" && (
          <Col lg={24}>
            <div className="input">
              <p className="input-lbl">
                What is the First name of Second Applicant ?
              </p>
              <div className="mysetting">
                <input
                  type="text"
                  className={questions.firstNameSecondApplicant ? "ifExit" : ""}
                  value={questions.firstNameSecondApplicant}
                  onChange={handleinput}
                  name="firstNameSecondApplicant"

                  placeholder="First Name"
                />
                {firstNameSecondApplicantEmpty && (
                  <span>* This field cannot be empty</span>
                )}
              </div>
            </div>
            <div className="input">
              <p className="input-lbl">
                What is the Surname of Second Applicant ?
              </p>
              <div className="mysetting">
                <input
                  type="text"
                  // className="ifExit"
                  className={questions.lastNameSecondApplicant ? "ifExit" : ""}
                  value={questions.lastNameSecondApplicant}
                  onChange={handleinput}
                  name="lastNameSecondApplicant"
                  placeholder="Surname"
                />
                {lastNameSecondApplicantEmpty && (
                  <span>* This field cannot be empty</span>
                )}
              </div>
            </div>
            <div className="input">
              <p className="input-lbl">
                What is their email? We'll invite them to fill out this
                application with you as we need their details also.
              </p>
              <div className="mysetting">
                <input
                  type="email"
                  className={
                    questions.emailSecondApplicant &&
                    questions.emailSecondApplicantValidation
                      ? "ifExit"
                      : ""
                  }
                  // value={questions.emailSecondApplicant}
                  onChange={handleinput}
                  name="emailSecondApplicant"
                  value={questions.emailSecondApplicant}
                  placeholder="Co-applicant@example.com"
                />
                {emailSecondApplicantEmpty && (
                  <span>* This field cannot be empty</span>
                )}
                
                {!emailSecondApplicantValidation && (
                  <span>* You email is not valid</span>
                )}
              </div>
            </div>
            <div className="input">
              <p className="input-lbl">Type it one more time.</p>
            </div>
            <div className="mysetting input">
              <input
                className={questions.emailSecondApplicantre ? "ifExit" : ""}
                type="email"
                value={questions.emailSecondApplicantre}
                onChange={handleinput}
                name="emailSecondApplicantre"
                placeholder="Co-applicant@example.com"
              />
              {emailSecondApplicantreEmpty && (
                <span>* This field cannot be empty</span>
              )}
              {!emailSecondApplicantreValidation && (
                  <span>* You email is not match</span>
                )}
            </div>
            <div className="input">
              <p className="input-lbl">What's their Phone Number?</p>
              <div className="mysetting">
                <input
                  type="number"
                  className={
                    questions.phoneSecondApplicant &&
                    questions.phoneSecondApplicantIsValid
                      ? "ifExit"
                      : ""
                  }
                  value={questions.phoneSecondApplicant}
                  onChange={handleinput}
                  name="phoneSecondApplicant"
                  placeholder=" ###########"
                />
                {phoneSecondApplicantEmpty && (
                  <span>* This field cannot be empty</span>
                )}
              </div>
            </div>
          </Col>
        )}
        <Col className="questionme123 ">
          {/* <div className="mysetting"> */}
          <h6 style={{fontWeight: 700}} className="heading2 new-heading">
            In the last 6 years, have you or anyone you're applying with
          </h6>
          {/* </div> */}
          <ul className="q1-ul">
            <li>1). filled for bankruptcy</li>
            {/* <li>2). been issued a county court judgement (CCJ)</li> */}
            <li>2). had your home repossesed</li>
            <li>3). entered into a Debt Relief Notice (DRN)</li>
            <li>4). entered into a Debt Sattlement Arrangement (DSA)</li>
            <li>5). entered into a Personal Insolvancy Arrangement (PIA)?</li>
          </ul>
          {filedBankruptcyEmpty && (
            <span className="errormissting">* This field cannot be empty</span>
          )}
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.filedBankruptcy === "Yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="filedBankruptcy"
              id="yes"
              className=""
              value="Yes"
              checked={questions.filedBankruptcy === "Yes"}
            />
            <label for="yes">Yes</label>
          </div>
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.filedBankruptcy === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="filedBankruptcy"
              id="no"
              className=""
              checked={questions.filedBankruptcy === "No"}
              value="No"
            />
            <label for="no">No</label>
          </div>
        </Col>
        <Col lg={24} className="col2 mysetting">
          <p className="heading3">
            In the past two years, have you or anyone you're applying with
            failed to pay a loan or a bill (like utility bills, credit cards or
            personal loans) for more than 3 months in a row?
          </p>
          {failedToPayLoanEmpty && <span>* This field cannot be empty</span>}
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.failedToPayLoan === "Yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="failedToPayLoan"
              id="yes1"
              className=""
              checked={questions.failedToPayLoan === "Yes"}
              value="Yes"
            />
            <label for="yes1">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.failedToPayLoan === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="failedToPayLoan"
              id="no1"
              className=""
              checked={questions.failedToPayLoan === "No"}
              value="No"
            />
            <label for="no1">No</label>
          </div>
        </Col>
        <Col lg={10} offset={0}>
          <div className="btn-div">
            <Button
              onClick={onsubmitForm}
              className="btn2"
              loading={props.financial_data.loading}
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
  },
  Financial_data: { loading, error, modal, financial_Health_Check }
}) => ({
  financial_data: { loading, error, modal },
  financial_back_data: financial_Health_Check,
  userId: _id
});

const mapDispatchToProps = dispacth => ({
  set_financial_BackGround: (props, callback) =>
    dispacth(Api.financialDataPost(props, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GetStarted));

{
  /* <Col lg={24} className="q1">
<div onClick={e => clickRadio(e)} className="radio-container">
  <input
    onChange={e => handleQ(e)}
    type="radio"
    name="failedToPayLoan"
    id="yes1"
    className=""
    
    value="Yes"
  />
  <label for="yes1">Yes</label>
</div>
<div onClick={clickRadio} className="radio-container">
  <input
    onChange={e => handleQ(e)}
    type="radio"
    name="failedToPayLoan"
    id="no1"
    className=""
    value="No"
  />
  <label for="no1">No</label>
</div>
</Col> */
  // const formValidate = () => {
  //   debugger;
  //   const {
  //     filedBankruptcy,
  //     failedToPayLoan,
  //     purposeOfMortgage,
  //     peopleOnMortgage,
  //     firstNameSecondApplicant,
  //     lastNameSecondApplicant,
  //     emailSecondApplicant,
  //     contructionNature,
  //     phoneSecondApplicant,
  //     emailSecondApplicantre
  //   } = questions;
  //   if (!filedBankruptcy) {
  //     setQuestions({
  //       ...questions,
  //       filedBankruptcyEmpty: true,
  //       overAllFormValidate: false
  //     });
  //   }
  //   if (!failedToPayLoan) {
  //     setQuestions({
  //       ...questions,
  //       failedToPayLoanEmpty: true,
  //       overAllFormValidate: false
  //     });
  //   }
  //   if (!purposeOfMortgage) {
  //     setQuestions({
  //       ...questions,
  //       purposeOfMortgageEmpty: true,
  //       overAllFormValidate: false
  //     });
  //   }
  //   if (!contructionNature) {
  //     setQuestions({
  //       ...questions,
  //       contructionNatureEmpty: true,
  //       overAllFormValidate: false
  //     });
  //   }
  //   if (peopleOnMortgage === "two") {
  //     if (!firstNameSecondApplicant) {
  //       setQuestions({
  //         ...setQuestions,
  //         firstNameSecondApplicantEmpty: true,
  //         overAllFormValidate: false
  //       });
  //     }
  //     if (!lastNameSecondApplicant) {
  //       setQuestions({
  //         ...setQuestions,
  //         lastNameSecondApplicantEmpty: true,
  //         overAllFormValidate: false
  //       });
  //     }
  //     if (!emailSecondApplicant) {
  //       setQuestions({
  //         ...setQuestions,
  //         emailSecondApplicantEmpty: true,
  //         overAllFormValidate: false
  //       });
  //     }
  //     if (!emailSecondApplicantre) {
  //       setQuestions({
  //         ...setQuestions,
  //         emailSecondApplicantreEmpty: true,
  //         overAllFormValidate: false
  //       });
  //     }
  //     if (!phoneSecondApplicant) {
  //       setQuestions({
  //         ...setQuestions,
  //         phoneSecondApplicantEmpty: true,
  //         overAllFormValidate: false
  //       });
  //     }
  //   }
  // };
}
