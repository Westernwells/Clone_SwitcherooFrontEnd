import React from "react";
import { Checkbox, InputNumber } from "antd";

import "./checkbox.css";
const FormCheckbox = props => {
  return (
    <div className="form_checkbox">
      <div className="input">
        <div style={{ display: "flex" }}>
          <p className="input-lbl">{props.children}</p>
        </div>
        <p
          className={
            props.itemName[2] || props.itemName[3]
              ? props.children.length > 100
                ? "EruoSymbleDisableClass lastelemt"
                : "EruoSymbleDisableClass"
              : props.children.length > 100
              ? "EruoSymbleanableClass lastelemt"
              : "EruoSymbleanableClass"
          }
        >
          &euro;
        </p>
        <InputNumber
          disabled={props.itemName[2]}
          name={props.itemName[0]}
          value={props.itemName[1]}
          formatter={value => {
            if (value.indexOf("-")) {
            return  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
             return `(${value})`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
          }}
          onChange={
            props.children.length < 150
              ? value => props.onChangeTextSecond(value, props.itemName[0])
              : value => props.cashFlowChange(value, props.itemName[0])
          }
          className={
            props.itemName[2]
              ? "DisableClass"
              : props.itemName[3]
              ? "missingtext"
              : props.itemName[1]
              ? `${props.itemName[1]}`.indexOf("-") ? "anableClass" :'anableClass reddrop'
              : "valuenotyet"
          }
          placeholder="0"
        />

        <Checkbox
          className="checkbox"
          name={props.itemName[0]}
          checked={props.itemName[2] === true}
          onChange={props.onChangefunc}
        >
          {" "}
          Not Applicable?
        </Checkbox>
        {props.itemName[3] && (
          <span className="errormissting">* This field cannot be empty</span>
        )}
      </div>
    </div>
  );
};

export default FormCheckbox;
