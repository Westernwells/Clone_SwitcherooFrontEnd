import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import ReactShadowScroll from "react-shadow-scroll";
import "../style.css";
import "./styles.css";
import PayeeIcon from "../../../assets/payee_icon.png";
import FileUploadIcon from "../../../assets/icon-file-upload.png";
import HandRightIcon from "../../../assets/icon-hand-right.png";

class StepEight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      uploadApplicant1: false,
      uploadApplicant2: false,
      isEdit: false,
      currentList: null,
      selectedOption: null,
      selectedYear: null,
      bckAcctList: ["65454354357", "78756476545", "56342423567", "31342453464"],
      filesType: [
        "Drivers license back",
        "Drivers license front",
        "Passport back",
        "Passport front"
      ],
      app1FileList: [],
      app2FileList: []
    };
  }

  generateKey = pre => {
    const uniqueTime = new Date().getTime();
    return pre + "_" + uniqueTime;
  };

  onChangeApplicant1 = event => {
    const { app1FileList } = this.state;

    if (event.target.files[0].type === "application/pdf") {
      app1FileList.push({
        id: this.generateKey("app1"),
        title: event.target.files[0].name,
        bckAct: "8967657645",
        year: "March",
        files: "Passport back"
      });
    }

    this.setState({ app1FileList });
  };

  onChangeApplicant2 = event => {
    const { app2FileList } = this.state;

    if (event.target.files[0].type === "application/pdf") {
      app2FileList.push({
        id: this.generateKey("app2"),
        title: event.target.files[0].name,
        bckAct: "8967657645",
        year: "March",
        files: "Passport back"
      });
    }

    this.setState({ app2FileList });
  };

  handleRoute = route => {
    this.props.history.push(route);
  };

  applicant1Updates = item => {
    const { isEdit, selectedOption, selectedYear } = this.state;
    let items = [...this.state.app1FileList];

    let index = items.indexOf(item);
    let itm = { ...items[index] };
    itm.bckAct = selectedOption;
    itm.year = selectedYear;
    items[index] = itm;
    this.setState({
      app1FileList: items,
      isEdit: !isEdit,
      currentList: item.id
    });
  };

  applicant2Updates = item => {
    const { isEdit, selectedOption, selectedYear } = this.state;
    let items = [...this.state.app2FileList];

    let index = items.indexOf(item);
    let itm = { ...items[index] };
    itm.bckAct = selectedOption;
    itm.year = selectedYear;
    items[index] = itm;
    this.setState({
      app2FileList: items,
      isEdit: !isEdit,
      currentList: item.id
    });
  };

  handleTabClasses = applicant => {
    let classes = "nav-item nav-link ";
    classes += applicant ? "active" : "";
    return classes;
  };

  handleRemove = (item, applicant) => {
    const { app1FileList, app2FileList } = this.state;
    const files = (applicant === 1 ? app1FileList : app2FileList).filter(
      file => file.id !== item
    );
    applicant === 1
      ? this.setState({ app1FileList: files })
      : this.setState({ app2FileList: files });
  };

  getFilesList = applicant => {
    const { app1FileList, isEdit, currentList, app2FileList } = this.state;

    let filesList = (applicant === 1 ? app1FileList : app2FileList).map(f => (
      <li className="row pt-4 mb-2" key={f.id}>
        <i className="fa fa-pdf fa-file-pdf fa-2x pl-0 col-md-1 text-right"></i>
        <span className="col-md-4 text-left">{f.title}</span>
        {isEdit && currentList === f.id ? (
          <>
            <select
              className="col-md-3 filesOptions"
              onChange={e => this.setState({ selectedOption: e.target.value })}
              value={
                this.state.selectedOption ? this.state.selectedOption : f.bckAct
              }
            >
              {this.state.bckAcctList.map(ft => (
                <option value={ft}>{ft}</option>
              ))}
            </select>
            <select
              className="col-md-2 filesOptions ml-1"
              onChange={e => this.setState({ selectedYear: e.target.value })}
              value={this.state.selectedYear ? this.state.selectedYear : f.year}
            >
              <option value="January">January</option>
              <option value="Feburary">Feburary</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <span
              className="col-md-1 saveBtn"
              onClick={
                applicant === 1
                  ? () => this.applicant1Updates(f)
                  : () => this.applicant2Updates(f)
              }
            >
              Save
            </span>
          </>
        ) : (
          <>
            <span className="col-md-3">{f.bckAct}</span>
            <span className="col-md-2">{f.year}</span>
            <i
              className="fa fa-edit col-md-1 text-right fa-cus-2x"
              onClick={() =>
                this.setState({ isEdit: !isEdit, currentList: f.id })
              }
            ></i>
            <i
              className="fa fa-trash col-md-1 text-left fa-cus-2x"
              onClick={() => this.handleRemove(f.id, applicant)}
            ></i>
          </>
        )}
      </li>
    ));

    return filesList;
  };

  render() {
    const { tab1, tab2 } = this.state;

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
            {/* Section 1 */}
            <div className="row p-3">
              <div className="col-md-5 text-right">
                {/* <i className="fas fas fa-money-bill-wave fac fa-6x"></i> */}

                <img className="" src={PayeeIcon} width={75} alt="" />
              </div>
              <div className="col-md-6 text-left pt-4">
                <h1 className="text-secondary title">PAYEE Income</h1>
              </div>
            </div>
            {/* Section 2 */}
            <div className="row p-2 m-4">
              <div className="col-md-12">
                <h5>Requirements</h5>
              </div>
              <div className="col-md-12">
                <div className="wrn-bx">
                  <span>
                    1). Please provide the last three months of pay slips.{" "}
                    <br />
                    2). Please provide your last P60 or Employment Detail
                    Summary as its now called since 2019. This is downloaded
                    from the ROS website. Please contact us if you are unsure
                    how to get this. <br />
                    3). If any of your income consists of bonus/commission/shift
                    allowance or other non standard income, please provide your
                    last 3 years P60 or P21 <br />
                    <div className="row">
                      <div className="col-md-6">
                        4). Please provide your validated salary certificate.
                        Get your salary certificate template here
                      </div>
                      <div className="col-md-6">
                        <img
                          className="fileUp"
                          src={HandRightIcon}
                          width={75}
                          alt=""
                        />
                        <button className="upload-btn ml-4 pt-2 pb-2">
                          Salary Certificate
                        </button>
                      </div>
                    </div>
                  </span>
                </div>
                {this.state.uploadApplicant1 || this.state.uploadApplicant2 ? (
                  <div className="row wrn-bx-inner mt-4 m-1">
                    <span>
                      Due to bank and regulatory requirements we will need to
                      see the original documents so after you have uploaded a
                      copy please keep the originals safe as we will ask you for
                      them later.
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="row p-4 m-4">
              <div className="col-md-12 docContent">
                <nav>
                  <div
                    className="nav nav-tabs nav-fill"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className={this.handleTabClasses(tab1)}
                      id="nav-home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      onClick={() =>
                        this.setState({
                          tab1: true,
                          tab2: false
                        })
                      }
                    >
                      <div>
                        <i className="fas fa-user-alt fa-1x"></i>
                        <br />
                        <span>Applicant 1</span>
                      </div>
                    </a>
                    <a
                      className={this.handleTabClasses(tab2)}
                      id="nav-home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      onClick={() =>
                        this.setState({
                          tab1: false,
                          tab2: true
                        })
                      }
                    >
                      <div>
                        <i className="fas fa-user-alt fa-1x"></i>
                        <br />
                        <span>Applicant 2</span>
                      </div>
                    </a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  {/* TAB 1 */}
                  <div
                    className={`tab-pane fade ${tab1 ? "show active" : ""}`}
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="p-2 m-4">
                      <div className="col-md-12 text-center pb-3">
                        <h1>Upload document for Applicant 1</h1>
                        <br />
                      </div>
                      {!this.state.uploadApplicant1 ? (
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
                            <div className="col-md-5">
                              <span className="pl-2">
                                {this.state.app1FileList.length} files ready to
                                upload
                              </span>
                            </div>
                            <div className="col-md-3">
                              <span className="pr-2">Bank Account #</span>
                            </div>
                            <div className="col-md-2">
                              <span className="pr-2">Select Month</span>
                            </div>
                          </div>
                          <ReactShadowScroll
                            scrollColor="#d3d0d0"
                            isShadow={false}
                            scrollWidth={4}
                          >
                            <ul className="filesContainer">
                              {this.getFilesList(1)}
                            </ul>
                          </ReactShadowScroll>

                          <div className="row p-3">
                            <div className="col-md-6 text-left">
                              <button
                                className="upload-btn uploadApp1"
                                onClick={() =>
                                  this.setState({ uploadApplicant1: true })
                                }
                              >
                                Upload
                                <i className="fa fa-cloud-upload fa-1x pl-2"></i>
                              </button>
                            </div>
                            <div className="col-md-6 text-right">
                              <div>
                                <input
                                  id={1}
                                  type="file"
                                  className="km-btn-file"
                                  onChange={this.onChangeApplicant1}
                                  style={{ display: "none " }}
                                ></input>
                                <label
                                  htmlFor={1}
                                  className="km-button km-button--primary km-btn-file-label upload-btn addMoreApp1"
                                >
                                  Add more files
                                  <img
                                    className="fileUp"
                                    src={FileUploadIcon}
                                    width={22}
                                    alt=""
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* TAB 2 */}
                  <div
                    className={`tab-pane fade ${tab2 ? "show active" : ""}`}
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="p-2 m-4">
                      <div className="col-md-12 text-center pb-3">
                        <h1>Upload document for Applicant 2</h1>
                        <br />
                      </div>
                      {!this.state.uploadApplicant2 ? (
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
                                this.setState({ uploadApplicant2: true })
                              }
                            >
                              Select files to upload
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="row filesLabel ml-2 mr-2 p-1">
                            <div className="col-md-5">
                              <span className="pl-2">
                                {this.state.app2FileList.length} files ready to
                                upload
                              </span>
                            </div>
                            <div className="col-md-3">
                              <span className="pr-2">Bank Account #</span>
                            </div>
                            <div className="col-md-2">
                              <span className="pr-2">Select Month</span>
                            </div>
                          </div>
                          <ReactShadowScroll
                            scrollColor="#d3d0d0"
                            isShadow={false}
                            scrollWidth={4}
                          >
                            <ul className="filesContainer">
                              {this.getFilesList(2)}
                            </ul>
                          </ReactShadowScroll>
                          <div className="row p-3">
                            <div className="col-md-6 text-left">
                              <button
                                className="upload-btn uploadApp1"
                                onClick={() =>
                                  this.setState({ uploadApplicant1: true })
                                }
                              >
                                Upload
                                <i className="fa fa-cloud-upload fa-1x pl-2"></i>
                              </button>
                            </div>
                            <div className="col-md-6 text-right">
                              <div>
                                <input
                                  id={2}
                                  type="file"
                                  className="km-btn-file"
                                  onChange={this.onChangeApplicant2}
                                  style={{ display: "none " }}
                                ></input>
                                <label
                                  htmlFor={2}
                                  className="km-button km-button--primary km-btn-file-label upload-btn addMoreApp1"
                                >
                                  Add more files
                                  <img
                                    className="fileUp"
                                    src={FileUploadIcon}
                                    width={22}
                                    alt=""
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default StepEight;
