import React, { Component } from "react";

import "./index.css";
import StepOne from "./personalDetails1/personalDetails1";
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
    const { selectedKey } = this.state;
    if (selectedKey === 1)
      return <StepOne present={true} changeProfRout={this.changeProfRoute} />;
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

export default index;
