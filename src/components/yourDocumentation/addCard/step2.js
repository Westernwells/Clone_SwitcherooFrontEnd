import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import ReactShadowScroll from "react-shadow-scroll";
import "../style.css";
import "./styles.css";
import AddIcon from "../../../assets/add_icon.png";
import FileUploadIcon from "../../../assets/icon-file-upload.png";
import axios from "axios";
import Api from "../../../redux/api/financialHealthCheck";

export const baseurl =
  window.location.origin === "http://localhost:3000"
    ? "http://localhost:8080"
    : window.location.origin;

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      uploadApplicant1: false,
      uploadApplicant2: false,
      applicant1User: this.props.userFirstName,
      applicant2User: this.props.financial_data.firstNameSecondApplicant,
      isEdit: false,
      currentList: null,
      selectedOption: null,
      filesType: [
        "Drivers license back",
        "Drivers license front",
        "Passport back",
        "Passport front"
      ],
      appsFileList: {
        tile: "addressVerification",
        1: [],
        2: []
      }
    };
  }

  handleRoute = route => {
    this.props.history.push(route);
  };

  applicant1Updates = item => {
    const { isEdit, selectedOption } = this.state;

    let app1Items = this.state.appsFileList;
    let items = [...app1Items[1]];
    let index = items.findIndex(obj => obj.id === item.id);
    let itm = { ...items[index] };
    itm.fileType = selectedOption;
    items[index] = itm;
    app1Items[1] = items;

    this.setState({
      appsFileList: app1Items,
      isEdit: !isEdit,
      currentList: item.id
    });
  };

  applicant2Updates = item => {
    const { isEdit, selectedOption } = this.state;
    let app2Items = this.state.appsFileList;

    let items = [...app2Items[2]];
    let index = items.findIndex(obj => obj.id === item.id);
    let itm = { ...items[index] };
    itm.fileType = selectedOption;
    items[index] = itm;
    app2Items[2] = items;

    this.setState({
      appsFileList: app2Items,
      isEdit: !isEdit,
      currentList: item.id
    });
  };

  generateKey = pre => {
    const uniqueTime = new Date().getTime();
    return pre + "_" + uniqueTime;
  };

  handleTabClasses = applicant => {
    let classes = "nav-item nav-link ";
    classes += applicant ? "active" : "";
    return classes;
  };

  handleRemove = (item, applicant) => {
    const { appsFileList } = this.state;
    let filteredList = appsFileList;

    filteredList[applicant] = filteredList[applicant].filter(
      f => f.id !== item
    );
    this.setState({ appsFileList: filteredList });
  };

  getFilesList = applicant => {
    const { isEdit, currentList, appsFileList } = this.state;

    let filesList = Object.entries(appsFileList[applicant]).map(([key, f]) => (
      <li className="row pt-4 mb-2" key={f.id}>
        <i className="fa fa-pdf fa-file-pdf fa-2x pl-0 col-md-1 text-right"></i>
        <span className="col-md-6 text-left">{f.fileName}</span>
        {isEdit && currentList === f.id ? (
          <>
            <select
              className="col-md-3 filesOptions"
              onChange={e => this.setState({ selectedOption: e.target.value })}
              value={
                this.state.selectedOption
                  ? this.state.selectedOption
                  : f.fileType
              }
            >
              {this.state.filesType.map(ft => (
                <option key={this.generateKey("option_")} value={ft}>
                  {ft}
                </option>
              ))}
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
            <span className="col-md-3">{f.fileType}</span>
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

  onUploadFiles = applicant => {
    const { appsFileList } = this.state;
    const count = appsFileList[applicant].length;

    for (let i = 0; i < count; i++) {
      // console.log(appsFileList[applicant][i]);

      const data = new FormData();
      data.append("applicantTile", "addressVerification");
      data.append("applicants", JSON.stringify(appsFileList[applicant][i]));
      data.append("applicant1File", appsFileList[applicant][i].file);

      axios
        .post(baseurl + "/documentation/uploadDocument", data, {})
        .then(res => {
          console.log("CHECK UPLOAD STATUS", res);
        });
    }
  };

  onChangeApplicant1 = event => {
    const { appsFileList } = this.state;

    appsFileList[1].push({
      id: this.generateKey("app1"),
      fileType: "Passport back",
      fileName: event.target.files[0].name,
      file: event.target.files[0],
      fileTags: {
        accountNumber: 38678592,
        fileMonth: "June"
      }
    });

    this.setState({ appsFileList });
  };

  onChangeApplicant2 = event => {
    const { appsFileList } = this.state;

    appsFileList[2].push({
      id: this.generateKey("app1"),
      fileType: "Passport back",
      fileName: event.target.files[0].name,
      file: event.target.files[0],
      fileTags: {
        accountNumber: 38678592,
        fileMonth: "June"
      }
    });

    this.setState({ appsFileList });
  };

  render() {
    const { tab1, tab2, applicant1User, applicant2User } = this.state;

    console.log("APPLICANTS INFO", this.state.appsFileList);
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
              <div className="col-md-6 text-right">
                <img className="" src={AddIcon} width={75} alt="" />
                {/* <i className="fas fa fa-map-marker fac fa-6x"></i> */}
              </div>
              <div className="col-md-4 text-left pt-4">
                <h1 className="text-secondary title">Address Verification</h1>
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
                    Please provide the first page of a recent utility bill
                    (within last 2 months) which shows your address.
                  </span>
                </div>
              </div>
            </div>
            {/* Section 3 */}
            {/* <div className="row p-2 m-4">
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
            </div> */}
            {/* Section 4 */}
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
                        <span>{applicant1User}</span>
                      </div>
                    </a>
                    {applicant2User ? (
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
                          <span>{applicant2User}</span>
                        </div>
                      </a>
                    ) : (
                      <></>
                    )}
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
                        <h1>Upload document for {applicant1User}</h1>
                        <br />
                      </div>
                      {!this.state.uploadApplicant1 ? (
                        <div>
                          <div className="col-md-12 text-center">
                            <i className="fa fa-cloud-upload fa-7x"></i>
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
                            <div className="col-md-7">
                              <span className="pl-2">
                                {this.state.appsFileList[1].length} files ready
                                to upload
                              </span>
                            </div>
                            <div className="col-md-5">
                              <span className="pr-2">
                                What type of document it is?
                              </span>
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
                                onClick={() => this.onUploadFiles(1)}
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
                        <h1>Upload document for {applicant2User}</h1>
                        <br />
                      </div>
                      {!this.state.uploadApplicant2 ? (
                        <div>
                          <div className="col-md-12 text-center">
                            <i className="fa fa-cloud-upload fa-7x"></i>
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
                            <div className="col-md-7">
                              <span className="pl-2">
                                {this.state.appsFileList[2].length} files ready
                                to upload
                              </span>
                            </div>
                            <div className="col-md-5">
                              <span className="pr-2">
                                What type of document it is?
                              </span>
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
                                onClick={() => this.onUploadFiles(2)}
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
const mapStateToProps = ({
  userReducer: {
    user: { _id, firstName }
  },
  Financial_data: { financial_Health_Check }
}) => ({
  financial_data: financial_Health_Check,
  userId: _id,
  userFirstName: firstName
});

const mapDispatchToProps = dispatch => ({
  // Get_Financial_data: props => dispatch(Api.financialDataGet(props))
});
export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
