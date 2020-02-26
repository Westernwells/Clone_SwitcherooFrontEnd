import React from "react";
import { Row, Col, Button, message } from "antd";
import "./checkResult.css";
import { connect } from "react-redux";
import Logo from '../images/questionMark icon.png';

import bank1Yes from './result-assests/bank-1/yes1_5.gif';
import bank1No from './result-assests/bank-1/no1_5.gif';
import bank1Maybe from './result-assests/bank-1/maybe1_5.gif';

import bank2Yes from './result-assests/bank-2/yes2_5.gif';
import bank2No from './result-assests/bank-2/no2_5.gif';
import bank2Maybe from './result-assests/bank-2/maybe2_5.gif';

import bank3Yes from './result-assests/bank-3/yes3_5.gif';
import bank3No from './result-assests/bank-3/no3_5.gif';
import bank3Maybe from './result-assests/bank-3/maybe3_5.gif';

import bank4Yes from './result-assests/bank-4/yes4_5.gif';
import bank4No from './result-assests/bank-4/no4_5.gif';
import bank4Maybe from './result-assests/bank-4/maybe4_5.gif';

import happy from './result-assests/happy-emoji.jpg';
import sad from './result-assests/sad-emoji.png';

class CheckResult extends React.Component {
    state = {
        bank1 : null, bank2 : null, bank3 : null, bank4 : null,
        click1: false,click2: false,click3: false,click4: false
    }

    render() {
        const getBank1ResultsHandler = () => {
            if (this.props.result.fillSpreadSheet.msg === "Bad news, based on what you have provided you do not fit this bank’s lending criteria") {
                 this.setState({bank1:'yes'})
            }
            else if (this.props.result.fillSpreadSheet.msg === "no") {
                this.setState({bank1:'no'})
            }
              else if (this.props.result.fillSpreadSheet.msg === "maybe"){
                this.setState({bank1:'maybe'})
            }
              this.setState({click1:true})
        }
        const getBank2ResultsHandler = () => {
            if (this.props.result.fillIcsSpreadSheet.msg === "yes") {
                this.setState({bank2:'yes'})
            }
            else if (this.props.result.fillIcsSpreadSheet.msg === "no") {
                this.setState({bank2:'no'})
            }
            else if (this.props.result.fillIcsSpreadSheet.msg === "Bad news, based on what you have provided you do not fit this bank’s lending criteria"){
                this.setState({bank2:'maybe'})
            }
            this.setState({click2:true})
        }
        const getBank3ResultsHandler = () => {
            if (this.props.result.fillPtsbSpreadSheet.msg === "yes") {
                this.setState({bank3:'yes'})
            }
            else if (this.props.result.fillPtsbSpreadSheet.msg === "Good news, based on the information you provided we are confident that this bank will approve this loan") {
                this.setState({bank3:'no'})
            }
            else if (this.props.result.fillPtsbSpreadSheet.msg === "maybe"){
                this.setState({bank3:'maybe'})
            }
            this.setState({click3:true})
        }
        const getBank4ResultsHandler = () => {
            if (this.props.result.fillHavenSpreadSheet.msg === "Good news, based on the information you provided we are confident that this bank will approve this loan") {
                this.setState({bank4:'yes'})
            }
            else if (this.props.result.fillHavenSpreadSheet.msg === "no") {
                this.setState({bank4:'no'})
            }
            else if (this.props.result.fillHavenSpreadSheet.msg === "maybe"){
                this.setState({bank4:'maybe'})
            }
            this.setState({click4:true})
        }
        return (

                    <div className="result-con">

                        <div className="logo">
                            <img src="images/home/logo.png" alt="logo"/>
                        </div>

                        <div className="d1">
                            <h1 className="h1">You Financial Health Check Results</h1>
                            <p className="p2">
                                We are connecting to the banks affordability calculators to see whether they will lend
                                your requested
                                mortgage based upon the information you have provided.
                            </p>

                            {this.props.q4 === false ?
                                (
                                    <>
                                        <Row>
                                            <Col lg={12}>
                                                <div className="amount-div">
                                                    <h1>Bank 1</h1>
                                                    <i className="material-icons">error_outline</i>
                                                    <hr className='hr'></hr>
                                                    {
                                                        (this.state.bank1 === "yes") ?
                                                            <img src={bank1Yes} alt="Yes"/> :
                                                            (this.state.bank1 === "no") ?
                                                                <img src={bank1No} alt="No"/> :
                                                                (this.state.bank1 === "maybe") ?
                                                                    <img src={bank1Maybe} alt="May be"/> :
                                                                    <img src={Logo} alt="Question Mark"/>
                                                    }
                                                    {
                                                        (this.state.click1=== true && this.state.bank1 === "yes") ?
                                                        (
                                                            <div className="bank-1-4">
                                                                <div>
                                                                    <h1>Good news,</h1>
                                                                    <img src={happy} alt="Happy Emoji"/>
                                                                </div>
                                                                <p>Based upon the information provided we believe this
                                                                    bank will lend to you</p>
                                                            </div>
                                                        ) :
                                                            (this.state.click1=== true && this.state.bank1 === "no") ?
                                                                (
                                                                    <div className="bank-1-4">
                                                                        <div>
                                                                            <h2>Sorry</h2>
                                                                            <img src={sad} alt="Sad Emoji"/>
                                                                            <h2 className="heading">Bad News</h2>
                                                                        </div>
                                                                        <p>Based upon the information provided we believe this
                                                                            bank will lend to you</p>
                                                                    </div>
                                                                ) :
                                                                (this.state.click1=== true && this.state.bank1 === "maybe") ?
                                                                    (
                                                                        <div className="bank-1-4">
                                                                            <div>
                                                                                <h3>Manager Review Required</h3>
                                                                            </div>
                                                                            <p>We believe you are in the bank's lending criteria but will
                                                                                require a more senior level of approval</p>
                                                                        </div>
                                                                    ) :
                                                                <button onClick={getBank1ResultsHandler}>Get Results</button>
                                                    }
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <div className="amount-div">
                                                    <h1>Bank 2</h1>
                                                    <i className="material-icons">error_outline</i>
                                                    <hr className='hr'></hr>
                                                    {
                                                        (this.state.bank2 === "yes") ?
                                                            <img src={bank2Yes} alt="Yes"/> :
                                                            (this.state.bank2 === "no") ?
                                                                <img src={bank2No} alt="No"/> :
                                                                (this.state.bank2 === "maybe") ?
                                                                    <img src={bank2Maybe} alt="May be"/> :
                                                                    <img src={Logo} alt="Question Mark"/>
                                                    }
                                                    {
                                                        (this.state.click2=== true && this.state.bank2 === "yes") ?
                                                            (
                                                                <div className="bank-1-4">
                                                                    <div>
                                                                        <h1>Good news,</h1>
                                                                        <img src={happy} alt="Happy Emoji"/>
                                                                    </div>
                                                                    <p>Based upon the information provided we believe this
                                                                        bank will lend to you</p>
                                                                </div>
                                                            ) :
                                                            (this.state.click2=== true && this.state.bank2 === "no") ?
                                                                (
                                                                    <div className="bank-1-4">
                                                                        <div>
                                                                            <h2>Sorry</h2>
                                                                            <img src={sad} alt="Sad Emoji"/>
                                                                            <h2 className="heading">Bad News</h2>
                                                                        </div>
                                                                        <p>Based upon the information provided we believe this
                                                                            bank will lend to you</p>
                                                                    </div>
                                                                ) :
                                                                (this.state.click2=== true && this.state.bank2 === "maybe") ?
                                                                    (
                                                                        <div className="bank-1-4">
                                                                            <div>
                                                                                <h3>Manager Review Required</h3>
                                                                            </div>
                                                                            <p>We believe you are in the bank's lending criteria but will
                                                                                require a more senior level of approval</p>
                                                                        </div>
                                                                    ) :
                                                        <button onClick={getBank2ResultsHandler}>Get Results</button>
                                                    }
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12}>
                                                <div className="amount-div">
                                                    <h1>Bank 3</h1>
                                                    <i className="material-icons">error_outline</i>
                                                    <hr className='hr'></hr>
                                                    {
                                                        (this.state.bank3 === "yes") ?
                                                            <img src={bank3Yes} alt="Yes"/> :
                                                            (this.state.bank3 === "no") ?
                                                                <img src={bank3No} alt="No"/> :
                                                                (this.state.bank3 === "maybe") ?
                                                                    <img src={bank3Maybe} alt="May be"/> :
                                                                    <img src={Logo} alt="Question Mark"/>
                                                    }
                                                    {
                                                        (this.state.click3=== true && this.state.bank3 === "yes") ?
                                                                (
                                                                    <div className="bank-1-4">
                                                                        <div>
                                                                            <h1>Good news,</h1>
                                                                            <img src={happy} alt="Happy Emoji"/>
                                                                        </div>
                                                                        <p>Based upon the information provided we believe this
                                                                            bank will lend to you</p>
                                                                    </div>
                                                                ) :
                                                                (this.state.click3=== true && this.state.bank3 === "no") ?
                                                                    (
                                                                        <div className="bank-1-4">
                                                                            <div>
                                                                                <h2>Sorry</h2>
                                                                                <img src={sad} alt="Sad Emoji"/>
                                                                                <h2 className="heading">Bad News</h2>
                                                                            </div>
                                                                            <p>Based upon the information provided we believe this
                                                                                bank will lend to you</p>
                                                                        </div>
                                                                    ) :
                                                                    (this.state.click3=== true && this.state.bank3 === "maybe") ?
                                                                        (
                                                                            <div className="bank-1-4">
                                                                                <div>
                                                                                    <h3>Manager Review Required</h3>
                                                                                </div>
                                                                                <p>We believe you are in the bank's lending criteria but will
                                                                                    require a more senior level of approval</p>
                                                                            </div>
                                                                        ) :
                                                        <button onClick={getBank3ResultsHandler}>Get Results</button>
                                                    }
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <div className="amount-div">
                                                    <h1>Bank 4</h1>
                                                    <i className="material-icons">error_outline</i>
                                                    <hr className='hr'></hr>
                                                    {
                                                        (this.state.bank4 === "yes") ?
                                                            <img src={bank4Yes} alt="Yes"/> :
                                                            (this.state.bank4 === "no") ?
                                                                <img src={bank4No} alt="No"/> :
                                                                (this.state.bank4 === "maybe") ?
                                                                    <img src={bank4Maybe} alt="May be"/> :
                                                                    <img src={Logo} alt="Question Mark"/>
                                                    }
                                                    {
                                                        (this.state.click4 === true && this.state.bank4 === "yes") ?
                                                            (
                                                                <div className="bank-1-4">
                                                                    <div>
                                                                        <h1>Good news,</h1>
                                                                        <img src={happy} alt="Happy Emoji"/>
                                                                    </div>
                                                                    <p>Based upon the information provided we believe this
                                                                        bank will lend to you</p>
                                                                </div>
                                                            ) :
                                                            (this.state.click4 === true && this.state.bank4 === "no") ?
                                                                (
                                                                    <div className="bank-1-4">
                                                                        <div>
                                                                            <h2>Sorry</h2>
                                                                            <img src={sad} alt="Sad Emoji"/>
                                                                            <h2 className="heading">Bad News</h2>
                                                                        </div>
                                                                        <p>Based upon the information provided we believe this
                                                                            bank will lend to you</p>
                                                                    </div>
                                                                ) :
                                                                (this.state.click4 === true && this.state.bank4 === "maybe") ?
                                                                    (
                                                                        <div className="bank-1-4">
                                                                            <div>
                                                                                <h3>Manager Review Required</h3>
                                                                            </div>
                                                                            <p>We believe you are in the bank's lending criteria but will
                                                                                require a more senior level of approval</p>
                                                                        </div>
                                                                    ) :
                                                        <button onClick={getBank4ResultsHandler}>Get Results</button>
                                                    }
                                                </div>
                                            </Col>
                                        </Row>

                                    </>
                                ) :
                                (
                                    <>
                                        <div className="mount-div">
                                            <h1>Bank 4</h1>
                                            <i className="material-icons">error_outline</i>
                                            <hr className='hr'></hr>
                                            <img src={Logo} alt="Question Mark"/>
                                        </div>
                                        <h2 className="mount-div" style={{lineHeight: '1.5rem', textAlign: 'center'}}>
                                            Sorry based on the information provided we won't be able to help you
                                            a mortgage.We recommend you discuss your circumstances with you primary
                                            current account bank who may be best placed to help
                                        </h2>
                                    </>
                                )
                            }
                        </div>

                    </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        q4 : state.getStartedReducer.data,
        result : state.calculateResultReducer.data
    }
}
// const mapStateToProps = ({
//                              userReducer: {
//                                  user: { _id, firstName }
//                              }
//                          }) => ({
//     userId: _id,
//     userFirstName: firstName
// });

// const mapDispatchToProps = dispacth => ({
//     SheetFill: props => dispacth(Api.fillDataSheet(props))
// });
export default connect(mapStateToProps,null)(CheckResult);
