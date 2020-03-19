import React, { useState } from "react";
import { Collapse, Icon, Select, Row, Col, Button } from "antd";
import SavingAccounts from "./SavingAccounts";
import "./SavingAccounts.css";
import property from "../../financialHealth/afterintial/property";

const { Panel } = Collapse;
const { Option } = Select;

// function callback(key) {
//   console.log(key);
// }

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

// const genExtra = () => (
//   <Icon
//     type="setting"
//     onClick={event => {
//       // If you don't want click extra trigger collapse, you can prevent this:
//       event.stopPropagation();
//     }}
//   />
// );
const customPanelStyle = {
  background: "#62635d",
  marginBottom: 24,
  border: "none",
  overflow: "hidden"
};

function AdditionalPropertyIndex(props) {
  const [state, setState] = useState({
    key: -1
  });
  const [array, setArray] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false)
  const [expandIconPosition, setExpandIconPosition] = useState("right");
  function clickRadio(e) {
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  }
  const [questions, setQuestions] = useState({});
  const [q4, setQ4] = useState(true);
  var handleQ = e => {
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    var qs = questions;
    qs[e.target.name] = e.target.value;
    if (e.target.name === "haveAccount" && e.target.value === "Yes") {
      setToggleBtn(true);
    }
    if (e.target.name === "haveAccount" && e.target.value === "No") {
      setToggleBtn(false);
    }
    setQ4(!q4);
    // validateRadio(e.target.name, e.target.value);
    for (var i = 0; i < radioContainers.length; i++) {
      var input = radioContainers[i].childNodes[0];
      if (input.checked) {
        input.parentNode.style.background = "#fb9500";
        input.parentNode.style.border = "2px solid #fb9500";
      } else {
        input.parentNode.style.background = "lightgray";
        input.parentNode.style.border = "2px solid gray";
      }
    }
  };
  const onPositionChange = expandIconPosition => {
    setExpandIconPosition(expandIconPosition);
  };

  const callback = key => {
    setState({ key });
  };
  function addAccount(type) {
    setArray([...array, type]);
  }
  function onsubmitForm() {
    props.changeProfRoute(7)
  }

  console.log(state);
  return (
    <div className="saving-acc-p index">
      <Row>
        <Col lg={24}>
          <h1 className="heading1">Details of your saving accounts</h1>
        </Col>
      </Row>
      <Collapse accordion onChange={callback} expandIconPosition={"right"}>
        {array.map((value, index) => {
          return (
            <Panel
              style={customPanelStyle}
              showArrow={state.key !== index}
              header={`${value} Account ${index + 1}`}
              key={index}
            >
              <SavingAccounts />
            </Panel>
          );
        })}
      </Collapse>
      <Row>
        <Col lg={24}>
          <h6 className="h61">Do you have any {array.length !== 0 && "other"} saving/investment account?</h6>
        </Col>
        <Col lg={24} className="q1 q4" style={{clear:"both"}}>
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.haveAccount === "Yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="haveAccount"
              id="haveAccount1"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Yes"
            />
            <label for="haveAccount1">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.haveAccount === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="haveAccount"
              id="haveAccount2"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="No"
            />
            <label for="haveAccount2">No</label>
          </div>
        </Col>
        {toggleBtn && (
          <Col lg={24}>
            <div className="account-btns">
              <Button onClick={() => addAccount("Saving")} className="btn1">
                <b>+</b> Saving Account
              </Button>
              <Button onClick={() => addAccount("Investment")} className="btn1">
                <b>+</b> Investment Account
              </Button>
            </div>
          </Col>
        )}

        <Col className="btn-col" lg={10} offset={0}>
          <div className="btn-div">
            <Button
              style={{ height: "40px" }}
              onClick={() => props.changeProfRoute(5)}
              className="btn1"
            >
              Back
            </Button>
            <Button
              // onClick={() => handleRoute("/home/details/switcher3")}
              onClick={onsubmitForm}
              className="btn2"
            >
              Countinue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default AdditionalPropertyIndex;
