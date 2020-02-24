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