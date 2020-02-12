import React, { Component } from "react";
import { Row, Col, Select, Button, Icon } from "antd";
import "./MonthlyOutgoings.css";

class MonthlyOutgoing extends Component {

    state = {
        childMinding: 5000,
        maintenance: 3000,
        schoolFess: 8000,
        sporting: 3500,
        isDisabledChild: "true",
        isDisabledMaintainance: "true",

    }

    handleInputChange = ( e ) => {
        const name = e.target.name
        this.setState( {
            [name]: e.target.validity.valid ? e.target.value : this.state[name]
        } )
    }
    handleChildEdit = ( e ) => {
        this.setState( {
            isDisabledChild: false,
        } )
    }
    handleMaintanceEdit = ( e ) => {
        this.setState( {
            isDisabledMaintainance: false,
        } )
    }
    handleRoute = route => {
        this.props.history.push( route );
    };
    render() {
        const { childMinding,
            maintenance,
            schoolFess,
            sporting,
            isDisabledMaintainance,
            isDisabledChild,
        } = this.state
        return (
            <div className="monthly-outgoings">
                <Row className="d-row-s1">
                    <Col lg={24}>
                        <h1 className="heading1">
                            Details of your finicial wellbeing
                        </h1>
                    </Col>
                    <Col lg={24}>
                        <h6 className="h61">
                            Do you have monthly childminding costs?
                        </h6>
                    </Col>
                    <Col className="inputWithEdit" lg={24}>
                        <div className="input">
                            <input type="text"
                                name="childMinding"
                                placeholder="#######"
                                value={childMinding}
                                pattern="[0-9]*"
                                disabled={isDisabledChild}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="edit_C" onClick={this.handleChildEdit}>
                            <Icon type="form" /> <span>edit</span>
                        </div>
                    </Col>
                    <Col lg={24}>
                        <h6 className="h61">
                            Do you have monthly spousal/maintenance costs?
                        </h6>
                    </Col>
                    <Col className="inputWithEdit" lg={24}>
                        <div className="input">
                            <input type="text"
                                name="maintenance"
                                placeholder="#######"
                                pattern="[0-9]*"
                                value={maintenance}
                                disabled={isDisabledMaintainance}
                                onChange={this.handleInputChange}

                            />
                        </div>
                        <div className="edit_C"
                            onClick={this.handleMaintanceEdit}>
                            <Icon type="form" /> <span>edit</span>
                        </div>
                    </Col>
                    <Col lg={24}>
                        <h6 className="h61">
                            Do you have private school fees? (annual)
                     </h6>
                    </Col>
                    <Col className="inputWithEdit" lg={24}>
                        <div className="input">
                            <input type="text"
                                name="schoolFess"
                                value={schoolFess}
                                placeholder="#######"
                                pattern="[0-9]*"
                                onChange={this.handleInputChange}
                            />
                        </div>

                    </Col>
                    <Col lg={24}>
                        <h6 className="h61">
                            Do you have social/sporting club subscriptions? (annual)
                        </h6>
                    </Col>
                    <Col className="inputWithEdit" lg={24}>
                        <div className="input">
                            <input
                                type="text"
                                name="sporting"
                                pattern="[0-9]*"
                                value={sporting}
                                placeholder="#######"
                                onChange={this.handleInputChange}
                            />
                        </div>

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
                                onClick={() => this.handleRoute( "/home/details/credit-commitments" )}
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
export default MonthlyOutgoing;
