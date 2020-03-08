import React from "react";
import { Row, Col, Button, message } from "antd";
import { withRouter } from "react-router-dom";
import "./checkResult.css";
import { connect } from "react-redux";
import Logo from "../images/questionMark icon.png";

import bank1Yes from "./result-assests/optimized-gif/bank-1/yes11_5.gif";
import bank1No from "./result-assests/optimized-gif/bank-1/no11_5.gif";
import bank1Maybe from "./result-assests/optimized-gif/bank-1/maybe11_5.gif";

import bank2Yes from "./result-assests/optimized-gif/bank-2/yes22_5.gif";
import bank2No from "./result-assests/optimized-gif/bank-2/no22_5.gif";
import bank2Maybe from "./result-assests/optimized-gif/bank-2/maybe22_5.gif";

import bank3Yes from "./result-assests/optimized-gif/bank-3/yes33_5.gif";
import bank3No from "./result-assests/optimized-gif/bank-3/no33_5.gif";
import bank3Maybe from "./result-assests/optimized-gif/bank-3/maybe33_5.gif";

import bank4Yes from "./result-assests/optimized-gif/bank-4/yes44_5.gif";
import bank4No from "./result-assests/optimized-gif/bank-4/no44_5.gif";
import bank4Maybe from "./result-assests/optimized-gif/bank-4/maybe44_5.gif";

import happy from "./result-assests/happy-emoji.jpg";
import sad from "./result-assests/sad-emoji.png";
import logo from "./result-assests/logo.png";

import Button1 from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { orange } from "@material-ui/core/colors";
import { changeKey } from "../../../redux/actions/financial_health/changeKey_Action";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class CheckResult extends React.Component {
  state = {
    bank1: null,
    bank2: null,
    bank3: null,
    bank4: null,
    click1: false,
    click2: false,
    click3: false,
    click4: false,
    showResult: 0,
    openModel: false
  };

  Modal() {
    if (this.state.showResult >= 3) {
      setTimeout(() => {
        this.setState({ openModel: true });
      }, 5000);
    }
  }

  render() {
    console.log("[props]", this.props);
    const handleRoute = () => {
      this.props.onChangeKey("3");
      this.props.history.push("/home/details");
    };
    const getBank1ResultsHandler = () => {
      if (this.props.result.fillSpreadSheet.data === "1") {
        this.setState({ bank1: "yes" });
      } else if (this.props.result.fillSpreadSheet.data === "3") {
        this.setState({ bank1: "no" });
      } else if (this.props.result.fillSpreadSheet.data === "2") {
        this.setState({ bank1: "maybe" });
      }
      this.setState({ click1: true });
      this.setState({ showResult: this.state.showResult + 1 });
      this.Modal();
    };
    const getBank2ResultsHandler = () => {
      if (this.props.result.fillIcsSpreadSheet.data === "1") {
        this.setState({ bank2: "yes" });
      } else if (this.props.result.fillIcsSpreadSheet.data === "3") {
        this.setState({ bank2: "no" });
      } else if (this.props.result.fillIcsSpreadSheet.data === "2") {
        this.setState({ bank2: "maybe" });
      }
      this.setState({ click2: true });
      this.setState({ showResult: this.state.showResult + 1 });
      this.Modal();
    };
    const getBank3ResultsHandler = () => {
      if (this.props.result.fillPtsbSpreadSheet.data === "1") {
        this.setState({ bank3: "yes" });
      } else if (this.props.result.fillPtsbSpreadSheet.data === "3") {
        this.setState({ bank3: "no" });
      } else if (this.props.result.fillPtsbSpreadSheet.data === "2") {
        this.setState({ bank3: "maybe" });
      }
      this.setState({ click3: true });
      this.setState({ showResult: this.state.showResult + 1 });
      this.Modal();
    };
    const getBank4ResultsHandler = () => {
      if (this.props.result.fillHavenSpreadSheet.data === "1") {
        this.setState({ bank4: "yes" });
      } else if (this.props.result.fillHavenSpreadSheet.data === "3") {
        this.setState({ bank4: "no" });
      } else if (this.props.result.fillHavenSpreadSheet.data === "2") {
        this.setState({ bank4: "maybe" });
      }
      this.setState({ click4: true });
      this.setState({ showResult: this.state.showResult + 1 });
      this.Modal();
    };
    return (
      <div>
        <div className="result-con">
          <div className="logo">
            <img src="images/home/logo.png" alt="logo" />
          </div>

          <div className="d1">
            <h1 className="h1">Your Financial Health Check Results</h1>
            <p className="p2">
              We are connecting to the banks affordability calculators to see
              whether they will lend your requested mortgage based upon the
              information you have provided.
            </p>

            {this.props.q4 === "No" ? (
              <>
                <Row>
                  <Col lg={12}>
                    <div className="amount-div">
                      <h1>Bank 1</h1>
                      {/* <i className="material-icons">error_outline</i> */}
                      <hr className="hr"></hr>
                      {this.state.bank1 === "yes" ? (
                        <img src={bank1Yes} alt="Yes" />
                      ) : this.state.bank1 === "no" ? (
                        <img src={bank1No} alt="No" />
                      ) : this.state.bank1 === "maybe" ? (
                        <img src={bank1Maybe} alt="May be" />
                      ) : (
                        <img src={Logo} alt="Question Mark" />
                      )}
                      {this.state.click1 === true &&
                      this.state.bank1 === "yes" ? (
                        <div className="bank-1-4">
                          <div>
                            <h1 style={{ color: "#fb9500" }}>Good news,</h1>
                            <img src={happy} alt="Happy Emoji" />
                          </div>
                          <p>
                            Based upon the information provided we believe this
                            bank will lend to you
                          </p>
                        </div>
                      ) : this.state.click1 === true &&
                        this.state.bank1 === "no" ? (
                        <div className="bank-1-4">
                          <div>
                            <h2 style={{ color: "#fb9500" }}>Sorry</h2>
                            <img src={sad} alt="Sad Emoji" />
                            <h2
                              className="heading"
                              style={{ color: "#fb9500" }}
                            >
                              Bad News
                            </h2>
                          </div>
                          <p>
                            Based upon the information provided we believe this
                            bank will lend to you
                          </p>
                        </div>
                      ) : this.state.click1 === true &&
                        this.state.bank1 === "maybe" ? (
                        <div className="bank-1-4">
                          <div>
                            <h3 style={{ color: "#fb9500" }}>
                              Manager Review Required
                            </h3>
                          </div>
                          <p>
                            We believe you are in the bank's lending criteria
                            but will require a more senior level of approval
                          </p>
                        </div>
                      ) : (
                        <button onClick={getBank1ResultsHandler}>
                          Get Results
                        </button>
                      )}
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="amount-div">
                      <h1>Bank 2</h1>
                      {/* <i className="material-icons">error_outline</i> */}
                      <hr className="hr"></hr>
                      {this.state.bank2 === "yes" ? (
                        <img src={bank2Yes} alt="Yes" />
                      ) : this.state.bank2 === "no" ? (
                        <img src={bank2No} alt="No" />
                      ) : this.state.bank2 === "maybe" ? (
                        <img src={bank2Maybe} alt="May be" />
                      ) : (
                        <img src={Logo} alt="Question Mark" />
                      )}
                      {this.state.click2 === true &&
                      this.state.bank2 === "yes" ? (
                        <div className="bank-1-4">
                          <div>
                            <h1 style={{ color: "#002efb73" }}>Good news,</h1>
                            <img src={happy} alt="Happy Emoji" />
                          </div>
                          <p>
                            Based upon the information provided we believe this
                            bank will lend to you
                          </p>
                        </div>
                      ) : this.state.click2 === true &&
                        this.state.bank2 === "no" ? (
                        <div className="bank-1-4">
                          <div>
                            <h2 style={{ color: "#002efb73" }}>Sorry</h2>
                            <img src={sad} alt="Sad Emoji" />
                            <h2
                              className="heading"
                              style={{ color: "#002efb73" }}
                            >
                              Bad News
                            </h2>
                          </div>
                          <p>
                            Based upon the information provided we believe this
                            bank will lend to you
                          </p>
                        </div>
                      ) : this.state.click2 === true &&
                        this.state.bank2 === "maybe" ? (
                        <div className="bank-1-4">
                          <div>
                            <h3 style={{ color: "#002efb73" }}>
                              Manager Review Required
                            </h3>
                          </div>
                          <p>
                            We believe you are in the bank's lending criteria
                            but will require a more senior level of approval
                          </p>
                        </div>
                      ) : (
                        <button onClick={getBank2ResultsHandler}>
                          Get Results
                        </button>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={12}>
                    <div className="amount-div">
                      <h1>Bank 3</h1>
                      {/* <i className="material-icons">error_outline</i> */}
                      <hr className="hr"></hr>
                      {this.state.bank3 === "yes" ? (
                        <img src={bank3Yes} alt="Yes" />
                      ) : this.state.bank3 === "no" ? (
                        <img src={bank3No} alt="No" />
                      ) : this.state.bank3 === "maybe" ? (
                        <img src={bank3Maybe} alt="May be" />
                      ) : (
                        <img src={Logo} alt="Question Mark" />
                      )}
                      {this.state.click3 === true &&
                      this.state.bank3 === "yes" ? (
                        <div className="bank-1-4">
                          <div>
                            <h1 style={{ color: "#53c742" }}>Good news,</h1>
                            <img src={happy} alt="Happy Emoji" />
                          </div>
                          <p>
                            Based upon the information provided we believe this
                            bank will lend to you
                          </p>
                        </div>
                      ) : this.state.click3 === true &&
                        this.state.bank3 === "no" ? (
                        <div className="bank-1-4">
                          <div>
                            <h2 style={{ color: "#53c742" }}>Sorry</h2>
                            <img src={sad} alt="Sad Emoji" />
                            <h2
                              className="heading"
                              style={{ color: "#53c742" }}
                            >
                              Bad News
                            </h2>
                          </div>
                          <p>
                            Based upon the information provided we believe this
                            bank will lend to you
                          </p>
                        </div>
                      ) : this.state.click3 === true &&
                        this.state.bank3 === "maybe" ? (
                        <div className="bank-1-4">
                          <div>
                            <h3 style={{ color: "#53c742" }}>
                              Manager Review Required
                            </h3>
                          </div>
                          <p>
                            We believe you are in the bank's lending criteria
                            but will require a more senior level of approval
                          </p>
                        </div>
                      ) : (
                        <button onClick={getBank3ResultsHandler}>
                          Get Results
                        </button>
                      )}
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="amount-div">
                      <h1>Bank 4</h1>
                      {/* <i className="material-icons">error_outline</i> */}
                      <hr className="hr"></hr>
                      {this.state.bank4 === "yes" ? (
                        <img src={bank4Yes} alt="Yes" />
                      ) : this.state.bank4 === "no" ? (
                        <img src={bank4No} alt="No" />
                      ) : this.state.bank4 === "maybe" ? (
                        <img src={bank4Maybe} alt="May be" />
                      ) : (
                        <img src={Logo} alt="Question Mark" />
                      )}
                      {this.state.click4 === true &&
                      this.state.bank4 === "yes" ? (
                        <div className="bank-1-4">
                          <div>
                            <h1 style={{ color: "#e18494" }}>Good news,</h1>
                            <img src={happy} alt="Happy Emoji" />
                          </div>
                          <p>
                            Based upon the information provided we believe this
                            bank will lend to you
                          </p>
                        </div>
                      ) : this.state.click4 === true &&
                        this.state.bank4 === "no" ? (
                        <div className="bank-1-4">
                          <div>
                            <h2 style={{ color: "#e18494" }}>Sorry</h2>
                            <img src={sad} alt="Sad Emoji" />
                            <h2
                              className="heading"
                              style={{ color: "#e18494" }}
                            >
                              Bad News
                            </h2>
                          </div>
                          <p>
                            Based upon the information provided we believe this
                            bank will lend to you
                          </p>
                        </div>
                      ) : this.state.click4 === true &&
                        this.state.bank4 === "maybe" ? (
                        <div className="bank-1-4">
                          <div>
                            <h3 style={{ color: "#e18494" }}>
                              Manager Review Required
                            </h3>
                          </div>
                          <p>
                            We believe you are in the bank's lending criteria
                            but will require a more senior level of approval
                          </p>
                        </div>
                      ) : (
                        <button onClick={getBank4ResultsHandler}>
                          Get Results
                        </button>
                      )}
                    </div>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <div className="result-div">
                  <div className="top">
                    <h1>Result</h1>
                    {/* <i className="material-icons">error_outline</i> */}
                  </div>

                  <hr className="hrr"></hr>
                  <img src={bank1No} alt="Question Mark" />
                </div>

                <p className="result-para">
                  Sorry based on the information provided we won't be able to
                  help you a mortgage.We recommend you discuss your
                  circumstances with you primary current account bank who may be
                  best placed to help
                </p>
              </>
            )}
          </div>

          <div>
            <Dialog open={this.state.openModel} fullWidth={false}>
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-slide-title"
                  style={{
                    fontWeight: 700,
                    color: "rgb(251, 149, 0)",
                    fontSize: "20px",
                    margin: "40px 0px"
                  }}
                >
                  Let's proceed and get your details to sort out your mortage
                </DialogContentText>
              </DialogContent>

              <div style={{ display: "flex", padding: "16px 0px" }}>
                <DialogContentText
                  id="alert-dialog-slide-title"
                  style={{
                    fontWeight: 1000,
                    color: "rgb(251, 149, 0)",
                    fontSize: "25px",
                    margin: "40px 0px"
                  }}
                >
                  <button
                    onClick={handleRoute}
                    style={{
                      backgroundColor: "#616161",
                      color: "#ffffff",
                      height: "45px",
                      padding: "0px 100px",
                      margin: "0px 0px 0 200px",
                      textAlign: "center",
                      borderRadius: "8px"
                    }}
                  >
                    OK
                  </button>
                </DialogContentText>
                <img
                  src={logo}
                  alt="logo"
                  style={{ marginLeft: 50, position: "relative", top: -23 }}
                />
              </div>
            </Dialog>
          </div>
        </div>

        <div className="footerDiv">
          <div className="bgClr">
            <div className="bgInnerDiv">
              <h2>
                This does not represent a formal mortgage offer or a guarantee
                of a mortgages
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    q4: state.getStartedReducer.data,
    result: state.calculateResultReducer.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onChangeKey: key => dispatch(changeKey(key))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CheckResult));
