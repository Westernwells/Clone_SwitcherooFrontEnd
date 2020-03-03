import React, { Component } from "react";
import { render } from "react-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
// import Tabs from "react-responsive-tabs";
// import "react-responsive-tabs/styles.css";
import ReactShadowScroll from "react-shadow-scroll";
import "../style.css";
import "./styles.css";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadApplicant1: false,
      uploadApplicant2: false
      // tabs: []
    };
  }

  // componentDidMount() {
  //   this.getApplicantsTabs();
  // }

  handleRoute = route => {
    this.props.history.push(route);
  };

  // getApplicantsTabs = () => {
  //   const { tabs } = this.state;

  //   tabs.push(
  //     {
  //       title: (
  //         <div>
  //           <i className="fas fa-user-alt fa-1x"></i>
  //           <br />
  //           <span>Applicant 1</span>
  //         </div>
  //       ),
  //       content: (
  //         <div className="row p-3">
  //           <div className="col-md-12 text-center">
  //             <span>Upload document for Applicant 1</span>
  //             <br />
  //           </div>
  //           <div className="p-2 m-4">
  //             {!this.state.uploadsApplicant1 ? (
  //               <div>
  //                 <div className="row wrn-bx-inner">
  //                   <div className="col-md-9">
  //                     <span>
  //                       Due to bank and regulatory requirements we will need to
  //                       see the original certified passport and driver licence
  //                       so after uploading them please keep them safe as we will
  //                       ask you for them later.
  //                     </span>
  //                   </div>
  //                   <div className="col-md-3">
  //                     <i className="fa fa-cloud-upload fa-5x"></i>
  //                   </div>
  //                 </div>
  //                 <div className="col-md-12 text-center">
  //                   <button
  //                     className="upload-btn applicant-1"
  //                     onClick={() => this.setState({ uploadApplicant1: true })}
  //                   >
  //                     Select files to upload
  //                   </button>
  //                 </div>
  //               </div>
  //             ) : (
  //               <div>TETS</div>
  //             )}
  //           </div>
  //         </div>
  //       )
  //     },
  //     {
  //       title: (
  //         <div>
  //           <i className="fas fa-user-alt fa-1x"></i>
  //           <br />
  //           <span>Applicant 2</span>
  //         </div>
  //       ),
  //       content: (
  //         <div className="row p-3">
  //           <div className="col-md-12 text-center">
  //             <span>Upload document for Applicant 2</span>
  //             <br />
  //           </div>
  //           <div className="p-2 m-4">
  //             {!this.state.uploadsApplicant2 ? (
  //               <div>
  //                 <div className="row wrn-bx-inner">
  //                   <div className="col-md-9">
  //                     <span>
  //                       Due to bank and regulatory requirements we will need to
  //                       see the original certified passport and driver licence
  //                       so after uploading them please keep them safe as we will
  //                       ask you for them later.
  //                     </span>
  //                   </div>
  //                   <div className="col-md-3">
  //                     <i className="fa fa-cloud-upload fa-5x"></i>
  //                   </div>
  //                 </div>
  //                 <div className="col-md-12 text-center">
  //                   <button
  //                     className="upload-btn applicant-2"
  //                     onClick={this.setState({ uploadApplicant2: true })}
  //                   >
  //                     Select files to upload
  //                   </button>
  //                 </div>
  //               </div>
  //             ) : (
  //               <div>TETS</div>
  //             )}
  //           </div>
  //         </div>
  //       )
  //     }
  //   );
  // };

  // getTabs = () => {
  //   return this.state.tabs.map(t => ({
  //     tabClassName: "applicant-tab",
  //     panelClassName: "panel",
  //     title: t.title,
  //     getContent: () => t.content
  //   }));
  // };

  render() {
    console.log("OPOPOPO", this.state.uploadApplicant1);
    console.log("OPOPOPO", this.state.uploadApplicant2);
    return (
      <div class="ant-col ant-col-lg-24">
        <div class="obord m-4">
          <div className="container">
            <div className="row">
              <i
                onClick={() => this.handleRoute("/home/yourDocumentation")}
                className="fas fa-arrow-left faa m-3"
              >
                <small className="pl-2">Back</small>
              </i>
            </div>
            <div className="row p-3">
              <div className="col-md-6 text-right">
                <i className="fas fa-address-card fac fa-6x"></i>
              </div>
              <div className="col-md-4 text-left pt-4">
                <h1 className="text-secondary title">Customer ID</h1>
              </div>
            </div>
            <div className="row p-2 m-4">
              <div className="col-md-12">
                <h5>Requirements</h5>
              </div>
              <div className="col-md-12">
                <div className="wrn-bx">
                  <span>
                    We need to make sure its really you! So we need a certified
                    copy of your passport and drivers license. Certified means a
                    copy is signed and stamped in person by either a garda, a
                    solicitor, a notary public or a Justice of the Peace. This
                    proves its you and not someone pretending to be you!
                  </span>
                </div>
              </div>
            </div>
            <div className="row p-4 m-4">
              {/* <Tabs items={this.getTabs()} showMore={false} /> */}

              <div className="col-md-12">
                <nav>
                  <div
                    className="nav nav-tabs nav-fill"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link"
                      id="nav-home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <div>
                        <i className="fas fa-user-alt fa-1x"></i>
                        <br />
                        <span>Applicant 1</span>
                      </div>
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Project Tab 2
                    </a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="p-2 m-4">
                      {this.state.uploadsApplicant1 ? (
                        <div>
                          <div className="row wrn-bx-inner">
                            <div className="col-md-9">
                              <span>
                                Due to bank and regulatory requirements we will
                                need to see the original certified passport and
                                driver licence so after uploading them please
                                keep them safe as we will ask you for them
                                later.
                              </span>
                            </div>
                            <div className="col-md-3">
                              <i className="fa fa-cloud-upload fa-5x"></i>
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button
                              className="upload-btn applicant-1"
                              onClick={() =>
                                this.setState({ uploadApplicant1: true })
                              }
                            >
                              Select files to upload
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="row filesLabel ml-2 mr-2 p-1">
                            <div className="col-md-8">
                              <span className="pl-2">
                                3 files ready to upload
                              </span>
                            </div>
                            <div className="col-md-4">
                              <span className="pr-2">
                                What type of document it is?
                              </span>
                            </div>
                          </div>
                          <ReactShadowScroll
                            scrollColor="#d3d0d0"
                            isShadow={false}
                          >
                            <ul className="filesContainer">
                              <li className="p-2">Teste</li>
                              <li className="p-2">Teste</li>
                              <li className="p-2">Teste</li>
                              <li className="p-2">Teste</li>
                              <li className="p-2">Teste</li>
                              <li className="p-2">Teste</li>
                              <li className="p-2">Teste</li>
                              <li className="p-2">Teste</li>
                              <li className="p-2">Teste</li>
                            </ul>
                          </ReactShadowScroll>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="p-2 m-4">
                      {!this.state.uploadsApplicant2 ? (
                        <div>
                          <div className="row wrn-bx-inner">
                            <div className="col-md-9">
                              <span>
                                Due to bank and regulatory requirements we will
                                need to see the original certified passport and
                                driver licence so after uploading them please
                                keep them safe as we will ask you for them
                                later.
                              </span>
                            </div>
                            <div className="col-md-3">
                              <i className="fa fa-cloud-upload fa-5x"></i>
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button
                              className="upload-btn applicant-2"
                              onClick={() =>
                                this.setState({
                                  uploadApplicant2: true
                                })
                              }
                            >
                              Select files to upload
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>TETS</div>
                      )}
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

export default StepOne;
