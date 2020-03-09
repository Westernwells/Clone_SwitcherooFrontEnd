import React from "react";
import { Row, Col, Button, message } from "antd";
import "./result.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GaugeChart from 'react-gauge-chart'
import Api from "../../../redux/api/financialHealthCheck";
import { baseurl } from "../../../redux/api/index";
import * as Actions from '../../../redux/actions/financial_health/calculateResult_Action';

class YourResult extends React.Component {

  state = {
      fillSpreadSheet:false,
    fillHavenSpreadSheet: false,
    fillIcsSpreadSheet: false,
    fillPtsbSpreadSheet: false,
      isProgressShow:false,
      isBtnShow:true
  };


  componentDidMount() {
    this.props.SheetFill(this.props.userId);
  }

  success = data => {
    message.success(data);
  };

  error = data => {
    message.error(data);
  };

  checkfillsheet = (route, message) => {
    const token = localStorage.getItem("tokenas");

    const options = {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      })
    };
    this.setState({ [route]: true });
    // fetch(baseurl + `/financialHealth/${route}/${this.props.userId}`, options)
      fetch(`https://switchroo.herokuapp.com/financialHealth/${route}/${this.props.userId}`,options)
      .then(res => {

        this.setState({ [route]: false });
        if (res.status === 201)
          res.json().then(res => {
            console.log("[response-2]",res);
              this.props.onCalculateResult(route,res.data)
            this.success(message);
          })
          if (res.status !== 201){
            console.log("response-error");
            const error = "Result Not Found!"
            this.props.onCalculateResult(route,error)
            this.success(message);
          }
      })
      .catch(err => {
        console.log(err);
        const error = "Result Not Found!"
        this.props.onCalculateResult(route,error)
        this.setState({ [route]: false });
        this.error("some thing going wrong testing");
      });
  };

  render() {
      console.log(this.props.userId)
      const showProgress = e =>{
          this.setState({isProgressShow:true,isBtnShow:false})
          this.checkfillsheet("fillSpreadSheet", "fillSpreadSheet made success");
          this.checkfillsheet("fillHavenSpreadSheet", "fillHavenSheet made success");
          this.checkfillsheet("fillIcsSpreadSheet", "fillIcsSpreadSheet made success");
          this.checkfillsheet("fillPtsbSpreadSheet", "fillPtsbSpreadSheet made success");
          setTimeout( () => {
              this.props.changeProfRout(4)
          },4000)

      }
    return (
      <div className="calculate-result">
        <div>
          <img src="images/home/logo.png" alt="logo" />
        </div>


        <div className="content">
          <h1 >Your Financial Health Check Results</h1>

          <p>
            We are connecting to the banks affordability calculators to see whether they will lend your requested
            mortgage based upon the information you have provided.
          </p>

        </div>

          <div style={{textAlign: "center", padding: "40px 0px"}}>
              {this.state.isBtnShow && (
                  <button className="progresBtn" onClick={showProgress} >let's calculate your results</button>)}
              {this.state.isProgressShow && (
                  <div>
                      <div className="progress-bar-container">
                          <div className="progress-bar stripes animated reverse slower">
                              <span className="progress-bar-inner"></span>
                          </div>
                      </div>
                  </div>
              )
              }
          </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  userReducer: {
    user: { _id, firstName }
  }
}) => ({
  userId: _id,
  userFirstName: firstName
});

const mapDispatchToProps = dispacth => ({
  SheetFill: props => dispacth(Api.fillDataSheet(props)),
    onCalculateResult :  (route,message) => dispacth(Actions.calculateResults(route,message))
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(YourResult));
