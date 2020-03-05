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

import { connect } from "react-redux";
import Api from "../../redux/api/detailsApi";

import MonthlyOutgoing from "./monthlyOutgoings/MonthlyOutgoings";
import CreditCommittments from "./creditCommittments/CreditCommittments";
import BankDetails from "./bankDetails/BankDetails";
import TopSteper from "./topnavigation/topSteper";
import UserNav from "./userNavigation/topNavigation";

export class index extends Component {
  state = {
    selectedKey: 1,
    defalutClient: "user1",
    secPage: false,
    purposeOfMortgage: "",
    user1Data: {
      
    },
    user2Data: {
      
    }
  };

  onSubmitData = () => {
    console.log('submited',this.state.user1Data)
    this.props.set_Personal_Details({
      userId: this.props.userId,
      applicant2: {
        ...this.state.user1Data
      },
      // applicant2: {
      //   ...this.state.user2Data
      // }
    });
  };

  changeProfRoute = key => this.setState({ selectedKey: key });

  profRouteRenderer = () => {
    const { selectedKey, defalutClient } = this.state;
    if (selectedKey === 1)
      if (
        this.state.secPage == false &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        //  Start First Time Buyer
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            present={true}
            changeProfRout={this.changeProfRoute}
            secPageMethod={(arg, data) =>
              this.setState({
                secPage: arg,
                user1Data: {...data}
              })
            }
          />
        );
      } else if (
        this.state.secPage == false &&
        this.state.defalutClient == "user2" &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        //  Start First Time Buyer
        console.log(this.props.purposeOfMortgage);
        return (
          <PersonalDetails1
            present={true}
            changeProfRout={this.changeProfRoute}
            secPageMethod={(arg, data) =>
              this.setState({
                secPage: arg,
                user2Data: { ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPage == true &&
        this.state.defalutClient == "user1" &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        return (
          <PersonalDetails21a
            present={true}
            changeProfRout={this.changeProfRoute}
            // secPageMethod = {(arg)=> this.setState({secPage:arg})}
            getData={data =>
              this.setState({
                user1Data: { ...this.state.user1Data, ...data }
              })
            }
          />
        );
      } else if (
        this.state.secPage == true &&
        this.state.defalutClient == "user2" &&
        this.props.purposeOfMortgage == "First Time Buyer"
      ) {
        return (
          <PersonalDetails21b
            present={true}
            changeProfRout={this.changeProfRoute}
            // secPageMethod = {(arg)=> this.setState({secPage:arg})}
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
      this.state.secPage == false &&
      this.state.defalutClient == "user1" &&
      this.props.purposeOfMortgage == "House Mover"
    ) {
      console.log(this.props.purposeOfMortgage);
      return (
        <PersonalDetails1
          user="this.user1"
          present={true}
          changeProfRout={this.changeProfRoute}
          secPageMethod={(arg, data) =>
            this.setState({
              secPage: arg,
              user1Data: {...data}
            })
          }
        />
      );
    } else if (
      this.state.secPage == false &&
      this.state.defalutClient == "user2" &&
      this.props.purposeOfMortgage == "House Mover"
    ) {
      console.log(this.props.purposeOfMortgage);
      return (
        <PersonalDetails1
          user="this.user2"
          present={true}
          changeProfRout={this.changeProfRoute}
          secPageMethod={(arg, data) =>
            this.setState({
              secPage: arg,
              user2Data: { ...data }
            })
          }
        />
      );
    } else if (
      this.state.secPage == true &&
      this.state.defalutClient == "user1" &&
      this.props.purposeOfMortgage == "House Mover"
    ) {
      return (
        <PersonalDetails23a
          present={true}
          changeProfRout={this.changeProfRoute}
          // secPageMethod = {(arg)=> this.setState({secPage:arg})}
          onSubmitData = {this.onSubmitData}
          getData={data =>
            this.setState({
              user1Data: { ...this.state.user1Data, ...data }
            })
          }
        />
      );
    } else if (
      this.state.secPage == true &&
      this.state.defalutClient == "user2" &&
      this.props.purposeOfMortgage == "House Mover"
    ) {
      return (
        <PersonalDetails23b
          present={true}
          changeProfRout={this.changeProfRoute}
          // secPageMethod = {(arg)=> this.setState({secPage:arg})}
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
      this.state.secPage == false &&
      this.state.defalutClient == "user1" &&
      this.props.purposeOfMortgage == "Switcher"
    ) {
      //  Start First Time Buyer
      console.log(this.props.purposeOfMortgage);
      return (
        <PersonalDetails1
          user="this.user1"
          present={true}
          changeProfRout={this.changeProfRoute}
          secPageMethod={(arg, data) =>
            this.setState({
              secPage: arg,
              user1Data: { ...data }
            })
          }
        />
      );
    } else if (
      this.state.secPage == false &&
      this.state.defalutClient == "user2" &&
      this.props.purposeOfMortgage == "Switcher"
    ) {
      console.log(this.props.purposeOfMortgage);
      return (
        <PersonalDetails1
          user="this.user2"
          present={true}
          changeProfRout={this.changeProfRoute}
          secPageMethod={(arg, data) =>
            this.setState({
              secPage: arg,
              user2Data: {  ...data }
            })
          }
        />
      );
    } else if (
      this.state.secPage == true &&
      this.state.defalutClient == "user1" &&
      this.props.purposeOfMortgage == "Switcher"
    ) {
      return (
        <PersonalDetails22a
          present={true}
          changeProfRout={this.changeProfRoute}
          getData={data =>
            this.setState({
              user1Data: { ...this.state.user1Data, ...data }
            })
          }
          // secPageMethod = {(arg)=> this.setState({secPage:arg})}
        />
      );
    } else if (
      this.state.secPage == true &&
      this.state.defalutClient == "user2" &&
      this.props.purposeOfMortgage == "Switcher"
    ) {
      return (
        <PersonalDetails22b
          present={true}
          changeProfRout={this.changeProfRoute}
          // secPageMethod = {(arg)=> this.setState({secPage:arg})}
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
    console.log("user1", this.state.user1Data);
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
  userReducer: {
    user: { _id }
  },
  Financial_data: {
    financial_Health_Check: { purposeOfMortgage }
  }
}) => ({
  purposeOfMortgage,
  userId: _id
});

const mapDispatchToProps = dispacth => ({
  set_Personal_Details: props => dispacth(Api.personalDetailsDataPost(props))
  //  onSaveQ4Data : (data) => dispacth(Actions.saveQ4Data(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
