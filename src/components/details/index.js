import React, { Component } from "react";

import "./index.css";
import MoverUser1 from "./personalDetailsMover2.3a/personalDetailsMover2.3a";
import SwitcherUser1 from "./personalDetailsSwitch2.2a/personalDetailsSwitch2.2a";
import FTBUser1 from "./personalDetails2.1a/personalDetails2.1a";
import MoverUser2 from "./personalDetailsMover2.3b/personalDetailsMover2.3b";
import PersonalDetails21a from "./personalDetails2.1a/personalDetails2.1a";
import PersonalDetails21b from "./personalDetails2.1b/personalDetails2.1b";

import PersonalDetails22a from "./personalDetailsSwitch2.2a/personalDetailsSwitch2.2a";
import PersonalDetails22b from "./personalDetailsSwitch2.2b/personalDetailsSwitch2.2b";

import PersonalDetails23a from "./personalDetailsMover2.3a/personalDetailsMover2.3a";
import PersonalDetails23b from "./personalDetailsMover2.3b/personalDetailsMover2.3b";

import PersonalDetails1 from "./personalDetails1/personalDetails";

import SwitcherUser2 from "./personalDetailsSwitch2.2b/personalDetailsSwitch2.2b";
import FTBUser2 from "./personalDetails2.1b/personalDetails2.1b";

import EmployementDetails from "./EmploymentDetailsPAYE/EmploymentDetailsPAYE";
import MonthlyOutgoings from "./monthlyOutgoings/MonthlyOutgoings";
import SavingAccount from "./SavingAccounts/SavingAccountsIndex";
import Declaration from "./Declaration/Declaration";
import CreditCommentments from "./creditCommittments//CreditCommittments";
// import BankDetails from './bankDetails/BankDetails'
import MortgageFrom1 from "./MortgageDetailsStep1/MortgageDetailsStep1";
import MortgageFromFTB from "./1.1 Mortgage Details FTB/1.1MortgageDetailsFTB";
import MortgageFromSwitcherA from "./2.2 Mortgage Details Switcher2a/step3";
import MortgageFromSwitcherB from "./2.3 Mortgage Details Switcher2b/switcher3";
import MortgageFromMoverA from "./3.1 Mortgage Details Mover2a/step3";
import MortgageFromMoverB from "./3.2 Mortgage Details Mover2b/detailMover";
import MortgageFromMoverC from "./3.3 Mortgage Details Mover/switcher3";
import IncomeDetailsSE from "./incomDetailsSE/incomDetailsSE";
import IncomeDetailsPYE from "./incomDetailsPAYE/incomDetailsPAYE";
import AdditionsProperty from "./Additional Properties/additionalPropertyIndex";
import { connect } from "react-redux";
import Api from "../../redux/api/detailsApi";

import FinalPage from "./FinalPage/FinalPage";
import MonthlyOutgoing from "./monthlyOutgoings/MonthlyOutgoings";
import CreditCommittments from "./creditCommittments/CreditCommittments";
import BankDetails from "./bankDetails/BankDetails";
import TopSteper from "./topnavigation/topSteper";
import UserNav from "./userNavigation/topNavigation";

export class index extends Component {
  state = {
    selectedKeyUser1: 0,
    selectedKeyUser2: 1,
    progressUser1: 0,
    progressUser2: 0,
    incomeDetails: "Self Employed",
    defalutClient: "user1",
    secPageUser1: false,
    secPageUser2: false,
    purposeOfMortgage: "",
    MortgageFrom: "",
    isMortgageFrom: 0,
    user1Data: {},
    user2Data: {},
    isAddtionProperty: "",
    isAddAccount: "",
    creditform: 1,
    numberOfForm: 0
  };

  // onSubmitData = (data, type) => {
  //   console.log("submited", {
  //     userId: this.props.user._id,
  //     ...data,
  //     mortDetailsFtb: {
  //       ...data
  //     },
  //     applicant2: {
  //       ...this.state.user1Data
  //     }
  //     // applicant2: {
  //     //   ...this.state.user2Data
  //     // }
  //   });
  //   this.props.set_Personal_Details({
  //     userId: this.props.user._id,
  //     ...data,
  //     applicant2: {
  //       ...this.state.user1Data
  //     }
  //     // applicant2: {
  //     //   ...this.state.user2Data
  //     // }
  //   });
  // };

  // changeProfRoute = key => this.setState({ selectedKey: key });

  profRouteRenderer = () => {
    console.log("getUser", this.props.user);
    console.log("getUserDetauls", this.props.detailsReducer);

    const {
      selectedKeyUser1,
      selectedKeyUser2,
      defalutClient,
      MortgageFrom,
      incomeDetails,
      isMortgageFrom,
      creditform
    } = this.state;
    if (selectedKeyUser1 === 0 && isMortgageFrom == 0) {
      return (
        <MortgageFrom1
          data={this.props}
          userType={MortgageFrom}
          submitData={this.onSubmitData}
          isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          MortgageFrom={value => this.setState({ MortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          getData={data => this.setState({ mortgageFromData: data })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (
      selectedKeyUser1 === 0 &&
      MortgageFrom == "First time Borrower" &&
      isMortgageFrom == 1
    ) {
      return (
        <MortgageFromFTB
          submitData={this.onSubmitData}
          isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (
      selectedKeyUser1 === 0 &&
      MortgageFrom == "Mortgage Switcher" &&
      isMortgageFrom == 1
    ) {
      return (
        <MortgageFromSwitcherA
          isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }

    if (
      selectedKeyUser1 === 0 &&
      MortgageFrom == "Mortgage Switcher" &&
      isMortgageFrom == 2
    ) {
      return (
        <MortgageFromSwitcherB
          isAddtionProperty={this.state.isAddtionProperty}
          getData={( number) =>
            this.setState({  numberOfForm: number })
          }
          isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    //  Start Additions Property
    if ( this.state.numberOfForm != 0) {
      if (
        selectedKeyUser1 === 0 &&
        MortgageFrom == "Mortgage Switcher" &&
        isMortgageFrom == 3
      ) {
        return (
          <AdditionsProperty
            MortgageFrom={MortgageFrom}
            number={this.state.numberOfForm}
            isAddtionProperty={this.state.isAddtionProperty}
            getData={value => this.setState({ isAddtionProperty: value })}
            isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
          />
        );
      }
    }
    // End Addtions Property
    if (
      selectedKeyUser1 === 0 &&
      MortgageFrom == "Mortgage Switcher" &&
      isMortgageFrom == 4
    ) {
      return (
        <FinalPage
          MortgageFrom={MortgageFrom}
          numberOfForm={this.state.numberOfForm}
          getData={(value, number) =>
            this.setState({ isAddtionProperty: value, numberOfForm: number })
          }
          isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (
      selectedKeyUser1 === 0 &&
      MortgageFrom == "House Mover" &&
      isMortgageFrom == 1
    ) {
      return (
        <MortgageFromMoverA
          isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (
      selectedKeyUser1 === 0 &&
      MortgageFrom == "House Mover" &&
      isMortgageFrom == 2
    ) {
      return (
        <MortgageFromMoverB
          isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (
      selectedKeyUser1 === 0 &&
      MortgageFrom == "House Mover" &&
      isMortgageFrom == 3
    ) {
      return (
        <MortgageFromMoverC
          getData={(value, number) =>
            this.setState({  numberOfForm: number })
          }
          isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (this.state.numberOfForm != 0) {
      if (
        selectedKeyUser1 === 0 &&
        MortgageFrom == "House Mover" &&
        isMortgageFrom == 4
      ) {
        return (
          <AdditionsProperty
            MortgageFrom={MortgageFrom}
            number={this.state.numberOfForm}
            isAddtionProperty={this.state.isAddtionProperty}
            getData={value => this.setState({ isAddtionProperty: value })}
            isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
          />
        );
      }
    }

    if (
      selectedKeyUser1 === 0 &&
      MortgageFrom == "House Mover" &&
      isMortgageFrom == 5
    ) {
      return (
        <FinalPage
          MortgageFrom={MortgageFrom}
          numberOfForm={this.state.numberOfForm}
          getData={(value, number) =>
            this.setState({ isAddtionProperty: value, numberOfForm: number })
          }
          isMortgageFrom={value => this.setState({ isMortgageFrom: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser1 === 1 && defalutClient == "user1") {
      if (
        this.state.secPageUser1 == false &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        //  Start First Time Buyer
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            present={true}
            user={this.props.user}
            userType={MortgageFrom}
            changeProfRoute={data => this.setState({ selectedKeyUser1: data })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser1: arg,
                user1Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser1 == true &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        return (
          <PersonalDetails21a
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser1: data })}
            onSubmitData={this.onSubmitData}
            secPageMethod={arg => this.setState({ secPageUser1: arg })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            getData={data =>
              this.setState({
                user1Data: { ...this.state.user1Data, ...data }
              })
            }
          />
        );
      }

      //End First Time Buyer

      //  Start House Mover
      if (
        this.state.secPageUser1 == false &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "House Mover"
      ) {
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            user={this.props.user}
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser1: data })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser1: arg,
                user1Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser1 == true &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "House Mover"
      ) {
        return (
          <PersonalDetails23a
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser1: data })}
            onSubmitData={this.onSubmitData}
            secPageMethod={arg => this.setState({ secPageUser1: arg })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            getData={data =>
              this.setState({
                user1Data: { ...this.state.user1Data, ...data }
              })
            }
          />
        );
      }

      //End House Mover

      //  Start "Switcher"
      if (
        this.state.secPageUser1 == false &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "Switcher"
      ) {
        //  Start First Time Buyer
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            data={this.state.user1Data}
            user={this.props.user}
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser1: data })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser1: arg,
                user1Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser1 == true &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "Switcher"
      ) {
        return (
          <PersonalDetails22a
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser1: data })}
            onSubmitData={this.onSubmitData}
            secPageMethod={arg => this.setState({ secPageUser1: arg })}
            setProgress={arg => this.setState({ progressUser1: arg })}
            getData={data =>
              this.setState({
                user1Data: { ...this.state.user1Data, ...data }
              })
            }
          />
        );
      }

      //End "Switcher"
      if (
        selectedKeyUser1 === 2
        // this.props.purposeOfMortgage === "Switcher" &&
        // defalutClient === "user1"
      ) {
        return <h1>This is 2nd Step</h1>;
      }
      // }
    }
    if (selectedKeyUser2 === 1 && defalutClient == "user2") {
      if (
        this.state.secPageUser2 == false &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        //  Start First Time Buyer
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            present={true}
            user2={this.props.financial_Health_Check}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser2: arg,
                user2Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser2 == true &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        return (
          <PersonalDetails21b
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            onSubmitData={this.onSubmitData}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={arg => this.setState({ secPageUser2: arg })}
            getData={data =>
              this.setState({
                user2Data: { ...this.state.user2Data, ...data }
              })
            }
          />
        );
      }

      //End First Time Buyer

      //  Start House Mover
      if (
        this.state.secPageUser2 == false &&
        this.props.purposeOfMortgage == "House Mover"
      ) {
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            user2={this.props.financial_Health_Check}
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser2: arg,
                user2Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser2 == true &&
        this.props.purposeOfMortgage == "House Mover"
      ) {
        return (
          <PersonalDetails23b
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            onSubmitData={this.onSubmitData}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={arg => this.setState({ secPageUser2: arg })}
            getData={data =>
              this.setState({
                user2Data: { ...this.state.user2Data, ...data }
              })
            }
          />
        );
      }

      //End House Mover

      //  Start "Switcher"
      if (
        this.state.secPageUser2 == false &&
        this.props.purposeOfMortgage == "Switcher"
      ) {
        //  Start First Time Buyer
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            data={this.state.user1Data}
            user2={this.props.financial_Health_Check}
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={(arg, data) =>
              this.setState({
                secPageUser2: arg,
                user1Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPageUser2 == true &&
        this.props.purposeOfMortgage == "Switcher"
      ) {
        return (
          <PersonalDetails22b
            present={true}
            changeProfRout={data => this.setState({ selectedKeyUser2: data })}
            onSubmitData={this.onSubmitData}
            setProgress={arg => this.setState({ progressUser2: arg })}
            secPageMethod={arg => this.setState({ secPageUser2: arg })}
            getData={data =>
              this.setState({
                user2Data: { ...this.state.user2Data, ...data }
              })
            }
          />
        );
      }

      //End "Switcher"
      if (
        selectedKeyUser1 === 2
        // this.props.purposeOfMortgage === "Switcher" &&
        // defalutClient === "user1"
      ) {
        return <h1>This is 2nd Step</h1>;
      }
      // }
    }
    if (selectedKeyUser1 === 2 && defalutClient == "user1") {
      return (
        <EmployementDetails
          getIncomeValue={value => this.setState({ incomeDetails: value })}
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser2 === 2 && defalutClient == "user2") {
      return (
        <EmployementDetails
          getIncomeValue={value => this.setState({ incomeDetails: value })}
          setProgress={arg => this.setState({ progressUser2: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
    if (selectedKeyUser1 === 3 && defalutClient == "user1") {
      return incomeDetails == "Self Employed" ? (
        <IncomeDetailsSE
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      ) : (
        <IncomeDetailsPYE
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser2 === 3 && defalutClient == "user2") {
      return incomeDetails == "Self Employed" ? (
        <IncomeDetailsSE
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      ) : (
        <IncomeDetailsPYE
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
    if (selectedKeyUser1 === 4 && defalutClient == "user1") {
      return (
        <MonthlyOutgoings
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser2 === 4 && defalutClient == "user2") {
      return (
        <MonthlyOutgoings
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
    if (selectedKeyUser1 === 5 && defalutClient == "user1" && creditform == 1) {
      return (
        <CreditCommentments
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
          changeForm={key => this.setState({ creditform: key })}
          getData={value => this.setState({ isAddAccount: value })}
        />
      );
    }
    // if (this.state.isAddAccount == "a" && this.state.creditform == 2) {
    if (selectedKeyUser1 === 5 && defalutClient == "user1" && creditform == 2) {
      return (
        <BankDetails
          setProgress={arg => this.setState({ progressUser1: arg })}
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
          changeForm={key => this.setState({ creditform: key })}
          getData={value => this.setState({ isAddAccount: value })}
        />
      );
    }
    // if (selectedKeyUser1 === 5 && defalutClient == "user1" && creditform == 2) {
    //   return (
    //     <CreditCommentments
    //       changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
    //       getData={value => this.setState({ isAddAccount: value })}
    //     />
    //   );
    // }
    if (selectedKeyUser2 === 5 && defalutClient == "user2") {
      return (
        <CreditCommentments
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
    if (selectedKeyUser1 === 6 && defalutClient == "user1") {
      return (
        <SavingAccount
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser2 === 6 && defalutClient == "user2") {
      return (
        <SavingAccount
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
    if (selectedKeyUser1 === 7 && defalutClient == "user1") {
      return (
        <Declaration
          changeProfRoute={key => this.setState({ selectedKeyUser1: key })}
        />
      );
    }
    if (selectedKeyUser2 === 7 && defalutClient == "user2") {
      return (
        <Declaration
          changeProfRoute={key => this.setState({ selectedKeyUser2: key })}
        />
      );
    }
  };
  UserChange = e => {
    this.setState({
      defalutClient: e.key
    });
  };

  render() {
    console.log("user1", this.state.user1Data);
    return (
      <div>
        <div>
          <div>
            {this.state.defalutClient == "user1" ? (
              <TopSteper
                defaltSet={this.state.selectedKeyUser1}
                progress={this.state.progressUser1}
                changeProfRout={data =>
                  this.setState({ selectedKeyUser1: data })
                }
                defalutClient={this.state.defalutClient}
              />
            ) : this.state.defalutClient == "user2" ? (
              <TopSteper
                defaltSet={this.state.selectedKeyUser2}
                progress={this.state.progressUser2}
                changeProfRout={data =>
                  this.setState({ selectedKeyUser2: data })
                }
                defalutClient={this.state.defalutClient}
              />
            ) : (
              ""
            )}
            <div className="bottonItems">
              {this.state.selectedKeyUser1 != 0 ? (
                <UserNav
                  defalutClient={this.state.defalutClient}
                  onchangeFunc={this.UserChange}
                />
              ) : null}
              {this.profRouteRenderer()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  userReducer: { user },
  Financial_data: {
    financial_Health_Check: { purposeOfMortgage },
    financial_Health_Check
  },
  detailsReducer
}) => ({
  purposeOfMortgage,
  financial_Health_Check,
  user,
  detailsReducer
});

const mapDispatchToProps = dispacth => ({
  set_Personal_Details: props => dispacth(Api.personalDetailsDataPost(props))
  //  onSaveQ4Data : (data) => dispacth(Actions.saveQ4Data(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
