import React, {useState} from 'react';
import Logo from "./logo.png";
import { Row, Col, Form, Button } from "antd";
import "./asfand.css";
import axios from 'axios';
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const DemoForm = () => {
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
             for (var i = 0; i <= quotes.clientHeight/1500; i++) {
                 //! This is all just html2canvas stuff
                 var srcImg  = canvas;
                 var sX      = 0;
                 var sY      = 1500*i; // start 980 pixels down for every new page
                 var sWidth  = 980;
                 var sHeight = 1500;
                 var dX      = 0;
                 var dY      = 0;
                 var dWidth  = 980;
                 var dHeight = 1500;
                 const onePageCanvas = document.createElement("canvas");
                 onePageCanvas.setAttribute('width', 980);
                 onePageCanvas.setAttribute('height', 1500);
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
                        <div id="pdf2" className="pdf1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="logo-area">
                                            <img src={Logo} className="logo-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="cover-header-area">
                                            <p className="cover-main-header">Mortgage</p>
                                            <p className="cover-sub-header">Application form</p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="cover-text-area">
                                    <textarea className="cover-text" name="userId"  placeholder="PIBA Member" rows="4" cols="50" />
                                </div>
                                <div id="watermark">
                                    <p class="wm-text">Mortgage</p>
                                </div>
                            </div>
                        </div>
                        <div id="pdf2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 noPadding">
                                        <div className = "appForm">
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header1">
                                            <h5 className="header-txt"> DETAILS OF INTRODUCING INTERMEDIARY</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="full-content">
                                        <div class="row" id="loginForm">
                                            <div className="col-lg-12">
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
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
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
                                            <div className="col-lg-6">
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
                                            <div className="col-lg-6">
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
                                            <div className="col-lg-6">
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
                                            <div className="col-lg-12">
                                                <p className="font-size-12">Disclosure of intermediary Status (where applicable). (e.g. only acts on behalf of one lender or one insurance company)</p>
                                                <p className="font-size-12">If this application has been introduced to you, by a thord party (including an appointed introducer) please provide the introducers name and address.</p>
                                            </div>
                                        </div>
                                    </div>
                                <div className="row">
                                        <div className="col-lg-12">
                                            <div className="header1">
                                                <h5 className="header-txt"> EXPLANATORY TEXT</h5>
                                            </div>
                                        </div>
                                    </div>       
                                <div className="full-content">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p className="font-size-12">This application form is divided into two parts. The first part captures information about you, the applicant. The second part gives important information about mortgages offered by a given mortgage lender, including statutory warnings. In part two your signature is required in relation to your application for a mortgage loan and your consent is sought in relation to various matters.</p>
                                                <br/>
                                                <h6 className="custom-sub-header">Please ensure that all applicants sign part one and two of the application.</h6>
                                            </div>
                                        </div>
                                    </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                    <br />
                                        <div className="right-main-header-container" >
                                            <div className = "blue-part">
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header1">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h5 className="header-txt"> INFORMATION ABOUT APPLICANT</h5>
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
                                        <div className="displayFlex widthper100">
                                            <p className="font-size-12 nomarginBottom five-padding">If ‘Other’ please specify</p>
                                            <input type="text" className="box-input"/>
                                        </div>
                                    </div>
                                    <input type="text" className="box-input noMargin widthper100"/>
                                    <br />
                                    <br />
                                    <br />
                                    <p className="font-size-12 marginBottom5">Failure to disclose the above information may result in the withdrawal of a lender appointment.</p>



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
                            </div>
                        </div>
                        <div id="pdf2">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-header-container">
                                        <div className = "blue-section"> 
                                            <p className="blue-section-text"> 
                                            Section A – Personal Details
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
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
                                                <label class="container noPadding font-size-5">
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
                                        </div>
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
                                                <label class="container noPadding font-size-5">
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
                                        </div>
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
                            <div className="header">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h5 className="header-txt"> CURRENT ADDRESS</h5>
                                    </div>
                                    <div className="col-lg-8">
                                        <h5 className="header-txt" style={{"paddingLeft":"130px"}}> CURRENT ADDRESS</h5>
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
                            <br/>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <h5 className="header-txt"> CORRESPONDENCE ADDRESS</h5>
                                            </div>
                                            <div className="col-lg-8">
                                                <h5 className="header-txt" style={{"paddingLeft":"130px"}}> CORRESPONDENCE ADDRESS</h5>
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
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <h5 className="header-txt"> PREVIOUS ADDRESS <span className="spanTxt">(if less than 3 years at existing address)</span></h5>
                                            </div>
                                            <div className="col-lg-7">
                                                <h5 className="header-txt" style={{"paddingLeft":"50px"}}> PREVIOUS ADDRESS</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                
                            <div className="row">
                                <div className="col-lg-6">
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
                            <div className="row">
                                <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h5 className="header-txt"> CONTACT DETAIL</h5>
                                                </div>
                                                <div className="col-lg-8">
                                                    <h5 className="header-txt" style={{"paddingLeft":"130px"}}> CONTACT DETAIL</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
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
                        </div>
                        <div id="pdf2">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-header-container">
                                        <div className = "blue-section-B"> 
                                            <p className="blue-section-B-text"> 
                                            Section B - Income & Employment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
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
                                        </div>
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
                                        </div>
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
                                        </div>
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
                                        </div>
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
                                            Please choose a category for each applicant from the attached list – Note 2 (Section G)
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
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )

}


export default DemoForm;