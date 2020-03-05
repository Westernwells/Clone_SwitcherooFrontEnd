import React, {useState} from 'react';
import Logo from "./logo.png";
import { Row, Col, Form, Button } from "antd";
import "./newForm.css";
import axios from 'axios';
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const NewForm = () => {
    const [form,setForm] = useState({
        introducingImmediately: {
            brokerysName: '',
            address: '',
            telephone:null,
            fax:null,
            email:'',
            authorizationNumber:null
        },
        infoAboutApplicant : {
            radioType : '',
            otherPleaseSpecify : '',
            faceToFaceRadioType:''
        },
        personalDetails: {
            applicantOne: {
                surname:'',
                forename:'',
                otherName:'',
                date:'',
                nationality:'',
                ppsNumber:'',
                maritalStatus:'',
                noOfChildren:'',
                childrenAges:''
            },
            leftSideCurrentAddress:{
                areYouRadioType:'',
                rent:'',
                addressLine1:'',
                addressLine2:'',
                addressLine3:'',
                county:'',
                country:'',
                time:'',
                year:'',
                month:''
            },
            RightSideCurrentAddress:{
                areYouRadioType:'',
                rent:'',
                addressLine1:'',
                addressLine2:'',
                addressLine3:'',
                county:'',
                country:'',
                time:'',
                year:'',
                month:''
            },
            leftSideCorrespondingAddress:{
                sameAsAbove:'',
                addressLine1:'',
                addressLine2:'',
                addressLine3:'',
                county:'',
                country:''
            },
            RightSideCorrespondingAddress:{
                sameAsAbove:'',
                addressLine1:'',
                addressLine2:'',
                addressLine3:'',
                county:'',
                country:''
            },
            leftSidePreviousAddress:{
                addressLine1:'',
                addressLine2:'',
                addressLine3:'',
                county:'',
                country:'',
                time:'',
                year:'',
                month:''
            },
            RightSidePreviousAddress:{
                addressLine1:'',
                addressLine2:'',
                addressLine3:'',
                county:'',
                country:'',
                time:'',
                year:'',
                month:''
            },
            leftSideContactDetail:{
                homeNumber:'',
                workNumber:'',
                mobileNumber:'',
                email:'',
            },
            RightSideContactDetail:{
                homeNumber:'',
                workNumber:'',
                mobileNumber:'',
                email:'',
            },
        }
    })
    // componentDidMount() {
    //     axios.get(`https://switchroo.herokuapp.com/detailsYouNeed/getDetails/5e1cad6962b8dc001761e3cd`)
    //         .then(res => {
    //             console.log(res)
    //             const response = res.data;
    //             this.setState({response});
    //         }).catch(err => {
    //             console.log('error',err);
    //     })
    // }
    const handleInputChange = (e,object,nestedObj) => {
        console.log(e.target)
        console.log(e.currentTarget)
        const updatedState = {...form};
        const stateClone = {...updatedState }
        if (nestedObj) {
            const path = [object,nestedObj,e.target.name]
            const nestedObject = path.slice(0, -1).reduce((object, part) =>
                (object === undefined ? undefined : object[part]), stateClone)
            if (nestedObject !== undefined) {
                const [pathTail] = path.slice(-1);
                nestedObject[pathTail] = e.target.value;
            }
        }
        else {
            const path = [object,e.target.name]
            const nestedObject = path.slice(0, -1).reduce((object, part) =>
                (object === undefined ? undefined : object[part]), stateClone)
            if (nestedObject !== undefined) {
                const [pathTail] = path.slice(-1);
                nestedObject[pathTail] = e.target.value;
            }
        }
        setForm(stateClone);
        console.log(form)
    }
    // const exportPdf = () => {

    //     var element = document.getElementById('application_div');
    //     var opt = {
    //         margin:       0.3,
    //         filename:     'myfile.pdf',
    //         image:        { type: 'jpeg', quality: 0.5 },
    //         html2canvas:  { scale:  2},
    //         jsPDF:        { unit: 'in', format: 'a3', orientation: 'portrait' }
    //     };
    //     html2pdf(element, opt);


    const exportPdf = async () => {
        var quotes = document.getElementById('application_div');
        html2canvas(quotes)
       .then((canvas) => {
             //! MAKE YOUR PDF
             var pdf = new jsPDF('p', 'pt', 'letter');
             for (var i = 0; i <= quotes.clientHeight/980; i++) {
                 //! This is all just html2canvas stuff
                 var srcImg  = canvas;
                 var sX      = 0;
                 var sY      = 980*i; // start 980 pixels down for every new page
                 var sWidth  = 900;
                 var sHeight = 980;
                 var dX      = 0;
                 var dY      = 0;
                 var dWidth  = 900;
                 var dHeight = 980;
                 const onePageCanvas = document.createElement("canvas");
                 onePageCanvas.setAttribute('width', 900);
                 onePageCanvas.setAttribute('height', 980);
                 var ctx = onePageCanvas.getContext('2d');
                 // details on this usage of this function: 
                 // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
                 ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);
                 // document.body.appendChild(canvas);
                 var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
                 var width         = onePageCanvas.width;
                 var height        = onePageCanvas.clientHeight;
                 //! If we're on anything other than the first page,
                 // add another page
                 if (i > 0) {
                     pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
                 }
                 //! now we declare that we're working on that page
                 pdf.setPage(i+1);
                 //! now we add content to that page!
                 pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));
             }
             //! after the for loop is finished running, we save the pdf.
             pdf.save('Test.pdf');
         }
       );
     }

    return (
        <div>
            <Form>
                <Button type="primary">Submit Application</Button>
                <Button type="primary" onClick={exportPdf}>Download PDF</Button>
                <div className="form-outer" >
                    <div id="application_div">
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
                        {/* <br /><br /> 
                       
                                    <h4 className="right-para">Application From</h4>
                                </div>
                            </div>
                        </div>
                        <br /> */}
                        <br/>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="right-main-header-container" style={{"margin-right":"75px"}}>
                                                <div className="right-main-header-top"></div>
                                                <div className="right-main-header-bottom">
                                                    <i>
                                                        <p className="right-para"> Application From</p>
                                                    </i>
                                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                                <br />
                        <div className="header1">
                            <h5 className="header-txt"> DETAILS OF INTRODUCING INTERMEDIARY</h5>
                        </div>
                       
                        <div className="full-content">
                            <div class="row" id="loginForm">
                                <div className="form-group">
                                    <label className="box-label font-size-12">Brokerage Name</label>
                                    <input
                                        type="text"
                                        className="box-input"
                                        name = 'brokerysName'
                                        value={form.introducingImmediately.brokerysName}
                                        onChange={(e)=>handleInputChange(e,'introducingImmediately')}/>
                                </div>
                                <div className="form-group">
                                    <label className="box-label font-size-12">Address</label>
                                    <textarea
                                        type="text" rows="3"
                                        className="box-textarea"
                                        name = 'address'
                                        value = {form.introducingImmediately.address}
                                        onChange ={(e)=>handleInputChange(e,'introducingImmediately')} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 noPadding">
                                    <div className="form-group">
                                        <label className="box-label font-size-12">Telephone</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name = 'telephone'
                                            value = {form.introducingImmediately.telephone}
                                            onChange ={(e)=>handleInputChange(e,'introducingImmediately')} />
                                    </div>
                                </div>
                                <div className="col-lg-6 noPadding">
                                    <div className="form-group">
                                        <label className="box-label font-size-12">Fax</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name = 'fax'
                                            value = {form.introducingImmediately.fax}
                                            onChange ={(e)=>handleInputChange(e,'introducingImmediately')} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 noPadding">
                                    <div className="form-group">
                                        <label className="box-label font-size-12">Email</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name = 'email'
                                            value = {form.introducingImmediately.email}
                                            onChange ={(e)=>handleInputChange(e,'introducingImmediately')} />
                                    </div>
                                </div>
                                <div className="col-lg-6 noPadding">
                                    <div className="form-group">
                                        <label className="box-label font-size-12">Authorization No.</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name = 'authorizationNumber'
                                            value = {form.introducingImmediately.authorizationNumber}
                                            onChange ={(e)=>handleInputChange(e,'introducingImmediately')} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <br/>
                                <p className="font-size-12">Disclosure of intermediary Status (where applicable). (e.g. only acts on behalf of one lender or one insurance company)</p>
                                <br/>
                                <p className="font-size-12">If this application has been introduced to you, by a thord party (including an appointed introducer) please provide the introducers name and address.</p>
                            </div>
                        </div>
                        <div className="header1">
                            <h5 className="header-txt"> EXPLANATORY TEXT</h5>
                        </div>
                        <br/>
                        <div className="full-content">
                            <div className="row">
                                <p className="font-size-12">This application form is divided into two parts. The first part captures information about you, the applicant. The second part gives important information about mortgages offered by a given mortgage lender, including statutory warnings. In part two your signature is required in relation to your application for a mortgage loan and your consent is sought in relation to various matters.</p>
                                <br/>
                                <h6 className="custom-sub-header">Please ensure that all applicants sign part one and two of the application.</h6>
                            </div>
                        </div>
                        <br />
                        <div className="right-main-header-container" style={{"margin-right":"75px"}}>
                            <div className="right-main-header-top-blue"></div>
                            <div className="right-main-header-bottom-blue">
                                <i>
                                    <p className="right-main-header-txt-white" > PART ONE</p>
                                </i>
                            </div>
                        </div>
                        <br /> 
                        <div className="container">  
                        <div className="header1">
                            <div className="row">
                                <div className="col-lg-12">
                                        <h5 className="header-txt"> INFORMATION ABOUT APPLICANT</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="full-content">
                            <p className="font-size-12">Please indicate the reason for your application</p>
                            <div className="radioBtnDiv">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-2 noPadding">
                                            <label class="container noPadding">First time buyer &nbsp;
                                                <input
                                                    type="radio"
                                                    name='radioType'
                                                    value='fullTimeBuyer'
                                                    //checked = {form.infoAboutApplicant.fullTimeBuyer === "true"}
                                                    onChange ={(e)=>handleInputChange(e,'infoAboutApplicant')}
                                                />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="col-lg-3 noPadding">
                                            <label class="container">Re-Mortgage &nbsp;
                                                <input
                                                    type="radio"
                                                    name='radioType'
                                                    value='reMortgage'
                                                    checked = {form.infoAboutApplicant.reMortgage}
                                                    onClick ={(e)=>handleInputChange(e,'infoAboutApplicant')} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="col-lg-2 noPadding">
                                            <label class="container">Purchase &nbsp;
                                                <input
                                                    type="radio"
                                                    name='radioType'
                                                    value='purchase'
                                                    onChange ={(e)=>handleInputChange(e,'infoAboutApplicant')} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="col-lg-5 noPadding">
                                            <label class="container">Residential Investment Property &nbsp;
                                                <input
                                                    type="radio"
                                                    name='radioType'
                                                    value="residentialInvestmentProperty"
                                                    onChange ={(e)=>handleInputChange(e,'infoAboutApplicant')} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-2 noPadding">
                                            <label class="container noPadding">Let to Buy &nbsp;
                                                <input
                                                    type="radio"
                                                    name='radioType'
                                                    value='letToBuy'
                                                    onChange ={(e)=>handleInputChange(e,'infoAboutApplicant')} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="col-lg-3 noPadding">
                                            <label class="container">Top-up &nbsp;
                                                <input
                                                    type="radio"
                                                    name='radioType'
                                                    value='topUp'
                                                    onChange ={(e)=>handleInputChange(e,'infoAboutApplicant')} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="col-lg-2 noPadding">
                                            <label class="container">Switcher &nbsp;
                                                <input
                                                    type="radio"
                                                    name='radioType'
                                                    value='switcher'
                                                    onChange ={(e)=>handleInputChange(e,'infoAboutApplicant')} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="col-lg-5 noPadding">
                                            <label class="container">Other &nbsp;
                                                <input
                                                    type="radio"
                                                    name='radioType'
                                                    value='other'
                                                    onChange ={(e)=>handleInputChange(e,'infoAboutApplicant')} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="form-group">
                                <p className="font-size-12">If ‘Other’ please specify</p>
                                <textarea
                                    type="text"
                                    rows="3"
                                    className="box-textarea"
                                    name='otherPleaseSpecify'
                                    value={form.infoAboutApplicant.otherPleaseSpecify}
                                    onChange ={(e)=>handleInputChange(e,'infoAboutApplicant')} />
                            </div>
                            <br />
                            <p className="font-size-12">Failure to disclose the above information may result in the withdrawal of a lender appointment.</p>



                            <div classNamec="container">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="displayFlex">
                                            <label className="font-size-12 widthper100">Have you or any of your staff met the customer face-to-face?</label>
                                            <label class="container noPadding font-size-12 width100">Yes &nbsp;
                                                <input
                                                    className="radioInput"
                                                    type="radio"
                                                    name='faceToFaceRadioType'
                                                    value='yes'
                                                    onChange ={(e)=>handleInputChange(e,'infoAboutApplicant')} />
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="container noPadding font-size-12 width100">No &nbsp;
                                            <input
                                                className="radioInput"
                                                type="radio"
                                                name='faceToFaceRadioType'
                                                value={'no'}
                                                onChange ={(e)=>handleInputChange(e,'infoAboutApplicant')} />
                                            <span class="checkmark"></span>
                                        </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <div className="full-content">
                            
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
                                            <label className="box-label font-size-12">Forenames</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='forename'
                                                value={form.personalDetails.applicantOne.forename}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Surname</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='surname'
                                                value={form.personalDetails.applicantOne.surname}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Other/Previous Names</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='otherName'
                                                value={form.personalDetails.applicantOne.otherName}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Date of Birth (dd/mm/yyyy)</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='date'
                                                value={form.personalDetails.applicantOne.date}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Nationality</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='nationality'
                                                value={form.personalDetails.applicantOne.nationality}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div> <br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">PPS Number</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='ppsNumber'
                                                value={form.personalDetails.applicantOne.ppsNumber}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label width100 font-size-12">Marital Status</label>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='married'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />married
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='remarried'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />remarried
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='single'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />single
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='separated/devorced'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />separated/devorced
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='widow/er'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />widow/er
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='co HABITANT'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />co HABITANT
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5 borderRight">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='other'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />other
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div><br/>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">No. of Children</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='noOfChildren'
                                                value={form.personalDetails.applicantOne.noOfChildren}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Children’s Ages</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='childrenAges'
                                                value={form.personalDetails.applicantOne.childrenAges}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <br />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="header-container">
                                            <h1 className="main-header">APPLICANT TWO</h1>
                                        </div>
                                        <div className="form-group">
                                                <label class="container left-pad-5 font-size-12" 
                                                       style={{marginTop:'-15px',marginBottom:'-3px'}}>
                                                        Guarantor &nbsp;
                                                    <input
                                                        type="radio"
                                                        className="radioBtn"
                                                        name='Guarantor'
                                                        value='Guarantor'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','leftCorrespondingCurrentAddress')}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        <div className="form-group">
                                            <br/>
                                            <label className="box-label font-size-12">Forenames</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='forename'
                                                value={form.personalDetails.applicantOne.forename}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Surname</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='surname'
                                                value={form.personalDetails.applicantOne.surname}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Other/Previous Names</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='otherName'
                                                value={form.personalDetails.applicantOne.otherName}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Date of Birth (dd/mm/yyyy)</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='date'
                                                value={form.personalDetails.applicantOne.date}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div><br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Nationality</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='nationality'
                                                value={form.personalDetails.applicantOne.nationality}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">PPS Number</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='ppsNumber'
                                                value={form.personalDetails.applicantOne.ppsNumber}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label width100 font-size-12">Marital Status</label>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='married'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />married
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='remarried'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />remarried
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='single'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />single
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='separated/devorced'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />separated/devorced
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='widow/er'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />widow/er
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='co HABITANT'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />co HABITANT
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-size-5 borderRight">
                                                    <input
                                                        className="widthheight"
                                                        type="radio"
                                                        name='maritalStatus'
                                                        value='other'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                                    />
                                                    <br />other
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div><br/>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">No. of Children</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='noOfChildren'
                                                value={form.personalDetails.applicantOne.noOfChildren}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Children’s Ages</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='childrenAges'
                                                value={form.personalDetails.applicantOne.childrenAges}
                                                onChange={(e)=>handleInputChange(e,'personalDetails','applicantOne')}
                                            />
                                        </div>
                                        <br />
                                    </div>
                                </div>

                                <div className="currentAddressDiv">
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
                                   

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="box-label width100 font-size-12">Are You :</label>
                                                <div className="radio-area">
                                                    <label class="container noPadding">
                                                        <input
                                                            type="radio"
                                                            className="radioBtn widthheight"
                                                            name='areYouRadioType'
                                                            value='owner'
                                                            onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                        />
                                                        <br />OWNER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding">
                                                        <input
                                                            type="radio"
                                                            className="radioBtn widthheight"
                                                            name='areYouRadioType'
                                                            value='tenant'
                                                            onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                        />
                                                        <br />TENANT
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding noborderRight">
                                                        <input
                                                            type="radio"
                                                            className="radioBtn widthheight"
                                                            name='areYouRadioType'
                                                            value='WITH PARENTS/RELATIVES OR FRIENDS'
                                                            onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                        />
                                                        <br />WITH PARENTS/RELATIVES OR FRIENDS
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">Rent &euro;</label>
                                                    <input
                                                        style={{ width: 66 + 'px' }}
                                                        type="text"
                                                        className="box-input custom-width-input font-size-12 widthheight"
                                                        name='rent'
                                                        value={form.personalDetails.leftSideCurrentAddress.rent}
                                                        onChange={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                    />
                                                    pm
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Address Line 1</label>
                                                <input
                                                    type="text"
                                                    className="box-input"
                                                    name='addressLine1'
                                                    value={form.personalDetails.leftSideCurrentAddress.addressLine1}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                />

                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Address Line 2</label>
                                                <input
                                                    type="text"
                                                    className="box-input"
                                                    name='addressLine2'
                                                    value={form.personalDetails.leftSideCurrentAddress.addressLine2}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Address Line 3</label>
                                                <input
                                                    type="text"
                                                    className="box-input"
                                                    name='addressLine3'
                                                    value={form.personalDetails.leftSideCurrentAddress.addressLine3}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">County</label>
                                                <input
                                                    type="text"
                                                    className="box-input"
                                                    name='county'
                                                    value={form.personalDetails.leftSideCurrentAddress.county}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Country</label>
                                                <input
                                                    type="text"
                                                    className="box-input"
                                                    name='country'
                                                    value={form.personalDetails.leftSideCurrentAddress.country}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12" >Time at address</label>
                                                <input
                                                    style={{ width: 66 + 'px' }}
                                                    type="text"
                                                    className="box-input"
                                                    name='time'
                                                    value={form.personalDetails.leftSideCurrentAddress.time}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                />
                                                <label className="box-label font-size-12">Years</label>
                                                <input
                                                    style={{ width: 66 + 'px' }}
                                                    type="text"
                                                    className="box-input"
                                                    name='month'
                                                    value={form.personalDetails.leftSideCurrentAddress.month}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                />
                                                <label className="box-label font-size-12">Month</label>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                        <div className="form-group">
                                                <label className="box-label width100 font-size-12">Are You :</label>
                                                <div className="radio-area">
                                                    <label class="container noPadding">
                                                        <input
                                                            type="radio"
                                                            className="radioBtn widthheight"
                                                            name='areYouRadioType'
                                                            value='owner'
                                                            onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                        />
                                                        <br />OWNER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding">
                                                        <input
                                                            type="radio"
                                                            className="radioBtn widthheight"
                                                            name='areYouRadioType'
                                                            value='tenant'
                                                            onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                        />
                                                        <br />TENANT
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding noborderRight">
                                                        <input
                                                            type="radio"
                                                            className="radioBtn widthheight"
                                                            name='areYouRadioType'
                                                            value='WITH PARENTS/RELATIVES OR FRIENDS'
                                                            onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                        />
                                                        <br />WITH PARENTS/RELATIVES OR FRIENDS
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">Rent &euro;</label>
                                                    <input
                                                        style={{ width: 66 + 'px' }}
                                                        type="text"
                                                        className="box-input custom-width-input font-size-12 widthheight"
                                                        name='rent'
                                                        value={form.personalDetails.leftSideCurrentAddress.rent}
                                                        onChange={(e)=>handleInputChange(e,'personalDetails','leftSideCurrentAddress')}
                                                    />
                                                    pm
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Address Line 1</label>
                                                <input
                                                    type="text"
                                                    className="box-input "
                                                    name='addressLine1'
                                                    value={form.personalDetails.RightSideCurrentAddress.addressLine1}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','RightSideCurrentAddress')}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Address Line 2</label>
                                                <input
                                                    type="text"
                                                    className="box-input "
                                                    name='addressLine2'
                                                    value={form.personalDetails.RightSideCurrentAddress.addressLine2}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','RightSideCurrentAddress')}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Address Line 3</label>
                                                <input
                                                    type="text"
                                                    className="box-input "
                                                    name='addressLine3'
                                                    value={form.personalDetails.RightSideCurrentAddress.addressLine3}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','RightSideCurrentAddress')}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">County</label>
                                                <input
                                                    type="text"
                                                    className="box-input "
                                                    name='county'
                                                    value={form.personalDetails.RightSideCurrentAddress.county}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','RightSideCurrentAddress')}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Country</label>
                                                <input
                                                    type="text"
                                                    className="box-input "
                                                    name='country'
                                                    value={form.personalDetails.RightSideCurrentAddress.country}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','RightSideCurrentAddress')}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Time at address</label>
                                                <input
                                                    style={{ width: 66 + 'px' }}
                                                    type="text"
                                                    className="box-input "
                                                    name='time'
                                                    value={form.personalDetails.RightSideCurrentAddress.time}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','RightSideCurrentAddress')}
                                                />
                                                <label className="box-label font-size-12">Years</label>
                                                <input
                                                    style={{ width: 66 + 'px' }}
                                                    type="text"
                                                    className="box-input "
                                                    name='year'
                                                    value={form.personalDetails.RightSideCurrentAddress.year}
                                                    onChange ={(e)=>handleInputChange(e,'personalDetails','RightSideCurrentAddress')}
                                                />
                                                <label className="box-label font-size-12">Month</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                               
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
                                 

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label class="container left-pad-5 font-size-12">Same as above &nbsp;
                                                    <input
                                                        type="radio"
                                                        className="radioBtn"
                                                        name='sameAsAbove'
                                                        value='Same as Above'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','leftCorrespondingCurrentAddress')}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            { form.personalDetails.leftSideCorrespondingAddress.sameAsAbove = "Same as Above" ?
                                                (
                                                    <>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Address Line 1</label>
                                                            <input type="text" className="box-input" value={form.personalDetails.leftSideCurrentAddress.addressLine1}/>
                                                        </div>
                                                        <div  className="form-group">
                                                            <label className="box-label font-size-12">Address Line 2</label>
                                                            <input type="text" className="box-input" value={form.personalDetails.leftSideCurrentAddress.addressLine2}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Address Line 3</label>
                                                            <input type="text" className="box-input" value={form.personalDetails.leftSideCurrentAddress.addressLine3}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">County</label>
                                                            <input type="text" className="box-input" value={form.personalDetails.leftSideCurrentAddress.county} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Country</label>
                                                            <input type="text" className="box-input" value={form.personalDetails.leftSideCurrentAddress.country}/>
                                                        </div>
                                                    </>
                                                ) :
                                                (
                                                    <>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Address Line 1</label>
                                                            <input type="text"
                                                                   className="box-input"
                                                                   value={form.personalDetails.leftSideCorrespondingAddress.addressLine1}
                                                                   name='addressLine1'
                                                                   onChange = {(e)=>handleInputChange(e,'personalDetails','leftSideCorrespondingAddress')}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Address Line 2</label>
                                                            <input type="text"
                                                                   className="box-input"
                                                                   value={form.personalDetails.leftSideCorrespondingAddress.addressLine2}
                                                                   name='addressLine2'
                                                                   onChange = {(e)=>handleInputChange(e,'personalDetails','leftSideCorrespondingAddress')}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Address Line 3</label>
                                                            <input type="text"
                                                                   className="box-input"
                                                                   value={form.personalDetails.leftSideCorrespondingAddress.addressLine3}
                                                                   name='addressLine3'
                                                                   onChange = {(e)=>handleInputChange(e,'personalDetails','leftSideCorrespondingAddress')}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">County</label>
                                                            <input type="text"
                                                                   className="box-input"
                                                                   value={form.personalDetails.leftSideCorrespondingAddress.county}
                                                                   name='county'
                                                                   onChange = {(e)=>handleInputChange(e,'personalDetails','leftSideCorrespondingAddress')}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Country</label>
                                                            <input type="text"
                                                                   className="box-input"
                                                                   value={form.personalDetails.leftSideCorrespondingAddress.country}
                                                                   name='country'
                                                                   onChange = {(e)=>handleInputChange(e,'personalDetails','leftSideCorrespondingAddress')}
                                                            />
                                                        </div>
                                                    </>
                                                )
                                            }
                                            <br />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label class="container left-pad-5 font-size-12">Same as above &nbsp;
                                                    <input
                                                        type="radio"
                                                        className="radioBtn"
                                                        name='sameAsAbove'
                                                        value='Same as Above'
                                                        onChange ={(e)=>handleInputChange(e,'personalDetails','RightCorrespondingCurrentAddress')}
                                                    />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            { form.personalDetails.RightSideCorrespondingAddress.sameAsAbove = "Same as Above" ?
                                                (
                                                    <>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Address Line 1</label>
                                                            <input type="text" className="box-input" value={form.personalDetails.RightSideCorrespondingAddress.addressLine1}/>
                                                        </div>
                                                        <div  className="form-group">
                                                            <label className="box-label font-size-12">Address Line 2</label>
                                                            <input type="text" className="box-input" value={form.personalDetails.RightSideCorrespondingAddress.addressLine2}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Address Line 3</label>
                                                            <input type="text" className="box-input" value={form.personalDetails.RightSideCorrespondingAddress.addressLine3}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">County</label>
                                                            <input type="text" className="box-input" value={form.personalDetails.RightSideCorrespondingAddress.county} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Country</label>
                                                            <input type="text" className="box-input" value={form.personalDetails.RightSideCorrespondingAddress.country}/>
                                                        </div>
                                                    </>
                                                ) :
                                                (
                                                    <>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Address Line 1</label>
                                                            <input type="text"
                                                                   className="box-input"
                                                                   value={form.personalDetails.RightSideCorrespondingAddress.addressLine1}
                                                                   name='addressLine1'
                                                                   onChange = {(e)=>handleInputChange(e,'personalDetails','RightSideCorrespondingAddress')}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Address Line 2</label>
                                                            <input type="text"
                                                                   className="box-input"
                                                                   value={form.personalDetails.RightSideCorrespondingAddress.addressLine2}
                                                                   name='addressLine2'
                                                                   onChange = {(e)=>handleInputChange(e,'personalDetails','RightSideCorrespondingAddress')}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Address Line 3</label>
                                                            <input type="text"
                                                                   className="box-input"
                                                                   value={form.personalDetails.RightSideCorrespondingAddress.addressLine3}
                                                                   name='addressLine3'
                                                                   onChange = {(e)=>handleInputChange(e,'personalDetails','RightSideCorrespondingAddress')}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">County</label>
                                                            <input type="text"
                                                                   className="box-input"
                                                                   value={form.personalDetails.RightSideCorrespondingAddress.county}
                                                                   name='county'
                                                                   onChange = {(e)=>handleInputChange(e,'personalDetails','RightSideCorrespondingAddress')}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="box-label font-size-12">Country</label>
                                                            <input type="text"
                                                                   className="box-input"
                                                                   value={form.personalDetails.RightSideCorrespondingAddress.country}
                                                                   name='country'
                                                                   onChange = {(e)=>handleInputChange(e,'personalDetails','RightSideCorrespondingAddress')}
                                                            />
                                                        </div>
                                                    </>
                                                )
                                            }
                                            <br />
                                        </div>
                                    </div>
                                </div>
                               
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
                                            <label className="box-label font-size-12">Address Line 1</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='addressLine1'
                                                value={form.personalDetails.leftSidePreviousAddress.addressLine1}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','leftSidePreviousAddress')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='addressLine2'
                                                value={form.personalDetails.leftSidePreviousAddress.addressLine2}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','leftSidePreviousAddress')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='addressLine3'
                                                value={form.personalDetails.leftSidePreviousAddress.addressLine3}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','leftSidePreviousAddress')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='county'
                                                value={form.personalDetails.leftSidePreviousAddress.county}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','leftSidePreviousAddress')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Country</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='country'
                                                value={form.personalDetails.leftSidePreviousAddress.country}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','leftSidePreviousAddress')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Time at address</label>
                                            <input
                                                style={{ width: 66 + 'px' }}
                                                type="text"
                                                className="box-input "
                                                name='time'
                                                value={form.personalDetails.leftSidePreviousAddress.time}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','leftSidePreviousAddress')}
                                            />

                                            <label className="box-label font-size-12">Years</label>
                                            <input
                                                style={{ width: 66 + 'px' }}
                                                type="text"
                                                className="box-input "
                                                name='year'
                                                value={form.personalDetails.leftSidePreviousAddress.year}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','leftSidePreviousAddress')}
                                            />
                                            <label className="box-label font-size-12">Month</label>
                                        </div>
                                        <p className="txtStyle font-size-10">Address description as per IIB HL from required for DOE House Price Survey</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='addressLine1'
                                                value={form.personalDetails.RightSidePreviousAddress.addressLine1}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','RightSidePreviousAddress')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='addressLine2'
                                                value={form.personalDetails.RightSidePreviousAddress.addressLine2}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','RightSidePreviousAddress')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='addressLine3'
                                                value={form.personalDetails.RightSidePreviousAddress.addressLine3}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','RightSidePreviousAddress')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='county'
                                                value={form.personalDetails.RightSidePreviousAddress.county}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','RightSidePreviousAddress')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Country</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='country'
                                                value={form.personalDetails.RightSidePreviousAddress.country}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','RightSidePreviousAddress')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Time at address</label>
                                            <input
                                                style={{ width: 66 + 'px' }}
                                                type="text"
                                                className="box-input "
                                                name='time'
                                                value={form.personalDetails.RightSidePreviousAddress.time}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','RightSidePreviousAddress')}
                                            />

                                            <label className="box-label font-size-12">Years</label>
                                            <input
                                                style={{ width: 66 + 'px' }}
                                                type="text"
                                                className="box-input "
                                                name='year'
                                                value={form.personalDetails.RightSidePreviousAddress.year}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','RightSidePreviousAddress')}
                                            />
                                            <label className="box-label font-size-12">Month</label>
                                        </div>
                                    </div>
                                </div>
                               <br/>
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
                                            <label className="box-label font-size-12">Home Telephone Number</label>
                                            <input
                                                type="text"
                                                className="box-input"
                                                name='homeNumber'
                                                value={form.personalDetails.leftSideContactDetail.homeNumber}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideContactDetail')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Work Telephone Number</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='workNumber'
                                                value={form.personalDetails.leftSideContactDetail.workNumber}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideContactDetail')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Mobile Telephone Number</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='mobileNumber'
                                                value={form.personalDetails.leftSideContactDetail.mobileNumber}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideContactDetail')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">E-mail</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='email'
                                                value={form.personalDetails.leftSideContactDetail.email}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','leftSideContactDetail')}
                                            />
                                        </div>
                                        <br />
                                    </div>
                                    <div className="col-lg-6">
                                        <br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Home Telephone Number</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='homeNumber'
                                                value={form.personalDetails.RightSideContactDetail.homeNumber}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','RightSideContactDetail')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Work Telephone Number</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='workNumber'
                                                value={form.personalDetails.RightSideContactDetail.workNumber}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','RightSideContactDetail')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Mobile Telephone Number</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='mobileNumber'
                                                value={form.personalDetails.RightSideContactDetail.mobileNumber}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','RightSideContactDetail')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">E-mail</label>
                                            <input
                                                type="text"
                                                className="box-input "
                                                name='email'
                                                value={form.personalDetails.RightSideContactDetail.email}
                                                onChange ={(e)=>handleInputChange(e,'personalDetails','RightSideContactDetail')}
                                            />
                                        </div>
                                        <br />
                                    </div>
                                </div>
                               
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
                                       
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="header-container">
                                            <h1 className="main-header">APPLICANT TWO</h1>
                                        </div>
                                       
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
                        
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Gross basic wage/salary pa &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />REGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Overtime per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />REGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Bonuses per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />REGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Commissions per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />REGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Other income per annum (non rental) &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />REGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="form-group">
                                            <label className="box-label font-size-12">Lodger income per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div><br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Residential Investment income per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Total gross income per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Total joint financial income pa &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Total NET income per mont &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div><br/>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Nature of Income </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Employment Status </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />EMPLOYED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />EMPLOYED & SELF EMPLOYED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />HOMEMAKER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />OTHER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />RETIRED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />SELF EMPLOYED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Gross basic wage/salary pa &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />REGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Overtime per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />REGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Bonuses per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />REGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Commissions per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />REGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Other income per annum (non rental) &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />GUARANTEED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />REGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />IRREGULAR
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="form-group">
                                            <label className="box-label font-size-12">Lodger income per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div><br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Residential Investment income per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Total gross income per annum &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Total joint financial income pa &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Total NET income per mont &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div><br/>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Nature of Income </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Employment Status </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />EMPLOYED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />EMPLOYED & SELF EMPLOYED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />HOMEMAKER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />OTHER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />RETIRED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding paddingBorder">
                                                        <input className="widthheight" type="radio" name="radio" /><br />SELF EMPLOYED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <h5 className="header-txt">EMPLOYMENT DETAILS</h5>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5 className="header-txt"> EMPLOYMENT DETAILS </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="row">
                                    <div className="col-lg-8">
                                        <label class="container font-size-12">
                                            Please choose a category for each applicant from the attached list – Note 1 (Section G)
                                        </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="appdiv">
                                            <label className="font-size-12">App1</label>
                                            <label className="font-size-12">App2</label>
                                        </div>
                                        <div className="inputDiv">
                                            <input type="text" className="box-input" />
                                            <input type="text" className="box-input" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-8">
                                        <label class="container font-size-12">
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
                                            <label className="box-label font-size-12">Occupation </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">

                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input className="widthheight" type="radio" name="radio" /><br />OTHER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input className="widthheight" type="radio" name="radio" /><br />RETIRED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding">
                                                        <input className="widthheight" type="radio" name="radio" /><br />SELF EMPLOYED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Employer's Name </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1 </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2 </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3 </label>
                                            <input type="text" className="box-input" />
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">County </label>
                                                    <input type="text" className="box-input width100" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">Country </label>
                                                    <input type="text" className="box-input width100" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Telephone Number </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Nature of Business </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Length of Service with Employer</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Years</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Month</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Occupation </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="float-right">
                                            <div className="form-group">

                                                <div className="radio-area">
                                                    <label class="container  noPadding padding3border">
                                                        <input className="widthheight" type="radio" name="radio" /><br />OTHER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container  noPadding padding3border">
                                                        <input className="widthheight" type="radio" name="radio" /><br />RETIRED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container  noPadding">
                                                        <input className="widthheight" type="radio" name="radio" /><br />SELF EMPLOYED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Employer's Name </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1 </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2 </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3 </label>
                                            <input type="text" className="box-input" />
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">County </label>
                                                    <input type="text" className="box-input width100" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">Country </label>
                                                    <input type="text" className="box-input width100" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Telephone Number </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Nature of Business </label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Length of Service with Employer</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Years</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Month</label>
                                        </div>
                                    </div>
                                </div>

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
                                            <label className="box-label font-size-12">Employer’s Name</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County</label>
                                            <input type="text" className="box-input" style={{ width: "70px" }} />
                                            <label className="box-label font-size-12">Country</label>
                                            <input type="text" className="box-input" />
                                        </div><br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Occupation</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Length of Service with employer</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Years</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Month</label>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Employer’s Name</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County</label>
                                            <input type="text" className="box-input" style={{ width: "70px" }} />
                                            <label className="box-label font-size-12">Country</label>
                                            <input type="text" className="box-input" />
                                        </div><br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Occupation</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Length of Service with employer</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Years</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Month</label>
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
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="header-container">
                                            <h1 className="main-header">APPLICANT TWO</h1>
                                        </div>  
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
                                       
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Name of firm/company</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County</label>
                                            <input type="text" className="box-input" style={{ width: "70px" }} />
                                            <label className="box-label font-size-12">Country</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Nature of Business</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">How long has the business been established</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Time Involved</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Average profit over three years &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Percentage shareholding/partnership interest</label>
                                            <input type="text" className="box-input" /> %
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Name of accountant</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Name of accounting firm</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County</label>
                                            <input type="text" className="box-input" style={{ width: "70px" }} />
                                            <label className="box-label font-size-12">Country</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Telephone number</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Fax Number</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">3 years audited accounts available</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Length of Service with employer</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Years</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Month</label>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Tax affairs up to date </label>
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
                                    
                                        <div className="form-group">
                                       
                                            <label className="box-label font-size-12">Name of firm/company</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County</label>
                                            <input type="text" className="box-input" style={{ width: "70px" }} />
                                            <label className="box-label font-size-12">Country</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Nature of Business</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">How long has the business been established</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Time Involved</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Average profit over three years &euro;</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Percentage shareholding/partnership interest</label>
                                            <input type="text" className="box-input" /> %
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Name of accountant</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Name of accounting firm</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County</label>
                                            <input type="text" className="box-input" style={{ width: "70px" }} />
                                            <label className="box-label font-size-12">Country</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Telephone number</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Fax Number</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">3 years audited accounts available</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Length of Service with employer</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Years</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Month</label>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Tax affairs up to date </label>
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
                                            <label className="box-label font-size-12">Current Bank/Building Society</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12" >County</label>
                                            <input type="text" className="box-input" style={{ width: "70px" }} />
                                            <label className="box-label font-size-12">Country</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Account Type</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Account Number</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Sort Code</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">I have held this account for</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Years</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Month</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Current Bank/Building Society</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12" >County</label>
                                            <input type="text" className="box-input" style={{ width: "70px" }} />
                                            <label className="box-label font-size-12">Country</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Account Type</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Account Number</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Sort Code</label>
                                            <input type="text" className="box-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12" >I have held this account for</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Years</label>
                                            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
                                            <label className="box-label font-size-12">Month</label>
                                        </div>
                                    </div>
                                </div>
                                
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
                            
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Inception Date</label>
                                            <input type="text" className="box-input width100" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Mortgage Term</label>
                                            <input type="text" className="box-input width100" />
                                        </div><br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Est. Sale Price &euro;</label>
                                            <input type="text" className="box-input width100" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Are you selling this property </label>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border">
                                                    <input className="widthheight" type="radio" name="radio" /><br />yes
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding">
                                                    <input className="widthheight" type="radio" name="radio" /><br />no
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
                                        </div><br/>
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
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />ANNUITY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />ENDOWMENT
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />INTEREST ONLY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />OTHER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding">
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
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />DISCOUNT VARIABLE
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />FIXED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />PENSION
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />INTEREST ONLY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding">
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
                                        </div><br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Est. Sale Price &euro;</label>
                                            <input type="text" className="box-input width100" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Are you selling this property </label>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border">
                                                    <input className="widthheight" type="radio" name="radio" /><br />yes
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border">
                                                    <input className="widthheight" type="radio" name="radio" /><br />no
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
                                        </div><br/>
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
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />ANNUITY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />ENDOWMENT
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />INTEREST ONLY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />OTHER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding">
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
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />DISCOUNT VARIABLE
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />FIXED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />PENSION
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />INTEREST ONLY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding">
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
                                        </div><br />
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Est. Sale Price &euro;</label>
                                            <input type="text" className="box-input width100" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Are you selling this property </label>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border">
                                                    <input className="widthheight" type="radio" name="radio" /><br />yes
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding">
                                                    <input className="widthheight" type="radio" name="radio" /><br />no
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
                                        </div><br/>
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
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />ANNUITY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />ENDOWMENT
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />INTEREST ONLY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />OTHER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding">
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
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />DISCOUNT VARIABLE
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />FIXED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />PENSION
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input type="radio" name="radio" /><br />INTEREST ONLY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding">
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
                                                <label className="box-label font-size-12">Refinance? </label>
                                                <div className="multiRadio">
                                                    <div className="radio-area">
                                                        <label class="container">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="radio-area">
                                                        <label class="container noBorder">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="multiRadio">
                                                    <div className="radio-area">
                                                        <label class="container">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="radio-area">
                                                        <label class="container noBorder">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="multiRadio">
                                                    <div className="radio-area">
                                                        <label class="container">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="radio-area">
                                                        <label class="container noBorder">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                            No
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="multiRadio">
                                                    <div className="radio-area">
                                                        <label class="container">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                            Yes
                                                        </label>
                                                    </div>
                                                    <div className="radio-area">
                                                        <label class="container noBorder">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                            No
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
                                                        <label class="container noBorder">
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
                                                        <label class="container noBorder">
                                                            <input type="radio" name="radio" /><br />Yes
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <div className="radio-area">
                                                        <label class="container noBorder">
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
                                                        <label class="container noBorder">
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
                                                        <label class="container noBorder">
                                                            <input type="radio" name="radio" /><br />Yes
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <div className="radio-area">
                                                        <label class="container noBorder">
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
                                                        <label class="container noBorder">
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
                                                        <label class="container noBorder">
                                                            <input type="radio" name="radio" /><br />Yes
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <div className="radio-area">
                                                        <label class="container noBorder">
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


                                
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                        {/* <i><p className="main-header-txt-white"><span>PART TWO</span> Section D – Mortgage Details</p></i> */}
                                        <br />
                                        <div className="main-header-container">
                                            <div className="main-header-top-white"></div>
                                            <div className="main-header-bottom-white">
                                                <i><p className="main-header-txt-white"><span>PART TWO</span> Section D – Mortgage Details</p></i>
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                    </div>
                                </div>
                              
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
                            


                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Purchase price/cost of Building </label>
                                            <input type="text" className="box-input width50" />
                                        </div> <br/>
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
                                        </div> <br/>
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
                                


                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Remortgage amount </label>
                                            <input type="text" className="box-input width50" />
                                        </div><br/>
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
                                   
                                    <div className="col-lg-6">
                                        <div className="multiRadio displayFlex">
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border">
                                                    <input className="widthheight" type="radio" name="radio" /><br />TRACKER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border">
                                                    <input className="widthheight" type="radio" name="radio" /><br />DISCOUNT VARIABLE
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border">
                                                    <input className="widthheight" type="radio" name="radio" /><br />FIXED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border">
                                                    <input className="widthheight" type="radio" name="radio" /><br />PENSION
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border">
                                                    <input className="widthheight" type="radio" name="radio" /><br />INTEREST ONLY
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border">
                                                    <input className="widthheight" type="radio" name="radio" /><br />OTHER
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
                                            <div className="multiRadio displayFlex" style={{"margin-left":"122px"}}>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input className="widthheight" type="radio" name="radio" /><br />ENDOWMENT MORTGAGE
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input className="widthheight" type="radio" name="radio" /><br />INTEREST ONLY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input className="widthheight" type="radio" name="radio" /><br />OTHER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input className="widthheight" type="radio" name="radio" /><br />PENSION BACKED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border">
                                                        <input className="widthheight" type="radio" name="radio" /><br />REPAYMENT/ANNUITY
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
                               


                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Solicitor Name </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                                <br/>
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

                                {/* <br />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                        <i><p className="right-para-white">Section E – Property Details</p></i>
                                        </div>
                                    </div>
                                </div> */}
                                <br/>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="right-main-header-container">
                                                <div className="right-main-header-top"></div>
                                                <div className="right-main-header-bottom">
                                                    <i>
                                                        <p className="right-para"> Section E – Property Details</p>
                                                    </i>
                                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                                <br />
                                
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt"> PROPERTY  </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

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
                                        </div><br/>
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
                                                        <label class="container noPadding padding3border">
                                                            <input className="widthheight" type="radio" name="radio" /><br />ENDOWMENT MORTGAGE
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <div className="radio-area">
                                                        <label class="container noPadding padding3border">
                                                            <input className="widthheight" type="radio" name="radio" /><br />INTEREST ONLY
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <div className="radio-area">
                                                        <label class="container noPadding padding3border">
                                                            <input className="widthheight" type="radio" name="radio" /><br />OTHER
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <div className="radio-area">
                                                        <label class="container noPadding padding3border">
                                                            <input className="widthheight" type="radio" name="radio" /><br />PENSION BACKED
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                    <div className="radio-area">
                                                        <label class="container noPadding no">
                                                            <input className="widthheight" type="radio" name="radio" /><br />REPAYMENT/ANNUITY
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
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio" /><br />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div><br/>
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
                              

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Living rooms   </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Bedrooms  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Kitchens  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Dining rooms  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Bedrooms  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Kitchens  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt"> IF BUYING OR BUILDING A NEW PROPERTY  </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Homebuilders Bond </label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio" /><br />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Part of a development </label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio" /><br />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Premier Guarantee </label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio" /><br />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Is fixed price contract in place </label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio" /><br />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-5">
                                                <label className="font-size-12">
                                                    Tenure of property
                                                </label>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">Freehold </label>
                                                    <div className="multiRadio">
                                                        <div className="radio-area radio-area-marginTop">
                                                            <label class="container no-border-Right">
                                                                <input type="radio" name="radio" /><br />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">Leasehold </label>
                                                    <div className="multiRadio">
                                                        <div className="radio-area radio-area-marginTop">
                                                            <label class="container no-border-Right">
                                                                <input type="radio" name="radio" /><br />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-5">
                                                <label className="font-size-12">
                                                    Vacant possession
                                                </label>
                                            </div>
                                            <div className="col-lg-">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">Yes </label>
                                                    <div className="multiRadio">
                                                        <div className="radio-area radio-area-marginTop">
                                                            <label class="container no-border-Right">
                                                                <input type="radio" name="radio" /><br />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">No </label>
                                                    <div className="multiRadio">
                                                        <div className="radio-area radio-area-marginTop">
                                                            <label class="container no-border-Right">
                                                                <input type="radio" name="radio" /><br />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">HB47/architects certificate available </label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio" /><br />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">Direct labour construction </label>
                                                    <div className="multiRadio">
                                                        <div className="radio-area radio-area-marginTop">
                                                            <label class="container no-border-Right">
                                                                <input type="radio" name="radio" /><br />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">Employee Labour  </label>
                                                    <div className="multiRadio">
                                                        <div className="radio-area radio-area-marginTop">
                                                            <label class="container no-border-Right">
                                                                <input type="radio" name="radio" /><br />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Stage payment required   </label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio" /><br />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Number of payments   </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Architect’s level of supervision   </label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio" /><br />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Number of years remaining on lease   </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Age of property   </label>
                                            <input type="text" className="box-input width50" />
                                        </div>

                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Type of construction   </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label  className="font-size-12">Private Owner Occupation Only</label>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="displayFlex">
                                                    <div className="form-group">
                                                        <label className="box-label font-size-12">Yes   </label>
                                                        <div className="multiRadio">
                                                            <div className="radio-area radio-area-marginTop">
                                                                <label class="container no-border-Right">
                                                                    <input type="radio" name="radio" /><br />
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="box-label font-size-12">No   </label>
                                                        <div className="multiRadio">
                                                            <div className="radio-area radio-area-marginTop">
                                                                <label class="container no-border-Right">
                                                                    <input type="radio" name="radio" /><br />
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12">Purpose  </label>
                                                    <input type="text" className="box-input width50" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">PEOPLE OVER 18 LIVING AT THE ADDRESS  </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              


                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className="font-size-12 width100">Full Name  </label>
                                        <textarea className="box-textarea widthper100" row="3"></textarea>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="font-size-12 width100"> Date of Birth     </label>
                                        <textarea className="box-textarea widthper100" row="3"></textarea>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="font-size-12 width100">Relationship with applicant  </label>
                                        <textarea className="box-textarea widthper100" row="3"></textarea>
                                    </div>
                                </div>


                              
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">SELLING AGENT DETAILS </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            


                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">First Name   </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Last Name  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Telephone Number  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                              
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">VALUER DETAILS </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">First Name  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Last Name  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Telephone Number </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Company Name  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2 </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3 </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">PIBA To Pay</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio" /><br />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">CONTACT FOR ACCESS FOR VALUATION</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                


                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">First Name   </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Last Name  </label>
                                            <input type="text" className="box-input width50" />
                                        </div> <br/>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Telephone Number  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2  </label>
                                            <input type="text" className="box-input width50" />
                                        </div> <br/>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>



                                <br />
                                <div className="main-header-container">
                                    <div className="main-header-top-white"></div>
                                    <div className="main-header-bottom-white">
                                        <i><p className="main-header-txt-white">Section E – Property Details</p></i>
                                    </div>
                                </div>
                                <br />



                               
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">ARCHITECT DETAILS</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Name  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Telephone Number  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">BUILDER DETAILS</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Name  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Telephone Number  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>


                                <br />
                                <div className="main-header-container">
                                    <div className="main-header-top-white"></div>
                                    <div className="main-header-bottom-white">
                                        <i><p className="main-header-txt-white">Section F – Alternative Lending</p></i>
                                    </div>
                                </div>
                                <br />

                               
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">PLEASE COMPLETE THIS SECTION IF ALTERNATIVE LENDING IS SOUGHT</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="row">
                                    <div className="col-lg-8">
                                        <label className="font-size-12">Have you had a mortgage on any other property other than previously detailed? </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="displayFlex">
                                            <div className="form-group width100">
                                                <label className="box-label font-size-12">Yes</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">No</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
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
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">If yes, please give Details  </label>
                                            <textarea type="text" className="box-textarea " />
                                        </div>
                                    </div>
                                </div>

                               
                                <div className="row">
                                    <div className="col-lg-8">
                                        <label className="font-size-12">Have there ever been any missed Repayments or revoked Credit Cards or Judgements?  </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="displayFlex">
                                            <div className="form-group width100">
                                                <label className="box-label font-size-12">Yes</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">No</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
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
                                    <div className="col-lg-12">
                                        <label className="font-size-12">
                                            If yes, please specify by completing the following:
                                        </label>  
                                        <div className="form-group">
                                            <label className="box-label font-size-12">1. Current Mortgage - Highest Number of Installment Arrears in last 12 months</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">2. Current Mortgage - Highest Number of Installment Arrears in last 6 months</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">3. Other Facilities - Highest Number of Other Arrears in last 12 months</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                        
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label className="font-size-12">
                                            Have any judgement proceedings relating to debt ever been brought against you or any Judgments made against you?
                                        </label>
                                        <div className="displayFlex">
                                            <div className="form-group width100">
                                                <label className="box-label font-size-12">Yes</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">No</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><br/>
                                        <label className="font-size-12">
                                            If yes, please specify by completing the following:
                                        </label>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">1. Judgments - Total Value Judgments Outstanding in last 24 months</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-8">
                                        <label className="font-size-12">Have you ever had a mortgage application declined on this or any other property?</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="displayFlex">
                                            <div className="form-group width100">
                                                <label className="box-label font-size-12">Yes</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">No</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
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
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">If yes, please give Details  </label>
                                            <textarea type="text" className="box-textarea " />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <label className="font-size-12">Are there any matters which should be brought to the Lenders Attention?</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="displayFlex">
                                            <div className="form-group width100">
                                                <label className="box-label font-size-12">Yes</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">No</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
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
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">If yes, please give Details  </label>
                                            <textarea type="text" className="box-textarea " />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="main-header-container">
                                    <div className="main-header-top-white"></div>
                                    <div className="main-header-bottom-white">
                                        <i><p className="main-header-txt-white">Section G – Declarations</p></i>
                                    </div>
                                </div>
                                <br />

                               
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">COMMENTS & DECLARATIONS</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="row">
                                    <div className="col-lg-8">
                                        <label className="font-size-12">Declarations have been signed</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="displayFlex">
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Yes</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">No</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
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
                                    <div className="col-lg-8">
                                        <label className="font-size-12">Customer has consented to Consumer Credit Act</label>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="displayFlex">
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Yes</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">No</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
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
                                    <div className="col-lg-8">
                                        <label className="font-size-12">Customer has consented to Data Protection Act </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="displayFlex">
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Yes</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">No</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
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
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">CONSENTS – (CONSENT(S) BY APPLICANTS TO BROKER</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="displayFlex">
                                            <label className="font-size-12 width100">At Home</label>
                                            <div className="form-group">
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="displayFlex">
                                            <label className="font-size-12">Leave message at home</label>
                                            <div className="form-group">
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><br/>
                                        <div className="displayFlex">
                                            <label className="font-size-12 width100">Contact employer</label>
                                            <div className="form-group">
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="displayFlex">
                                            <label className="font-size-12 width100">Email</label>
                                            <div className="form-group">
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="displayFlex">
                                            <label className="font-size-12 width100">SMS</label>
                                            <div className="form-group">
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="displayFlex">
                                            <label className="font-size-12 width100">Consented to be contacted</label>
                                            <div className="form-group">
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
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
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">DIRECT DEBITS</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Day of Month to Debit Account</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                              
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">BANK DETAILS</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Bank Name</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Name(s) of Account</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Bank Sort Code</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Account Number</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Country </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                            
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">CUSTOMER ADDRESS</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 1 </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Date Signed </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 2 </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address Line 3 </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">County  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Country   </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className="main-header-container">
                                    <div className="main-header-top-white"></div>
                                    <div className="main-header-bottom-white">
                                        <i><p className="main-header-txt-white">Section G – Declarations</p></i>
                                    </div>
                                </div>
                                <br />


                                 <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">GUARANTOR DETAILS</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               


                                <div className="row">
                                    <div className="col-lg-12">
                                        <label className="font-size-12">
                                            Some mortgage lenders may request that another party guarantee the loan. If another individual is to guarantee the loan, please enter their details in this section.
                                        </label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">First Name(s) </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Date of Birth </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Address
                                                <textarea type="text" className="box-textarea widthper100" row="3" /></label>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Occupation  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Surname  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Home Telephone </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Work Telephone </label>
                                            <input type="text" className="box-input width50" />
                                        </div><br/>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Mobile Phone  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">E-mail  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Basic Income  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Relationship to applicant(s)  </label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                            
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">THESE QUESTIONS MUST BE ANSWERED</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               

                                <div className="row">
                                    <div className="col-lg-8">
                                        <label className="font-size-12">
                                            Are you aware of any health issues that may affect your ability to work and meet the repayments of this facility?
                                        </label>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="displayFlex">
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Yes</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio" /><br />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">No</label>
                                                <div className="multiRadio">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
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
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">If yes, please provide details
                                                <textarea type="text" className="box-textarea widthper100" row="2" /></label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="displayFlex">
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Are you aware of any possible changes to your future circumstances that would affect your ability to meet repayments on this facility?
                                                    <div className="displayFlex">
                                                        <div className="form-group formwidth10">
                                                            <label className="box-label font-size-12">Yes</label>
                                                            <div className="multiRadio">
                                                                <div className="radio-area radio-area-marginTop">
                                                                    <label class="container no-border-Right">
                                                                        <input type="radio" name="radio" /><br />
                                                                        <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group formwidth10">
                                                            <label className="box-label font-size-12">No</label>
                                                            <div className="multiRadio">
                                                                <div className="radio-area radio-area-marginTop">
                                                                    <label class="container no-border-Right">
                                                                        <input type="radio" name="radio" /><br />
                                                                        <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <textarea type="text" className="box-textarea" row="2" />
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="waringDiv">
                                            <label>
                                                Warning: If you do not meet the repayments on your credit agreement, your account will go into arrears. This may affect your credit rating, which may limit your ability to access credit in the future.
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">PART 1 DECLARATION</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <label className="font-size-12">
                                            I/we hereby declare that I/we have read and understood this part of the mortgage application form and that the information I/we have tendered herein is correct.
                                        </label>
                                    </div>
                                </div>
                                

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Signed</label>
                                            <span>(Applicant 2 if applicable) </span>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Dated</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Signed</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12">Dated</label>
                                            <input type="text" className="box-input width50" />
                                        </div>
                                    </div>
                                </div>


                               
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">NOTES TO PART ONE OF THE APPLICATION FORM EMPLOYMENT SECTOR (NOTE 1) </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                



                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Agriculture, Hunting, Forestry </label>
                                            <span className="font-size-12">A</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Fishing</label>
                                            <span className="font-size-12">B</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Mining and Quarring</label>
                                            <span className="font-size-12">C</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Manufacturing</label>
                                            <span className="font-size-12">D</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Electricity, Gas and Water Supply</label>
                                            <span className="font-size-12">E</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Construction</label>
                                            <span className="font-size-12">F</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Wholesale and Retail Trade</label>
                                            <span className="font-size-12">G</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Hotel and Restaurant</label>
                                            <span className="font-size-12">H</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Transport, Storage and Communications </label>
                                            <span className="font-size-12">I</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Financial Intermediation</label>
                                            <span className="font-size-12">J</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Real Estate, Renting and Business Activities</label>
                                            <span className="font-size-12">K</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Public Administration and Defence</label>
                                            <span className="font-size-12">L</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Education </label>
                                            <span className="font-size-12">M</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Health and Social Work</label>
                                            <span className="font-size-12">N</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Other Services </label>
                                            <span className="font-size-12">O</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Private Household with Employed Persons </label>
                                            <span className="font-size-12">P</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Extra-territorial Organisations and Bodies </label>
                                            <span className="font-size-12">Q</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header" style={{"background-color":"#FAED9E"}}>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h5 className="header-txt">NOTES TO PART ONE OF THE APPLICATION FORM OCCUPATION (NOTE 2) </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <br/>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Manager or Administrator</label>
                                            <span className="font-size-12">1</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Professional </label>
                                            <span className="font-size-12">2</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Associate Professional and Technical</label>
                                            <span className="font-size-12">3</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Clerical and Secretarial</label>
                                            <span className="font-size-12">4</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Craft and Related</label>
                                            <span className="font-size-12">5</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Personal and Protective Services</label>
                                            <span className="font-size-12">6</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Sales</label>
                                            <span className="font-size-12">7</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Plant and Machine Operatives</label>
                                            <span className="font-size-12">8</span>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100">Other </label>
                                            <span className="font-size-12">9</span>
                                        </div>
                                    </div>
                                </div>


                                {/* <br /><br />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <i>
                                                <p className="right-para-white"> Section H – Notes & Messages</p>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <br /> <br /> */}

<br/>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="right-main-header-container">
                                                <div className="right-main-header-top"></div>
                                                <div className="right-main-header-bottom">
                                                    <i>
                                                        <p className="right-para"> Section H – Notes & Messages</p>
                                                    </i>
                                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                                <br />

                                <div className="row">
                                    <div className="col-lg-12">
                                        <textarea className="box-textarea textAreaHeightWidth" type="text" row="20"></textarea>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                        <br />
                                        <div className="main-header-container">
                                            <div className="main-header-top-white"></div>
                                            <div className="main-header-bottom-white">
                                                <i><p className="main-header-txt-white">Section I – Checklist</p></i>
                                            </div>
                                        </div>
                                        <br />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="header">
                                <div className="row">
                                                <div className="col-lg-6">
                                                    <h5 className="header-txt" style={{"font-size":"14px"}}> CHECKLIST OF SUPPORTING DOCUMENTS</h5>
                                                </div>
                                                <div className="col-lg-3">
                                                    <h5 className="header-txt" style={{"font-size":"14px"}}>   FIRST APPLICANT</h5>
                                                </div>
                                                <div className="col-lg-3">
                                                    <h5 className="header-txt" style={{"font-size":"14px"}}> SECOND APPLICANT</h5>
                                                </div>
                                            </div>
                                </div>

                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Proof of Identity - Passport or Driving Licence </label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">proof of Residence - A recent utility bill* </label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Income Certificate completed by your Employer </label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">P60</label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Last 3 payslips </label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">*No more than 3 months old ie. ESB, telephone, Credit Card Statement  </label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Last 3 years audited accounts (For Self Employed)</label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Statement of Affairs</label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Confirmation of TAX Affaris</label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Last 3 months Bank Statements</label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Copy of Separation Agreement or Divorce</label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Copy of Term Loans</label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Copy of Mortgage Statement</label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Evidence of Deposit</label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12">Gift Letter</label>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 text-center">
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                    <input type="radio" name="radio" /><br />
                                                    <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                             
                            


                            </div>

                        </div>







                    </div>
                </div>
            </Form>
        </div>
    )

}


export default NewForm;