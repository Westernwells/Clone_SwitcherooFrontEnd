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
        //dispatch(actions.LoadingFinancialData(true));

        this.setState({ [route]: false });
        if (res.status === 201)
          res.json().then(res => {
            console.log("[response-2]",res);
              this.props.onCalculateResult(route,res)
            this.success(message);
          })
      })
      .catch(err => {
        console.log(err);
        this.setState({ [route]: false });
        this.error("some thing going wrong testing");
      });
  };

  render() {

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
 console.log("state",this.state)
      console.log("userId",this.props.userId)
    // const onSubmitHandler = () => {
    //   this.props.changeProfRout(4)
    // }
    const onClickHandler = () => {

    }
    return (
      <div className="result-con">
        <div className="logo">
          <img src="images/home/logo.png" alt="logo" />
        </div>
        {/*  <Button*/}
        {/*      className="btncheck"*/}
        {/*      onClick={() =>*/}
        {/*          //this.checkfillsheet("fillHavenSpreadSheet", "fillHavenSheet made success")*/}
        {/*          this.checkfillsheet("fillSpreadSheet", "fillSpreadSheet made success")*/}
        {/*      }*/}
        {/*      loading={this.state.fillSpreadSheet}*/}
        {/*  >*/}
        {/*      fillSpreadSheet Testing*/}
        {/*  </Button>*/}
        {/*<Button*/}
        {/*  className="btncheck"*/}
        {/*  onClick={() =>*/}
        {/*    this.checkfillsheet("fillHavenSpreadSheet", "fillHavenSheet made success")*/}
        {/*      //this.checkfillsheet("fillSpreadSheet", "fillSpreadSheet made success")*/}
        {/*  }*/}
        {/*  loading={this.state.fillHavenSpreadSheet}*/}
        {/*>*/}
        {/*  fillHavenSpreadSheet Testing*/}
        {/*</Button>*/}

        {/*<Button*/}
        {/*  className="btncheck"*/}
        {/*  onClick={() =>*/}
        {/*    this.checkfillsheet(*/}
        {/*      "fillIcsSpreadSheet",*/}
        {/*      "fillIcsSpreadSheet made success"*/}
        {/*    )*/}
        {/*  }*/}
        {/*  loading={this.state.fillIcsSpreadSheet}*/}
        {/*>*/}
        {/*  fillIcsSpreadSheet  Testing*/}
        {/*</Button>*/}

        {/*<Button*/}
        {/*  className="btncheck"*/}
        {/*  onClick={() =>*/}
        {/*    this.checkfillsheet(*/}
        {/*      "fillPtsbSpreadSheet",*/}
        {/*      "fillPtsbSpreadSheet made success"*/}
        {/*    )*/}
        {/*  }*/}
        {/*  loading={this.state.fillPtsbSpreadSheet}*/}
        {/*>*/}
        {/*  fillPtsbSpreadSheet Testing*/}
        {/*</Button>*/}

        <div className="d1">
          <h1 className="h1">You Financial Health Check Results</h1>
          {/*<Row>*/}
          {/*  <Col lg={12}>*/}
          {/*    <div className="amount-div">*/}
          {/*      <h1>€200,000</h1>*/}
          {/*      <p>(Loan Amount)</p>*/}
          {/*    </div>*/}
          {/*  </Col>*/}
          {/*  <Col lg={12}>*/}
          {/*    <div className="meter-div">*/}
          {/*      <GaugeChart id="gauge-chart2"*/}
          {/*        nrOfLevels={20}*/}
          {/*        percent={0.86}*/}
          {/*        animDelay={6}*/}
          {/*        textColor="black"*/}
          {/*        needleColor="background: #fb9500"*/}
          {/*      />*/}
          {/*      /!* <img src="images/home/meter.jpg" alt="meter" /> *!/*/}
          {/*    </div>*/}
          {/*  </Col>*/}
          {/*</Row>*/}
          <p className="p2">
            We are connecting to the banks affordability calculators to see whether they will lend your requested
            mortgage based upon the information you have provided.
          </p>

        </div>
        {/*<div className="warning-div">*/}
        {/*  <h5 className="w5">Warnings</h5>*/}
        {/*  <div className="warnings">*/}
        {/*    <p>*/}
        {/*      Warning: If you do not meet the repayments on your credit*/}
        {/*      agreement, your account will go into arrears. This may effect your*/}
        {/*      credit rating, which may limit your ability to access credit in*/}
        {/*    </p>*/}
        {/*    <p>*/}
        {/*      Warning: If you do not keep your repayment you may lose your home.*/}
        {/*    </p>*/}
        {/*    <p>*/}
        {/*      Warning: You my have to pay charges if you pay off a fixed-rate*/}
        {/*      loan early.*/}
        {/*    </p>*/}
        {/*    <p>*/}
        {/*      Warning: This new load may take longer to pay off than your*/}
        {/*      previous loans. This mean you may pay more than if you paid over a*/}
        {/*      shorter term.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<Button*/}
        {/*  className="btncheck"*/}
        {/*  onClick={onClickHandler}*/}
        {/*  loading={this.state.fillSpreadSheet }*/}
        {/*>*/}
        {/*  let's calculate your results*/}
        {/*</Button>*/}
          <div style={{    textAlign: "center",
              padding: "50px 0px"}}>
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
