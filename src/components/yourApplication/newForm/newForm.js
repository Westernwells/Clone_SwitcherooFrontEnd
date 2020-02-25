import React, { Component } from 'react';
import Logo from "./logo.png";
import { Row, Col, Form, Button } from "antd";
import "./newForm.css";


class newForm extends Component{
    render(){
        return(
            <div>
                <Form>
                    <Button type="primary">Submit Application</Button>
                    <Button type="primary">Download PDF</Button>
                    <div className="form-outer">
                        <div className="A4" id="application_div">
                            <div className="cover-page">
                        <div className="logo-area">
                           <img src={Logo} className="logo-img" />
                        </div>
                        <div className="cover-header-area">
                           <p className="cover-main-header">Mortgage</p>
                           <p className="cover-sub-header">Application form</p>
                        </div>
                        <br /><br />
                        <div className="cover-text-area">
                           <textarea className="cover-text" name="userId"  placeholder="PIBA Member" rows="4" cols="50" />
                        </div>
                        <div id="watermark">
                           <p class="wm-text">MORTGAGE</p>
                        </div>
                     </div>
                            <div className="pagebreak"> </div>
                            <br /><br />
                            <div className="right-main-header-container">
                        <div className="right-main-header-top"></div>
                        <div className="right-main-header-bottom">
                           <i>
                              <p className="right-main-header-txt"> Application Form</p>
                           </i>
                        </div>
                     </div>
                            <br /> <br />
                            <div className="header">
                        <h5 className="header-txt"> DETAILS OF INTRODUCING INTERMEDIARY</h5>
                     </div>
                            <br />
                            <div className="full-content">
                        <div class="row" id="loginForm">
                           <div className="form-group">
                              <label className="box-label">Brokerage Name</label>
                              <input type="text" className="box-input" />
                           </div>
                           <div className="form-group">
                              <label className="box-label">Address</label>
                              <textarea type="text" rows="3" className="box-textarea" />
                           </div>
                        </div>
                        <div className="left-pane">
                           <div className="form-group">
                              <label className="box-label">Telephone</label>
                              <input type="text" className="box-input" />
                           </div>
                        </div>
                        <div className="right-pane">
                           <div className="form-group">
                              <label className="box-label">Fax</label>
                              <input type="text" className="box-input" />
                           </div>
                        </div>
                        <div className="left-pane">
                           <div className="form-group">
                              <label className="box-label">Email</label>
                              <input type="text" className="box-input" />
                           </div>
                        </div>
                        <div className="right-pane">
                           <div className="form-group">
                              <label className="box-label">Authorization No.</label>
                              <input type="text" className="box-input" />
                           </div>
                        </div>
                        <div className="row">
                           <p>Disclosure of intermediary Status (where applicable). (e.g. only acts on behalf of one lender or one insurance company)</p>
                           <br/>
                           <p>If this application has been introduced to you, by a thord party (including an appointed introducer) please provide the introducers name and address.</p>
                        </div>
                     </div>
                            <br/>
                            <div className="header">
                        <h5 className="header-txt"> EXPLANATORY TEXT</h5>
                     </div>
                            <br />
                            <div className="full-content">
                        <div className="row">
                           <p>This application form is divided into two parts. The first part captures information about you, the applicant. The second part gives important information about mortgages offered by a given mortgage lender, including statutory warnings. In part two your signature is required in relation to your application for a mortgage loan and your consent is sought in relation to various matters.</p>
                           <br/>
                           <h6 className="custom-sub-header">Please ensure that all applicants sign part one and two of the application.</h6>
                        </div>
                     </div>
                            <br /><br />
                            <div className="right-main-header-container">
                        <div className="right-main-header-top-blue"></div>
                        <div className="right-main-header-bottom-blue">
                           <i>
                              <p className="right-main-header-txt-white"> PART ONE</p>
                           </i>
                        </div>
                     </div>
                            <br /> <br />
                            <div className="header">
                        <h5 className="header-txt"> NFORMATION ABOUT APPLICANT</h5>
                     </div>
                            <br />
                            <p>Please indicate the reason for your application</p>
                            <div className="full-content">
                                <div className="radioBtnDiv">
                           <div className="container">
                              <div className="row">
                                 <div className="col-lg-2 noPadding">
                                    <label class="container noPadding">First time buyer &nbsp;
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                    </label>
                                 </div>
                                 <div className="col-lg-3 noPadding">
                                    <label class="container">Re-Mortgage &nbsp;
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                    </label>
                                 </div>
                                 <div className="col-lg-2 noPadding">
                                    <label class="container">Purchase &nbsp;
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                    </label>
                                 </div>
                                 <div className="col-lg-5 noPadding">
                                    <label class="container">Residential Investment Property &nbsp;
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                    </label>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-lg-2 noPadding">
                                    <label class="container noPadding">Let to Buy &nbsp;
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                    </label>
                                 </div>
                                 <div className="col-lg-3 noPadding">
                                    <label class="container">Top-up &nbsp;
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                    </label>
                                 </div>
                                 <div className="col-lg-2 noPadding">
                                    <label class="container">Switcher &nbsp;
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                    </label>
                                 </div>
                                 <div className="col-lg-5 noPadding">
                                    <label class="container">Other &nbsp;
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <br />
                                <div className="form-group">
                           <p>If ‘Other’ please specify</p>
                           <textarea type="text" rows="3" className="box-textarea" />
                        </div>
                                <br />
                                <p>Failure to disclose the above information may result in the withdrawal of a lender appointment.</p>
                                <div classNamec="container">
                                    <div className="row">
                                        <div className="col-lg-7">
                                 <label className="font-size-12">Have you or any of your staff met the customer face-to-face?</label>
                              </div>
                                        <div className="col-lg-3 noPadding">
                                 <label class="container noPadding font-size-12">Yes &nbsp;
                                 <input className="radioInput" type="radio" name="radio" />
                                 <span class="checkmark"></span>
                                 </label>
                              </div>
                                        <div className="col-lg-2 noPadding">
                                 <label class="container noPadding font-size-12">No &nbsp;
                                 <input className="radioInput" type="radio" name="radio" />
                                 <span class="checkmark"></span>
                                 </label>
                              </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagebreak"> </div>
                                <div className="full-content">
                                        <br />
                                        <div className="main-header-container">
                                            <div className="main-header-top"></div>
                                            <div className="main-header-bottom">
                                            <i><p className="main-header-txt"> Section A – Personal Details</p></i>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="header-container">
                                                        <h1 className="main-header">APPLICANT ONE</h1>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="box-label">Forenames</label>
                                                        <input type="text" className="box-input" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="box-label">Surname</label>
                                                        <input type="text" className="box-input" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="box-label">Other/Previous Names</label>
                                                        <input type="text" className="box-input" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="box-label">Date of Birth (dd/mm/yyyy)</label>
                                                        <input type="text" className="box-input" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="box-label">Nationality</label>
                                                        <input type="text" className="box-input" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="box-label">PPS Number</label>
                                                        <input type="text" className="box-input" />
                                                    </div>
                                                    <div className="form-group">
                                                            <label className="box-label width100">Marital Status</label>
                                                            <div className="radio-area">
                                                            <label class="container">
                                                                <input type="radio" name="radio" /><br />married
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="radio-area">
                                                            <label class="container">
                                                                <input type="radio" name="radio" /><br />remarried
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="radio-area">
                                                            <label class="container">
                                                                <input type="radio" name="radio" /><br />single
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="radio-area">
                                                            <label class="container">
                                                                <input type="radio" name="radio" /><br />separated/devorced
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="radio-area">
                                                            <label class="container">
                                                                <input type="radio" name="radio" /><br />widow/er
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="radio-area">
                                                            <label class="container">
                                                                <input type="radio" name="radio" /><br />co HABITANT
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="radio-area">
                                                            <label class="container">
                                                                <input type="radio" name="radio" /><br />other
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="box-label">No. of Children</label>
                                                        <input type="text" className="box-input" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="box-label">Children’s Ages</label>
                                                        <input type="text" className="box-input" />
                                                    </div>
                                                    <br />
                                                </div>
                                                <div className="col-lg-6"></div>
                                            </div>

                                            <div className="currentAddressDiv">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <h5 className="header-txt"> CURRENT ADDRESS</h5>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <h5 className="header-txt"> CURRENT ADDRESS</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <br />

                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label className="box-label width100">Are You :</label>
                                                            <div className="radio-area">
                                                            <label class="container five-padding">
                                                                <input type="radio" name="radio" className="radioBtn" /><br />OWNER
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="radio-area">
                                                            <label class="container five-padding">
                                                                <input type="radio" name="radio" className="radioBtn"  /><br />TENANT
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="radio-area">
                                                            <label class="container five-padding noborderRight">
                                                                <input type="radio" name="radio" className="radioBtn" /><br />WITH PARENTS/RELATIVES OR FRIENDS
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label">Rent &euro;</label>
                                                                <input type="text" className="box-input custom-width-input" style={{ width: 66 + 'px' }} /> pm
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label">Address Line 1</label>
                                                            <input type="text" className="box-input" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label">Address Line 2</label>
                                                            <input type="text" className="box-input" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label">Address Line 3</label>
                                                            <input type="text" className="box-input" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label">County</label>
                                                            <input type="text" className="box-input" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label">Country</label>
                                                            <input type="text" className="box-input" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label" >Time at address</label>
                                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                            <label className="box-label">Years</label>
                                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                            <label className="box-label">Month</label>
                                                        </div>

                                                        </div>
                                                        <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label className="box-label width100">Are You :</label>
                                                            <div className="radio-area">
                                                            <label class="container five-padding">
                                                                <input type="radio" name="radio" className="radioBtn" /><br />OWNER
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="radio-area">
                                                            <label class="container five-padding">
                                                                <input type="radio" name="radio" className="radioBtn"  /><br />TENANT
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="radio-area">
                                                            <label class="container five-padding noborderRight">
                                                                <input type="radio" name="radio" className="radioBtn" /><br />WITH PARENTS/RELATIVES OR FRIENDS
                                                            <span class="checkmark"></span>
                                                            </label>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label">Rent &euro;</label>
                                                                <input type="text" className="box-input custom-width-input" style={{ width: 66 + 'px' }} /> pm
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label">Address Line 1</label>
                                                            <input type="text" className="box-input" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label">Address Line 2</label>
                                                            <input type="text" className="box-input" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label">Address Line 3</label>
                                                            <input type="text" className="box-input" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label">County</label>
                                                            <input type="text" className="box-input" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label">Country</label>
                                                            <input type="text" className="box-input" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label" >Time at address</label>
                                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                            <label className="box-label">Years</label>
                                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                            <label className="box-label">Month</label>
                                                        </div>

                                                        </div>
                                                    </div>
                                                      </div>  
                                                        <br />
                                                        <div className="crosspondDiv">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="header">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                                <h5 className="header-txt"> CORRESPONDENCE ADDRESS</h5>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <h5 className="header-txt"> CORRESPONDENCE ADDRESS</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br />
                                                        
                                                            <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label class="container left-pad-5">Same as above &nbsp;
                                                                    <input type="radio" name="radio" className="radioBtn"/>
                                                                    <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 1</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                        <label className="box-label">Address Line 2</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 3</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">County</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Country</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <br />
                                                                 </div>
                                                                 <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label class="container left-pad-5">Same as above &nbsp;
                                                                    <input type="radio" name="radio" className="radioBtn" />
                                                                    <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 1</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                        <label className="box-label">Address Line 2</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 3</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">County</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Country</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <br />
                                                                 </div>
                                                            </div>
                                                        </div>   
                                                            <br />
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="header">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                            <h5 className="header-txt"> PREVIOUS ADDRESS <span className="spanTxt">(if less than 3 years at existing address)</span></h5>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <h5 className="header-txt"> PREVIOUS ADDRESS</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                <br />
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 1</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 2</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 3</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">County</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Country</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label" >Time at address</label>
                                                                        <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                        <label className="box-label">Years</label>
                                                                        <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                        <label className="box-label">Month</label>
                                                                    </div>
                                                                    <p className="txtStyle font-size-10">Address description as per IIB HL from required for DOE House Price Survey</p>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                <br />
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 1</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 2</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 3</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">County</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Country</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label" >Time at address</label>
                                                                        <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                        <label className="box-label">Years</label>
                                                                        <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                        <label className="box-label">Month</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="header">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                            <h5 className="header-txt"> CONTACT DETAIL</h5>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <h5 className="header-txt"> CONTACT DETAIL</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <br />
                                                                    <div className="form-group">
                                                                        <label className="box-label">Home Telephone Number</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Work Telephone Number</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Mobile Telephone Number</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">E-mail</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <br />
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <br />
                                                                    <div className="form-group">
                                                                        <label className="box-label">Home Telephone Number</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Work Telephone Number</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Mobile Telephone Number</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">E-mail</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                        <br/>
                                                        <div className="right-main-header-container">
                                                            <div className="right-main-header-top-blue"></div>
                                                            <div className="right-main-header-bottom-blue">
                                                            <i>
                                                                <p className="right-main-header-txt-white"> Section B - Income & Employment</p>
                                                            </i>
                                                            </div>
                                                        </div>
                                                        <br />

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                            <div className="header-container">
                                                                <h1 className="main-header">APPLICANT ONE</h1>
                                                            </div>
                                                            <br />
                                                            </div>
                                                            <div className="col-lg-6">
                                                            <div className="header-container">
                                                                <h1 className="main-header">APPLICANT TWO</h1>
                                                            </div>
                                                            <br />
                                                            </div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <h5 className="header-txt"> CURRENT INCOMES</h5>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <h5 className="header-txt"> CURRENT INCOMES</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="box-label">Gross basic wage/salary pa &euro;</label>
                                                                <input type="text" className="box-input" />
                                                            </div>
                                                            <div className="float-right">
                                                                <div className="form-group">
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />GUARANTEED
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />REGULAR
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />IRREGULAR
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label">Overtime per annum &euro;</label>
                                                                <input type="text" className="box-input" />
                                                            </div>
                                                            <div className="float-right">
                                                                    <div className="form-group">
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />REGULAR
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                <label className="box-label">Bonuses per annum &euro;</label>
                                                                <input type="text" className="box-input" />
                                                            </div>
                                                            <div className="float-right">
                                                                <div className="form-group">
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />GUARANTEED
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />REGULAR
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />IRREGULAR
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                    <label className="box-label">Commissions per annum &euro;</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="float-right">
                                                                    <div className="form-group">
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />REGULAR
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                        <label className="box-label">Other income per annum (non rental) &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="float-right">
                                                                        <div className="form-group">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />GUARANTEED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />REGULAR
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />IRREGULAR
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        </div>
                                                                    </div>



                                                                    <div className="form-group">
                                                                        <label className="box-label">Lodger income per annum &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Residential Investment income per annum &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Total gross income per annum &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Total joint financial income pa &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Total NET income per mont &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Nature of Income </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Employment Status </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="float-right">
                                                                        <div className="form-group">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />EMPLOYED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />EMPLOYED & SELF EMPLOYED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />HOMEMAKER
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />OTHER
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />RETIRED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />SELF EMPLOYED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        </div>
                                                                    </div>



                                                            </div>
                                                            <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="box-label">Gross basic wage/salary pa &euro;</label>
                                                                <input type="text" className="box-input" />
                                                            </div>
                                                            <div className="float-right">
                                                                <div className="form-group">
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />GUARANTEED
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />REGULAR
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />IRREGULAR
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label">Overtime per annum &euro;</label>
                                                                <input type="text" className="box-input" />
                                                            </div>
                                                            <div className="float-right">
                                                                    <div className="form-group">
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />REGULAR
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                <label className="box-label">Bonuses per annum &euro;</label>
                                                                <input type="text" className="box-input" />
                                                            </div>
                                                            <div className="float-right">
                                                                <div className="form-group">
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />GUARANTEED
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />REGULAR
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                    <label class="container">
                                                                    <input type="radio" name="radio" /><br />IRREGULAR
                                                                <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                    <label className="box-label">Commissions per annum &euro;</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="float-right">
                                                                    <div className="form-group">
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />REGULAR
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="radio-area">
                                                                        <label class="container">
                                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                                    <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                        <label className="box-label">Other income per annum (non rental) &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="float-right">
                                                                        <div className="form-group">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />GUARANTEED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />REGULAR
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />IRREGULAR
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        </div>
                                                                    </div>



                                                                    <div className="form-group">
                                                                        <label className="box-label">Lodger income per annum &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Residential Investment income per annum &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Total gross income per annum &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Total joint financial income pa &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Total NET income per mont &euro;</label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Nature of Income </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Employment Status </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="float-right">
                                                                        <div className="form-group">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />EMPLOYED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />EMPLOYED & SELF EMPLOYED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />HOMEMAKER
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />OTHER
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />RETIRED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />SELF EMPLOYED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        </div>
                                                                    </div>



                                                            </div>
                                                        </div>

                                                        <br/>

                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <h5 className="header-txt">EMPLOYMENT DTAILS</h5>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <h5 className="header-txt"> EMPLOYMENT DTAILS </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>

                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <label class="container">
                                                                    Please choose a category for each applicant from the attached list – Note 1 (Section G) 
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="appdiv">
                                                                    <label>App1</label>
                                                                    <label>App2</label>
                                                                </div>
                                                                <div className="inputDiv">
                                                                    <input type="text" className="box-input" />
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <label class="container">
                                                                    Please choose a category for each applicant from the attached list – Note 1 (Section G) 
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="inputDiv">
                                                                    <input type="text" className="box-input" />
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="box-label">Occupation </label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="float-right">
                                                                        <div className="form-group">
                                                                        
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />OTHER
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />RETIRED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />SELF EMPLOYED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Employer's Name </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 1 </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 2 </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 3 </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>

                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group">
                                                                                <label className="box-label">County </label>
                                                                                <input type="text" className="box-input width100" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group">
                                                                                <label className="box-label">Country </label>
                                                                                <input type="text" className="box-input width100" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Telephone Number </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Nature of Business </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label" >Length of Service with Employer</label>
                                                                        <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                        <label className="box-label">Years</label>
                                                                        <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                        <label className="box-label">Month</label>
                                                                    </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="box-label">Occupation </label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="float-right">
                                                                        <div className="form-group">
                                                                        
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />OTHER
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />RETIRED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                            <input type="radio" name="radio" /><br />SELF EMPLOYED
                                                                        <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Employer's Name </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 1 </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 2 </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Address Line 3 </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>

                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group">
                                                                                <label className="box-label">County </label>
                                                                                <input type="text" className="box-input width100" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group">
                                                                                <label className="box-label">Country </label>
                                                                                <input type="text" className="box-input width100" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Telephone Number </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label">Nature of Business </label>
                                                                        <input type="text" className="box-input" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label" >Length of Service with Employer</label>
                                                                        <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                        <label className="box-label">Years</label>
                                                                        <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                        <label className="box-label">Month</label>
                                                                    </div>
                                                            </div>
                                                        </div>


                                                        <br/>

                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <h5 className="header-txt"> PREVIOUS EMPLOYMENT</h5> (if less than 1 years at current employer)
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <h5 className="header-txt"> PREVIOUS EMPLOYMENT</h5> (if less than 1 years at current employer)
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                            <br />
                                                                <div className="form-group">
                                                                    <label className="box-label">Employer’s Name</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 1</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 2</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 3</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label" >County</label>
                                                                    <input type="text" className="box-input" style={{ width: "70px" }} />
                                                                    <label className="box-label">Country</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Occupation</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label" >Length of Service with employer</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Years</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Month</label>
                                                                </div>

                                                            </div>
                                                            <div className="col-lg-6">
                                                            <br />
                                                                <div className="form-group">
                                                                    <label className="box-label">Employer’s Name</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 1</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 2</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 3</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label" >County</label>
                                                                    <input type="text" className="box-input" style={{ width: "70px" }} />
                                                                    <label className="box-label">Country</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Occupation</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label" >Length of Service with employer</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Years</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Month</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <br />
                                                        <div className="main-header-container">
                                                            <div className="main-header-top"></div>
                                                            <div className="main-header-bottom">
                                                            <i><p className="main-header-txt"> Section B – Income & Employment</p></i>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                            <div className="header-container">
                                                                <h1 className="main-header">APPLICANT ONE</h1>
                                                            </div>
                                                            <br />
                                                            </div>
                                                            <div className="col-lg-6">
                                                            <div className="header-container">
                                                                <h1 className="main-header">APPLICANT TWO</h1>
                                                            </div>
                                                            <br />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <h5 className="header-txt"> SELF EMPLOYED DETAILS</h5>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <h5 className="header-txt"> SELF EMPLOYED DETAILS</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                            <br />
                                                                <div className="form-group">
                                                                    <label className="box-label">Name of firm/company</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 1</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 2</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 3</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">County</label>
                                                                    <input type="text" className="box-input" style={{ width: "70px" }} />
                                                                    <label className="box-label">Country</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Nature of Business</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">How long has the business been established</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Time Involved</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Average profit over three years &euro;</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Percentage shareholding/partnership interest</label>
                                                                    <input type="text" className="box-input" /> %
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Name of accountant</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Name of accounting firm</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 1</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 2</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 3</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">County</label>
                                                                    <input type="text" className="box-input" style={{ width: "70px" }} />
                                                                    <label className="box-label">Country</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Telephone number</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Fax Number</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">3 years audited accounts available</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label" >Length of Service with employer</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Years</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Month</label>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Tax affairs up to date </label>
                                                                    <div className="radio-area">
                                                                    <label class="container">
                                                                        <input type="radio" name="radio" /><br />yes
                                                                    <span class="checkmark"></span>
                                                                    </label>
                                                                    </div>
                                                                    <div className="radio-area">
                                                                    <label class="container">
                                                                        <input type="radio" name="radio" /><br />no
                                                                    <span class="checkmark"></span>
                                                                    </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                            <br />
                                                                <div className="form-group">
                                                                    <label className="box-label">Name of firm/company</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 1</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 2</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 3</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">County</label>
                                                                    <input type="text" className="box-input" style={{ width: "70px" }} />
                                                                    <label className="box-label">Country</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Nature of Business</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">How long has the business been established</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Time Involved</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Average profit over three years &euro;</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Percentage shareholding/partnership interest</label>
                                                                    <input type="text" className="box-input" /> %
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Name of accountant</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Name of accounting firm</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 1</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 2</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 3</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">County</label>
                                                                    <input type="text" className="box-input" style={{ width: "70px" }} />
                                                                    <label className="box-label">Country</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Telephone number</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Fax Number</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">3 years audited accounts available</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label" >Length of Service with employer</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Years</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Month</label>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Tax affairs up to date </label>
                                                                    <div className="radio-area">
                                                                    <label class="container">
                                                                        <input type="radio" name="radio" /><br />yes
                                                                    <span class="checkmark"></span>
                                                                    </label>
                                                                    </div>
                                                                    <div className="radio-area">
                                                                    <label class="container">
                                                                        <input type="radio" name="radio" /><br />no
                                                                    <span class="checkmark"></span>
                                                                    </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="main-header-container">
                                                            <div className="main-header-top"></div>
                                                            <div className="main-header-bottom">
                                                            <i><p className="main-header-txt"> Section C – Financial & Credit History</p></i>
                                                            </div>
                                                        </div>
                                                        <br />

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                            <div className="form-group">
                                                                    <label className="box-label">Current Bank/Building Society</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 1</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 2</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 3</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label" >County</label>
                                                                    <input type="text" className="box-input" style={{ width: "70px" }} />
                                                                    <label className="box-label">Country</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Account Type</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Account Number</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Sort Code</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label" >I have held this account for</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Years</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Month</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                            <div className="form-group">
                                                                    <label className="box-label">Current Bank/Building Society</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 1</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 2</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Address Line 3</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label" >County</label>
                                                                    <input type="text" className="box-input" style={{ width: "70px" }} />
                                                                    <label className="box-label">Country</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Account Type</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Account Number</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label">Sort Code</label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label" >I have held this account for</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Years</label>
                                                                    <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                                                    <label className="box-label">Month</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h5 className="header-txt"> SAVING ACCOUNT INFORMATION</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <h6 className="font-size-12">Financial Institution</h6>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <h6 className="font-size-12"> A/C Number</h6>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="montlyDiv">
                                                                    <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <h6 className="font-size-12">Monthly Savings </h6>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width110"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width110"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width110"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width110"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2">
                                                                        <h6 className="font-size-12">App1 </h6>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width50"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width50"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width50"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width50"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2">
                                                                        <h6 className="font-size-12">App2 </h6>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width50"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width50"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width50"/>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="text" className="box-input width50"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <h6 className="font-size-12">Balance</h6>
                                                                        <div className="form-group">
                                                                            <label>
                                                                                &euro;
                                                                                <input type="text" className="box-input width70"/>
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>
                                                                                &euro;
                                                                                <input type="text" className="box-input width70"/>
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>
                                                                                &euro;
                                                                                <input type="text" className="box-input width70"/>
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>
                                                                                &euro;
                                                                                <input type="text" className="box-input width70"/>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <br/>
                                                        <div className="right-main-header-container">
                                                            <div className="right-main-header-top-blue"></div>
                                                            <div className="right-main-header-bottom-blue">
                                                            <i>
                                                                <p className="right-main-header-txt-white"> Section C – Financial & Credit History</p>
                                                            </i>
                                                            </div>
                                                        </div>
                                                        <br />

                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <h5 className="header-txt"> MORTGAGE 1</h5>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <h5 className="header-txt"> MORTGAGE 2</h5>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <h5 className="header-txt"> MORTGAGE 3</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>

                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Inception Date</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Mortgage Term</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Est. Sale Price &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Are you selling this property </label>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />yes
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />no
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Name of Lender</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Mortgage Acct. No.</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Address of Lender</label>
                                                                <textarea type="text" rows="3" className="box-textarea width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Property Value &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Balance Due &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Balance Due &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Year Purchased</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">If fixed, for how many years</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Payments missed in last 6 months</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Payments missed in last 12 months</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Payments per month</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Rental Income per month &euro;</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Address of Property</label>
                                                                <textarea type="text" rows="3" className="box-textarea" />
                                                            </div>
                                                            <br />
                                                            <div className="radioBtnDiv">
                                                            <label className="box-label font-size-12">Type of Mortgage </label>
                                                            <div className="form-group">
                                                                
                                                                <br />
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />ANNUITY
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />ENDOWMENT
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />INTEREST ONLY
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />OTHER
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />PENSION
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="radioBtnDiv">
                                                            <label className="box-label font-size-12">Type of Rate </label>
                                                            <div className="form-group">
                                                                
                                                                <br />
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />DISCOUNT VARIABLE
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />FIXED
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />PENSION
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />INTEREST ONLY
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />Other
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            
                                                            </div>
                                                            <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Inception Date</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Mortgage Term</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Est. Sale Price &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Are you selling this property </label>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />yes
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />no
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Name of Lender</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Mortgage Acct. No.</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Address of Lender</label>
                                                                <textarea type="text" rows="3" className="box-textarea width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Property Value &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Balance Due &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Balance Due &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Year Purchased</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">If fixed, for how many years</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Payments missed in last 6 months</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Payments missed in last 12 months</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Payments per month</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Rental Income per month &euro;</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Address of Property</label>
                                                                <textarea type="text" rows="3" className="box-textarea" />
                                                            </div>
                                                            <br />
                                                            <div className="radioBtnDiv">
                                                            <label className="box-label font-size-12">Type of Mortgage </label>
                                                            <div className="form-group">
                                                                
                                                                <br />
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />ANNUITY
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />ENDOWMENT
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />INTEREST ONLY
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />OTHER
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />PENSION
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="radioBtnDiv">
                                                            <label className="box-label font-size-12">Type of Rate </label>
                                                            <div className="form-group">
                                                                
                                                                <br />
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />DISCOUNT VARIABLE
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />FIXED
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />PENSION
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />INTEREST ONLY
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />Other
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Inception Date</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Mortgage Term</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Est. Sale Price &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Are you selling this property </label>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />yes
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />no
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Name of Lender</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Mortgage Acct. No.</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Address of Lender</label>
                                                                <textarea type="text" rows="3" className="box-textarea width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Property Value &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Balance Due &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Balance Due &euro;</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Year Purchased</label>
                                                                <input type="text" className="box-input width100" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">If fixed, for how many years</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Payments missed in last 6 months</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Payments missed in last 12 months</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Payments per month</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Rental Income per month &euro;</label>
                                                                <input type="text" className="box-input width50" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Address of Property</label>
                                                                <textarea type="text" rows="3" className="box-textarea" />
                                                            </div>
                                                            <br />
                                                            <div className="radioBtnDiv">
                                                            <label className="box-label font-size-12">Type of Mortgage </label>
                                                            <div className="form-group">
                                                                
                                                                <br />
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />ANNUITY
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />ENDOWMENT
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />INTEREST ONLY
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />OTHER
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />PENSION
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="radioBtnDiv">
                                                            <label className="box-label font-size-12">Type of Rate </label>
                                                            <div className="form-group">
                                                                
                                                                <br />
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />DISCOUNT VARIABLE
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />FIXED
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />PENSION
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />INTEREST ONLY
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                                <div className="radio-area">
                                                                <label class="container">
                                                                    <input type="radio" name="radio" /><br />Other
                                                                <span class="checkmark"></span>
                                                                </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <label className="font-size-12">
                                                                    Is property registered in any name other than that of the applicant
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Details</label>
                                                                    <textarea type="text" rows="3" className="box-textarea" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h5 className="header-txt"> FINANCIAL COMMITMENTS</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">How many existing loans do you have</label>
                                                                    <input type="text" className="box-input width50" />
                                                                    <label className="box-label font-size-12">Amount Borrowed</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group">
                                                                                <label className="box-label font-size-12">Applicant 1 </label>
                                                                                <input type="text" className="box-input width50" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group">
                                                                                <label className="box-label font-size-12">Applicant 2 </label>
                                                                                <input type="text" className="box-input width50" />
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <label className="box-label font-size-12">Financial Institution </label>
                                                                        <textarea style={{height:"90px",width:"100px"}} type="input" className="box-textarea" row="5"></textarea>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <label className="box-label font-size-12">Account Number: </label>
                                                                        <textarea style={{height:"90px",width:"120px"}} type="input" className="box-textarea" row="5"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <label className="box-label font-size-12">App1 </label>
                                                                       <div className="radioBtnDiv radioBtnDivWidth">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                       </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <label className="box-label font-size-12">App1 </label>
                                                                       <div className="radioBtnDiv radioBtnDivWidth">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                       </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="row">
                                                                    <div className="col-lg-3">
                                                                        <label className="box-label font-size-12">Payment (Mly) </label>
                                                                            <label className="font-size-12">&euro;
                                                                            <input type="text" className="box-input width40" /></label>
                                                                            <label className="font-size-12">&euro;
                                                                            <input type="text" className="box-input width40" /></label>
                                                                            <label className="font-size-12">&euro;
                                                                            <input type="text" className="box-input width40" /></label>
                                                                            <label className="font-size-12">&euro;
                                                                            <input type="text" className="box-input width40" /></label>
                                                                    </div>
                                                                    <div className="col-lg-3">
                                                                        <label className="box-label font-size-12"> Purpose </label>
                                                                            <textarea class="box-textarea width70" type="input" row="4"></textarea>
                                                                    </div>
                                                                    <div className="col-lg-3">
                                                                        <label className="box-label font-size-12">Final Payment Date </label>
                                                                            <textarea class="box-textarea width70" type="input" row="4"></textarea>
                                                                    </div>
                                                                    <div className="col-lg-3">
                                                                        <label className="box-label font-size-12">Final Payment Date </label>
                                                                        <div className="multiRadio">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="multiRadio">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="multiRadio">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="multiRadio">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Rent &euro;</label>
                                                                    <input type="text" className="box-input width50" />
                                                                    <label className="box-label font-size-12">Maintenance Payments &euro;</label>
                                                                    <input type="text" className="box-input width50" />
                                                                    <label className="box-label font-size-12">Total &euro;</label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h5 className="header-txt"> CREDIT HISTORY</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>


                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <label className="font-size-12">
                                                                    Have you ever:
                                                                </label>
                                                            </div> 
                                                            <div className="col-lg-2 text-center">
                                                                <label className="font-size-12">
                                                                    App1
                                                                </label>
                                                            </div>  
                                                            <div className="col-lg-2 text-center">
                                                                <label className="font-size-12">
                                                                    App2
                                                                </label>
                                                            </div>                                                          
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <label className="font-size-12">
                                                                    Is property registered in any name other than that of the applicant
                                                                </label>
                                                            </div> 
                                                            <div className="col-lg-2">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="multiRadio">  
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />Yes
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />No
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>  
                                                            <div className="col-lg-2">
                                                            <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="multiRadio">  
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />Yes
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />No
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>                                                          
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <label className="font-size-12">
                                                                    Had a court order registered against you
                                                                </label>
                                                            </div> 
                                                            <div className="col-lg-2">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="multiRadio">  
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />Yes
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />No
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>  
                                                            <div className="col-lg-2">
                                                            <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="multiRadio">  
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />Yes
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />No
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>                                                          
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <label className="font-size-12">
                                                                    Been insolvent, declared bankrupt or made any arrangements with creditors or any other action pending 
                                                                </label>
                                                            </div> 
                                                            <div className="col-lg-2">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="multiRadio">  
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />Yes
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />No
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>  
                                                            <div className="col-lg-2">
                                                            <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="multiRadio">  
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />Yes
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />No
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>                                                          
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label className="box-label font-size-12">Details</label>
                                                                <textarea type="text" rows="3" className="box-textarea" />
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <br />
                                                        <div className="main-header-container">
                                                            <div className="main-header-top-white"></div>
                                                            <div className="main-header-bottom-white">
                                                            <i><p className="main-header-txt-white"><span>PART TWO</span> Section D – Mortgage Details</p></i>
                                                            </div>
                                                        </div>
                                                        <br />

                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h5 className="header-txt"> CUSTOMER TYPE</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>

                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="row">
                                                                    <div className="col-lg-8">
                                                                        <label className="box-label font-size-12">First Time Buyer</label>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="radioBtnDiv">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                    <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-8">
                                                                        <label className="box-label font-size-12">Remortgage House</label>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="radioBtnDiv">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                    <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-8">
                                                                        <label className="box-label font-size-12">Second Property </label>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="radioBtnDiv">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                    <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-8">
                                                                        <label className="box-label font-size-12">RP</label>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="radioBtnDiv">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                    <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-4">
                                                                <label className="box-label font-size-12">Max Approval Required</label>
                                                                <label className="box-label font-size-12">First Applicant</label>
                                                                <label className="box-label font-size-12">Second Applicant</label>
                                                            </div>

                                                            <div className="col-lg-2">
                                                                <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">Yes</lable>
                                                                    <div className="radioBtnDiv">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                                <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">Yes</lable>
                                                                    <div className="radioBtnDiv">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                                <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">Yes</lable>
                                                                    <div className="radioBtnDiv">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                                <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2">
                                                                <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">No</lable>
                                                                    <div className="radioBtnDiv">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                                <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">No</lable>
                                                                    <div className="radioBtnDiv">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                                <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">No</lable>
                                                                    <div className="radioBtnDiv">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                                <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <label className="font-size-12">If joint application, is title of property to be in joint names</label>
                                                            </div>
                                                            <div className="col-lg-2">
                                                            <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">Yes</lable>
                                                                    <div className="radioBtnDiv">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                                <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2">
                                                            <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">No</lable>
                                                                    <div className="radioBtnDiv">
                                                                        <div className="radio-area">
                                                                            <label class="container">
                                                                                <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        

                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h5 className="header-txt"> SECTION ONE (PURCHASE ONLY) </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>


                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Purchase price/cost of Building </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Site Price (if applicable) </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Legal & stamp duty (if applicable) </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Repairs/Renovations </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Other costs* </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Total Expenditure </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2"></div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Savings* </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Grant  </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Gifts </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Other funds* </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <br/>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Total Finance </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">*Please supply details of other cost and/or savings, or other funding sources </label>
                                                                    <textarea type="text" className="box-textarea" />
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col-lg-2">
                                                                <label className="font-size-12">Is purchase:  </label>
                                                            </div>
                                                            <div className="col-lg-2">
                                                                <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">Local Authority Housing Scheme</lable>
                                                                        <div className="radioBtnDiv">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                    <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2">
                                                                <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">Affordable Housing</lable>
                                                                        <div className="radioBtnDiv">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                    <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2">
                                                                <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">Shared Ownership</lable>
                                                                        <div className="radioBtnDiv">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                    <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2">
                                                                <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">Affordable Housing</lable>
                                                                        <div className="radioBtnDiv">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                    <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2">
                                                                <div className="optionalDiv displayFlex">
                                                                    <lable className="font-size-12">Local Authority Tenant Purchase</lable>
                                                                        <div className="radioBtnDiv">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                    <input type="radio" name="radio" /><br />
                                                                                    <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <lable className="font-size-12">If affordable House, please provide:</lable>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Purchase Price </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Market Value </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h5 className="header-txt"> SECTION TWO (RE-MORTGAGE ONLY)  </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>


                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Remortgage amount </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Property value  </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Loan Value % </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Year of original purchase </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Current mortgage outstanding </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Age of property </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">New Mortgage required </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Purpose of additional borrowing </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h5 className="header-txt"> MORTGAGE  </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>


                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">What type of repayment method do you require </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Other/Initial years </label>
                                                                    <input type="text" className="box-input width100" />
                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label className="box-label font-size-12">What type of repayment method do you require </label>
                                                                            <input type="text" className="box-input width50" />
                                                                        </div>
                                                                    </div>
                                                                    <br/>
                                                                    <div className="col-lg-6">
                                                                            <div className="multiRadio displayFlex">  
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />TRACKER  
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />DISCOUNT VARIABLE
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />FIXED  
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />PENSION 
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />INTEREST ONLY
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />OTHER
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                </div>


                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Loan amount </label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Commencement date </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Type of rate required </label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="floatRight">
                                                                <div className="multiRadio displayFlex">  
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />ENDOWMENT MORTGAGE 
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />INTEREST ONLY
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />OTHER 
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />PENSION BACKED
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />REPAYMENT/ANNUITY
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Fixed for (years) </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h5 className="header-txt"> SOLICITOR  </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>


                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Solicitor Name </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Address Line 1  </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Address Line 2  </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Address Line 3  </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="displayFlex">
                                                                    <div className="form-group">
                                                                        <label className="box-label font-size-12">County   </label>
                                                                        <input type="text" className="box-input width50" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="box-label font-size-12">Country    </label>
                                                                        <input type="text" className="box-input width50" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Phone Number   </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Mobile Number   </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Fax Number  </label>
                                                                    <textarea type="text" className="box-textarea " />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <br /><br />
                                                        <div className="right-main-header-container">
                                                            <div className="right-main-header-top"></div>
                                                                <div className="right-main-header-bottom">
                                                                <i>
                                                                    <p className="right-main-header-txt"> Section E – Property Details</p>
                                                                </i>
                                                            </div>
                                                        </div>
                                                        <br /> <br />
                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h5 className="header-txt"> SOLICITOR  </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Address Line 1   </label>
                                                                    <input type="text" className="box-input" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Address Line 2   </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Address Line 3  </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">County   </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Country   </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <p>See page 2 for address requirements</p>
                                                            </div>

                                                            <div className="col-lg-6">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <label className="box-label font-size-12">Type  of Property   </label>
                                                                    </div>
                                                                    <div className="col-lg-8">
                                                                    <div className="multiRadio displayFlex">  
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />ENDOWMENT MORTGAGE 
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />INTEREST ONLY
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />OTHER 
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />PENSION BACKED
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio-area">
                                                                                    <label class="container">
                                                                                        <input type="radio" name="radio" /><br />REPAYMENT/ANNUITY
                                                                                    <span class="checkmark"></span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Estimated completion/closing date   </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">New Property </label>
                                                                        <div className="multiRadio">
                                                                            <div className="radio-area">
                                                                                <label class="container">
                                                                                <input type="radio" name="radio" /><br />
                                                                                <span class="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Number of floors in block (If apartment)   </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="box-label font-size-12">Estimated Value   </label>
                                                                    <input type="text" className="box-input width50" />
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="header">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <h5 className="header-txt"> NUMBER OF ROOMS  </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>

                                                        <div className="row"></div>






                                            </div>
                                       
                                    
                                        
                                        
                                        
                                        
                                        
                                        
                                </div>









                        </div>
                    </div>
            </Form>
            </div>
        )
    }
}


export default newForm;