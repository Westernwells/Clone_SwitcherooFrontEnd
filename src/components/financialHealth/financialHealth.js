import React, { useState } from "react";
import { Row, Col } from "antd";
import { Route } from "react-router-dom";
import "./financialHealth.css";
import GetStarted from "./getStarted/getStarted";
import GetStartedText from "./getStatetedText/getStartedText";
import YourResult from "./result/result";
import CheckResult from './checkResult/checkResult';


function FinancialHealth(props) {


  return (
    <Col lg={24} >
      <Route exact path="/home/financial-health/result" component={YourResult} />
      <Route exact path="/home/financial-health/get-started" component={GetStarted} />
      <Route exact path="/home/financial-health" component={GetStartedText} />
      <Route exact path="/home/financial-health/check-result" component={CheckResult} />
    </Col>

  );
}
export default FinancialHealth;