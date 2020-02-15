import React from "react";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Api from "../../../redux/api/financialHealthCheck";

class docMain extends React.Component {
  componentDidMount() {
    this.props.Get_Financial_data(this.props.userId);
  }
  render() {
    return (
      <div className="btn-div">
        <button
          onClick={() =>
            this.props.history.push("/home/yourDocumentation/form1")
          }
        >
          PIBA Form
        </button>
        <button
          onClick={() =>
            // this.props.history.push("/home/yourDocumentation/form1")
            alert(
              "Please link your PDF form on this button or create new button"
            )
          }
        >
          Next Form
        </button>
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
)(withRouter(docMain));
