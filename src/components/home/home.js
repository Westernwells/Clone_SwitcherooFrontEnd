import React from "react";
import { Row, Col, Collapse } from "antd";
import "./home.css";
import Chat from "../chat/chat";
import LeftBar from "./leftbar/leftbar";
import SearchBar from "./searchbar/searchbar";
import RightBar from "./rightbar/rightbar";
import UserSettings from "../userSettings/userSettings";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Feed from "./feed/feed";
import FinancialHealth from "../financialHealth/getStatetedText/getStartedText";
import GetStarted from "../financialHealth/getStarted/getStarted";
import DetailMover from "../details/detailMover/detailMover";
import AfterIntial from "../financialHealth/afterintial/";
import StepOne from "../details/step1/step1";
import StepTwo from "../details/step2/step2";
import StepThree from "../details/step3/step3";
import StepFour from "../yourApplication/firstForm/step4";
import SwitcherThree from "../details/switcher3/switcher3";
import MonthlyOutgoing from "../details/monthlyOutgoings/MonthlyOutgoings";
import CreditCommittments from "../details/creditCommittments/CreditCommittments";
import BankDetails from "../details/bankDetails/BankDetails";
// import AdditionalProperty from "../details/additionalProperty/AdditionalProperty";
import YourDocumentation from "../yourDocumentation/intro/mDocMain";
import YourApplication from "../yourApplication/intro/docMain";
import PtsbForm from "../yourApplication/ptsbForm/Main";
import fOne from "../yourApplication/threeForms/fOne/First";
import fTwo from "../yourApplication/threeForms/fTwo/Second";
import fThree from "../yourApplication/threeForms/fThree/Third";
import IcsForm from "../yourApplication/icsForm/src/App";
import KbcForm from "../yourApplication/kbcForm/index";
import AdditionalPropertyIndex from "../details/additionalProperty/additionalPropertyIndex";
import FinalPage from "../details/FinalPage/FinalPage";
import PersonalDetails1 from "../personalDetails/personalDetails1/personalDetails1";
import ExpertChat from "../expertChat/expertChat";
import Details from "../details";
import PersonalDetails2p1a from "../personalDetails/personalDetails2.1a/personalDetails2.1a";
import NewForm from "../yourApplication/newForm/NewForm";
import CustDoc from "../yourDocumentation/custCard/step1";
import AddDoc from "../yourDocumentation/addCard/step2";
import BankStDoc from "../yourDocumentation/bankStCard/step3";
import SavingDoc from "../yourDocumentation/savingCard/step4";
import BorrowDoc from "../yourDocumentation/borrowCard/step5";
import CreditDoc from "../yourDocumentation/creditCard/step6";
import MortgageDoc from "../yourDocumentation/mortgageCard/step7";
import PayeeDoc from "../yourDocumentation/payeeCard/step8";
import SelfDoc from "../yourDocumentation/selfCard/step9";
import SourceDoc from "../yourDocumentation/sourceCard/step10";
import OtherDoc from "../yourDocumentation/otherCard/step11";
import PersonalDetails2p1b from "../personalDetails/personalDetailsSwitch2.2a/personalDetailsSwitch2.2a";
const { Panel } = Collapse;

function Home(props) {
  return (
    <>
      {
        // !props.UserState.user.isVerified&&
        // <Redirect to="/verifymail" />||

        <div>
          <Row gutter={0}>
            <Col className="gutter-row" lg={5}>
              <div className="gutter-box leftbar-container">
                <LeftBar />
              </div>
            </Col>
            <Col className="gutter-row" lg={19}>
              <div className="gutter-box">
                <Row>
                  <Col lg={24}>
                    <SearchBar />
                  </Col>
                  <Switch>
                    <Route
                      exact
                      path="/home/settings"
                      component={UserSettings}
                    />
                    <Route
                      exact
                      path="/home/relatedInformation"
                      component={AfterIntial}
                    />
                    <Route
                      exact
                      path="/home/financial-health"
                      component={FinancialHealth}
                    />
                    <Route
                      exact
                      path="/home/financial-health/get-started"
                      component={GetStarted}
                    />
                    <Route
                      exact
                      path="/home/details/s5"
                      component={DetailMover}
                    />
                    {/* <Route exact path="/home/details/s1" component={StepOne} /> */}
                    <Route
                      exact
                      path="/home/details/s1"
                      component={CreditCommittments}
                    />
                    <Route exact path="/home/details" component={Details} />

                    <Route exact path="/home/details/s2" component={StepTwo} />
                    <Route
                      exact
                      path="/home/details/s3"
                      component={StepThree}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/form1"
                      component={StepFour}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/ptsbForm"
                      component={PtsbForm}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/threeForms/fOne/"
                      component={fOne}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/threeForms/fTwo"
                      component={fTwo}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/threeForms/fThree"
                      component={fThree}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/icsForm"
                      component={IcsForm}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/newForm"
                      component={NewForm}
                    />
                    <Route
                      exact
                      path="/home/yourApplication/kbcForm"
                      component={KbcForm}
                    />
                    <Route
                      exact
                      path="/home/details/s5"
                      component={MonthlyOutgoing}
                    />
                    <Route
                      exact
                      path="/home/details/credit-commitments"
                      component={CreditCommittments}
                    />
                    <Route
                      exact
                      path="/home/details/bank-details"
                      component={BankDetails}
                    />
                    <Route
                      exact
                      path="/home/details/switcher3"
                      component={SwitcherThree}
                    />
                    <Route
                      exact
                      path="/home/details/additional_p/:number"
                      component={AdditionalPropertyIndex}
                    />
                    <Route
                      exact
                      path="/home/details/final_page"
                      component={FinalPage}
                    />
                    <Route
                      exact
                      path="/home/details/personal_d1"
                      component={PersonalDetails1}
                    />
                    <Route
                      exact
                      path="/home/details/personal2p1a"
                      component={PersonalDetails2p1a}
                      path="/home/yourDocumentation"
                      component={YourDocumentation}
                    />
                    <Route
                      exact
                      path="/home/yourDocumentation/step1"
                      component={CustDoc}
                    />
                    <Route
                      exact
                      path="/home/yourDocumentation/step2"
                      component={AddDoc}
                    />
                    <Route
                      exact
                      path="/home/yourDocumentation/step3"
                      component={BankStDoc}
                    />
                    <Route
                      exact
                      path="/home/yourDocumentation/step4"
                      component={SavingDoc}
                    />
                    <Route
                      exact
                      path="/home/yourDocumentation/step5"
                      component={BorrowDoc}
                    />
                    <Route
                      exact
                      path="/home/yourDocumentation/step6"
                      component={CreditDoc}
                    />
                    <Route
                      exact
                      path="/home/yourDocumentation/step7"
                      component={MortgageDoc}
                    />
                    <Route
                      exact
                      path="/home/yourDocumentation/step8"
                      component={PayeeDoc}
                    />
                    <Route
                      exact
                      path="/home/yourDocumentation/step9"
                      component={SelfDoc}
                    />
                    <Route
                      exact
                      path="/home/yourDocumentation/step10"
                      component={SourceDoc}
                    />
                    <Route
                      exact
                      path="/home/yourDocumentation/step11"
                      component={OtherDoc}
                      path="/home/details/personal2p1b"
                      component={PersonalDetails2p1b}
                    />
                    <Route
                      exact
                      path="/home/expertChat"
                      component={ExpertChat}
                    />
                    <Route
                      exact
                      path="/home/yourApplication"
                      component={YourApplication}
                    />

                    <Route path="/home" component={Feed} />
                  </Switch>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      }
    </>
  );
}

const mapStateToProps = state => ({
  UserState: state.userReducer
});

export default connect(mapStateToProps)(Home);
