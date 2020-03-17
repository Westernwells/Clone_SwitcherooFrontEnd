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
        {/* <button
          onClick={() => this.props.history.push("/home/yourApplication/form1")}
        >
          PIBA Form
        </button> */}
        <button
          onClick={
            () => this.props.history.push("/home/yourApplication/ptsbForm")
            // alert(
            //   "Please link your PDF form on this button or create new button"
            // )
          }
        >
          PTSB Form
        </button>
        <button
          onClick={
            () => this.props.history.push("/home/yourApplication/icsForm")
            // alert(
            //   "Please link your PDF form on this button or create new button"
            // )
          }
        >
          ICS Form
        </button>
        {/* <button
          onClick={
            () => this.props.history.push("/home/yourApplication/newForm")
            // alert(
            //   "Please link your PDF form on this button or create new button"
            // )
          }
        >
          New PIBA Form
        </button> */}
        <button
          onClick={
            () =>
              this.props.history.push("/home/yourApplication/threeForms/fOne")
            // alert(
            //   "Please link your PDF form on this button or create new button"
            // )
          }
        >
          Sepa Direct Form
        </button>
        <button
          onClick={
            () =>
              this.props.history.push("/home/yourApplication/threeForms/fTwo")
            // alert(
            //   "Please link your PDF form on this button or create new button"
            // )
          }
        >
          Heaven Form
        </button>
        <button
          onClick={
            () =>
              this.props.history.push("/home/yourApplication/threeForms/fThree")
            // alert(
            //   "Please link your PDF form on this button or create new button"
            // )
          }
        >
          Sepa Direct Debit Form
        </button>
        <button
          onClick={
            () => this.props.history.push("/home/yourApplication/kbcForm")
            // alert(
            //   "Please link your PDF form on this button or create new button"
            // )
          }
        >
          KBC Form
        </button>
        <button
          onClick={
            () => this.props.history.push("/home/yourApplication/asfandTask")
            // alert(
            //   "Please link your PDF form on this button or create new button"
            // )
          }
        >
          PIBA Form
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
