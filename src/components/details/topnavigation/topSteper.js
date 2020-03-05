import React, { Component } from "react";
import "./topSteper.css";
import { Steps, Popover } from "antd";
import { connect } from "react-redux";

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index + 1}</span>}>{dot}</Popover>
);

class TopSteper extends Component {
  render() {
    const { defaltSet } = this.props;
    return (
      <div className="topStep_main">
        <h2 className="nameHeading">
          {" "}
          Details on what you need : &nbsp;
          {this.props.defalutClient === "user1"
            ? this.props.userFirstName
            : this.props.firstNameSecondApplicant}
        </h2>
        <div className="step_cont widthconcole">
          <div>
            <Steps current={defaltSet} progressDot={customDot}>
              <Step
                className={defaltSet > 0 ? "complete" : "processing"}
                title="Background"
                description="1"
              />
              <Step
                className={defaltSet > 1 ? "complete" : "processing"}
                title="Personal Details"
                description="2"
              />
              <Step
                className={defaltSet > 2 ? "complete" : "processing"}
                title="Employement details"
                description="3"
              />
              <Step
                className={defaltSet > 3 ? "complete" : "processing"}
                title="Income Details"
                description="4"
              />
              <Step
                className={defaltSet > 4 ? "complete" : "processing"}
                title="Monthly Outgoings"
                description="5"
              />
              <Step
                className={defaltSet > 5 ? "complete" : "processing"}
                title="Credit Commentments"
                description="6"
              />
              <Step
                className={defaltSet > 6 ? "complete" : "processing"}
                title="Saving Account"
                description="7"
              />
              <Step
                className={defaltSet === 8 ? "complete" : "processing"}
                title="Declaration"
                description="8"
              />
            </Steps>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  userReducer: {
    user: { firstName }
  },
  Financial_data: {
    financial_Health_Check: { peopleOnMortgage, firstNameSecondApplicant }
  }
}) => ({
  peopleOnMortgage,
  firstNameSecondApplicant,
  userFirstName: firstName
});

export default connect(mapStateToProps)(TopSteper);
