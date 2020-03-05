import React from "react";
import { Row, Col } from "antd";
import "./getStartedText.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Api from "../../../redux/api/financialHealthCheck";

class GetStartedText extends React.Component {
  componentDidMount() {
    this.props.Get_Financial_data(this.props.userId);
  }
  render() {
    return (
      <div className="gst-con">
        {console.log(this.props.financial_data)}
        <Row className="gst-row">
          <Col lg={12}>
            <h1 className="h1">
              Hi{" "}
              <span style={{ textTransform: "capitalize" }}>
                {this.props.userFirstName}
              </span>,
            </h1>
            <p className="p1 padding-b-i">
              We understand that taking out a mortgage is as big a deal as it
              gets so we want to make sure that you are financially in a good
              place before you set on your journey.
            </p>
            <p className="p1 padding-b-i">
              Even if you are looking to switching your mortgage to a better
              rate your circumstances may have changed since you got your
              mortgage so we should check you out to make sure you are mortgage
              fit!
            </p>
            <p className="p1">
              We have developed clever algorithms to check out your financial
              health and assess your affordability and what the banks will
              likely lend you.
            </p>
            <p className="p2">
              Don't worry this is quick and painless, we will be done in about
              90 seconds
            </p>
            <div className="btn-div">
              <button
                onClick={() =>
                  this.props.history.push(`/home/relatedInformation`)
                }
              >
                Let's Get Started
              </button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = ({
  userReducer: {
    user: { _id, firstName }
  },
  Financial_data: { financial_Health_Check }
}) => ({
  financial_data: financial_Health_Check,
  userId: _id,
  userFirstName: firstName
});
const mapDispatchToProps = dispacth => ({
  Get_Financial_data: props => dispacth(Api.financialDataGet(props))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GetStartedText));
