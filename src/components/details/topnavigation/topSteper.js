import React, { Component } from "react";
import "./topSteper.css";
import { Steps, Popover } from "antd";
import { connect } from "react-redux";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const { Step } = Steps;

const CustomDot = "";

class TopSteper extends Component {
  render() {
    const { defaltSet } = this.props;
    const { progress = 0 } = this.props;
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
            <Steps
              current={defaltSet}
              progressDot={(dot, { status,description }) => {
                // alert('working')
                // console.log("props", progress);
                console.log("dot", description);
                console.log("status", status);
                // console.log("index", index);
                return (
                  <div style={{ width: "100%" }}>
                    <CircularProgressbar
                      value={
                        status == "finish"
                          ? 100
                          : status == "wait"
                          ? 0
                          : status == "process"
                          ? progress
                          : null
                      }
                      // className = 'progress'
                      strokeWidth={50}
                      background={true}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        pathColor: "#FB9500",
                        textColor: "#FB9500",
                        trailColor: "#9999"
                      })}
                    />
                  </div>
                  // <Popover content={<span>step {index + 1}</span>}>{dot}</Popover>
                );
              }}
            >
              <Step
                className={defaltSet > 0 ? "complete" : "processing"}
                title="Mortgage Details"
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
