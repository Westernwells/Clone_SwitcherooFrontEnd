import React, {useState} from 'react';
import Logo from "./logo.png";
import {Row, Col, Form, Button} from "antd";
import "./asfand.css";
import axios from 'axios';
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CircularProgress from '@material-ui/core/CircularProgress';

const DemoForm = () => {
    const [loading,setLoading] = useState(false);
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
    });
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
    const handleInputChange = (e, object, nestedObj) => {
        console.log(e.target)
        console.log(e.currentTarget)
        const updatedState = {...form};
        const stateClone = {...updatedState}
        if (nestedObj) {
            const path = [object, nestedObj, e.target.name]
            const nestedObject = path.slice(0, -1).reduce((object, part) =>
                (object === undefined ? undefined : object[part]), stateClone)
            if (nestedObject !== undefined) {
                const [pathTail] = path.slice(-1);
                nestedObject[pathTail] = e.target.value;
            }
        } else {
            const path = [object, e.target.name]
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
        setLoading(true);
        let pdf = new jsPDF('p', 'pt', 'a4');
        let quotes = document.getElementById('application_div');
        for (let i = 0; i < quotes.childElementCount; i++) {
            await html2canvas(quotes.childNodes[i])
                .then((canvas) => {
                    const increasingFactor = Math.ceil(quotes.offsetWidth / 100) * 100 - quotes.offsetWidth;
                    const baseDimension = {width: quotes.offsetWidth + increasingFactor, height: 1500};
                    const onePageCanvas = document.createElement("canvas");
                    onePageCanvas.setAttribute('width', baseDimension.width);
                    onePageCanvas.setAttribute('height', baseDimension.height);
                    let ctx = onePageCanvas.getContext('2d');
                    ctx.drawImage(canvas, 0, 0, baseDimension.width, baseDimension.height, 0, 0, baseDimension.width, baseDimension.height)
                    let canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

                    if (i > 0) { pdf.addPage() }

                    pdf.setPage(i + 1);
                    pdf.addImage(canvasDataURL, 'PNG', 5, -7, (baseDimension.width * .65), (baseDimension.height * .61));

                }
            );
        }
        pdf.save('Test.pdf');
        setLoading(false);
    };

    return (
        <div>
            <Form>
               
                <div>
                <Button type="primary">Submit Application</Button>
                    <Button 
                        type="primary" 
                        disabled={loading}
                        onClick={exportPdf}>
                            Download PDF
                    </Button>
                    {loading && <CircularProgress size={24} className="spinner"/>}
                </div>
                
                <div id="form_outer" className="form-outer">
                    <div id="application_div">
                        <div id="pdf2" className="pdf1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="logo-area">
                                            <img src={Logo} className="logo-img"/>
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
                                <br/>
                                <div className="cover-text-area">
                                    <textarea className="cover-text" name="userId" placeholder="PIBA Member" rows="4"
                                              cols="50"/>
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
                                        <div className="appForm">
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
                                        <div className="col-lg-12 paddingLeft30px">
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Brokerage Name</label>
                                                <input
                                                    type="text"
                                                    className="box-input"
                                                    name='brokerysName'
                                                    value={form.introducingImmediately.brokerysName}
                                                    onChange={(e) => handleInputChange(e, 'introducingImmediately')}/>
                                            </div>
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Address</label>
                                                <textarea
                                                    type="text" rows="3"
                                                    className="box-textarea"
                                                    name='address'
                                                    value={form.introducingImmediately.address}
                                                    onChange={(e) => handleInputChange(e, 'introducingImmediately')}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 paddingLeft30px">
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Telephone</label>
                                                <input
                                                    type="text"
                                                    className="box-input"
                                                    name='telephone'
                                                    value={form.introducingImmediately.telephone}
                                                    onChange={(e) => handleInputChange(e, 'introducingImmediately')}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Fax</label>
                                                <input
                                                    type="text"
                                                    className="box-input"
                                                    name='fax'
                                                    value={form.introducingImmediately.fax}
                                                    onChange={(e) => handleInputChange(e, 'introducingImmediately')}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 paddingLeft30px">
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Email</label>
                                                <input
                                                    type="text"
                                                    className="box-input"
                                                    name='email'
                                                    value={form.introducingImmediately.email}
                                                    onChange={(e) => handleInputChange(e, 'introducingImmediately')}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="box-label font-size-12">Authorization No.</label>
                                                <input
                                                    type="text"
                                                    className="box-input"
                                                    name='authorizationNumber'
                                                    value={form.introducingImmediately.authorizationNumber}
                                                    onChange={(e) => handleInputChange(e, 'introducingImmediately')}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 paddingLeft30px">
                                            <p className="font-size-12 paraClr font-weight-500 line-height">Disclosure of intermediary Status (where
                                                applicable). (e.g. only acts on behalf of one lender or one insurance
                                                company)</p>
                                            <p className="font-size-12 paraClr font-weight-500 line-height">If this application has been introduced to you,
                                                by a thord party (including an appointed introducer) please provide the
                                                introducers name and address.</p>
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
                                        <div className="col-lg-12 paddingLeft30px">
                                            <p className="font-size-12 explanatoryPara">This application form is divided into two parts.
                                                The first part captures information about you, the applicant. The second
                                                part gives important information about mortgages offered by a given
                                                mortgage lender, including statutory warnings. In part two your
                                                signature is required in relation to your application for a mortgage
                                                loan and your consent is sought in relation to various matters.</p>
                                            <br/>
                                            <h6 className="custom-sub-header">Please ensure that all applicants sign
                                                part one and two of the application.</h6>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-lg-12 paddingLeft30px">
                                    <br />
                                        <div className="right-main-header-container" >
                                            <div className = "blue-part">
                                                </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col-lg-12 noPadding">
                                        <div className="partOne">
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
                                    <p className="font-size-12 paddingLeft15px paraClr nomarginBottom font-weight-500">Please indicate the reason for your
                                        application</p>
                                    <div className="radioBtnDiv paddingLeft15px">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-2 noPadding">
                                                    <label class="container noPadding font-weight-500">First time buyer &nbsp;
                                                        <input
                                                            type="radio"
                                                            name='radioType'
                                                            value='fullTimeBuyer'
                                                            //checked = {form.infoAboutApplicant.fullTimeBuyer === "true"}
                                                            onChange={(e) => handleInputChange(e, 'infoAboutApplicant')}
                                                        />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-lg-2 noPadding">
                                                    <label class="container font-weight-500">Re-Mortgage &nbsp;
                                                        <input
                                                            type="radio"
                                                            name='radioType'
                                                            value='reMortgage'
                                                            checked={form.infoAboutApplicant.reMortgage}
                                                            onClick={(e) => handleInputChange(e, 'infoAboutApplicant')}/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-lg-2 noPadding">
                                                    <label class="container font-weight-500">Purchase &nbsp;
                                                        <input
                                                            type="radio"
                                                            name='radioType'
                                                            value='purchase'
                                                            onChange={(e) => handleInputChange(e, 'infoAboutApplicant')}/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-lg-5 noPadding">
                                                    <label class="container font-weight-500">Residential Investment Property &nbsp;
                                                        <input
                                                            type="radio"
                                                            name='radioType'
                                                            value="residentialInvestmentProperty"
                                                            onChange={(e) => handleInputChange(e, 'infoAboutApplicant')}/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-2 noPadding">
                                                    <label class="container noPadding font-weight-500">Let to Buy &nbsp;
                                                        <input
                                                            type="radio"
                                                            name='radioType'
                                                            value='letToBuy'
                                                            onChange={(e) => handleInputChange(e, 'infoAboutApplicant')}/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-lg-2 noPadding">
                                                    <label class="container font-weight-500">Top-up &nbsp;
                                                        <input
                                                            type="radio"
                                                            name='radioType'
                                                            value='topUp'
                                                            onChange={(e) => handleInputChange(e, 'infoAboutApplicant')}/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-lg-2 noPadding">
                                                    <label class="container font-weight-500">Switcher &nbsp;
                                                        <input
                                                            type="radio"
                                                            name='radioType'
                                                            value='switcher'
                                                            onChange={(e) => handleInputChange(e, 'infoAboutApplicant')}/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-lg-5 noPadding">
                                                    <label class="container font-weight-500">Other &nbsp;
                                                        <input
                                                            type="radio"
                                                            name='radioType'
                                                            value='other'
                                                            onChange={(e) => handleInputChange(e, 'infoAboutApplicant')}/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="displayFlex widthper100 paddingLeft15px">
                                            <p className="font-size-12 nomarginBottom paraClr font-weight-500">If ‘Other’ please specify</p>
                                            <input type="text" className="box-input noMargin"/>
                                        </div>
                                    </div>
                                    <input style={{"marginLeft": "15px"}} type="text"
                                           className="box-input widthper100"/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <p className="font-size-12 marginBottom5 paddingLeft15px font-weight-500 paraClr">Failure to disclose the
                                        above information may result in the withdrawal of a lender appointment.</p>
                                    <div classNamec="container">
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <div className="displayFlex paddingLeft15px">
                                                    <label className="font-size-12 widthper100 font-weight-500 paraClr">Have you or any of your
                                                        staff met the customer face-to-face?</label>
                                                    <label class="container noPadding font-size-12 width100 font-weight-500 paraClr">Yes &nbsp;
                                                        <input
                                                            className="radioInput"
                                                            type="radio"
                                                            name='faceToFaceRadioType'
                                                            value='yes'
                                                            onChange={(e) => handleInputChange(e, 'infoAboutApplicant')}/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="container noPadding font-size-12 width100 font-weight-500 paraClr">No &nbsp;
                                                        <input
                                                            className="radioInput"
                                                            type="radio"
                                                            name='faceToFaceRadioType'
                                                            value={'no'}
                                                            onChange={(e) => handleInputChange(e, 'infoAboutApplicant')}/>
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
                                <div className="col-lg-12 .five-padding">
                                    <div className="sectionA"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 noPaddingRight">
                                    <div className="header-container">
                                        <h1 className="main-header">APPLICANT ONE</h1>
                                    </div>
                                    <div className="form-group paddingLeft15px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">Forenames</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='forename'
                                            value={form.personalDetails.applicantOne.forename}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">Surname</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='surname'
                                            value={form.personalDetails.applicantOne.surname}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">Other/Previous Names</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='otherName'
                                            value={form.personalDetails.applicantOne.otherName}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">Date of Birth (dd/mm/yyyy)</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='date'
                                            value={form.personalDetails.applicantOne.date}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">Nationality</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='nationality'
                                            value={form.personalDetails.applicantOne.nationality}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">PPS Number</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='ppsNumber'
                                            value={form.personalDetails.applicantOne.ppsNumber}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px paddingRight20px">
                                        <label className="box-label width100 font-size-12 font-weight-500">Marital Status</label>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='married'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>married
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='remarried'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>remarried
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='single'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>single
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='separated/devorced'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>separated/devorced
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='widow/er'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>widow/er
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='co HABITANT'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>co HABITANT
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding font-size-5 nomarginBottom font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='other'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>other
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">No. of Children</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='noOfChildren'
                                            value={form.personalDetails.applicantOne.noOfChildren}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div> 
                                    <div className="form-group paddingLeft15px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">Children’s Ages</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='childrenAges'
                                            value={form.personalDetails.applicantOne.childrenAges}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <br/>
                                </div>
                                <div className="col-lg-6 noPaddingLeft">
                                    <div className="header-container">
                                        <h1 className="main-header">APPLICANT TWO</h1>
                                    </div>
                                    <div className="form-group paddingLeft23px paddingRight20px">
                                        <label class="container noPadding font-size-12 font-weight-500"
                                               style={{marginTop: '-15px', marginBottom: '-3px'}}>
                                            Guarantor &nbsp;
                                            <input
                                                type="radio"
                                                className="radioBtn"
                                                name='Guarantor'
                                                value='Guarantor'
                                                onChange={(e) => handleInputChange(e, 'personalDetails', 'leftCorrespondingCurrentAddress')}
                                            />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="form-group paddingLeft23px paddingRight20px">

                                        <label className="box-label font-size-12 font-weight-500">Forenames</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='forename'
                                            value={form.personalDetails.applicantOne.forename}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft23px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">Surname</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='surname'
                                            value={form.personalDetails.applicantOne.surname}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft23px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">Other/Previous Names</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='otherName'
                                            value={form.personalDetails.applicantOne.otherName}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft23px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">Date of Birth (dd/mm/yyyy)</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='date'
                                            value={form.personalDetails.applicantOne.date}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft23px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">Nationality</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='nationality'
                                            value={form.personalDetails.applicantOne.nationality}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft23px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">PPS Number</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='ppsNumber'
                                            value={form.personalDetails.applicantOne.ppsNumber}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft23px paddingRight20px">
                                        <label className="box-label width100 font-size-12 font-weight-500">Marital Status</label>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='married'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>married
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='remarried'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>remarried
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='single'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>single
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='separated/devorced'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>separated/devorced
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='widow/er'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>widow/er
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label
                                                class="container noPadding font-size-5 nomarginBottom padding3border font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='co HABITANT'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>co HABITANT
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding font-size-5 nomarginBottom font-weight-500">
                                                <input
                                                    className="widthheight"
                                                    type="radio"
                                                    name='maritalStatus'
                                                    value='other'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                                />
                                                <br/>other
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft23px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">No. of Children</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='noOfChildren'
                                            value={form.personalDetails.applicantOne.noOfChildren}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft23px paddingRight20px">
                                        <label className="box-label font-size-12 font-weight-500">Children’s Ages</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='childrenAges'
                                            value={form.personalDetails.applicantOne.childrenAges}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'applicantOne')}
                                        />
                                    </div>
                                    <br/>
                                </div>
                            </div>
                            <div className="header">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h5 className="header-txt"> CURRENT ADDRESS</h5>
                                    </div>
                                    <div className="col-lg-8">
                                        <h5 className="header-txt" style={{"paddingLeft": "148px"}}> CURRENT
                                            ADDRESS</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label width100 font-size-12 labelMaxwidth13 font-weight-500">Are You
                                            :</label>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500">
                                                <input
                                                    type="radio"
                                                    className="radioBtn widthheight"
                                                    name='areYouRadioType'
                                                    value='owner'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                                />
                                                <br/>OWNER
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500">
                                                <input
                                                    type="radio"
                                                    className="radioBtn widthheight"
                                                    name='areYouRadioType'
                                                    value='tenant'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                                />
                                                <br/>TENANT
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding marginRight10 font-weight-500">
                                                <input
                                                    type="radio"
                                                    className="radioBtn widthheight"
                                                    name='areYouRadioType'
                                                    value='WITH PARENTS/RELATIVES OR FRIENDS'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                                />
                                                <br/>WITH PARENTS/RELATIVES OR FRIENDS
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="form-group maxWidth35">
                                            <label className="box-label font-size-12 font-weight-500">Rent &euro;</label>
                                            <input
                                                style={{width: 66 + 'px'}}
                                                type="text"
                                                className="box-input custom-width-input font-size-12 widthheight"
                                                name='rent'
                                                value={form.personalDetails.leftSideCurrentAddress.rent}
                                                onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                            />
                                            pm
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 1</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='addressLine1'
                                            value={form.personalDetails.leftSideCurrentAddress.addressLine1}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />

                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 2</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='addressLine2'
                                            value={form.personalDetails.leftSideCurrentAddress.addressLine2}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 3</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='addressLine3'
                                            value={form.personalDetails.leftSideCurrentAddress.addressLine3}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">County</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='county'
                                            value={form.personalDetails.leftSideCurrentAddress.county}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Country</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='country'
                                            value={form.personalDetails.leftSideCurrentAddress.country}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                    </div>
                                    <div className="form-group maxWidth76 paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Time at address</label>
                                        <input
                                            style={{width: 66 + 'px'}}
                                            type="text"
                                            className="box-input"
                                            name='time'
                                            value={form.personalDetails.leftSideCurrentAddress.time}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                        <label className="box-label font-size-12 font-weight-500">Years</label>
                                        <input
                                            style={{width: 66 + 'px'}}
                                            type="text"
                                            className="box-input"
                                            name='month'
                                            value={form.personalDetails.leftSideCurrentAddress.month}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                        <label className="box-label font-size-12 font-weight-500">Month</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label width100 font-size-12 labelMaxwidth13 font-weight-500">Are You
                                            :</label>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500">
                                                <input
                                                    type="radio"
                                                    className="radioBtn widthheight"
                                                    name='areYouRadioType'
                                                    value='owner'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                                />
                                                <br/>OWNER
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500">
                                                <input
                                                    type="radio"
                                                    className="radioBtn widthheight"
                                                    name='areYouRadioType'
                                                    value='tenant'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                                />
                                                <br/>TENANT
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding marginRight10 font-weight-500">
                                                <input
                                                    type="radio"
                                                    className="radioBtn widthheight"
                                                    name='areYouRadioType'
                                                    value='WITH PARENTS/RELATIVES OR FRIENDS'
                                                    onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                                />
                                                <br/>WITH PARENTS/RELATIVES OR FRIENDS
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="form-group maxWidth35">
                                            <label className="box-label font-size-12 font-weight-500">Rent &euro;</label>
                                            <input
                                                style={{width: 66 + 'px'}}
                                                type="text"
                                                className="box-input custom-width-input font-size-12 widthheight"
                                                name='rent'
                                                value={form.personalDetails.leftSideCurrentAddress.rent}
                                                onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                            />
                                            pm
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 1</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='addressLine1'
                                            value={form.personalDetails.leftSideCurrentAddress.addressLine1}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 2</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='addressLine2'
                                            value={form.personalDetails.leftSideCurrentAddress.addressLine2}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 3</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='addressLine3'
                                            value={form.personalDetails.leftSideCurrentAddress.addressLine3}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">County</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='county'
                                            value={form.personalDetails.leftSideCurrentAddress.county}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Country</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='country'
                                            value={form.personalDetails.leftSideCurrentAddress.country}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                    </div>
                                    <div className="form-group maxWidth76">
                                        <label className="box-label font-size-12 font-weight-500">Time at address</label>
                                        <input
                                            style={{width: 66 + 'px'}}
                                            type="text"
                                            className="box-input"
                                            name='time'
                                            value={form.personalDetails.leftSideCurrentAddress.time}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                        <label className="box-label font-size-12 font-weight-500">Years</label>
                                        <input
                                            style={{width: 66 + 'px'}}
                                            type="text"
                                            className="box-input"
                                            name='month'
                                            value={form.personalDetails.leftSideCurrentAddress.month}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCurrentAddress')}
                                        />
                                        <label className="box-label font-size-12 font-weight-500">Month</label>
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
                                                <h5 className="header-txt"
                                                    style={{"paddingLeft": "148px"}}> CORRESPONDENCE ADDRESS</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label class="container left-pad-5 font-size-12 font-weight-500">Same as above &nbsp;
                                            <input
                                                type="radio"
                                                className="radioBtn"
                                                name='sameAsAbove'
                                                value='Same as Above'
                                                onChange={(e) => handleInputChange(e, 'personalDetails', 'leftCorrespondingCurrentAddress')}
                                            />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    {form.personalDetails.leftSideCorrespondingAddress.sameAsAbove = "Same as Above" ?
                                        (
                                            <>
                                                <div className="form-group paddingLeft15px">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 1</label>
                                                    <input type="text" className="box-input"
                                                           value={form.personalDetails.leftSideCurrentAddress.addressLine1}/>
                                                </div>
                                                <div className="form-group paddingLeft15px">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 2</label>
                                                    <input type="text" className="box-input"
                                                           value={form.personalDetails.leftSideCurrentAddress.addressLine2}/>
                                                </div>
                                                <div className="form-group paddingLeft15px">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 3</label>
                                                    <input type="text" className="box-input"
                                                           value={form.personalDetails.leftSideCurrentAddress.addressLine3}/>
                                                </div>
                                                <div className="form-group paddingLeft15px">
                                                    <label className="box-label font-size-12 font-weight-500">County</label>
                                                    <input type="text" className="box-input"
                                                           value={form.personalDetails.leftSideCurrentAddress.county}/>
                                                </div>
                                                <div className="form-group paddingLeft15px">
                                                    <label className="box-label font-size-12 font-weight-500">Country</label>
                                                    <input type="text" className="box-input"
                                                           value={form.personalDetails.leftSideCurrentAddress.country}/>
                                                </div>
                                            </>
                                        ) :
                                        (
                                            <>
                                                <div className="form-group paddingLeft15px">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 1</label>
                                                    <input type="text"
                                                           className="box-input"
                                                           value={form.personalDetails.leftSideCorrespondingAddress.addressLine1}
                                                           name='addressLine1'
                                                           onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCorrespondingAddress')}
                                                    />
                                                </div>
                                                <div className="form-group paddingLeft15px">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 2</label>
                                                    <input type="text"
                                                           className="box-input"
                                                           value={form.personalDetails.leftSideCorrespondingAddress.addressLine2}
                                                           name='addressLine2'
                                                           onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCorrespondingAddress')}
                                                    />
                                                </div>
                                                <div className="form-group paddingLeft15px">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 3</label>
                                                    <input type="text"
                                                           className="box-input"
                                                           value={form.personalDetails.leftSideCorrespondingAddress.addressLine3}
                                                           name='addressLine3'
                                                           onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCorrespondingAddress')}
                                                    />
                                                </div>
                                                <div className="form-group paddingLeft15px">
                                                    <label className="box-label font-size-12 font-weight-500">County</label>
                                                    <input type="text"
                                                           className="box-input"
                                                           value={form.personalDetails.leftSideCorrespondingAddress.county}
                                                           name='county'
                                                           onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCorrespondingAddress')}
                                                    />
                                                </div>
                                                <div className="form-group paddingLeft15px">
                                                    <label className="box-label font-size-12 font-weight-500">Country</label>
                                                    <input type="text"
                                                           className="box-input"
                                                           value={form.personalDetails.leftSideCorrespondingAddress.country}
                                                           name='country'
                                                           onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideCorrespondingAddress')}
                                                    />
                                                </div>
                                            </>
                                        )
                                    }
                                    <br/>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label class="container left-pad-5 font-size-12 font-weight-500">Same as above &nbsp;
                                            <input
                                                type="radio"
                                                className="radioBtn"
                                                name='sameAsAbove'
                                                value='Same as Above'
                                                onChange={(e) => handleInputChange(e, 'personalDetails', 'RightCorrespondingCurrentAddress')}
                                            />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    {form.personalDetails.RightSideCorrespondingAddress.sameAsAbove = "Same as Above" ?
                                        (
                                            <>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 1</label>
                                                    <input type="text" className="box-input"
                                                           value={form.personalDetails.RightSideCorrespondingAddress.addressLine1}/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 2</label>
                                                    <input type="text" className="box-input"
                                                           value={form.personalDetails.RightSideCorrespondingAddress.addressLine2}/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 3</label>
                                                    <input type="text" className="box-input"
                                                           value={form.personalDetails.RightSideCorrespondingAddress.addressLine3}/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500">County</label>
                                                    <input type="text" className="box-input"
                                                           value={form.personalDetails.RightSideCorrespondingAddress.county}/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500">Country</label>
                                                    <input type="text" className="box-input"
                                                           value={form.personalDetails.RightSideCorrespondingAddress.country}/>
                                                </div>
                                            </>
                                        ) :
                                        (
                                            <>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 1</label>
                                                    <input type="text"
                                                           className="box-input"
                                                           value={form.personalDetails.RightSideCorrespondingAddress.addressLine1}
                                                           name='addressLine1'
                                                           onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSideCorrespondingAddress')}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 2</label>
                                                    <input type="text"
                                                           className="box-input"
                                                           value={form.personalDetails.RightSideCorrespondingAddress.addressLine2}
                                                           name='addressLine2'
                                                           onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSideCorrespondingAddress')}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500">Address Line 3</label>
                                                    <input type="text"
                                                           className="box-input"
                                                           value={form.personalDetails.RightSideCorrespondingAddress.addressLine3}
                                                           name='addressLine3'
                                                           onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSideCorrespondingAddress')}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500">County</label>
                                                    <input type="text"
                                                           className="box-input"
                                                           value={form.personalDetails.RightSideCorrespondingAddress.county}
                                                           name='county'
                                                           onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSideCorrespondingAddress')}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500">Country</label>
                                                    <input type="text"
                                                           className="box-input"
                                                           value={form.personalDetails.RightSideCorrespondingAddress.country}
                                                           name='country'
                                                           onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSideCorrespondingAddress')}
                                                    />
                                                </div>
                                            </>
                                        )
                                    }
                                    <br/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <h5 className="header-txt"> PREVIOUS ADDRESS <span className="spanTxt">(if less than 3 years at existing address)</span>
                                                </h5>
                                            </div>
                                            <div className="col-lg-7">
                                                <h5 className="header-txt" style={{"paddingLeft": "75px"}}> PREVIOUS
                                                    ADDRESS <span className="spanTxt">(if less than 3 years at existing address)</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 1</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='addressLine1'
                                            value={form.personalDetails.leftSidePreviousAddress.addressLine1}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSidePreviousAddress')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 2</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='addressLine2'
                                            value={form.personalDetails.leftSidePreviousAddress.addressLine2}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSidePreviousAddress')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 3</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='addressLine3'
                                            value={form.personalDetails.leftSidePreviousAddress.addressLine3}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSidePreviousAddress')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">County</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='county'
                                            value={form.personalDetails.leftSidePreviousAddress.county}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSidePreviousAddress')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Country</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='country'
                                            value={form.personalDetails.leftSidePreviousAddress.country}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSidePreviousAddress')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Time at address</label>
                                        <input
                                            style={{width: 66 + 'px'}}
                                            type="text"
                                            className="box-input "
                                            name='time'
                                            value={form.personalDetails.leftSidePreviousAddress.time}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSidePreviousAddress')}
                                        />

                                        <label className="box-label font-size-12 font-weight-500">Years</label>
                                        <input
                                            style={{width: 66 + 'px'}}
                                            type="text"
                                            className="box-input "
                                            name='year'
                                            value={form.personalDetails.leftSidePreviousAddress.year}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSidePreviousAddress')}
                                        />
                                        <label className="box-label font-size-12 font-weight-500">Month</label>
                                    </div>
                                    <p className="txtStyle font-size-10 font-weight-500 paddingLeft15px paraClr">Address description as per IIB HL from required
                                        for DOE House Price Survey</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 1</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='addressLine1'
                                            value={form.personalDetails.RightSidePreviousAddress.addressLine1}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSidePreviousAddress')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 2</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='addressLine2'
                                            value={form.personalDetails.RightSidePreviousAddress.addressLine2}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSidePreviousAddress')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Address Line 3</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='addressLine3'
                                            value={form.personalDetails.RightSidePreviousAddress.addressLine3}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSidePreviousAddress')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">County</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='county'
                                            value={form.personalDetails.RightSidePreviousAddress.county}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSidePreviousAddress')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Country</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='country'
                                            value={form.personalDetails.RightSidePreviousAddress.country}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSidePreviousAddress')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Time at address</label>
                                        <input
                                            style={{width: 66 + 'px'}}
                                            type="text"
                                            className="box-input "
                                            name='time'
                                            value={form.personalDetails.RightSidePreviousAddress.time}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSidePreviousAddress')}
                                        />

                                        <label className="box-label font-size-12 font-weight-500">Years</label>
                                        <input
                                            style={{width: 66 + 'px'}}
                                            type="text"
                                            className="box-input "
                                            name='year'
                                            value={form.personalDetails.RightSidePreviousAddress.year}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSidePreviousAddress')}
                                        />
                                        <label className="box-label font-size-12 font-weight-500">Month</label>
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
                                                <h5 className="header-txt" style={{"paddingLeft": "148px"}}> CONTACT
                                                    DETAIL</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Home Telephone Number</label>
                                        <input
                                            type="text"
                                            className="box-input"
                                            name='homeNumber'
                                            value={form.personalDetails.leftSideContactDetail.homeNumber}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideContactDetail')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Work Telephone Number</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='workNumber'
                                            value={form.personalDetails.leftSideContactDetail.workNumber}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideContactDetail')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Mobile Telephone Number</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='mobileNumber'
                                            value={form.personalDetails.leftSideContactDetail.mobileNumber}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideContactDetail')}
                                        />
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">E-mail</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='email'
                                            value={form.personalDetails.leftSideContactDetail.email}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'leftSideContactDetail')}
                                        />
                                    </div>
                                    <br/>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group ">
                                        <label className="box-label font-size-12 font-weight-500">Home Telephone Number</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='homeNumber'
                                            value={form.personalDetails.RightSideContactDetail.homeNumber}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSideContactDetail')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Work Telephone Number</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='workNumber'
                                            value={form.personalDetails.RightSideContactDetail.workNumber}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSideContactDetail')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Mobile Telephone Number</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='mobileNumber'
                                            value={form.personalDetails.RightSideContactDetail.mobileNumber}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSideContactDetail')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">E-mail</label>
                                        <input
                                            type="text"
                                            className="box-input "
                                            name='email'
                                            value={form.personalDetails.RightSideContactDetail.email}
                                            onChange={(e) => handleInputChange(e, 'personalDetails', 'RightSideContactDetail')}
                                        />
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div id="pdf2">
                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionB"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 noPaddingRight">
                                    <div className="header-container">
                                        <h1 className="main-header">APPLICANT ONE</h1>
                                    </div>

                                </div>
                                <div className="col-lg-6 noPaddingLeft">
                                    <div className="header-container">
                                        <h1 className="main-header">APPLICANT TWO</h1>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <h5 className="header-txt"> CURRENT INCOMES</h5>
                                            </div>
                                            <div className="col-lg-8">
                                                <h5 className="header-txt" style={{paddingLeft:"150px"}}> CURRENT INCOMES</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Gross basic wage/salary
                                            pa &euro;</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>GUARANTEED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>REGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 noBorder">
                                                    <input type="radio" name="radio"/><br/>IRREGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Overtime per annum </label>
                                        <span className="paddingLeft70px font-weight-500 font-size-12 paraClr">&euro;<input type="text"
                                                                                       className="box-input width210"/></span>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>GUARANTEED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>REGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr noBorder">
                                                    <input type="radio" name="radio"/><br/>IRREGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Bonuses per annum</label>
                                        <span className="paddingLeft70px font-weight-500 font-size-12 paraClr">&euro;<input type="text"
                                                                                       className="box-input width210"/></span>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>GUARANTEED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>REGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 noBorder">
                                                    <input type="radio" name="radio"/><br/>IRREGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Commissions per annum</label>
                                        <span className="paddingLeft18px font-weight-500 font-size-12 paraClr">&euro;<input type="text"
                                                                                       className="box-input width217"/></span>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>GUARANTEED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>REGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 noBorder">
                                                    <input type="radio" name="radio"/><br/>IRREGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 labelWidth170 font-weight-500">Other income per annum
                                            (non rental)</label>
                                        <span className="font-weight-500 font-size-12 paraClr" style={{"paddingLeft": "0px"}}>&euro;<input type="text"
                                                                                          className="box-input width217"/></span>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>GUARANTEED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>REGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 noBorder">
                                                    <input type="radio" name="radio"/><br/>IRREGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Lodger income per annum</label>
                                        <span className="font-weight-500 font-size-12 paraClr" style={{"paddingLeft": "5px"}}>&euro;<input type="text"
                                                                                          className="box-input width217"/></span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 labelWidth270 font-weight-500">Residential Investment
                                            income per annum</label>
                                        <span className="font-weight-500 font-size-12 paraClr">&euro;<input type="text" className="box-input width113"/></span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 labelWidth200 font-weight-500">Total gross income per
                                            annum</label>
                                        <span className="font-weight-500 font-size-12 paraClr" style={{"paddingLeft": "0px"}}>&euro;<input type="text"
                                                                                          className="box-input width185"/></span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 labelWidth200 font-weight-500">Total joint financial
                                            income pa</label>
                                        <span className="font-weight-500 font-size-12 paraClr" style={{"paddingLeft": "0px"}}>&euro;<input type="text"
                                                                                          className="box-input width185"/></span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 labelWidth200 font-weight-500">Total NET income per
                                            mont</label>
                                        <span className="font-weight-500 font-size-12 paraClr" style={{"paddingLeft": "0px"}}>&euro;<input type="text"
                                                                                          className="box-input width185"/></span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Nature of Income </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500">Employment Status </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>EMPLOYED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>EMPLOYED
                                                    & SELF EMPLOYED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>HOMEMAKER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>OTHER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>RETIRED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500 noBorder">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>SELF
                                                    EMPLOYED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-lg-6" style={{"paddingLeft":""}}>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Gross basic wage/salary
                                            pa &euro;</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>GUARANTEED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>REGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 noBorder">
                                                    <input type="radio" name="radio"/><br/>IRREGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 labelWidth158 font-weight-500">Overtime per
                                            annum </label>
                                        <span className="font-weight-500 font-size-12 paraClr">&euro;<input type="text"
                                                                        className="box-input width230"/></span>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>GUARANTEED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>REGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 noBorder">
                                                    <input type="radio" name="radio"/><br/>IRREGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 labelWidth158 font-weight-500">Bonuses per
                                            annum</label>
                                        <span className="font-weight-500 font-size-12 paraClr">&euro;<input type="text"
                                                                        className="box-input width230"/></span>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>GUARANTEED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>REGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 noBorder">
                                                    <input type="radio" name="radio"/><br/>IRREGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 labelWidth158 font-weight-500">Commissions per
                                            annum</label>
                                        <span className="font-weight-500 font-size-12 paraClr">&euro;<input type="text"
                                                                        className="box-input width230"/></span>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>GUARANTEED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>REGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 noBorder">
                                                    <input type="radio" name="radio"/><br/>IRREGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 labelWidth160 font-weight-500">Other income per annum
                                            (non rental)</label>
                                        <span className="font-weight-500 font-size-12 paraClr" style={{"paddingLeft": "0px"}}>&euro;<input type="text"
                                                                                          className="box-input width230"/></span>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>GUARANTEED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500">
                                                    <input type="radio" name="radio"/><br/>REGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 noBorder">
                                                    <input type="radio" name="radio"/><br/>IRREGULAR
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 width180 font-weight-500">Lodger income per
                                            annum</label>
                                        <span className="font-weight-500 font-size-12 paraClr" style={{"paddingLeft": "0px"}}>&euro;<input type="text"
                                                                                          className="box-input widthlabel200"/></span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 labelWidth270 font-weight-500">Residential Investment
                                            income per annum</label>
                                        <span className="font-weight-500 font-size-12 paraClr">&euro;<input style={{width:"117px"}} type="text" className="box-input"/></span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 labelWidth200 font-weight-500">Total gross income per
                                            annum</label>
                                        <span className="font-weight-500 font-size-12 paraClr" style={{"paddingLeft": "0px"}}>&euro;<input style={{width:"190px"}} type="text"
                                                                                          className="box-input"/></span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Total joint financial income
                                            pa</label>
                                        <span className="font-weight-500 font-size-12 paraClr" style={{"paddingLeft": "9px"}}>&euro;<input style={{width:"190px"}} type="text"
                                                                                          className="box-input"/></span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Total NET income per mont</label>
                                        <span className="font-weight-500 font-size-12 paraClr" style={{"paddingLeft": "25px"}}>&euro;<input style={{width:"190px"}} type="text"
                                                                                           className="box-input"/></span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Nature of Income </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500">Employment Status </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>EMPLOYED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>EMPLOYED
                                                    & SELF EMPLOYED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>HOMEMAKER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>OTHER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>RETIRED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding paddingBorder font-weight-500 noBorder">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>SELF
                                                    EMPLOYED
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
                                            <div className="col-lg-4">
                                                <h5 className="header-txt">EMPLOYMENT DETAILS</h5>
                                            </div>
                                            <div className="col-lg-8">
                                                <h5 className="header-txt" style={{paddingLeft:"150px"}}> EMPLOYMENT DETAILS </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <label class="font-size-12 paddingLeft15px  font-weight-500 paraClr">
                                        Please choose a category for each applicant from the attached list – Note 1
                                        (Section G)
                                    </label>
                                </div>
                                <div className="col-lg-4">
                                    <div className="appdiv">
                                        <label style={{"paddingLeft": "13px"}} className="font-size-12  font-weight-500 paraClr">App1</label>
                                        <label className="font-size-12  font-weight-500 paraClr">App2</label>
                                    </div>
                                    <div className="inputDiv">
                                        <input type="text" className="box-input"/>
                                        <input type="text" className="box-input"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <label class="font-size-12 paddingLeft15px  font-weight-500 paraClr">
                                        Please choose a category for each applicant from the attached list – Note 2
                                        (Section G)
                                    </label>
                                </div>
                                <div className="col-lg-4">
                                    <div className="inputDiv">
                                        <input type="text" className="box-input"/>
                                        <input type="text" className="box-input"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12  font-weight-500 paraClr">Occupation </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">

                                            <div className="radio-area">
                                                <label class="container noPadding padding3border  font-weight-500 paraClr">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>OTHER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border  font-weight-500 paraClr">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>RETIRED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding  font-weight-500 paraClr">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>SELF
                                                    EMPLOYED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12  font-weight-500 paraClr">Employer's Name </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12  font-weight-500 paraClr">Address Line 1 </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12  font-weight-500 paraClr">Address Line 2 </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3 </label>
                                        <input type="text" className="box-input"/>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group paddingLeft15px">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                                <input type="text" className="box-input width100"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">Country </label>
                                                <input type="text" className="box-input width100"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Telephone Number </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Nature of Business </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Length of Service with
                                            Employer</label>
                                        <input type="text" className="box-input" style={{width: 66 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">years</label>
                                        <input type="text" className="box-input" style={{width: 41 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">months</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Occupation </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="float-right">
                                        <div className="form-group">

                                            <div className="radio-area">
                                                <label class="container  noPadding padding3border font-weight-500 paraClr">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>OTHER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container  noPadding padding3border font-weight-500 paraClr">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>RETIRED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container  noPadding font-weight-500 paraClr">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>SELF
                                                    EMPLOYED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Employer's Name </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1 </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2 </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3 </label>
                                        <input type="text" className="box-input"/>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                                <input type="text" className="box-input width100"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">Country </label>
                                                <input type="text" className="box-input width100"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Telephone Number </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Nature of Business </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Length of Service with
                                            Employer</label>
                                        <input type="text" className="box-input" style={{width: 41 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">years</label>
                                        <input type="text" className="box-input" style={{width: 41 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">months</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-4 displayFlex">
                                                <h5 className="header-txt"> PREVIOUS EMPLOYMENT <span class="spanTxt">(if less than 1
                                                years at current employer)</span></h5> 
                                            </div>
                                            <div className="col-lg-8 displayFlex">
                                                <h5 className="header-txt" style={{paddingLeft:"150px"}}> PREVIOUS EMPLOYMENT <span class="spanTxt">(if less than 1
                                                years at current employer)</span></h5> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Employer’s Name</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County</label>
                                        <input type="text" className="box-input" style={{width: "70px"}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Country</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Occupation</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Length of Service with
                                            employer</label>
                                        <input type="text" className="box-input" style={{width: 66 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">years</label>
                                        <input type="text" className="box-input" style={{width: 41 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">months</label>
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Employer’s Name</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County</label>
                                        <input type="text" className="box-input" style={{width: "70px"}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Country</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Occupation</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Length of Service with
                                            employer</label>
                                        <input type="text" className="box-input" style={{width: 66 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">years</label>
                                        <input type="text" className="box-input" style={{width: 41 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">months</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="pdf2">
                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionB2"></div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <h5 className="header-txt"> SELF EMPLOYED DETAILS</h5>
                                            </div>
                                            <div className="col-lg-8">
                                                <h5 className="header-txt" style={{paddingLeft:"150px"}}> SELF EMPLOYED DETAILS</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Name of firm/company</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County</label>
                                        <input type="text" className="box-input" style={{width: "70px"}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Country</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Nature of Business</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">How long has the business been
                                            established</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Time Involved</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Average profit over three
                                            years &euro;</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Percentage shareholding/partnership
                                            interest</label>
                                        <input type="text" className="box-input"/> %
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Name of accountant</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Name of accounting firm</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County</label>
                                        <input type="text" className="box-input" style={{width: "70px"}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Country</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Telephone number</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Fax Number</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">3 years audited accounts
                                            available</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Length of Service with
                                            employer</label>
                                        <input type="text" className="box-input" style={{width: 66 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">years</label>
                                        <input type="text" className="box-input" style={{width: 41 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">months</label>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Tax affairs up to date </label>
                                        <div className="radio-area">
                                            <label class="container font-weight-500 paraClr">
                                                <input type="radio" name="radio"/><br/>yes
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container font-weight-500 paraClr">
                                                <input type="radio" name="radio"/><br/>no
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">

                                    <div className="form-group">

                                        <label className="box-label font-size-12 font-weight-500 paraClr">Name of firm/company</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County</label>
                                        <input type="text" className="box-input" style={{width: "70px"}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Country</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Nature of Business</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">How long has the business been
                                            established</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Time Involved</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Average profit over three
                                            years &euro;</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Percentage shareholding/partnership
                                            interest</label>
                                        <input type="text" className="box-input"/> %
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Name of accountant</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr ">Name of accounting firm</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County</label>
                                        <input type="text" className="box-input" style={{width: "70px"}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Country</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Telephone number</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Fax Number</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">3 years audited accounts
                                            available</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Length of Service with
                                            employer</label>
                                        <input type="text" className="box-input" style={{width: 66 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">years</label>
                                        <input type="text" className="box-input" style={{width: 41 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">months</label>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Tax affairs up to date </label>
                                        <div className="radio-area">
                                            <label class="container font-weight-500 paraClr">
                                                <input type="radio" name="radio"/><br/>yes
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container font-weight-500 paraClr">
                                                <input type="radio" name="radio"/><br/>no
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionC"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Current Bank/Building Society</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County</label>
                                        <input type="text" className="box-input" style={{width: "70px"}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Country</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Account Type</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Account Number</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Sort Code</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">I have held this account for</label>
                                        <input type="text" className="box-input" style={{width: 66 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">years</label>
                                        <input type="text" className="box-input" style={{width: 41 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">months</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Current Bank/Building Society</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County</label>
                                        <input type="text" className="box-input" style={{width: "70px"}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Country</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Account Type</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Account Number</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Sort Code</label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">I have held this account for</label>
                                        <input type="text" className="box-input" style={{width: 66 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">years</label>
                                        <input type="text" className="box-input" style={{width: 41 + 'px'}}/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">months</label>
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
                                            <h6 className="font-size-12 paddingLeft15px font-weight-500 paraClr">Financial Institution</h6>
                                            <div className="form-group paddingLeft15px">
                                                <input type="text" className="box-input"/>
                                            </div>
                                            <div className="form-group paddingLeft15px">
                                                <input type="text" className="box-input"/>
                                            </div>
                                            <div className="form-group paddingLeft15px">
                                                <input type="text" className="box-input"/>
                                            </div>
                                            <div className="form-group paddingLeft15px">
                                                <input type="text" className="box-input"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <h6 className="font-size-12 font-weight-500 paraClr"> A/C Number</h6>
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
                                                <h6 className="font-size-12 font-weight-500 paraClr">Monthly Savings </h6>
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
                                            <div className="col-lg-2 text-center">
                                                <h6 className="font-size-12 font-weight-500 paraClr">App1 </h6>
                                                <div className="form-group">
                                                    <div class="radio-area"><label class="container"><input type="radio"
                                                                                                            name="radio"/><span
                                                        class="checkmark"></span></label></div>
                                                </div>
                                                <div className="form-group">
                                                    <div class="radio-area"><label class="container"><input type="radio"
                                                                                                            name="radio"/><span
                                                        class="checkmark"></span></label></div>
                                                </div>
                                                <div className="form-group">
                                                    <div class="radio-area"><label class="container"><input type="radio"
                                                                                                            name="radio"/><span
                                                        class="checkmark"></span></label></div>
                                                </div>
                                                <div className="form-group">
                                                    <div class="radio-area"><label class="container"><input type="radio"
                                                                                                            name="radio"/><span
                                                        class="checkmark"></span></label></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 text-center">
                                                <h6 className="font-size-12 font-weight-500 paraClr">App2 </h6>
                                                <div className="form-group">
                                                    <div class="radio-area"><label class="container"><input type="radio"
                                                                                                            name="radio"/><span
                                                        class="checkmark"></span></label></div>
                                                </div>
                                                <div className="form-group">
                                                    <div class="radio-area"><label class="container"><input type="radio"
                                                                                                            name="radio"/><span
                                                        class="checkmark"></span></label></div>
                                                </div>
                                                <div className="form-group">
                                                    <div class="radio-area"><label class="container"><input type="radio"
                                                                                                            name="radio"/><span
                                                        class="checkmark"></span></label></div>
                                                </div>
                                                <div className="form-group">
                                                    <div class="radio-area"><label class="container"><input type="radio"
                                                                                                            name="radio"/><span
                                                        class="checkmark"></span></label></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <h6 className="font-size-12 font-weight-500 paraClr">Balance</h6>
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
                        </div>
                        <div id="pdf2">
                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionC2"></div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '-10px'}}>
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h5 className="header-txt"> MORTGAGE 1</h5>
                                            </div>
                                            <div className="col-lg-4">
                                                <h5 className="header-txt paddingLeft38px"> MORTGAGE 2</h5>
                                            </div>
                                            <div className="col-lg-4">
                                                <h5 className="header-txt"> MORTGAGE 3</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '-15px'}}>
                                <div className="col-lg-4">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Inception Date</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Mortgage Term</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <br/>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Est. Sale Price &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Are you selling this property </label>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500 paraClr">
                                                <input className="widthheight" type="radio" name="radio"/><br/>yes
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding font-weight-500 paraClr">
                                                <input className="widthheight" type="radio" name="radio"/><br/>no
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Name of Lender</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Mortgage Acct. No.</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address of Lender</label>
                                        <textarea type="text" rows="3" className="box-textarea width100"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Property Value &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Balance Due &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Balance Due &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Year Purchased</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">If fixed, for how many years</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Payments missed in last 6
                                            months</label>
                                        <input type="text" className="box-input width20"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Payments missed in last 12
                                            months</label>
                                        <input type="text" className="box-input width20"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Payments per month</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Rental Income per month &euro;</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address of Property</label>
                                        <textarea type="text" rows="3" className="box-textarea"/>
                                    </div>
                                    <br/>
                                    <div className="radioBtnDiv">
                                        <label className="box-label font-size-12 paddingLeft15px font-weight-500 paraClr">Type of
                                            Mortgage </label>
                                        <div className="form-group paddingLeft15px">

                                            <br/>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>ANNUITY
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>ENDOWMENT
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>INTEREST ONLY
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>OTHER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>PENSION
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radioBtnDiv">
                                        <label className="box-label font-size-12 paddingLeft15px font-weight-500 paraClr">Type of Rate </label>
                                        <div className="form-group ">

                                            <br/>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>DISCOUNT VARIABLE
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>FIXED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>PENSION
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>INTEREST ONLY
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>Other
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Inception Date</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Mortgage Term</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <br/>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Est. Sale Price &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Are you selling this property </label>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500 paraClr">
                                                <input className="widthheight" type="radio" name="radio"/><br/>yes
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500 paraClr">
                                                <input className="widthheight noBorder" type="radio" name="radio"/><br/>no
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Name of Lender</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Mortgage Acct. No.</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address of Lender</label>
                                        <textarea type="text" rows="3" className="box-textarea width100"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Property Value &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Balance Due &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Balance Due &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Year Purchased</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">If fixed, for how many years</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Payments missed in last 6
                                            months</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Payments missed in last 12
                                            months</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Payments per month</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Rental Income per month &euro;</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft46px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address of Property</label>
                                        <textarea type="text" rows="3" className="box-textarea"/>
                                    </div>
                                    <br/>
                                    <div className="radioBtnDiv">
                                        <label className="box-label font-size-12 paddingLeft46px font-weight-500 paraClr">Type of
                                            Mortgage </label>
                                        <div className="form-group">

                                            <br/>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>ANNUITY
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>ENDOWMENT
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>INTEREST ONLY
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>OTHER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>PENSION
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radioBtnDiv">
                                        <label className="box-label font-size-12 paddingLeft46px font-weight-500 paraClr">Type of Rate </label>
                                        <div className="form-group">

                                            <br/>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>DISCOUNT VARIABLE
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area"> 
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>FIXED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>PENSION
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>INTEREST ONLY
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>Other
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Inception Date</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Mortgage Term</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <br/>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Est. Sale Price &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Are you selling this property </label>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500 paraClr">
                                                <input className="widthheight" type="radio" name="radio"/><br/>yes
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding font-weight-500 paraClr">
                                                <input className="widthheight" type="radio" name="radio"/><br/>no
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Name of Lender</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Mortgage Acct. No.</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address of Lender</label>
                                        <textarea type="text" rows="3" className="box-textarea width100"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Property Value &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Balance Due &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Balance Due &euro;</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Year Purchased</label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">If fixed, for how many years</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Payments missed in last 6
                                            months</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Payments missed in last 12
                                            months</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Payments per month</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Rental Income per month &euro;</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft75px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address of Property</label>
                                        <textarea type="text" rows="3" className="box-textarea"/>
                                    </div>
                                    <br/>
                                    <div className="radioBtnDiv">
                                        <label className="box-label font-size-12 paddingLeft75px font-weight-500 paraClr">Type of
                                            Mortgage </label>
                                        <div className="form-group">

                                            <br/>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>ANNUITY
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>ENDOWMENT
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>INTEREST ONLY
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>OTHER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>PENSION
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radioBtnDiv">
                                        <label className="box-label font-size-12 paddingLeft75px font-weight-500 paraClr">Type of Rate </label>
                                        <div className="form-group">

                                            <br/>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>DISCOUNT VARIABLE
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>FIXED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>PENSION
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>INTEREST ONLY
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding font-weight-500 paraClr">
                                                    <input type="radio" name="radio"/><br/>Other
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <label className="font-size-12 paddingLeft15px font-weight-500 paraClr">
                                        Is property registered in any name other than that of the applicant
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Details</label>
                                        <textarea type="text" rows="2" className="box-textarea"/>
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
                            <div className="row" style={{marginTop: '-15px'}}>
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">How many existing loans do you
                                            have</label>
                                        <input type="text" className="box-input width50"/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Amount Borrowed</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">Applicant 1 </label>
                                                <input type="text" className="box-input width50"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">Applicant 2 </label>
                                                <input type="text" className="box-input width50"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="row paddingLeft15px">
                                        <div className="col-lg-6">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Financial Institution </label>
                                            <textarea style={{height: "90px", width: "100px"}} type="input"
                                                      className="box-textarea" row="5"></textarea>
                                        </div>
                                        <div className="col-lg-6">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Account Number: </label>
                                            <textarea style={{height: "90px", width: "120px"}} type="input"
                                                      className="box-textarea" row="5"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">App1 </label>
                                            <div className="radioBtnDiv radioBtnDivWidth">
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">App1 </label>
                                            <div className="radioBtnDiv radioBtnDivWidth">
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
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
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Payment (Mly) </label>
                                            <label className="font-size-12">&euro;
                                                <input type="text" className="box-input width40"/></label>
                                            <label className="font-size-12">&euro;
                                                <input type="text" className="box-input width40"/></label>
                                            <label className="font-size-12">&euro;
                                                <input type="text" className="box-input width40"/></label>
                                            <label className="font-size-12">&euro;
                                                <input type="text" className="box-input width40"/></label>
                                        </div>
                                        <div className="col-lg-3">
                                            <label className="box-label font-size-12 font-weight-500 paraClr"> Purpose </label>
                                            <textarea class="box-textarea width70" type="input" row="4"></textarea>
                                        </div>
                                        <div className="col-lg-3">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Final Payment Date </label>
                                            <textarea class="box-textarea width70" type="input" row="4"></textarea>
                                        </div>
                                        <div className="col-lg-3">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Refinance? </label>
                                            <div className="multiRadio">
                                                <div className="radio-area">
                                                    <label class="container font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                        Yes
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="multiRadio">
                                                <div className="radio-area">
                                                    <label class="container font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                        Yes
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="multiRadio">
                                                <div className="radio-area">
                                                    <label class="container font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                        Yes
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="multiRadio">
                                                <div className="radio-area">
                                                    <label class="container font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                        Yes
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '-17px'}}>
                                <div className="col-lg-8">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Rent &euro;</label>
                                        <input type="text" className="box-input width50"/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Maintenance Payments &euro;</label>
                                        <input type="text" className="box-input width50"/>
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Total &euro;</label>
                                        <input type="text" className="box-input width50"/>
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
                            <div className="row" style={{marginTop: '-13px'}}>
                                <div className="col-lg-8">
                                    <label className="font-size-12 paddingLeft15px font-weight-500 paraClr">
                                        Have you ever:
                                    </label>
                                </div>
                                <div className="col-lg-2 text-center">
                                    <label className="font-size-12 font-weight-500 paraClr">
                                        App1
                                    </label>
                                </div>
                                <div className="col-lg-2 text-center">
                                    <label className="font-size-12 font-weight-500 paraClr">
                                        App2
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <label className="font-size-12 paddingLeft15px font-weight-500 paraClr">
                                        Been refused a mortgage on this or any other property
                                    </label>
                                </div>
                                <div className="col-lg-2">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="multiRadio">
                                                <div className="radio-area">
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>Yes
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>No
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
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>Yes
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>No
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '-11px'}}>
                                <div className="col-lg-8">
                                    <label className="font-size-12 paddingLeft15px font-weight-500 paraClr">
                                        Had a court order registered against you
                                    </label>
                                </div>
                                <div className="col-lg-2">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="multiRadio">
                                                <div className="radio-area">
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>Yes
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>No
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
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>Yes
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>No
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '-11px'}}>
                                <div className="col-lg-8">
                                    <label className="font-size-12 paddingLeft15px font-weight-500 paraClr">
                                        Been insolvent, declared bankrupt or made any arrangements with creditors or any
                                        other action pending
                                    </label>
                                </div>
                                <div className="col-lg-2">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="multiRadio">
                                                <div className="radio-area">
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>Yes
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>No
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
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>Yes
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noBorder font-weight-500 paraClr">
                                                        <input type="radio" name="radio"/><br/>No
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '-8px'}}>
                                <div className="col-lg-12">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Details</label>
                                        <textarea type="text" rows="2" className="box-textarea"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="pdf2">
                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionD"></div>
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
                            <div className="row paddingLeft15px" style={{marginTop: '-10px'}}>
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">First Time Buyer</label>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="radioBtnDiv">
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Remortgage House</label>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="radioBtnDiv">
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Second Property </label>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="radioBtnDiv">
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">RP</label>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="radioBtnDiv">
                                                <div className="radio-area">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <label className="box-label font-size-12 font-weight-500 paraClr widthper100">Max Approval Required</label>
                                    <label className="box-label font-size-12 font-weight-500 paraClr widthper100">First Applicant</label>
                                    <label className="box-label font-size-12 font-weight-500 paraClr widthper100">Second Applicant</label>
                                </div>

                                <div className="col-lg-2">
                                    <div className="optionalDiv displayFlex">
                                        <lable className="font-size-12 font-weight-500 paraClr">Yes</lable>
                                        <div className="radioBtnDiv">
                                            <div className="radio-area">
                                                <label class="container">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="optionalDiv displayFlex">
                                        <lable className="font-size-12 font-weight-500 paraClr">Yes</lable>
                                        <div className="radioBtnDiv">
                                            <div className="radio-area">
                                                <label class="container">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="optionalDiv displayFlex">
                                        <lable className="font-size-12 font-weight-500 paraClr">Yes</lable>
                                        <div className="radioBtnDiv">
                                            <div className="radio-area">
                                                <label class="container">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="optionalDiv displayFlex">
                                        <lable className="font-size-12 font-weight-500 paraClr">No</lable>
                                        <div className="radioBtnDiv">
                                            <div className="radio-area">
                                                <label class="container">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="optionalDiv displayFlex">
                                        <lable className="font-size-12 font-weight-500 paraClr">No</lable>
                                        <div className="radioBtnDiv">
                                            <div className="radio-area">
                                                <label class="container">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="optionalDiv displayFlex">
                                        <lable className="font-size-12 font-weight-500 paraClr">No</lable>
                                        <div className="radioBtnDiv">
                                            <div className="radio-area">
                                                <label class="container">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-8">
                                    <label className="font-size-12 font-weight-500 paraClr">If joint application, is title of property to be in
                                        joint names</label>
                                </div>
                                <div className="col-lg-2">
                                    <div className="optionalDiv displayFlex">
                                        <lable className="font-size-12 font-weight-500 paraClr">Yes</lable>
                                        <div className="radioBtnDiv">
                                            <div className="radio-area">
                                                <label class="container">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="optionalDiv displayFlex">
                                        <lable className="font-size-12 font-weight-500 paraClr">No</lable>
                                        <div className="radioBtnDiv">
                                            <div className="radio-area">
                                                <label class="container">
                                                    <input type="radio" name="radio"/><br/>
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
                            <div className="row paddingLeft15px" style={{marginTop: '-15px'}}>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Purchase price/cost of
                                            Building </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Site Price (if applicable) </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Legal & stamp duty (if
                                            applicable) </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Repairs/Renovations </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Other costs* </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Total Expenditure </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-2"></div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Savings* </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Grant </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Gifts </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Other funds* </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>

                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Total Finance </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group paddingLeft15px displayFlex">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">*Please supply details of other cost
                                            and/or savings, or other funding sources </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <input style={{marginLeft:"15px"}} type="text" className="widthper100 box-input"/>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-12">
                                    <div className="displayFlex">
                                        <label className="font-size-12 font-weight-500 paraClr">Is purchase: </label>
                                        <div className="optionalDiv displayFlex" style={{paddingLeft:"5px"}}>
                                            <lable className="font-size-10 font-weight-500 paraClr">Local Authority Housing Scheme</lable>
                                            <div className="radioBtnDiv">
                                                <div className="radio-area width20">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="optionalDiv displayFlex" style={{paddingLeft:"5px"}}>
                                            <lable className="font-size-10 font-weight-500 paraClr">Affordable Housing</lable>
                                            <div className="radioBtnDiv">
                                                <div className="radio-area width20">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="optionalDiv displayFlex" style={{paddingLeft:"5px"}}>
                                            <lable className="font-size-10 font-weight-500 paraClr">Shared Ownership</lable>
                                            <div className="radioBtnDiv">
                                                <div className="radio-area width20">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="optionalDiv displayFlex" style={{paddingLeft:"5px"}}>
                                            <lable className="font-size-10 font-weight-500 paraClr">Affordable Housing</lable>
                                            <div className="radioBtnDiv">
                                                <div className="radio-area width20">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="optionalDiv displayFlex" style={{paddingLeft:"5px"}}>
                                            <lable className="font-size-10 font-weight-500 paraClr">Local Authority Tenant Purchase</lable>
                                            <div className="radioBtnDiv">
                                                <div className="radio-area width20">
                                                    <label class="container">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-4">
                                    <lable className="font-size-12 font-weight-500 paraClr">If affordable House, please provide:</lable>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Purchase Price </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Market Value </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="header-txt"> SECTION TWO (RE-MORTGAGE ONLY) </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px" style={{marginTop: '-15px'}}>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Remortgage amount </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Property value </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Loan Value % </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Year of original purchase </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Current mortgage outstanding </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Age of property </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">New Mortgage required </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Purpose of additional
                                            borrowing </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="header-txt"> MORTGAGE </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px" style={{marginTop: '-15px'}}>
                                <div className="col-lg-8">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">What type of repayment method do you
                                            require </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Other/Initial years </label>
                                        <input type="text" className="box-input width100"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12  font-weight-500 paraClr">Mortgage term (Years)</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="multiRadio displayFlex">
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500 paraClr">
                                                <input className="widthheight" type="radio" name="radio"/><br/>ENDOWMENT MORTGAGE
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500 paraClr">
                                                <input className="widthheight" type="radio" name="radio"/><br/>INTEREST ONLY
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500 paraClr">
                                                <input className="widthheight" type="radio" name="radio"/><br/>OTHER
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500 paraClr">
                                                <input className="widthheight" type="radio" name="radio"/><br/>PENSION BACKED
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="radio-area">
                                            <label class="container noPadding padding3border font-weight-500 paraClr noBorder">
                                                <input className="widthheight" type="radio" name="radio"/><br/>REPAYMENT/ANNUITY
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-8">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Loan amount </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Commencement date </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-8">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Type of rate required </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="floatRight">
                                        <div className="multiRadio displayFlex" style={{"margin-left": "122px"}}>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>TRACKER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>DISCOUNT VARIABLE
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>FIXED
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>PENSION
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>INTEREST ONLY
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="radio-area">
                                                <label class="container noPadding padding3border font-weight-500 paraClr noBorder">
                                                    <input className="widthheight" type="radio" name="radio"/><br/>OTHER
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Fixed for (years) </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="header-txt"> SOLICITOR </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '-15px'}}>
                                <div className="col-lg-12">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Solicitor Name </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group paddingLeft15px"> 
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="displayFlex">
                                        <div className="form-group paddingLeft15px">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                            <input type="text" className="box-input width50"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Country </label>
                                            <input type="text" className="box-input width50"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Phone Number </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Mobile Number </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="form-group paddingLeft15px displayFlex">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Fax Number </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <input style={{marginLeft:"15px"}} type="text" className="box-input widthper100"/>
                                    <input style={{marginLeft:"15px"}} type="text" className="box-input widthper100"/>
                                </div>
                            </div>
                        </div>
                        <div id="pdf2">
                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionE"></div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '-8px'}}>
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="header-txt"> PROPERTY </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '-8px'}}>
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1 </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Country </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <p className="paddingLeft15px font-weight-500 paraClr">See page 2 for address requirements</p>
                                </div>

                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Type of Property </label>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="multiRadio displayFlex">
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border font-weight-500 paraClr">
                                                        <input className="widthheight" type="radio" name="radio"/><br/>ENDOWMENT
                                                        MORTGAGE
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border font-weight-500 paraClr">
                                                        <input className="widthheight" type="radio" name="radio"/><br/>INTEREST
                                                        ONLY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border font-weight-500 paraClr">
                                                        <input className="widthheight" type="radio" name="radio"/><br/>OTHER
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding padding3border font-weight-500 paraClr">
                                                        <input className="widthheight" type="radio" name="radio"/><br/>PENSION
                                                        BACKED
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="radio-area">
                                                    <label class="container noPadding no font-weight-500 paraClr">
                                                        <input className="widthheight" type="radio" name="radio"/><br/>REPAYMENT/ANNUITY
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Estimated completion/closing
                                            date </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">New Property </label>
                                        <div className="multiRadio">
                                            <div className="radio-area radio-area-marginTop">
                                                <label class="container no-border-Right">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Number of floors in block (If
                                            apartment) </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Estimated Value </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="header-txt"> NUMBER OF ROOMS </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '-13px'}}>
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Living rooms </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Bedrooms </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Kitchens </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Dining rooms </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Bedrooms </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Kitchens </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="header-txt"> IF BUYING OR BUILDING A NEW PROPERTY </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '-9px'}}>
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Homebuilders Bond </label>
                                        <div className="multiRadio height20">
                                            <div className="radio-area radio-area-marginTop">
                                                <label class="container no-border-Right">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Part of a development </label>
                                        <div className="multiRadio height20">
                                            <div className="radio-area radio-area-marginTop">
                                                <label class="container no-border-Right">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Premier Guarantee </label>
                                        <div className="multiRadio height20">
                                            <div className="radio-area radio-area-marginTop">
                                                <label class="container no-border-Right">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Is fixed price contract in
                                            place </label>
                                        <div className="multiRadio height20">
                                            <div className="radio-area radio-area-marginTop">
                                                <label class="container no-border-Right">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row paddingLeft15px">
                                        <div className="col-lg-5">
                                            <label className="font-size-12 font-weight-500 paraClr">
                                                Tenure of property
                                            </label>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">Freehold </label>
                                                <div className="multiRadio height20">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio"/><br/>
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">Leasehold </label>
                                                <div className="multiRadio height20">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio"/><br/>
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row paddingLeft15px">
                                        <div className="col-lg-5">
                                            <label className="font-size-12 font-weight-500 paraClr">
                                                Vacant possession
                                            </label>
                                        </div>
                                        <div className="col-lg-">
                                            <div className="form-group">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">Yes </label>
                                                <div className="multiRadio height20">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio"/><br/>
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">No </label>
                                                <div className="multiRadio height20">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio"/><br/>
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">HB47/architects certificate
                                            available </label>
                                        <div className="multiRadio height20">
                                            <div className="radio-area radio-area-marginTop">
                                                <label class="container no-border-Right">
                                                    <input type="radio" name="radio"/><br/>
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
                                                <label className="box-label font-size-12 font-weight-500 paraClr">Direct labour
                                                    construction </label>
                                                <div className="multiRadio width20 height20">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio"/><br/>
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">Employee Labour </label>
                                                <div className="multiRadio height20">
                                                    <div className="radio-area radio-area-marginTop">
                                                        <label class="container no-border-Right">
                                                            <input type="radio" name="radio"/><br/>
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Stage payment required </label>
                                        <div className="multiRadio height20">
                                            <div className="radio-area radio-area-marginTop">
                                                <label class="container no-border-Right">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Number of payments </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Architect’s level of
                                            supervision </label>
                                        <div className="multiRadio height20">
                                            <div className="radio-area radio-area-marginTop">
                                                <label class="container no-border-Right">
                                                    <input type="radio" name="radio"/><br/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Number of years remaining on
                                            lease </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Age of property </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Type of construction </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label className="font-size-12 font-weight-500 paraClr">Private Owner Occupation Only</label>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="displayFlex">
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500 paraClr">Yes </label>
                                                    <div className="multiRadio height20">
                                                        <div className="radio-area radio-area-marginTop">
                                                            <label class="container no-border-Right">
                                                                <input type="radio" name="radio"/><br/>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="box-label font-size-12 font-weight-500 paraClr">No </label>
                                                    <div className="multiRadio height20">
                                                        <div className="radio-area radio-area-marginTop">
                                                            <label class="container no-border-Right">
                                                                <input type="radio" name="radio"/><br/>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="box-label font-size-12 font-weight-500 paraClr">Purpose </label>
                                                <input type="text" className="box-input width50"/>
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
                                                <h5 className="header-txt">PEOPLE OVER 18 LIVING AT THE ADDRESS </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px" style={{marginTop: '-9px'}}>
                                <div className="col-lg-4">
                                    <label className="font-size-12 width100 font-weight-500 paraClr">Full Name </label>
                                    <textarea className="box-textarea widthper100" row="3"></textarea>
                                </div>
                                <div className="col-lg-4">
                                    <label className="font-size-12 width100 font-weight-500 paraClr"> Date of Birth </label>
                                    <textarea className="box-textarea widthper100" row="3"></textarea>
                                </div>
                                <div className="col-lg-4">
                                    <label className="font-size-12 widthlabel200 font-weight-500 paraClr">Relationship with applicant </label>
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
                            <div className="row" style={{marginTop: '-11px'}}>
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">First Name </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Last Name </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Telephone Number </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                        <input type="text" className="box-input width50"/>
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
                            <div className="row" style={{marginTop: '-11px'}}>
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">First Name </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Last Name </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Telephone Number </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Company Name </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">PIBA To Pay</label>
                                        <div className="multiRadio">
                                            <div className="radio-area radio-area-marginTop">
                                                <label class="container no-border-Right">
                                                    <input type="radio" name="radio"/><br/>
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
                            <div className="row" style={{marginTop: '-16px'}}>
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">First Name </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Last Name </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Telephone Number </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="pdf2">
                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionE2"></div>
                                </div>
                            </div>
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
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Name </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Telephone Number </label>
                                        <input type="text" className="box-input width50"/>
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
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Name </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Telephone Number </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionF"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="header-txt">PLEASE COMPLETE THIS SECTION IF ALTERNATIVE
                                                    LENDING IS SOUGHT</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-8">
                                    <label className="font-size-12 font-weight-500 paraClr">Have you had a mortgage on any other property other
                                        than previously detailed? </label>
                                </div>
                                <div className="col-lg-4">
                                    <div className="displayFlex">
                                        <div className="form-group width100">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Yes</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">No</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
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
                                    <div className="form-group paddingLeft15px displayFlex">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">If yes, please give Details </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <input style={{marginLeft:"15px"}} type="text" className="box-input widthper100"/>
                                    <input style={{marginLeft:"15px"}} type="text" className="box-input widthper100"/>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-8">
                                    <label className="font-size-12 font-weight-500 paraClr">Have there ever been any missed Repayments or
                                        revoked Credit Cards or Judgements? </label>
                                </div>
                                <div className="col-lg-4">
                                    <div className="displayFlex">
                                        <div className="form-group width100">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Yes</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">No</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-12">
                                    <label className="font-size-12 font-weight-500 paraClr">
                                        If yes, please specify by completing the following:
                                    </label>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">1. Current Mortgage - Highest Number
                                            of Installment Arrears in last 12 months</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">2. Current Mortgage - Highest Number
                                            of Installment Arrears in last 6 months</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">3. Other Facilities - Highest Number
                                            of Other Arrears in last 12 months</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-12">
                                    <label className="font-size-12 font-weight-500 paraClr">
                                        Have any judgement proceedings relating to debt ever been brought against you or
                                        any Judgments made against you?
                                    </label>
                                    <div className="displayFlex">
                                        <div className="form-group width100">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Yes</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">No</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <label className="font-size-12 font-weight-500 paraClr">
                                        If yes, please specify by completing the following:
                                    </label>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">1. Judgments - Total Value Judgments
                                            Outstanding in last 24 months</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-8">
                                    <label className="font-size-12 font-weight-500 paraClr">Have you ever had a mortgage application declined on
                                        this or any other property?</label>
                                </div>
                                <div className="col-lg-4">
                                    <div className="displayFlex">
                                        <div className="form-group width100">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Yes</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">No</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
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
                                    <div className="form-group paddingLeft15px displayFlex">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">If yes, please give Details </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <input style={{marginLeft:"15px"}} type="text" className="box-input widthper100"/>
                                    <input style={{marginLeft:"15px"}} type="text" className="box-input widthper100"/>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-8">
                                    <label className="font-size-12 font-weight-500 paraClr">Are there any matters which should be brought to the
                                        Lenders Attention?</label>
                                </div>
                                <div className="col-lg-4">
                                    <div className="displayFlex">
                                        <div className="form-group width100">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Yes</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">No</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
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
                                    <div className="form-group paddingLeft15px displayFlex">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">If yes, please give Details </label>
                                        <input type="text" className="box-input"/>
                                    </div>
                                    <input style={{marginLeft:"15px"}} type="text" className="box-input widthper100"/>
                                    <input style={{marginLeft:"15px"}} type="text" className="box-input widthper100"/>
                                </div>
                            </div>
                        </div>
                        <div id="pdf2">
                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionG"></div>
                                </div>
                            </div>
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
                            <div className="row paddingLeft15px">
                                <div className="col-lg-8">
                                    <label className="font-size-12 font-weight-500 paraClr">Declarations have been signed</label>
                                </div>
                                <div className="col-lg-4">
                                    <div className="displayFlex">
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Yes</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">No</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-8">
                                    <label className="font-size-12 font-weight-500 paraClr">Customer has consented to Consumer Credit
                                        Act</label>
                                </div>
                                <div className="col-lg-4">
                                    <div className="displayFlex">
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Yes</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">No</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-8">
                                    <label className="font-size-12 font-weight-500 paraClr">Customer has consented to Data Protection
                                        Act </label>
                                </div>
                                <div className="col-lg-4">
                                    <div className="displayFlex">
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Yes</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">No</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
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
                                                <h5 className="header-txt">CONSENTS – (CONSENT(S) BY APPLICANTS TO
                                                    BROKER</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-12">
                                    <div className="displayFlex">
                                        <label className="font-size-12 width100 font-weight-500 paraClr">At Home</label>
                                        <div className="form-group">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="displayFlex">
                                        <label className="font-size-12 width100 font-weight-500 paraClr">At Work</label>
                                        <div className="form-group">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="displayFlex">
                                        <label className="font-size-12 font-weight-500 paraClr labelWidth200">Leave message at home</label>
                                        <div className="form-group">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="displayFlex">
                                        <label className="font-size-12 labelWidth170 font-weight-500 paraClr">Contact employer</label>
                                        <div className="form-group">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="displayFlex">
                                        <label className="font-size-12 width100 font-weight-500 paraClr">Email</label>
                                        <div className="form-group">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="displayFlex">
                                        <label className="font-size-12 width100 font-weight-500 paraClr">SMS</label>
                                        <div className="form-group">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="displayFlex">
                                        <label className="font-size-12 font-weight-500 paraClr labelwidth210">Consented to be contacted</label>
                                        <div className="form-group">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
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
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Day of Month to Debit Account</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <br/>
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
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Bank Name</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row paddingLeft15px">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Name(s) of Account</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Bank Sort Code</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Account Number</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Country </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <br/>
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
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 1 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Date Signed </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 2 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Address Line 3 </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">County </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Country </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="pdf2">
                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionG2"></div>
                                </div>
                            </div>


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


                            <div className="row paddingLeft15px">
                                <div className="col-lg-12">
                                    <label className="font-size-12 font-weight-500 paraClr">
                                        Some mortgage lenders may request that another party guarantee the loan. If
                                        another individual is to guarantee the loan, please enter their details in this
                                        section.
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">First Name(s) </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px ">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Date of Birth </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <div className="displayFlex widthper100">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Address</label>
                                            <input type="text" className="box-input widthper100"/>
                                        </div>
                                    </div>
                                    <input style={{marginLeft:"15px"}} type="text" className="box-input widthper100"/>
                                    <input style={{marginLeft:"15px"}} type="text" className="box-input widthper100"/>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Occupation </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Surname </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Home Telephone </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Work Telephone </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Mobile Phone </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">E-mail </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Basic Income </label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Relationship to applicant(s) </label>
                                        <input type="text" className="box-input width50"/>
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


                            <div className="row paddingLeft15px">
                                <div className="col-lg-10">
                                    <label className="font-size-12 font-weight-500 paraClr">
                                        Are you aware of any health issues that may affect your ability to work and meet
                                        the repayments of this facility?
                                    </label>
                                </div>
                                <div className="col-lg-2 marginLeft40">
                                    <div className="displayFlex">
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">Yes</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label className="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="box-label font-size-12 font-weight-500 paraClr">No</label>
                                            <div className="multiRadio">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label className="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row paddingLeft15px marginTop-17">
                                <div className="col-lg-12">
                                    <div className="form-group displayFlex">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">If yes, please provide
                                            details</label>
                                            <input type="text" className="box-input widthper100"/>
                                    </div>
                                    <input type="text" className="box-input widthper100"/>
                                </div>
                            </div>

                            <div className="row paddingLeft15px ">
                                <div className="col-lg-12">
                                    <div className="displayFlex">
                                        <div className="form-group">
                                            <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Are you aware of any possible
                                                changes to your future circumstances that would affect your ability to
                                                meet repayments on this facility?
                                                <div className="displayFlex">
                                                    <div className="form-group formwidth10">
                                                        <label className="box-label font-size-12 font-weight-500 paraClr">Yes</label>
                                                        <div className="multiRadio height20">
                                                            <div className="radio-area radio-area-marginTop">
                                                                <label className="container no-border-Right">
                                                                    <input type="radio" name="radio"/><br/>
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group formwidth10">
                                                        <label className="box-label font-size-12 font-weight-500 paraClr">No</label>
                                                        <div className="multiRadio height20">
                                                            <div className="radio-area radio-area-marginTop">
                                                                <label className="container no-border-Right">
                                                                    <input type="radio" name="radio"/><br/>
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label className="box-label font-size-12 font-weight-500 paraClr">If yes, please provide
                                                        details</label>
                                                    <input type="text" className="box-input widthper100"/>
                                                </div>
                                                <input type="text" className="box-input widthper100"/>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row paddingLeft15px ">
                                <div className="col-lg-12">
                                    <div className="waringDiv">
                                        <label>
                                            Warning: If you do not meet the repayments on your credit agreement, your
                                            account will go into arrears. This may affect your credit rating, which may
                                            limit your ability to access credit in the future.
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


                            <div className="row paddingLeft15px">
                                <div className="col-lg-12">
                                    <label className="font-size-12 font-weight-500 paraClr">
                                        I/we hereby declare that I/we have read and understood this part of the mortgage
                                        application form and that the information I/we have tendered herein is correct.
                                    </label>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Signed</label>
                                        
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                    <span className="paddingLeft15px font-weight-500 paraClr">(Applicant 2 if applicable) </span>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Dated</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Signed</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 font-weight-500 paraClr">Dated</label>
                                        <input type="text" className="box-input width50"/>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="header-txt">NOTES TO PART ONE OF THE APPLICATION FORM
                                                    EMPLOYMENT SECTOR (NOTE 1) </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Agriculture, Hunting,
                                            Forestry </label>
                                        <span className="font-size-12 font-weight-500 paraClr">A</span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Fishing</label>
                                        <span className="font-size-12 font-weight-500 paraClr">B</span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Mining and
                                            Quarring</label>
                                        <span className="font-size-12 font-weight-500 paraClr">C</span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Manufacturing</label>
                                        <span className="font-size-12 font-weight-500 paraClr">D</span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Electricity, Gas and Water
                                            Supply</label>
                                        <span className="font-size-12 font-weight-500 paraClr">E</span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Construction</label>
                                        <span className="font-size-12 font-weight-500 paraClr">F</span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Wholesale and Retail
                                            Trade</label>
                                        <span className="font-size-12 font-weight-500 paraClr">G</span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Hotel and
                                            Restaurant</label>
                                        <span className="font-size-12 font-weight-500 paraClr">H</span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Transport, Storage and
                                            Communications </label>
                                        <span className="font-size-12 font-weight-500 paraClr">I</span>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Financial
                                            Intermediation</label>
                                        <span className="font-size-12 font-weight-500 paraClr">J</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Real Estate, Renting and
                                            Business Activities</label>
                                        <span className="font-size-12 font-weight-500 paraClr">K</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Public Administration and
                                            Defence</label>
                                        <span className="font-size-12 font-weight-500 paraClr">L</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Education </label>
                                        <span className="font-size-12 font-weight-500 paraClr">M</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Health and Social
                                            Work</label>
                                        <span className="font-size-12 font-weight-500 paraClr">N</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Other Services </label>
                                        <span className="font-size-12 font-weight-500 paraClr">O</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Private Household with
                                            Employed Persons </label>
                                        <span className="font-size-12 font-weight-500 paraClr">P</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Extra-territorial
                                            Organisations and Bodies </label>
                                        <span className="font-size-12 font-weight-500 paraClr">Q</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="header" style={{"background-color": "#FAED9E"}}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="header-txt">NOTES TO PART ONE OF THE APPLICATION FORM
                                                    OCCUPATION (NOTE 2) </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Manager or
                                            Administrator</label>
                                        <span className="font-size-12 font-weight-500 paraClr">1</span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Professional </label>
                                        <span className="font-size-12 font-weight-500 paraClr">2</span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Associate Professional and
                                            Technical</label>
                                        <span className="font-size-12 font-weight-500 paraClr">3</span>
                                    </div>
                                    <div className="form-group paddingLeft15px">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Clerical and
                                            Secretarial</label>
                                        <span className="font-size-12 font-weight-500 paraClr">4</span>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Craft and Related</label>
                                        <span className="font-size-12 font-weight-500 paraClr">5</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Personal and Protective
                                            Services</label>
                                        <span className="font-size-12 font-weight-500 paraClr">6</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Sales</label>
                                        <span className="font-size-12 font-weight-500 paraClr">7</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Plant and Machine
                                            Operatives</label>
                                        <span className="font-size-12 font-weight-500 paraClr">8</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="box-label font-size-12 widthper100 font-weight-500 paraClr">Other </label>
                                        <span className="font-size-12 font-weight-500 paraClr">9</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div id="pdf2">

                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionH"></div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-12">
                                        <textarea className="box-textarea textAreaHeightWidth" type="text" row="20">
                                        </textarea>
                                </div>
                            </div>
                        </div>
                        <div id="pdf2">
                            <div className="row">
                                <div className="col-lg-12 paddingLeft16px">
                                    <div className="sectionI"></div>
                                </div>

                                <div className="row paddingLeft16px">
                                    <div className="col-lg-12">
                                        <div className="header">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <h5 className="header-txt">CHECKLIST OF SUPPORTING DOCUMENTS</h5>
                                                </div>
                                                <div className="col-lg-3">
                                                    <h5 className="header-txt" style={{"margin-left": "-151px"}}> FIRST
                                                        APPLICANT</h5>
                                                </div>
                                                <div className="col-lg-3">
                                                    <h5 className="header-txt" style={{"margin-left": "-253px"}}>SECOND
                                                        APPLICANT</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <form>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Proof of Identity - Passport or Driving
                                                Licence </label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">proof of Residence - A recent utility
                                                bill* </label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Income Certificate completed by your
                                                Employer </label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">P60</label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Last 3 payslips </label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">*No more than 3 months old ie. ESB,
                                                telephone, Credit Card Statement </label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Last 3 years audited accounts (For Self
                                                Employed)</label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Statement of Affairs</label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Confirmation of TAX Affaris</label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Last 3 months Bank Statements</label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Copy of Separation Agreement or
                                                Divorce</label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Copy of Term Loans</label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Copy of Mortgage Statement</label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Evidence of Deposit</label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row paddingLeft33">
                                        <div className="col-lg-8">
                                            <label className="font-size-12 font-weight-500 paraClr">Gift Letter</label>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center">
                                            <div className="multiRadio height20">
                                                <div className="radio-area radio-area-marginTop">
                                                    <label class="container no-border-Right">
                                                        <input type="radio" name="radio"/><br/>
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


export default DemoForm;