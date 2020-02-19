import React, { Component } from "react";
import "./userForm.css";
import SelectBoxa from "../utils/Selectbox";
import { Row, Col, Select, Button, DatePicker } from "antd";
import moment from "moment";
const { Option } = Select;
class UserForm extends Component {
  render() {
    const {
      maritalStatus,
      maritalStatusOptions,
      selfEmployedOrPaye,
      childrenFinanciallyDependent,
      childrenFinanciallyDependentOptions,
      publicOrPrivateSector,
      selfEmployedOrPayeEmpty,
      publicOrPrivateSectorEmpty,
      maritalStatusEmpty,
      dateOfBirthEmpty,
      ageOfChildren,
      ageOfChildrenEmpty,
      childrenFinanciallyDependentEmpty,
      dateOfBirth
    } = this.props.allState;
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    return (
      <div className="fo_1_con user_form1">
        <Row className="fh-row-gs">
          <Col lg={24} className="col2 mysetting">
            <p className="heading3">What is your marital status?</p>
            {maritalStatusEmpty && (
              <span className="errormissting">
                * This field cannot be empty
              </span>
            )}
          </Col>
          <Col lg={24} className="q1 q3">
            <div
              className={
                maritalStatus === "Single"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                type="radio"
                name="maritalStatus"
                id="marital1"
                onChange={this.props.thisObject.handleRedioBtn}
                checked={maritalStatus === "Single"}
                value="Single"
              />
              <label for="marital1">Single</label>
            </div>
            <div
              className={
                maritalStatus === "Married"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                type="radio"
                name="maritalStatus"
                id="marital2"
                onChange={this.props.thisObject.handleRedioBtn}
                checked={maritalStatus === "Married"}
                className=""
                value="Married"
              />
              <label for="marital2">Married</label>
            </div>
            <div
              className={
                maritalStatus === "Widowed"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                type="radio"
                name="maritalStatus"
                id="marital3"
                onChange={this.props.thisObject.handleRedioBtn}
                checked={maritalStatus === "Widowed"}
                className=""
                value="Widowed"
              />
              <label for="marital3">Widowed</label>
            </div>
          </Col>

          <Col lg={24} className="col2 mysetting">
            <p className="heading3">What is your date of birth?</p>
            {dateOfBirthEmpty && (
              <span className="errormissting">
                * This field cannot be empty
              </span>
            )}
          </Col>
          <Col lg={24} className="q1">
            <div className="datepic">
              <DatePicker
              format={dateFormatList}
                className={
                  dateOfBirth !== ""
                    ? "radio-container container_malta"
                    : "radio-container"
                }
                onChange={this.props.thisObject.onChangeDate}
                defaultValue={moment(dateOfBirth ? dateOfBirth : Date.now())}
                // placeholder="Please Select "
              />
            </div>
          </Col>
          <Col lg={24} className="col2 mysetting">
            <p className="heading3">
              How many children are financially depend on you?
            </p>
            {childrenFinanciallyDependentEmpty && (
              <span className="errormissting">
                * This field cannot be empty
              </span>
            )}
          </Col>
          <Col lg={24} className="q1">
            <SelectBoxa
              valueItem={childrenFinanciallyDependent}
              optionsItem={childrenFinanciallyDependentOptions}
              handlebedFunc={this.props.thisObject.handleChild}
            />
          </Col>
          {childrenFinanciallyDependent > 0 ||
          childrenFinanciallyDependent == "5+" ? (
            <div>
              <Col lg={24} className="col2 mysetting">
                <p className="heading3">Please provide their age in years</p>
                {ageOfChildrenEmpty && (
                  <span className="errormissting">
                    * This field cannot be empty
                  </span>
                )}
              </Col>
              <Col lg={24} className="q1 myclassYear">
                {ageOfChildren
                  ? ageOfChildren.map((value, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            value !== 0
                              ? "input maltaback widthControl"
                              : "input widthControl"
                          }
                        >
                          <input
                            type="number"
                            name="ageOfChildren"
                            onChange={e =>
                              this.props.thisObject.arraySetAge(e, index)
                            }
                            value={value ? value : ""}
                          />
                        </div>
                      );
                    })
                  : null}
              </Col>
            </div>
          ) : null}
          <Col lg={24} className="col2 mysetting">
            <p  className="heading3">
              Do you work in the Public or Private sector?
            </p>
            {publicOrPrivateSectorEmpty && (
              <span className="errormissting">
                * This field cannot be empty
              </span>
            )}
          </Col>
          <Col lg={24} className="q1 magrin-t10 posstionChange">
            <div
              className={
                publicOrPrivateSector === "Private Sector"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                type="radio"
                name="publicOrPrivateSector"
                id="private"
                onChange={this.props.thisObject.handleRedioBtn}
                checked={publicOrPrivateSector === "Private Sector"}
                className=""
                value="Private Sector"
              />
              <label for="private">Private</label>
            </div>
            <div
              className={
                publicOrPrivateSector === "Public Sector"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                type="radio"
                name="publicOrPrivateSector"
                onChange={this.props.thisObject.handleRedioBtn}
                id="public"
                checked={publicOrPrivateSector === "Public Sector"}
                className=""
                style={{paddingTop:"-4px"}}
                value="Public Sector"
              />
              <label for="public">Public</label>
            </div>
          </Col>
          <div style={{ clear: "both" }}></div>
          <Col lg={24} className="col2 mysetting">
            <p className="heading3" style={{marginTop: "10px"}}>
              Are you a PAYE employee or Self Employed?
            </p>
            {selfEmployedOrPayeEmpty && (
              <span className="errormissting">
                * This field cannot be empty
              </span>
            )}
          </Col>

          <Col lg={24} className="q1">
            <div
              className="radio-container"
              className={
                selfEmployedOrPaye === "Self Employed"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                type="radio"
                onChange={this.props.thisObject.handleRedioBtn}
                name="selfEmployedOrPaye"
                id="incomType1"
                checked={selfEmployedOrPaye === "Self Employed"}
                className=""
                value="Self Employed"
              />
              <label for="incomType1">Self Employed</label>
            </div>
            <div
              className="radio-container"
              className={
                selfEmployedOrPaye === "PAYE"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                type="radio"
                name="selfEmployedOrPaye"
                onChange={this.props.thisObject.handleRedioBtn}
                id="incomType2"
                checked={selfEmployedOrPaye === "PAYE"}
                className=""
                value="PAYE"
              />
              <label for="incomType2">PAYE</label>
            </div>
          </Col>
          <Col lg={10}>
            <div className="btn-div">
              <button
                onClick={() => this.props.thisObject.props.changeProfRout(1)}
                className="btn1"
              >
                Back
              </button>
              <Button
                onClick={this.props.thisObject.onsubmitForm}
                className="btn2"
              >
                Save & Continue
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserForm;
