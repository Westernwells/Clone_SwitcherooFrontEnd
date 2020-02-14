import React, { Component } from "react";
import TopUserNavigation from "./topnavigation/index";
import TopUserNavigation2 from "./topnavigation/topNavigation";

import "./user.css";

import UserForm1 from "./userFrom1/userForm";
import UserForm2 from "./userFrom2/userForm";
import Api from "../../../../redux/api/financialHealthCheck";

import UserForm3 from "./userFrom3/userForm";

import { connect } from "react-redux";
import { message } from "antd";

class App extends React.Component {
  state = {
    defaltSet: "user1",
    userId: "",
    current: 0,
    dateOfBirth: "",
    maritalStatus: false,
    maritalStatusEmpty: false,
    dateOfBirthEmpty: false,
    ageOfChildren: [],
    ageOfChildrenEmpty: false,
    childrenFinanciallyDependentEmpty: false,
    maritalStatusOptions: ["Married", "Single", "Widowed"],
    selfEmployedOrPaye: "",
    selfEmployedOrPayeEmpty: false,
    childrenFinanciallyDependent: "",
    childrenFinanciallyDependentOptions: [0, 1, 2, 3, 4, 5, "5+"],
    publicOrPrivateSector: "",
    publicOrPrivateSectorEmpty: false,
    selfEmployedOrPayeOptions: ["Self Employed", "Paye"],

    basicIncome: 0,
    basicIncomeEmpty: false,
    basicIncomeDisable: false,

    overTimeEarnedInyear: 0,
    overTimeEarnedInyearDisable: false,
    overTimeEarnedInyearEmpty: false,

    commissionEarnedInYear: 0,
    commissionEarnedInYearDisable: false,
    commissionEarnedInYearEmpty: false,

    bonusEarnedInYear: 0,
    bonusEarnedInYearDisable: false,
    bonusEarnedInYearEmpty: false,

    guaranteedAllowance: 0,
    guaranteedAllowanceDisable: false,
    guaranteedAllowanceEmpty: false,

    otherVariableIncome: 0,
    otherVariableIncomeDisable: false,
    otherVariableIncomeEmpty: false,

    annualPension: 0,
    annualPensionDisable: false,
    annualPensionEmpty: false,

    nusrseryOrChildminding: 0,
    nusrseryOrChildmindingDisable: false,
    nusrseryOrChildmindingEmpty: false,

    spousalMaintenanceCosts: 0,
    spousalMaintenanceCostsDisable: false,
    spousalMaintenanceCostsEmpty: false,

    monthlyCreditCardCharges: 0,
    monthlyCreditCardChargesDisable: false,
    monthlyCreditCardChargesEmpty: false,

    overDraftLimit: 0,
    overDraftLimitDisable: false,
    overDraftLimitEmpty: false,

    creditCardLimit: 0,
    creditCardLimitDisable: false,
    creditCardLimitEmpty: false,

    overDraftCharges: 0,
    overDraftChargesDisable: false,
    overDraftChargesEmpty: false,

    monthlyLoanRepayments: 0,
    monthlyLoanRepaymentsDisable: false,
    monthlyLoanRepaymentsEmpty: false,

    monthlyCashFlow: 0,
    monthlyCashFlowDisable: false,
    monthlyCashFlowEmpty: false
  };

  handleMerital = value => {
    this.setState({ maritalStatus: value, maritalStatusEmpty: false });
  };
  handleWork = value => {
    this.setState({ selfEmployedOrPaye: value });
  };
  handleChild = value => {
    let ageOfChildren = [];
    let lengthArray = value;
    if (value === "5+") {
      lengthArray = 6;
    }
    for (var i = 0; i < lengthArray; i++) {
      ageOfChildren.push(0);
    }
    this.setState({
      childrenFinanciallyDependent: value,
      childrenFinanciallyDependentEmpty: false,
      ageOfChildren
    });
  };
  arraySetAge = (e, index) => {
    const { value } = e.target;

    if (Number(value) < 35) {
      const { ageOfChildren } = this.state;
      ageOfChildren[index] = Number(value);
      this.setState({
        ageOfChildren,
        ageOfChildrenEmpty: false
      });
    } else {
      message.error("The age seems to be incorrect for child");
    }
  };
  handleRedioBtn = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [`${e.target.name}Empty`]: false
    });
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.financial_back_data.applicantOne &&
      prevState.publicOrPrivateSector !==
        nextProps.financial_back_data.applicantOne.publicOrPrivateSector &&
      prevState.userId !== nextProps.userId
    ) {
      const {
        maritalStatus,
        selfEmployedOrPaye,
        childrenFinanciallyDependent,
        publicOrPrivateSector,
        basicIncome,
        overTimeEarnedInyear,
        commissionEarnedInYear,
        bonusEarnedInYear,
        guaranteedAllowance,
        otherVariableIncome,
        annualPension,
        dateOfBirth,
        nusrseryOrChildminding,
        spousalMaintenanceCosts,
        monthlyCreditCardCharges,
        overDraftLimit,
        creditCardLimit,
        overDraftCharges,
        monthlyLoanRepayments,
        monthlyCashFlow,
        commissionEarnedInYearDisable,
        bonusEarnedInYearDisable,
        guaranteedAllowanceDisable,
        otherVariableIncomeDisable,
        annualPensionDisable,
        overTimeEarnedInyearDisable,
        nusrseryOrChildmindingDisable,
        spousalMaintenanceCostsDisable,
        monthlyCreditCardChargesDisable,
        overDraftLimitDisable,
        creditCardLimitDisable,
        overDraftChargesDisable,
        monthlyLoanRepaymentsDisable,
        monthlyCashFlowDisable,
        basicIncomeDisable,
        ageOfChildren
      } = nextProps.financial_back_data.applicantOne;
      const { userId } = nextProps;

      return {
        ...prevState,
        userId,
        maritalStatus,
        selfEmployedOrPaye,
        childrenFinanciallyDependent,
        publicOrPrivateSector,
        basicIncome,
        overTimeEarnedInyear,
        commissionEarnedInYear,
        bonusEarnedInYear,
        guaranteedAllowance,
        otherVariableIncome,
        annualPension,
        dateOfBirth,
        ageOfChildren,
        nusrseryOrChildminding,
        spousalMaintenanceCosts,
        monthlyCreditCardCharges,
        overDraftLimit,
        creditCardLimit,
        overDraftCharges,
        monthlyLoanRepayments,
        monthlyCashFlow,
        commissionEarnedInYearDisable,
        bonusEarnedInYearDisable,
        guaranteedAllowanceDisable,
        otherVariableIncomeDisable,
        annualPensionDisable,
        overTimeEarnedInyearDisable,
        nusrseryOrChildmindingDisable,
        spousalMaintenanceCostsDisable,
        monthlyCreditCardChargesDisable,
        overDraftLimitDisable,
        creditCardLimitDisable,
        overDraftChargesDisable,
        monthlyLoanRepaymentsDisable,
        monthlyCashFlowDisable,
        basicIncomeDisable
      };
    }

    return prevState;
  }
  onsubmitForm = () => {
    let form1Validate = true;
    let form2Validate = true;
    let form3Validate = true;

    let maritalStatusEmpty = false;
    let dateOfBirthEmpty = false;
    let childrenFinanciallyDependentEmpty = false;
    let selfEmployedOrPayeEmpty = false;
    let publicOrPrivateSectorEmpty = false;
    let basicIncomeEmpty = false;
    let overTimeEarnedInyearEmpty = false;
    let commissionEarnedInYearEmpty = false;
    let bonusEarnedInYearEmpty = false;
    let guaranteedAllowanceEmpty = false;
    let otherVariableIncomeEmpty = false;
    let annualPensionEmpty = false;
    let nusrseryOrChildmindingEmpty = false;
    let spousalMaintenanceCostsEmpty = false;
    let monthlyCreditCardChargesEmpty = false;
    let overDraftLimitEmpty = false;
    let creditCardLimitEmpty = false;
    let overDraftChargesEmpty = false;
    let monthlyLoanRepaymentsEmpty = false;
    let monthlyCashFlowEmpty = false;
    let ageOfChildrenEmpty = false;
    let validate = false;
    const {
      maritalStatus,
      ageOfChildren,
      selfEmployedOrPaye,
      childrenFinanciallyDependent,
      publicOrPrivateSector,
      basicIncome,
      dateOfBirth,
      overTimeEarnedInyear,
      commissionEarnedInYear,
      bonusEarnedInYear,
      guaranteedAllowance,
      otherVariableIncome,
      annualPension,
      nusrseryOrChildminding,
      spousalMaintenanceCosts,
      monthlyCreditCardCharges,
      overDraftLimit,
      creditCardLimit,
      overDraftCharges,
      monthlyLoanRepayments,
      monthlyCashFlow,
      basicIncomeDisable,
      current,
      commissionEarnedInYearDisable,
      bonusEarnedInYearDisable,
      guaranteedAllowanceDisable,
      otherVariableIncomeDisable,
      annualPensionDisable,
      overTimeEarnedInyearDisable,
      nusrseryOrChildmindingDisable,
      spousalMaintenanceCostsDisable,
      monthlyCreditCardChargesDisable,
      overDraftLimitDisable,
      creditCardLimitDisable,
      overDraftChargesDisable,
      monthlyLoanRepaymentsDisable,
      monthlyCashFlowDisable
    } = this.state;
    const newItem = {
      maritalStatus,
      selfEmployedOrPaye,
      childrenFinanciallyDependent,
      publicOrPrivateSector,
      basicIncome,
      ageOfChildren,
      dateOfBirth,
      overTimeEarnedInyear,
      commissionEarnedInYear,
      bonusEarnedInYear,
      guaranteedAllowance,
      otherVariableIncome,
      annualPension,
      nusrseryOrChildminding,
      spousalMaintenanceCosts,
      monthlyCreditCardCharges,
      overDraftLimit,
      creditCardLimit,
      overDraftCharges,
      monthlyLoanRepayments,
      monthlyCashFlow,
      commissionEarnedInYearDisable,
      bonusEarnedInYearDisable,
      guaranteedAllowanceDisable,
      otherVariableIncomeDisable,
      annualPensionDisable,
      overTimeEarnedInyearDisable,
      nusrseryOrChildmindingDisable,
      spousalMaintenanceCostsDisable,
      monthlyCreditCardChargesDisable,
      overDraftLimitDisable,
      creditCardLimitDisable,
      overDraftChargesDisable,
      monthlyLoanRepaymentsDisable,
      monthlyCashFlowDisable,
      basicIncomeDisable
    };
    if (!dateOfBirth) {
      dateOfBirthEmpty = true;
      form1Validate = false;
    }
    if (childrenFinanciallyDependent === "") {
      childrenFinanciallyDependentEmpty = true;
      form1Validate = false;
    }
    if (childrenFinanciallyDependent !== "") {
      if (ageOfChildren) {
        validate = ageOfChildren.some(value => value == "" || value == 0);
        if (validate) {
          ageOfChildrenEmpty = true;
          form1Validate = false;
        }
      }
    }
    if (!maritalStatus) {
      maritalStatusEmpty = true;
      form1Validate = false;
    }
    if (!publicOrPrivateSector) {
      publicOrPrivateSectorEmpty = true;
      form1Validate = false;
    }
    if (!selfEmployedOrPaye) {
      selfEmployedOrPayeEmpty = true;
      form1Validate = false;
    }
    if (!basicIncomeDisable && !basicIncome && current === 1) {
      basicIncomeEmpty = true;
      form2Validate = false;
    }
    if (
      !overTimeEarnedInyearDisable &&
      !overTimeEarnedInyear &&
      current === 1
    ) {
      overTimeEarnedInyearEmpty = true;
      form2Validate = false;
    }
    if (
      !commissionEarnedInYearDisable &&
      !commissionEarnedInYear &&
      current === 1
    ) {
      commissionEarnedInYearEmpty = true;
      form2Validate = false;
    }
    if (!bonusEarnedInYearDisable && !bonusEarnedInYear && current === 1) {
      bonusEarnedInYearEmpty = true;
      form2Validate = false;
    }
    if (!guaranteedAllowanceDisable && !guaranteedAllowance && current === 1) {
      guaranteedAllowanceEmpty = true;
      form2Validate = false;
    }
    if (!otherVariableIncomeDisable && !otherVariableIncome && current === 1) {
      otherVariableIncomeEmpty = true;
      form2Validate = false;
    }
    if (!annualPensionDisable && !annualPension && current === 1) {
      annualPensionEmpty = true;
      form2Validate = false;
    }

    if (
      !nusrseryOrChildmindingDisable &&
      !nusrseryOrChildminding &&
      current === 2
    ) {
      nusrseryOrChildmindingEmpty = true;
      form3Validate = false;
    }
    if (
      !spousalMaintenanceCostsDisable &&
      !spousalMaintenanceCosts &&
      current === 2
    ) {
      spousalMaintenanceCostsEmpty = true;
      form3Validate = false;
    }
    if (
      !monthlyCreditCardChargesDisable &&
      !monthlyCreditCardCharges &&
      current === 2
    ) {
      monthlyCreditCardChargesEmpty = true;
      form3Validate = false;
    }
    if (!overDraftLimitDisable && !overDraftLimit && current === 2) {
      overDraftLimitEmpty = true;
      form3Validate = false;
    }
    if (!creditCardLimitDisable && !creditCardLimit && current === 2) {
      creditCardLimitEmpty = true;
      form3Validate = false;
    }
    if (!overDraftChargesDisable && !overDraftCharges && current === 2) {
      overDraftChargesEmpty = true;
      form3Validate = false;
    }
    if (
      !monthlyLoanRepaymentsDisable &&
      !monthlyLoanRepayments &&
      current === 2
    ) {
      monthlyLoanRepaymentsEmpty = true;
      form3Validate = false;
    }
    if (!monthlyCashFlowDisable && !monthlyCashFlow && current === 2) {
      monthlyCashFlowEmpty = true;
      form3Validate = false;
    }
    if (this.state.current === 0 && form1Validate) {
      this.setState({ current: 1 });
    } else if (this.state.current === 1 && form2Validate) {
      this.setState({ current: 2 });
    } else if (this.state.current === 2 && form3Validate) {
      debugger;
      this.props.SetApplicantOneData(
        {
          userId: this.props.userId,
          applicants: {
            ...this.props.financial_back_data,
            applicantOne: {
              ...newItem
            }
          }
        },
        () => {
          if (this.props.financial_back_data.peopleOnMortgage === "two") {
            this.props.changeProf("user2");
          } else {
            debugger;
            this.props.changeProfRout(3);
          }
        }
      );
    }
    if (!form1Validate) {
      this.setState({
        selfEmployedOrPayeEmpty,
        publicOrPrivateSectorEmpty,
        maritalStatusEmpty,
        dateOfBirthEmpty,
        ageOfChildrenEmpty,
        childrenFinanciallyDependentEmpty
      });
    } else if (!form2Validate) {
      this.setState({
        basicIncomeEmpty,
        basicIncomeEmpty,
        overTimeEarnedInyearEmpty,
        commissionEarnedInYearEmpty,
        bonusEarnedInYearEmpty,
        guaranteedAllowanceEmpty,
        otherVariableIncomeEmpty,
        annualPensionEmpty
      });
    } else {
      this.setState({
        nusrseryOrChildmindingEmpty,
        spousalMaintenanceCostsEmpty,
        monthlyCreditCardChargesEmpty,
        overDraftLimitEmpty,
        creditCardLimitEmpty,
        overDraftChargesEmpty,
        monthlyLoanRepaymentsEmpty,
        monthlyCashFlowEmpty
      });
    }
  };
  onChangeme = current => {
    this.setState({ current });
  };
  onChangeSecond = e => {
    this.setState({
      [e.target.name]: 0,
      [`${e.target.name}Disable`]: e.target.checked,
      [`${e.target.name}Empty`]: false
    });
  };
  onChangeback = () => {
    if (this.state.current === 2) {
      this.setState({ current: 1 });
    } else if (this.state.current === 1) {
      this.setState({ current: 0 });
    } else if (this.state.current === 0) {
      this.props.changeProfRout(1);
    }
  };
  onChangeTextSecond = (value, name) => {
    if (value > 0) {
      this.setState({
        [name]: value,
        [`${name}Empty`]: false
      });
    }
  };
  cashFlowChange = (value, name) => {
    console.log(typeof value);
    this.setState({
      [name]: value,
      [`${name}Empty`]: false
    });
  };

  onChangeDate = (date, dateString) => {
    this.setState({
      dateOfBirth: date,
      dateOfBirthEmpty: false
    });
  };

  UserFormRender = () => {
    const { current } = this.state;
    if (current === 0)
      return <UserForm1 allState={this.state} thisObject={this} />;
    if (current === 1)
      return <UserForm2 allState={this.state} thisObject={this} />;
    if (current === 2)
      return <UserForm3 allState={this.state} thisObject={this} />;
  };
  render() {
    const { current, defaltSet } = this.state;
    return (
      <div className="user_form">
        <TopUserNavigation current={current} onChange={this.onChangeme} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            className="innerIConinner"
            style={{ padding: "20px", width: "90%" }}
          >
            {this.UserFormRender()}
          </div>
        </div>
      </div>
    );
  }
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
  SetApplicantOneData: (props, callback) =>
    dispacth(Api.financialDataPost(props, callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
