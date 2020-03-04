import React, { Component } from "react";

import "./index.css";
import MoverUser1 from "./personalDetailsMover2.3a/personalDetailsMover2.3a";
import SwitcherUser1 from "./personalDetailsSwitch2.2a/personalDetailsSwitch2.2a";
import FTBUser1 from "./personalDetails2.1a/personalDetails2.1a";
import MoverUser2 from "./personalDetailsMover2.3b/personalDetailsMover2.3b";
import PersonalDetails1 from "./personalDetails1/personalDetails";

import SwitcherUser2 from "./personalDetailsSwitch2.2b/personalDetailsSwitch2.2b";
import FTBUser2 from "./personalDetails2.1b/personalDetails2.1b";

import { connect } from "react-redux";

import MonthlyOutgoing from "./monthlyOutgoings/MonthlyOutgoings";
import CreditCommittments from "./creditCommittments/CreditCommittments";
import BankDetails from "./bankDetails/BankDetails";
import TopSteper from "./topnavigation/topSteper";
import UserNav from "./userNavigation/topNavigation";

export class index extends Component {
  state = {
    selectedKey: 1,
    defalutClient: "user1"
  };

  changeProfRoute = key => this.setState({ selectedKey: key });

  profRouteRenderer = () => {
    const { selectedKey, defalutClient } = this.state;
    if (selectedKey === 1)
    return (
      <PersonalDetails1
        present={true}
        changeProfRout={this.changeProfRoute}
      />
    );
    if (
      selectedKey === 2 &&
      this.props.purposeOfMortgage === "First Time Buyer" &&
      defalutClient === "user1"
    )
      return <FTBUser1 present={true} changeProfRout={this.changeProfRoute} />;
    if (
      selectedKey === 2 &&
      this.props.purposeOfMortgage === "House Mover" &&
      defalutClient === "user1"
    )
      return (
        <MoverUser1 present={true} changeProfRout={this.changeProfRoute} />
      );
    if (
      selectedKey === 2 &&
      this.props.purposeOfMortgage === "Switcher" &&
      defalutClient === "user1"
    )
      return (
        <SwitcherUser1 present={true} changeProfRout={this.changeProfRoute} />
      );
    if (
      selectedKey === 2 &&
      this.props.purposeOfMortgage === "First Time Buyer" &&
      defalutClient === "user2"
    )
      return <FTBUser2 present={true} changeProfRout={this.changeProfRoute} />;
    if (
      selectedKey === 2 &&
      this.props.purposeOfMortgage === "House Mover" &&
      defalutClient === "user2"
    )
      return (
        <MoverUser2 present={true} changeProfRout={this.changeProfRoute} />
      );
    if (
      selectedKey === 2 &&
      this.props.purposeOfMortgage === "Switcher" &&
      defalutClient === "user2"
    )
      return (
        <SwitcherUser2 present={true} changeProfRout={this.changeProfRoute} />
      );
  
    if (selectedKey === 5)
      return (
        <MonthlyOutgoing present={true} changeProfRout={this.changeProfRoute} />
      );
    if (selectedKey === 6)
      return <CreditCommittments changeProfRout={this.changeProfRoute} />;
    if (selectedKey === 7)
      return <BankDetails changeProfRout={this.changeProfRoute} />;
  };

  UserChange = e => {
    this.setState({
      defalutClient: e.key
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <TopSteper
              defaltSet={this.state.selectedKey}
              changeProfRoute={this.changeProfRoute}
              defalutClient={this.state.defalutClient}
            />
            <div className="bottonItems">
              <UserNav
                defalutClient={this.state.defalutClient}
                onchangeFunc={this.UserChange}
              />
              {this.profRouteRenderer()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  Financial_data: {
    financial_Health_Check: { purposeOfMortgage }
  }
}) => ({
  purposeOfMortgage
});
export default connect(mapStateToProps)(index);
