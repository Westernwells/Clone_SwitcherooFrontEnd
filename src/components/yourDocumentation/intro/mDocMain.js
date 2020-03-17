import React from "react";
import "../style.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import CustIcon from "../../../assets/cust_icon.png";
import AddIcon from "../../../assets/add_icon.png";
import BankIcon from "../../../assets/bank_icon.png";
import SavingIcon from "../../../assets/source_icon.png";
import BorrowIcon from "../../../assets/oth_icon.png";
import CreditIcon from "../../../assets/credit_icon.png";
import MortIcon from "../../../assets/mort_icon.png";
import PayeeIcon from "../../../assets/payee_icon.png";
import SelfIcon from "../../../assets/self_icon.png";
import SourceIcon from "../../../assets/source_icon.png";
import OtherIcon from "../../../assets/oth_icon.png";

class mDocMain extends React.Component {
  handleRoute = route => {
    this.props.history.push(route);
  };

  render() {
    console.log("HISTORY", this.props);
    return (
      <div class="ant-col ant-col-lg-24">
        <div class="obord m-4">
          <div className="container">
            <div className="row p-3">
              <div className="col-md-9">
                <h1 className="text-secondary">Upload your documents</h1>
                <p className="text-secondary pob-1">
                  As part of your mortgate application you need to provide
                  documentation that verifies all your details.Please upload
                  your document securily on your portal. This documentation will
                  only be used to support your mortgage application.You are able
                  to retreive,edit,delete any files you upload
                </p>
              </div>
              <div className="col-md-3">
                <i className="fa fa-cloud-upload fa-7x"></i>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="cardc border bord mt-2 ">
                  <div className="m-3">
                    <div className="card-text">
                      <i className="fa fa-check-circle fa-cus-2x"></i>
                      <small className="pl-2">Finished</small>
                    </div>
                    <div className="row">
                      <div className="col-md-7"></div>
                      <div className="col-md-2">
                        <img
                          className="mr-4 mb-2 "
                          src={CustIcon}
                          width={80}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cardbody pb-2">
                      <h5 className="text-secondary">Cutsomer ID</h5>
                    </div>
                    <div className="row">
                      <i
                        onClick={() =>
                          this.handleRoute("/home/yourDocumentation/step1")
                        }
                        className="fas fa-arrow-right faa pr-2"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="cardc border bord mt-2 ">
                  <div className="m-3">
                    <div className="card-text">
                      <i className="fa fa-check-circle fa-cus-2x"></i>
                      <small className="pl-2">Finished</small>
                    </div>
                    <div className="row">
                      <div className="col-md-8"></div>
                      <div className="col-md-1">
                        <img className="mr-2" src={AddIcon} width={45} alt="" />
                      </div>
                    </div>
                    <div className="cardbody  pb-2">
                      <h5 className="text-secondary">Address Verification</h5>
                    </div>
                    <div className="row">
                      <i
                        onClick={() =>
                          this.handleRoute("/home/yourDocumentation/step2")
                        }
                        className="fas fa-arrow-right faa pr-2"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="cardc border bord mt-2 ">
                  <div className="m-3">
                    <div className="card-text">
                      <i className="fa fa-check-circle fa-cus-2x"></i>
                      <small className="pl-2">Finished</small>
                    </div>
                    <div className="row">
                      <div className="col-md-8"></div>
                      <div className="col-md-1">
                        <img
                          className="mr-3 mb-2 "
                          src={BankIcon}
                          width={60}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cardbody pb-2">
                      <h5 class="text-secondary">Bank Statements</h5>
                    </div>
                    <div className="row">
                      <i
                        onClick={() =>
                          this.handleRoute("/home/yourDocumentation/step3")
                        }
                        className="fas fa-arrow-right faa pr-2"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="cardc border bord mt-2 ">
                  <div className="m-3">
                    <div className="card-text">
                      <i className="fa fa-check-circle fa-cus-2x"></i>
                      <small className="pl-2">Finished</small>
                    </div>
                    <div className="row">
                      <div className="col-md-7"></div>
                      <div className="col-md-2">
                        <img
                          className="mr-4 mb-4 "
                          src={SavingIcon}
                          width={90}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cardbody pb-2">
                      <h5 className="text-secondary">
                        Savings, Deposits & Investments
                      </h5>
                    </div>
                    <div className="row">
                      <i
                        onClick={() =>
                          this.handleRoute("/home/yourDocumentation/step4")
                        }
                        className="fas fa-arrow-right faa pr-2"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="cardc border bord mt-2 ">
                  <div className="m-3">
                    <div className="card-text">
                      <i className="fa fa-check-circle fa-cus-2x"></i>
                      <small className="pl-2">Finished</small>
                    </div>
                    <div className="row">
                      <div className="col-md-7"></div>
                      <div className="col-md-2">
                        <img
                          className="mr-4 mb-2 "
                          src={BorrowIcon}
                          width={70}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cardbody  pb-2">
                      <h5 className="text-secondary">Borrows & Overdrafts</h5>
                    </div>
                    <div className="row">
                      <i
                        onClick={() =>
                          this.handleRoute("/home/yourDocumentation/step5")
                        }
                        className="fas fa-arrow-right faa pr-2"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="cardc border bord mt-2 ">
                  <div className="m-3">
                    <div className="card-text">
                      <i className="fa fa-check-circle fa-cus-2x"></i>
                      <small className="pl-2">Finished</small>
                    </div>
                    <div className="row">
                      <div className="col-md-7"></div>
                      <div className="col-md-2">
                        <img
                          className="mr-4 mb-3 "
                          src={CreditIcon}
                          width={80}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cardbody pb-2">
                      <h5 class="text-secondary">Credit cards</h5>
                    </div>
                    <div className="row">
                      <i
                        onClick={() =>
                          this.handleRoute("/home/yourDocumentation/step6")
                        }
                        className="fas fa-arrow-right faa pr-2"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="cardc border bord mt-2 ">
                  <div className="m-3">
                    <div className="card-text">
                      <i className="fa fa-check-circle fa-cus-2x"></i>
                      <small className="pl-2">Finished</small>
                    </div>
                    <div className="row">
                      <div className="col-md-7"></div>
                      <div className="col-md-2">
                        <img
                          className="mr-4 mb-2 "
                          src={MortIcon}
                          width={80}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cardbody pb-2">
                      <h5 className="text-secondary">Mortgages</h5>
                    </div>
                    <div className="row">
                      <i
                        onClick={() =>
                          this.handleRoute("/home/yourDocumentation/step7")
                        }
                        className="fas fa-arrow-right faa pr-2"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="cardc border bord mt-2 ">
                  <div className="m-3">
                    <div className="card-text">
                      <i className="fa fa-check-circle fa-cus-2x"></i>
                      <small className="pl-2">Finished</small>
                    </div>
                    <div className="row">
                      <div className="col-md-7"></div>
                      <div className="col-md-2">
                        <img
                          className="mr-4 mb-2 "
                          src={PayeeIcon}
                          width={75}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cardbody  pb-2">
                      <h5 className="text-secondary">PAYEE Income</h5>
                    </div>
                    <div className="row">
                      <i
                        onClick={() =>
                          this.handleRoute("/home/yourDocumentation/step8")
                        }
                        className="fas fa-arrow-right faa pr-2"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="cardc border bord mt-2 ">
                  <div className="m-3">
                    <div className="card-text">
                      <i className="fa fa-check-circle fa-cus-2x"></i>
                      <small className="pl-2">Finished</small>
                    </div>
                    <div className="row">
                      <div className="col-md-7"></div>
                      <div className="col-md-2">
                        <img
                          className="mr-2 mb-2 "
                          src={SelfIcon}
                          width={65}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cardbody pb-2">
                      <h5 class="text-secondary">Self Employed Income</h5>
                    </div>
                    <div className="row">
                      <i
                        onClick={() =>
                          this.handleRoute("/home/yourDocumentation/step9")
                        }
                        className="fas fa-arrow-right faa pr-2"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="cardc border bord mt-2 ">
                  <div className="m-3">
                    <div className="card-text">
                      <i className="fa fa-check-circle fa-cus-2x"></i>
                      <small className="pl-2">Finished</small>
                    </div>
                    <div className="row">
                      <div className="col-md-7"></div>
                      <div className="col-md-2">
                        <img
                          className="mr-4 mb-4 "
                          src={SourceIcon}
                          width={90}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cardbody pb-2">
                      <h5 className="text-secondary">
                        Source of Balance of deposit
                      </h5>
                    </div>
                    <div className="row">
                      <i
                        onClick={() =>
                          this.handleRoute("/home/yourDocumentation/step10")
                        }
                        className="fas fa-arrow-right faa pr-2"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="cardc border bord mt-2 ">
                  <div className="m-3">
                    <div className="card-text">
                      <i className="fa fa-check-circle fa-cus-2x"></i>
                      <small className="pl-2">Finished</small>
                    </div>
                    <div className="row">
                      <div className="col-md-7"></div>
                      <div className="col-md-2">
                        <img
                          className="mr-3 mb-2 "
                          src={OtherIcon}
                          width={70}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="cardbody  pb-2">
                      <h5 className="text-secondary">Other documents</h5>
                    </div>
                    <div className="row">
                      <i
                        onClick={() =>
                          this.handleRoute("/home/yourDocumentation/step11")
                        }
                        className="fas fa-arrow-right faa pr-2"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  userReducer: {
    user: { _id, firstName }
  }
}) => ({
  userId: _id,
  userFirstName: firstName
});
const mapDispatchToProps = dispacth => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(mDocMain));
