import React, { useState } from "./node_modules/react";
import { Row, Col } from "./node_modules/antd";
import { Route } from "./node_modules/react-router-dom";
// import FirstForm from "./firstForm/step4";

function mdoc(props) {
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
export default mdoc;
