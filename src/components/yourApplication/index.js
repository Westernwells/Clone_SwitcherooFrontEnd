import React, { useState } from "react";
import { Row, Col } from "antd";
import { Route } from "react-router-dom";
import FirstForm from "./firstForm/step4";

function dMain(props) {
  return (
    <Col lg={24}>
      <Route
        exact
        path="/home/your-documentation/firstform"
        component={FirstForm}
      />
    </Col>
  );
}
export default dMain;
