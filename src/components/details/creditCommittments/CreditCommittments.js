import React, { useState, Component } from "react";
import { Row, Col, Select, Button, Icon } from "antd";
import "./CreditCommittments.css";
import InputMask from 'react-input-mask'

const { Option } = Select;
const banks = [
    "Aib",
    "An Post",
    "Bank of Ireland",
    "KBC",
    "PTSB",
    "Ulster bank",
    "Credit Union",
    "Other"
];

const county = [
    "Carlow",
    "Cavan",
    "Clare",
    "Cork City",
    "Cork County",
    "Denegal",
    "Dublin 1",
    "Dublin 2",
    "Dublin 3",
    "Dublin 4",
    "Dublin 5",
    "Dublin 6",
    "Dublin 6w",
    "Dublin 7",
    "Dublin 8",
    "Dublin 9",
    "Dublin 10",
    "Dublin 11",
    "Dublin 12",
    "Dublin 13",
    "Dublin 14",
    "Dublin 15",
    "Dublin 16",
    "Dublin 17",
    "Dublin 18",
    "Dublin 20",
    "Dublin 22",
    "Dublin 24",
    "Dublin Country(North)",
    "Dublin Country(South)",
    "Dublin Country(West)",
    "Galway City",
    "Galway Country",
    "Kerry",
    "Kildare",
    "Kilkenny",
    "Laois",
    "Leitrim City",
    "Limerick Country",
    "Longford",
    "Louth",
    "Mayo",
    "Meath",
    "Monaghan",
    "Offaly",
    "Roscommon",
    "Sligo",
    "Tipperary",
    "Waterford City",
    "Waterford Country",
    "Westmeath",
    "Wexford",
    "Wicklow"
];

const years = [1, 2, 3, 4, 5, "5+"]
class CreditCommittments extends Component {
    state = {
        questions: {
            q1: ""
        },
        q4: false,
        bank: "",
        sortCode: null,
        counter: 0,
        InputMask: "",
        location: "",
        name: "",
        addressLineOne: "",
        city: "",
        county: "",
        years: "",
        eirCode: "",
        acountNumber: "",
        comments: ""

    }

    clickRadio = ( e ) => {
        var label = e.target.childNodes[1];
        if ( label ) {
            label.click();
        }
    }
    handleInputChange = ( e ) => {
        const name = e.target.name;
        this.setState( {
            [name]: e.target.value
        } )
    }
    handleComments = ( e ) => {
        this.setState( {
            comments: e.target.value
        } )
    }

    handleSortChange = ( e ) => {
        this.setState( {
            sortCode: e.target.value
        } )
    }
    handleQ = e => {
        const { questions } = this.state
        var radioContainers = e.target.parentNode.parentNode.childNodes;
        var qs = questions;
        qs[e.target.name] = e.target.value;
        console.log( qs );
        this.setState( {
            q4: !this.state.q4
        } )
        // validateRadio(e.target.name, e.target.value);
        for ( var i = 0; i < radioContainers.length; i++ ) {
            var input = radioContainers[i].childNodes[0];
            if ( input.checked ) {
                input.parentNode.style.background = "#fb9500";
                input.parentNode.style.border = "2px solid #fb9500";
            } else {
                input.parentNode.style.background = "lightgray";
                input.parentNode.style.border = "2px solid gray";
            }
        }
    };
    handleChange = ( value ) => {
        this.setState( {
            bank: value
        } )
    }
    handleCounty = ( value ) => {
        this.setState( {
            county: value
        } )
    }

    handleRoute = route => {
        this.props.history.push( route );
    };

    renderCommentsBox = ( q ) => {
        const { comments } = this.state
        if ( q == "b" ) {
            return <>
                <Col lg={24}>
                    <h6 className="h61">
                        If not please explain which account will be used for your first mortgage payments
                    </h6>
                </Col>

                <Col lg={24}>
                    <div className="textarea-input">
                        <textarea
                            placeholder="comments"
                            value={comments}
                            onChange={this.handleComments}
                        />
                    </div>
                </Col>
            </>
        }
    }
    bankConditional = () => {
        const { bank, location, name } = this.state;
        if ( bank === "Credit Union" ) {
            return <React.Fragment><Col lg={24}>
                <h6 className="h61">please provide location</h6>
            </Col>
                <Col className="colomn_8" lg={10}>
                    <div className="input">
                        <input type="text"
                            name="location"
                            placeholder="Location"
                            value={location}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </Col></React.Fragment>
        } else if ( bank === "Other" ) {
            return <React.Fragment><Col lg={24}>
                <h6 className="h61">please provide name</h6>
            </Col>
                <Col className="colomn_8" lg={10}>
                    <div className="input">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </Col></React.Fragment>
        }
    }
    render() {
        const { questions, sortCode, addressLineOne, city, eirCode, acountNumber } = this.state
        console.log( this.state )
        return (
            <div className="credit-commitments" >
                <Row className="d-row-s1">
                    <Col lg={24}>
                        <h1 className="heading1">
                            Details of your credit commitments
                        </h1>
                    </Col>
                    <Col lg={24}>
                        <h6 className="h61">What institution do you have your main current account with?</h6>
                    </Col>
                    <Col className="colomn_8" lg={6}>
                        <div>
                            <Select
                                className="select-option1"
                                defaultValue="Select bank"
                                onChange={this.handleChange}
                            >
                                {banks.map( ( rec, key ) => <Option key={key} value={rec}>{rec}</Option> )}
                            </Select>
                        </div>
                    </Col>
                    {this.bankConditional()}
                    <Col lg={24}>
                        <h6 className="h61">Address of branch</h6>
                    </Col>
                    <Col lg={24}>
                        <div className="input">
                            <input type="text"
                                name="addressLineOne"
                                value={addressLineOne}
                                onChange={this.handleInputChange}
                                placeholder="Address Line 1" />
                        </div>
                    </Col>
                    <Col lg={24}>
                        <div className="input">
                            <input type="text"
                                name="city"
                                value={city}
                                onChange={this.handleInputChange}
                                placeholder="City" />
                        </div>
                    </Col>
                    <Col className="colomn_8" lg={15}>
                        <Select
                            className="select-option1"
                            defaultValue="County"
                            onChange={this.handleCounty}
                        >
                            {county.map( ( rec, key ) => <Option key={key} value={rec}>{rec}</Option> )}
                        </Select>
                    </Col>
                    <Col lg={24}>
                        <div className="input">
                            <input
                                type="text"
                                name="eirCode"
                                value={eirCode}
                                onChange={this.handleInputChange}
                                placeholder="EirCode" />
                        </div>
                    </Col>
                    <Col lg={24}>
                        <h6 className="h61">Account Number</h6>
                    </Col>
                    <Col className="colomn_8" lg={10}>
                        <div className="input">
                            <input type="text"
                                name="acountNumber"
                                placeholder="Acount Number"
                                value={acountNumber}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </Col>
                    <Col lg={24}>
                        <h6 className="h61">Sort Code</h6>
                    </Col>
                    <Col className="colomn_8" lg={10}>
                        <div className="input">
                            <InputMask
                                {...this.props}
                                mask="99-99-99"
                                alwaysShowMask="true"
                                maskChar="X"
                                value={sortCode}
                                onChange={this.handleSortChange} />

                        </div>
                    </Col>
                    <Col lg={24}>
                        <h6 className="h61">How long have you had this account?</h6>
                    </Col>
                    <Col className="colomn_8" lg={6} style={{ width: "27%" }}>
                        <div>
                            <Select
                                className="select-option1"
                                defaultValue="Select years"
                                onChange={this.handleChange}
                            >
                                {years.map( ( rec, key ) => <Option key={key} value={rec}>{rec}</Option> )}
                            </Select>
                        </div>
                    </Col>
                    <Col lg={24}>
                        <h6 className="h61">
                            Please confirm this is the account that you will be making your first mortgage payment from
                        </h6>
                    </Col>
                    <Col lg={24} className="q1 q3 my_costuma colomn_8">
                        <div
                            onClick={this.clickRadio}
                            className={
                                questions.purposeOfMortgage === "First Time Buyer"
                                    ? "radio-container container_malta"
                                    : "radio-container"
                            }
                        >
                            <input
                                onChange={this.handleQ}
                                type="radio"
                                name="q3"
                                id="q31"
                                className=""
                                // checked={questions.purposeOfMortgage === "a"}
                                value="a"
                            />
                            <label for="q31">Yes</label>
                        </div>
                        <div
                            onClick={this.clickRadio}
                            className={
                                questions.purposeOfMortgage === "House Mover"
                                    ? "radio-container container_malta"
                                    : "radio-container"
                            }
                        >
                            <input
                                onChange={this.handleQ}
                                type="radio"
                                name="q3"
                                id="q32"
                                // checked={questions.purposeOfMortgage === "House Mover"}
                                className=""
                                value="b"
                            />
                            <label for="q32">No</label>
                        </div>
                    </Col>
                    {questions.q3 && this.renderCommentsBox( questions.q3 )}
                    <Col lg={24}>
                    <h6 className="heading1">
                       OK, lets add loan/overdraft/credit card details 
                    </h6>
                </Col>
                    <Col lg={10} offset={0}>
                        <div className="btn-div">
                            <Button
                                style={{ height: "40px" }}
                                onClick={() => window.history.back()}
                                className="btn1"
                            >
                                Back
                            </Button>
                            <Button
                                  onClick={() => this.handleRoute("/home/details/bank-details")}
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
export default CreditCommittments;
