import React, { Component } from "react";
import "./userForm.css";
import { Row, Col, Button } from "antd";
import Checkbox from "../utils/checkbox";
export default class userForm extends Component {
  render() {
    const {
      basicIncome,
      overTimeEarnedInyear,
      commissionEarnedInYear,
      bonusEarnedInYear,
      guaranteedAllowance,
      otherVariableIncome,
      annualPension,
      basicIncomeDisable,
      overTimeEarnedInyearDisable,
      commissionEarnedInYearDisable,
      bonusEarnedInYearDisable,
      guaranteedAllowanceDisable,
      otherVariableIncomeDisable,
      annualPensionDisable,
      basicIncomeEmpty,
      overTimeEarnedInyearEmpty,
      commissionEarnedInYearEmpty,
      bonusEarnedInYearEmpty,
      guaranteedAllowanceEmpty,
      otherVariableIncomeEmpty,
      annualPensionEmpty
    } = this.props.allState;

    const {
      onChangeTextSecond,
      onChangeSecond,
      onsubmitForm
    } = this.props.thisObject;
    return (
      <div className="fo_2_con">
        <p className="note_text">
          {" "}
          {this.props.text
            ? this.props.text
            : "Please try and be as accurate as possible in describing your earnings. All figures are yearly. Check box if it is not applicable to you"}
        </p>
        <Row className="formUser-row-gs">
          <Checkbox
            itemName={[
              "basicIncome",
              basicIncome,
              basicIncomeDisable,
              basicIncomeEmpty
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            What is your basic income?
          </Checkbox>

          <Checkbox
            itemName={[
              "overTimeEarnedInyear",
              overTimeEarnedInyear,
              overTimeEarnedInyearDisable,
              overTimeEarnedInyearEmpty
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much overtime do you earn?
          </Checkbox>

          <Checkbox
            itemName={[
              "commissionEarnedInYear",
              commissionEarnedInYear,
              commissionEarnedInYearDisable,
              commissionEarnedInYearEmpty
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much commissions do you earn?
          </Checkbox>

          <Checkbox
            itemName={[
              "bonusEarnedInYear",
              bonusEarnedInYear,
              bonusEarnedInYearDisable,
              bonusEarnedInYearEmpty
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much bonus do you earn?
          </Checkbox>
          <Checkbox
            itemName={[
              "guaranteedAllowance",
              guaranteedAllowance,
              guaranteedAllowanceDisable,
              guaranteedAllowanceEmpty
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            Do you receive a guaranteed allowance e.g. car allowance, rent
            allowance?
          </Checkbox>
          <Checkbox
            itemName={[
              "otherVariableIncome",
              otherVariableIncome,
              otherVariableIncomeDisable,
              otherVariableIncomeEmpty
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            Do you have any other form of variable income (non rental)?
          </Checkbox>
          <Checkbox
            itemName={[
              "annualPension",
              annualPension,
              annualPensionDisable,
              annualPensionEmpty
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay into your pension on an annual basis?
          </Checkbox>
          <Col lg={10}>
            <div className="btn-div">
              <button
                onClick={this.props.thisObject.onChangeback}
                className="btn1"
              >
                Back
              </button>
              <Button onClick={onsubmitForm} className="btn2">
                Save & Continue
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
