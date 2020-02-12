import React, { Component } from 'react'
import './BankDetails.css'
import { Icon, Col, Row, Select, DatePicker } from 'antd'
const { Option } = Select

function BankCollapse( props ) {


    const renderCommentsBox = () => {
        if ( props.purpose === "Other" ) {
            return <>
                <Col lg={24}>
                    <h6 className="h61">
                        If other please describe
                    </h6>
                </Col>

                <Col lg={24}>
                    <div className="textarea-input">
                        <textarea
                            placeholder="comments"
                            value={props.comments}
                            onChange={props.handleCommentChange}
                        />
                    </div>
                </Col>
            </>
        }
    }
    const lendrConditional = () => {
        const { lender, location, name } = props;
        if ( lender === "Credit Union" ) {
            return <React.Fragment><Col lg={24}>
                <h6 className="h61">Please provide location/name</h6>
            </Col>
                <Col className="colomn_8" lg={16}>
                    <div className="input">
                        <input type="text"
                            name="location"
                            placeholder="Location"
                            value={location}
                            onChange={props.handleInputChange}
                        />
                    </div>
                </Col></React.Fragment>
        } else if ( lender === "Other" ) {
            return <React.Fragment><Col lg={24}>
                <h6 className="h61">Please provide institution's name</h6>
            </Col>
                <Col className="colomn_8" lg={16}>
                    <div className="input">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={props.handleInputChange}
                        />
                    </div>
                </Col></React.Fragment>
        }
    }
    const balanceRender = () => {
        if ( accountName === "Loan Account" ) {
            return (
                <Col lg={24}>
                    <h6 className="h61">
                        What is the outstanding balance?
                        </h6>
                </Col>
            )
        } else if ( accountName === "Overdraft Account" ) {
            return (
                <Col lg={24}>
                    <h6 className="h61">
                        What is the maximum outstanding balance over the last 6 months?
                        </h6>
                </Col>
            )
        } else if ( accountName === "Credit Card Account" ) {
            return (
                <Col lg={24}>
                    <h6 className="h61">
                        What is the credit card limit?
                        </h6>
                </Col>
            )
        }
    }


    // const { name } = this.props

    const {
        isActive,
        accountNo,
        monthlyCharges,
        balance,
        arrears,
        questions,
        accountName,
        handleClick,
        lenderArray,
        lender,
        purposeArray,
        handleLenderChange,
        handlePurposeChange,
        handleQ,
        handleInputChange,
        onLoanChange

    } = props;
    console.log( "props====>", lender );
    return (
        <React.Fragment><div className={isActive ? "collapse" : "collapse-inactive"}>
            <span className="account-text">{accountName}
            </span>
            {isActive ? <Icon
                type="down"
                className="right-arrow"
                onClick={() => handleClick()}
            /> : <Icon
                    type="right"
                    className="right-arrow"
                    onClick={() => handleClick()}
                />}
        </div> {isActive && <div className="bank-frame">
            <Row className="d-row-s1">
                <Col lg={24}>
                    <h6 className="h61">What is the purpose of the account?</h6>
                </Col>
                <Col lg={10} >
                    <div >
                        <Select
                            className="select-option1"
                            defaultValue="Select from options"
                            onChange={handlePurposeChange}
                        >
                            {purposeArray.map( ( value, index ) => {
                                return <Option key={index} value={value}>{value}</Option>
                            } )}

                        </Select>
                    </div>
                </Col>
                {renderCommentsBox()}
                <Col lg={24}>
                    <h6 className="h61">What is the name of the lender?</h6>
                </Col>
                <Col lg={10} >
                    <div >
                        <Select
                            className="select-option1"
                            defaultValue="Select from options"
                            onChange={handleLenderChange}

                        >
                            {lenderArray.map( ( value, index ) => {
                                return <Option key={index} value={value}>{value}</Option>
                            } )}

                        </Select>
                    </div>
                </Col>
                {lendrConditional()}
                <Col lg={24}>
                    <h6 className="h61">Whats is the account number?</h6>
                </Col>
                <Col lg={16}>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="########"
                            name="accountNo"
                            value={accountNo}
                            onChange={handleInputChange}
                        />
                    </div>
                </Col>
                {balanceRender()}
                <Col lg={16}>
                    <div className="input input2">
                        <span className="pre">€</span>
                        <input
                            type="text"
                            placeholder="########"
                            pattern="[0-9]*"
                            name="balance"
                            value={balance}
                            onChange={handleInputChange}
                        />
                    </div>
                </Col>
                <Col lg={24}>
                    <h6 className="h61">
                        Whats are the monthly repayments/charges?
                        </h6>
                </Col>
                <Col lg={16}>
                    <div className="input input2">
                        <span className="pre">€</span>
                        <input
                            type="text"
                            placeholder="########"
                            name="monthlyCharges"
                            value={monthlyCharges}
                            pattern="[0-9]*"
                            onChange={handleInputChange}
                        />
                    </div>
                </Col>
                <Col lg={24}>
                    <h6 className="h61">
                        Any arrears? How much?
                        </h6>
                </Col>
                <Col lg={16}>
                    <div className="input input2">
                        <span className="pre">€</span>
                        <input type="text"
                            placeholder="########"
                            value={arrears}
                            name="arrears"
                            pattern="[0-9]*"
                            onChange={handleInputChange}

                        />
                    </div>
                </Col>
                {onLoanChange && <Col lg={24}>
                    <h6 className="h61">
                        Date of final payment?
                        </h6>
                </Col>}
                {onLoanChange && <Col lg={20}>
                    <div className="input datepic" >
                        <DatePicker onChange={onLoanChange} />
                    </div>
                </Col>}
                <Col lg={24}>
                    <h6 className="h61">Are you clearing this as part of your mortgage?</h6>
                </Col>

                <Col lg={24} className="q1 q3 my_costuma colomn_8">
                    <div
                        // onClick={this.clickRadio}
                        className={
                            questions.purposeOfMortgage === "First Time Buyer"
                                ? "radio-container container_malta"
                                : "radio-container"
                        }
                    >
                        <input
                            onChange={handleQ}
                            type="radio"
                            name="clearingMortage"
                            id="q31"
                            className=""
                            // checked={questions.purposeOfMortgage === "a"}
                            value="a"
                        />
                        <label for="q31">Yes</label>
                    </div>
                    <div
                        // onClick={this.clickRadio}
                        className={
                            questions.purposeOfMortgage === "House Mover"
                                ? "radio-container container_malta"
                                : "radio-container"
                        }
                    >
                        <input
                            onChange={handleQ}
                            type="radio"
                            name="clearingMortage"
                            id="q32"
                            // checked={questions.purposeOfMortgage === "House Mover"}
                            className=""
                            value="b"
                        />
                        <label for="q32">No</label>
                    </div>
                </Col>
            </Row>
        </div>}</React.Fragment>
    )
}

export default BankCollapse