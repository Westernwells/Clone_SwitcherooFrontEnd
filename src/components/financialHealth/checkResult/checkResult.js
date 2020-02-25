import React from "react";
import { Row, Col, Button, message } from "antd";
import "./checkResult.css";
import { connect } from "react-redux";
import Image from '../images/questionMark icon.png'

class CheckResult extends React.Component {

    // checkfillsheet = (route, message) => {
    //     const token = localStorage.getItem("tokenas");
    //
    //     const options = {
    //         method: "GET",
    //         headers: new Headers({
    //             Authorization: "Bearer " + token,
    //             "Content-Type": "application/json"
    //         })
    //     };
    //     this.setState({ [route]: true });
    //     fetch(baseurl + `/financialHealth/${route}/${this.props.userId}`, options)
    //         .then(res => {
    //             // dispatch(actions.LoadingFinancialData(true));
    //             this.setState({ [route]: false });
    //             if (res.status === 201)
    //                 res.json().then(res => {
    //                     this.success(message);
    //                 })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             this.setState({ [route]: false });
    //             this.error("some thing going wrong testing");
    //         });
    // };

    render() {
        console.log("[Q4]",this.props.q4)
        return (
            <div className="result-con">

                <div className="logo">
                    <img src="images/home/logo.png" alt="logo" />
                </div>

                <div className="d1">
                    <h1 className="h1">You Financial Health Check Results</h1>
                    <p className="p2">
                        We are connecting to the banks affordability calculators to see whether they will lend your requested
                        mortgage based upon the information you have provided.
                    </p>

                    { this.props.q4 === false ?
                        (
                            <>
                            <Row>
                                <Col lg={12}>
                                    <div className="amount-div">
                                        <h1>Bank 1</h1>
                                        <i className="material-icons" >error_outline</i>
                                        <hr className='hr'></hr>
                                        <img src={Image} alt="Question Mark" />
                                        <button>Get Results</button>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="amount-div">
                                        <h1>Bank 2</h1>
                                        <i className="material-icons" >error_outline</i>
                                        <hr className='hr'></hr>
                                        <img src={Image} alt="Question Mark" />
                                        <button>Get Results</button>
                                    </div>
                                </Col>
                            </Row>

                        <Row>
                            <Col lg={12}>
                                <div className="amount-div">
                                    <h1>Bank 3</h1>
                                    <i className="material-icons" >error_outline</i>
                                    <hr className='hr'></hr>
                                    <img src={Image} alt="Question Mark" />
                                    <button>Get Results</button>
                                </div>
                            </Col>
                        <Col lg={12}>
                            <div className="amount-div">
                                <h1>Bank 4</h1>
                                <i className="material-icons" >error_outline</i>
                                <hr className='hr'></hr>
                                <img src={Image} alt="Question Mark" />
                                <button>Get Results</button>
                            </div>
                         </Col>
                        </Row>

                        </>
                        ) :
                        (
                            <>
                                    <div className="mount-div">
                                        <h1>Bank 4</h1>
                                        <i className="material-icons" >error_outline</i>
                                        <hr className='hr'></hr>
                                        <img src={Image} alt="Question Mark" />
                                    </div>
                                <h2 className="mount-div" style={{lineHeight:'1.5rem',textAlign:'center'}}>
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
        q4 : state.getStartedReducer.data
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
