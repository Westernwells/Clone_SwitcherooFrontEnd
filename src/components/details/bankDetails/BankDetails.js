import React, { useState, Component } from "react";
import { Row, Col, Select, Button, Icon } from "antd";
import "./BankDetails.css";
import BankCollapse from "./BankCollasp";

const { Option } = Select;
const purposeArray = [
  "Car Loan",
  "Holiday",
  "Wedding",
  "Lifestyle",
  "Home Improvement",
  "Furniture",
  "Education Fees",
  "Other"
];
const lenderArray = [
  "Aib",
  "An Post",
  "Bank of Ireland",
  "KBC",
  "PTSB",
  "Ulster bank",
  "Credit Union",
  "Other"
];
const AddAcount = props => {
  return (
    <Col lg={6} className="add-bank-column">
      <div className="add-account" onClick={props.handleAddAccount}>
        <Icon type="plus" className="add-text" />
        <span className="add-text2">{props.name}</span>
      </div>
    </Col>
  );
};
class BankDetails extends Component {
  state = {
    loanAcount: {
      purpose: "",
      comments: "",
      lender: "",
      location: "",
      name: "",
      accountNo: "",
      monthlyCharges: "",
      balance: "",
      arrears: "",
      questions: {
        q: ""
      }
    },
    overdraftAcount: {
      lender: "",
      location: "",
      name: "",
      purpose: "",
      comments: "",
      accountNo: "",
      monthlyCharges: "",
      balance: "",
      arrears: "",
      questions: {
        q: ""
      }
    },
    creditCardAcount: {
      purpose: "",
      comments: "",
      lender: "",
      location: "",
      name: "",
      accountNo: "",
      monthlyCharges: "",
      balance: "",
      arrears: "",
      questions: {
        q: ""
      }
    },

    questions: {
      q1: ""
    },
    q4: false,
    loanActive: false,
    isLoanActive: true,
    overdraftActive: false,
    isOverdraftActive: false,
    creditCardActive: false,
    isCreditActive: false
  };
  // credit function
  handleCreditClick = () => {
    this.setState({
      isCreditActive: !this.state.isCreditActive
    });
  };
  handleCredit = () => {
    this.setState({
      creditCardActive: !this.state.creditCardActive,
      isLoanActive: false,
      isOverdraftActive: false,
      isCreditActive: true
    });
  };
  handleCreditPurposeChange = value => {
    this.setState({
      creditCardAcount: { ...this.state.creditCardAcount, purpose: value }
    });
  };
  handleCreditLenderChange = value => {
    this.setState({
      creditCardAcount: { ...this.state.creditCardAcount, lender: value }
    });
  };

  handleCreditInputChange = e => {
    const name = e.target.name;
    this.setState({
      creditCardAcount: {
        ...this.state.creditCardAcount,
        [name]: e.target.validity.valid
          ? e.target.value
          : this.state.creditCardAcount[name]
      }
    });
  };

  handleCreditComments = e => {
    this.setState({
      creditCardAcount: {
        ...this.state.creditCardAcount,
        comments: e.target.value
      }
    });
  };
  handleCreditQ = e => {
    const { questions } = this.state.creditCardAcount;
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    console.log("readio =====>", radioContainers);
    var qs = questions;
    qs[e.target.name] = e.target.value;
    console.log(qs);
    this.setState({
      q4: !this.state.q4
    });
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
  //Over draft function
  handleOverdraftClick = () => {
    console.log("loan active====>", this.state.loanAcount);
    this.setState({
      isOverdraftActive: !this.state.isOverdraftActive
    });
  };
  handleOverdraftPurposeChange = value => {
    this.setState({
      overdraftAcount: { ...this.state.overdraftAcount, purpose: value }
    });
  };
  handleOverdraftLenderChange = value => {
    this.setState({
      overdraftAcount: { ...this.state.overdraftAcount, lender: value }
    });
  };

  handleOverdraftInputChange = e => {
    const name = e.target.name;
    this.setState({
      overdraftAcount: {
        ...this.state.overdraftAcount,
        [name]: e.target.validity.valid
          ? e.target.value
          : this.state.overdraftAcount[name]
      }
    });
  };

  handleOverdraftComments = e => {
    this.setState({
      overdraftAcount: {
        ...this.state.overdraftAcount,
        comments: e.target.value
      }
    });
  };
  handleOverdraftQ = e => {
    const { questions } = this.state.overdraftAcount;
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    var qs = questions;
    qs[e.target.name] = e.target.value;
    console.log(qs);
    this.setState({
      q4: !this.state.q4
    });
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

  clickRadio = e => {
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  };
  //loan acount methods
  handleClick = () => {
    console.log("loan active====>", this.state.loanAcount);
    this.setState({
      isLoanActive: !this.state.isLoanActive
    });
  };
  handleLoanPurposeChange = value => {
    this.setState({
      loanAcount: { ...this.state.loanAcount, purpose: value }
    });
  };
  handleLoanLenderChange = value => {
    this.setState({
      loanAcount: { ...this.state.loanAcount, lender: value }
    });
  };

  handleLoanInputChange = e => {
    const name = e.target.name;
    this.setState({
      loanAcount: {
        ...this.state.loanAcount,
        [name]: e.target.validity.valid
          ? e.target.value
          : this.state.loanAcount[name]
      }
    });
  };

  handleLoanComments = e => {
    this.setState({
      loanAcount: {
        ...this.state.loanAcount,
        comments: e.target.value
      }
    });
  };
  handleLoanClick = () => {
    const { loanActive } = this.state;
    this.setState({
      loanActive: !loanActive
    });
  };

  onLoanDateChange(date, dateString) {
    console.log(dateString);
  }
  handleLoanQ = e => {
    const { questions } = this.state.loanAcount;
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    console.log("readio =====>", radioContainers);
    var qs = questions;
    qs[e.target.name] = e.target.value;
    console.log(qs);
    this.setState({
      q4: !this.state.q4
    });
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
  handleQ = e => {
    const { questions } = this.state;
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    console.log("readio =====>", radioContainers);
    var qs = questions;
    qs[e.target.name] = e.target.value;
    console.log(qs);
    this.setState({
      q4: !this.state.q4
    });
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

  handleRoute = route => {
    this.props.history.push(route);
  };
  handleLoan = () => {
    this.setState({
      questions: { ...this.state.questions, q3: "" },
      loanActive: !this.state.loanActive,
      isLoanActive: true,
      isOverdraftActive: false,
      isCreditActive: false
    });
  };
  handleOverdraft = () => {
    this.setState({
      overdraftActive: !this.state.overdraftActive,
      isLoanActive: false,
      isOverdraftActive: true
    });
  };

  renderAcount = () => {
    return (
      <React.Fragment>
        <AddAcount name="Loan Account" handleAddAccount={this.handleLoan} />
        <AddAcount
          name="Overdraft Account"
          handleAddAccount={this.handleOverdraft}
        />
        <AddAcount
          name="Credit Card Account"
          handleAddAccount={this.handleCredit}
        />
      </React.Fragment>
    );
  };

  render() {
    const {
      questions,
      loanActive,
      overdraftActive,
      isLoanActive,
      isOverdraftActive,
      isCreditActive,
      creditCardActive,
      loanAcount,
      creditCardAcount,
      overdraftAcount
    } = this.state;

    console.log("state", this.state);
    return (
      <div className="credit-commitments">
        <Row className="d-row-s1">
          <Col lg={24}>
            <h1 className="heading1">Let's get some details of your account</h1>
          </Col>
          {loanActive && (
            <Col lg={19}>
              <BankCollapse
                accountName="Loan Account"
                lender={loanAcount.lender}
                purpose={loanAcount.purpose}
                comments={loanAcount.comments}
                name={loanAcount.name}
                location={loanAcount.location}
                accountNo={loanAcount.accountNo}
                monthlyCharges={loanAcount.monthlyCharges}
                balance={loanAcount.balance}
                arrears={loanAcount.arrears}
                isActive={isLoanActive}
                loanActive={loanActive}
                isLoanActive={isLoanActive}
                lenderArray={lenderArray}
                purposeArray={purposeArray}
                questions={this.state.loanAcount.questions}
                handleClick={this.handleClick}
                handlePurposeChange={this.handleLoanPurposeChange}
                handleLenderChange={this.handleLoanLenderChange}
                handleInputChange={this.handleLoanInputChange}
                handleCommentChange={this.handleLoanComments}
                handleQ={this.handleLoanQ}
                onLoanChange={this.onLoanDateChange}
              />
            </Col>
          )}
          {overdraftActive && (
            <Col lg={19}>
              <BankCollapse
                accountName="Overdraft Account"
                isActive={isOverdraftActive}
                handleClick={this.handleOverdraftClick}
                lenderArray={lenderArray}
                lender={overdraftAcount.lender}
                comments={overdraftAcount.comments}
                name={overdraftAcount.name}
                location={overdraftAcount.location}
                accountNo={overdraftAcount.accountNo}
                monthlyCharges={overdraftAcount.monthlyCharges}
                balance={overdraftAcount.balance}
                arrears={overdraftAcount.arrears}
                purpose={overdraftAcount.purpose}
                purposeArray={purposeArray}
                questions={this.state.overdraftAcount.questions}
                handlePurposeChange={this.handleOverdraftPurposeChange}
                handleLenderChange={this.handleOverdraftLenderChange}
                handleInputChange={this.handleOverdraftInputChange}
                handleCommentChange={this.handleOverdraftComments}
                handleQ={this.handleOverdraftQ}
              />
            </Col>
          )}
          {creditCardActive && (
            <Col lg={19}>
              <BankCollapse
                accountName="Credit Card Account"
                isActive={isCreditActive}
                handleClick={this.handleCreditClick}
                lenderArray={lenderArray}
                lender={creditCardAcount.lender}
                purpose={creditCardAcount.purpose}
                purposeArray={purposeArray}
                questions={this.state.creditCardAcount.questions}
                handlePurposeChange={this.handleCreditPurposeChange}
                handleLenderChange={this.handleCreditLenderChange}
                handleInputChange={this.handleCreditInputChange}
                handleCommentChange={this.handleOverdraftComments}
                handleQ={this.handleCreditQ}
              />
            </Col>
          )}
          <Col lg={24}>
            <h6 className="h61">
              Do you have any monthly loan/overdraft/credit card costs?
            </h6>
          </Col>

          <Col lg={24} className="q1 q3 my_costuma colomn_8">
            <div
              onClick={this.clickRadio}
              className={
                questions.purposeOfMortgage === "First Time Buyer"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                onChange={this.handleQ}
                type="radio"
                name="q3"
                id="q31"
                className=""
                // checked={questions.purposeOfMortgage === "a"}
                value="a"
              />
              <label for="q31">Yes</label>
            </div>
            <div
              onClick={this.clickRadio}
              className={
                questions.purposeOfMortgage === "House Mover"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                onChange={this.handleQ}
                type="radio"
                name="q3"
                id="q32"
                // checked={questions.purposeOfMortgage === "House Mover"}
                className=""
                value="b"
              />
              <label for="q32">No</label>
            </div>
          </Col>
          {questions.q3 == "a" && this.renderAcount()}

          <Col style={{ marginTop: "50px" }} lg={24}>
            <h6 className="heading1">
              OK, lets get these acount details from you
            </h6>
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
                onClick={() => this.handleRoute("/home/details/bank-details")}
                className="btn2"
              >
                Save & Continue
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default BankDetails;
