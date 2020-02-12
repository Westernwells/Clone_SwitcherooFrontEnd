import React, { Component } from "react";
// import Result from "../result/result"
// import Property from "./property/index"
// import User1 from "./User/userContainner"
// import Background from "../financialHealth/getStarted/getStarted"

import "./index.css"
// import Top from "../financialHealth/afterintial/topnavigation/topSteper";
import MonthlyOutgoing from "./monthlyOutgoings/MonthlyOutgoings";
import CreditCommittments from "./creditCommittments/CreditCommittments";
import TopSteper from "../financialHealth/afterintial/topnavigation/topSteper";
import BankDetails from "./bankDetails/BankDetails";


export class index extends Component {
  state = {
    selectedKey: 5
  }

  changeProfRoute = key => this.setState({ selectedKey: key });

  profRouteRenderer = () => {
    const { selectedKey } = this.state;
    console.log("selected key",selectedKey)
    if(selectedKey===5) return <MonthlyOutgoing  present={true} changeProfRout={this.changeProfRoute}/>
    if(selectedKey===6) return <CreditCommittments  changeProfRout={this.changeProfRoute}/>
    if(selectedKey===7)return <BankDetails changeProfRout={this.changeProfRoute}/>

  };

  render() {
    return (
      <div>
        <div >
          <div >
            <TopSteper defaltSet={this.state.selectedKey} changeProfRoute={this.changeProfRoute} />
                {this.profRouteRenderer()}
          </div>
        </div>
      </div>
    );
  }
}

export default index;
