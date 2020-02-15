import React, { useState } from "react";
import { Row, Col, Form, Button } from "antd";
import "./step4.css";
import Logo from "./logo.png";
import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js'
import html2canvas from 'html2canvas';
const $ = window.$;

function StepFour(props) {

  const [formData, setFormData] = useState({
    "userId": "5e39849559c07b2328110439",
    "appType": "single",
    "situation": "mover",
    "investmentProp": "",
    "kindOfProp": "house",
    "constructionNature": "part of a new development",
    "selfBuild": "",
    "bedrooms": 2,
    "propAddress": "Ireland",
    "city": "West coast",
    "county": "pds",
    "eircode": "54723",
    "mortDetails": {
        "currentPropType": "house",
        "bedroomsCurrentProp": 3,
        "propYear": 2010,
        "howOldProp": 5,
        "purchasePrice": 750000,
        "currentValue": 850000,
        "lenderName": "KBC",
        "accNumber": 154245524,
        "outstandingBal": 20000,
        "startingYear": 2010,
        "rateType": "variable",
        "yearsLeftOnMortgage": 14,
        "interestRate": "10%",
        "monthlyRepay": 2000,
        "missedPayments": "no",
        "currentHomeEquity": 15000,
        "estimatedAgetFees": "furniture",
        "netEquity": 20000,
        "valueOfMortProp": 20000,
        "estimatedSurveyFees": 15000,
        "additionalBorrowings": 15000,
        "borrowingPurpose": "furniture",
        "additionalSavings": 20000,
        "sourceOfSavings": "inheritance",
        "estimatedLoan": 250000,
        "borrowingYears": 7,
        "additionalProps": "yes",
        "numOfAddProps": 1
    },
    "additionalProperties": [
        {
            "propAddress": "Ireland",
            "city": "Dublin",
            "county": "Dublin County",
            "eircode": 215346,
            "currentValue": 300000,
            "outstandingBal": 10000,
            "numOfBedrooms": 1,
            "yearsLeftOnMortgage": 4,
            "lenderName": "KBC",
            "accNumber": 15454643,
            "typeOfMort": "annuity",
            "rateType": "variable",
            "interestRate": "15%",
            "monthlyrRent": 3000,
            "missedPayments": "no"
        },
        {
            "propAddress": "Ireland",
            "city": "Dublin",
            "county": "Dublin County",
            "eircode": 215346,
            "currentValue": 300000,
            "outstandingBal": 10000,
            "numOfBedrooms": 1,
            "yearsLeftOnMortgage": 4,
            "lenderName": "KBC",
            "accNumber": 15454643,
            "typeOfMort": "annuity",
            "rateType": "variable",
            "interestRate": "15%",
            "monthlyrRent": 3000,
            "missedPayments": "no"
        }
    ],
    "personalDetails": {
        "currentAddress": {
            "address": "Ireland",
            "city": "Dublin",
            "county": "Dublin County",
            "eircode": 1231534
        },
        "familyHome": "no",
        "timePeriod": 2,
        "prevAddress": {
            "address": "Ireland",
            "city": "Dublin",
            "county": "Dublin County",
            "eircode": 1231534
        },
        "maritalStatus": "single",
        "numOfChildren": 1,
        "agesOfChildren": [
            {
                "age": 23
            }
        ],
        "peopleOver17": [
            {
                "fullName": "Richard Henderics",
                "dateOfBirth": "21/06/1995",
                "relationWithApp": "friend"
            }
        ]
    },
    "employmentDetails": {
        "empType": "self employed",
        "publicOrPrivate": "public",
        "natureOfBusiness": "education",
        "sector": "education",
        "tradingName": "insaf foundation",
        "yearEstablished": 2010,
        "percOfOwnership": 75,
        "businessAddress": "Dublin North",
        "city": "Dublin",
        "county": "North",
        "eircode": "48832",
        "accountancyFirm": "Testing",
        "contactPerson": "Asad Sheikh",
        "accountantAddress": "Ireland",
        "accountantCity": "Dublin",
        "accountantCounty": "Dublin County",
        "accountantEircode": "2367412",
        "accountantPhone": 178236413,
        "audAccAvailability": "yes",
        "taxAffairs": "yes",
        "durationOfbusiness": {
            "years": 10,
            "months": 2
        },
        "prevEmpName": "Emmet",
        "position": "temporary",
        "prevEmpAddress": "Ireland",
        "prevEmpCity": "Dublin",
        "prevEmpCounty": "Dublin County",
        "prevEmpEircode": "72364",
        "durationWithPrevEmp": {
            "years": 4,
            "months": 2
        }
    },
    "incomeDetails": {
        "audAccYear": 2016,
        "currency": "Euro",
        "netProfit": 723642,
        "paidDeptInterest": 25000,
        "depreciaton": "3%",
        "renumeration": "test",
        "tradingProfit": 72364,
        "avgTradingprofit": 72364,
        "taxibleIncome": 72364,
        "avgTaxIncome": 72364
    },
    "monthlyOutgoings": {
        "childMining": 700,
        "spousalMaintenance": 800,
        "schoolFee": 2500,
        "clubSubcriptions": "No"
    },
    "creditCommitments": {
        "currentAccIns": "AIB",
        "credUnionLoc": "Dublin",
        "institutionName": "Kbc",
        "branchAddress": "Dublin",
        "branchCity": "SGD",
        "branchCounty": "Dublin County",
        "branchEircode": 234324,
        "accNum": 12341234324,
        "sortCode": 214321,
        "accDuration": 5,
        "firstPaymentAcc": "yes",
        "accForFirstMortPay": "",
        "monthlyCardCosts": "yes",
        "loanOrOverdraftCosts": [
            {
                "accType": "overdraft",
                "accPurpose": "savings",
                "lenderName": "AIB",
                "creditUnionLoc": "Dublin",
                "outstandingBal": "",
                "maxOutstandingBal": 750000,
                "monthlyRepayments": 3500,
                "arrears": 4000,
                "finalPayDate": "25/06/2014",
                "clearing": "yes"
            },
            {
                "accType": "overdraft",
                "accPurpose": "savings",
                "lenderName": "AIB",
                "creditUnionLoc": "Dublin",
                "outstandingBal": "",
                "maxOutstandingBal": 750000,
                "monthlyRepayments": 3500,
                "arrears": "",
                "finalPayDate": "",
                "clearing": ""
            }
        ]
    },
    "savingsAccounts": [
        {
            "accInstitution": "AIB",
            "accNum": 712632336,
            "currentBal": 750000,
            "monthlySavings": 5000
        },
        {
            "accInstitution": "AIB",
            "accNum": 712632336,
            "currentBal": 750000,
            "monthlySavings": 5000
        }
    ],
    "declarations": {
        "placeOfBirth": "America",
        "ppsNum": "234567WW",
        "durationInIreland": 5,
        "requireVisa": "yes",
        "typeOfVisa": "student",
        "visaExpDate": "28/07/2024",
        "citizenOfUS": "yes",
        "taxResidentOfUS": "yes",
        "tin": "123-123-3214",
        "futureChanges": "no",
        "healthIssues": "yes",
        "healthIssueDetails": "blah blah blah",
        "bankruptcy": "no",
        "refusedMortgage": "no"
    },
    "applicant2": {
        "personalDetails": {
            "currentAddress": {
                "address": "Ireland",
                "city": "Dublin",
                "county": "Dublin County",
                "eircode": 1231534
            },
            "familyHome": "no",
            "timePeriod": 2,
            "prevAddress": {
                "address": "Ireland",
                "city": "Dublin",
                "county": "Dublin County",
                "eircode": 1231534
            },
            "maritalStatus": "single",
            "numOfChildren": 1,
            "agesOfChildren": [
                {
                    "age": 23
                }
            ],
            "peopleOver17": [
                {
                    "fullName": "Richard Henderics",
                    "dateOfBirth": "21/06/1995",
                    "relationWithApp": "friend"
                }
            ]
        },
        "employmentDetails": {
            "empType": "self employed",
            "publicOrPrivate": "public",
            "natureOfBusiness": "education",
            "sector": "education",
            "tradingName": "insaf foundation",
            "yearEstablished": 2010,
            "percOfOwnership": 75,
            "businessAddress": "Dublin North",
            "city": "Dublin",
            "county": "North",
            "eircode": "48832",
            "accountancyFirm": "Testing",
            "contactPerson": "Asad Sheikh",
            "accountantAddress": "Ireland",
            "accountantCity": "Dublin",
            "accountantCounty": "Dublin County",
            "accountantEircode": "2367412",
            "accountantPhone": 178236413,
            "audAccAvailability": "yes",
            "taxAffairs": "yes",
            "durationOfbusiness": {
                "years": 10,
                "months": 2
            },
            "prevEmpName": "Emmet",
            "position": "temporary",
            "prevEmpAddress": "Ireland",
            "prevEmpCity": "Dublin",
            "prevEmpCounty": "Dublin County",
            "prevEmpEircode": "72364",
            "durationWithPrevEmp": {
                "years": 4,
                "months": 2
            }
        },
        "incomeDetails": {
            "audAccYear": 2016,
            "currency": "Euro",
            "netProfit": 723642,
            "paidDeptInterest": 25000,
            "depreciaton": "3%",
            "renumeration": "test",
            "tradingProfit": 72364,
            "avgTradingprofit": 72364,
            "taxibleIncome": 72364,
            "avgTaxIncome": 72364
        },
        "monthlyOutgoings": {
            "childMining": 700,
            "spousalMaintenance": 800,
            "schoolFee": 2500,
            "clubSubcriptions": "No"
        },
        "creditCommitments": {
            "currentAccIns": "AIB",
            "credUnionLoc": "Dublin",
            "institutionName": "Kbc",
            "branchAddress": "Dublin",
            "branchCity": "SGD",
            "branchCounty": "Dublin County",
            "branchEircode": 234324,
            "accNum": 12341234324,
            "sortCode": 214321,
            "accDuration": 5,
            "firstPaymentAcc": "yes",
            "accForFirstMortPay": "",
            "monthlyCardCosts": "yes",
            "loanOrOverdraftCosts": [
                {
                    "accType": "overdraft",
                    "accPurpose": "savings",
                    "lenderName": "AIB",
                    "creditUnionLoc": "Dublin",
                    "outstandingBal": "",
                    "maxOutstandingBal": 750000,
                    "monthlyRepayments": 3500,
                    "arrears": 4000,
                    "finalPayDate": "25/06/2014",
                    "clearing": "yes"
                },
                {
                    "accType": "overdraft",
                    "accPurpose": "savings",
                    "lenderName": "AIB",
                    "creditUnionLoc": "Dublin",
                    "outstandingBal": "",
                    "maxOutstandingBal": 750000,
                    "monthlyRepayments": 3500,
                    "arrears": "",
                    "finalPayDate": "",
                    "clearing": ""
                }
            ]
        },
        "savingsAccounts": [
            {
                "accInstitution": "AIB",
                "accNum": 712632336,
                "currentBal": 750000,
                "monthlySavings": 5000
            },
            {
                "accInstitution": "AIB",
                "accNum": 712632336,
                "currentBal": 750000,
                "monthlySavings": 5000
            }
        ],
        "declarations": {
            "placeOfBirth": "America",
            "ppsNum": "234567WW",
            "durationInIreland": 5,
            "requireVisa": "yes",
            "typeOfVisa": "student",
            "visaExpDate": "28/07/2024",
            "citizenOfUS": "yes",
            "taxResidentOfUS": "yes",
            "tin": "123-123-3214",
            "futureChanges": "no",
            "healthIssues": "yes"
        }
    }

  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData)
  }

  const exportPdf = () => {

  var element = document.getElementById('application_div');
  var opt = {
    margin:       0.3,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 0.5 },
    html2canvas:  { scale:  2},
    jsPDF:        { unit: 'in', format: 'a3', orientation: 'portrait' }
  };
html2pdf(element, opt);

}

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Button type="primary" onClick={handleSubmit}>Submit Application</Button>
      <Button type="primary" onClick={exportPdf}>Download PDF</Button>
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
              <textarea className="cover-text" name="userId" value={formData.userId} onChange={handleChange} placeholder="PIBA Member" rows="4" cols="50" />
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
              <i><p className="right-main-header-txt"> Application Form</p></i>
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
          </div>
          <div className="left-pane">
            <div className="form-group">
              <label className="box-label">Telephone</label>
              <input type="text" className="box-input" />
            </div>
          </div>

          <div className="right-pane">
            <div className="form-group">
              <label className="box-label">Telephone</label>
              <input type="text" className="box-input" />
            </div>
          </div>
          <div className="full-content">
            <div className="row">
              <div className="form-group">
                <label className="box-label">Email</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Authorisation No.</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <div className="row">
              <p>Disclosure of intermediary Status (where applicable). (e.g. only acts on behalf of one lender or one insurance company)</p>
              <p>If this application has been introduced to you, by a thord party (including an appointed introducer) please provide the introducers name and address.</p>
            </div>
          </div>
          <div className="header">
            <h5 className="header-txt"> EXPLANATORY TEXT</h5>
          </div>
          <br />
          <div className="full-content">
            <div className="row">
              <p>This application form is divided into two parts. The first part captures information about you, the applicant. The second part gives important information about mortgages offered by a given mortgage lender, including statutory warnings. In part two your signature is required in relation to your application for a mortgage loan and your consent is sought in relation to various matters.</p>
              <h6 className="custom-sub-header">Please ensure that all applicants sign part one and two of the application.</h6>
            </div>
          </div>

          <br /><br />
          <div className="right-main-header-container">
            <div className="right-main-header-top"></div>
            <div className="right-main-header-bottom">
              <i><p className="right-main-header-txt"> PART ONE</p></i>
            </div>

          </div>
          <br /> <br />

          <div className="header">
            <h5 className="header-txt"> NFORMATION ABOUT APPLICANT</h5>
          </div>
          <br />
          <p>Please indicate the reason for your application</p>
          <div className="full-content">
            <div className="left-pane">
              <label class="container">First time buyer &nbsp;
                  <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>

            <div className="right-pane">
              <label class="container">Re-Mortgage &nbsp;
                  <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="left-pane">
              <label class="container">Purchase &nbsp;
                  <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="right-pane">
              <label class="container">Residential Investment Property &nbsp;
                  <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="left-pane">
              <label class="container">Let to Buy &nbsp;
                  <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="right-pane">
              <label class="container">Top-up &nbsp;
                  <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="left-pane">
              <label class="container">Switcher &nbsp;
                  <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="right-pane">
              <label class="container">Other &nbsp;
                  <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>

            <p>If ‘Other’ please specify</p>
            <div className="form-group">
              <textarea type="text" rows="3" className="box-textarea" />
            </div>
            <br />
            <p>Failure to disclose the above information may result in the withdrawal of a lender appointment.</p>
            <label>Have you or any of your staff met the customer face-to-face?</label> &nbsp; &nbsp;
          <label class="container">Yes &nbsp;
                  <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label> &nbsp;
            <label class="container">No &nbsp;
                  <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="pagebreak"> </div>
          <div className="full-content">
            <div className="left-pane">
              <br />
              <div className="main-header-container">
                <div className="main-header-top"></div>
                <div className="main-header-bottom">
                  <i><p className="main-header-txt"> Section A – Personal Details</p></i>
                </div>
              </div>

              <br />
              <div className="header-container">
                <h1 className="main-header">APPLICATION ONE</h1>
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
                <label className="box-label">Marital Status</label>
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
              <br /><br />
              <div className="header">
                <h5 className="header-txt"> CURRENT ADDRESS</h5>
              </div>
              <br />
              <div className="form-group">
                <label className="box-label">Are You</label>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />OWNER
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />TENANT
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />WITH PARENTS/RELATIVES OR FRIENDS
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="box-label">Rent &euro;</label>
                <input type="text" className="box-input custom-width-input" style={{ width: 66 + 'px' }} /> pm
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

              <br />
              <div className="header">
                <h5 className="header-txt"> CORRESPONDENCE ADDRESS</h5>
              </div>
              <br />
              <div className="form-group">
                <label class="container left-pad-5">First time buyer &nbsp;
                  <input type="radio" name="radio" />
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
              <div className="header">
                <h5 className="header-txt"> PREVIOUS ADDRESS</h5>(if less than 3 years at existing address)
            </div>
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


              <br />
              <div className="header">
                <h5 className="header-txt"> CONTACT DETAILS</h5>
              </div>
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


              <div className="main-header-container">
                <div className="main-header-top"></div>
                <div className="main-header-bottom">
                  <i><p className="main-header-txt"> Section B – Income & Employment</p></i>
                </div>
              </div>
              <br />

              <div className="header">
                <h5 className="header-txt"> CURRENT INCOMES</h5>
              </div>
              <br />
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

              <br /><br />
              <div className="header">
                <h5 className="header-txt"> PREVIOUS EMPLOYMENT</h5> (if less than 1 years at current employer)
            </div>
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

              <br />
              <div className="header">
                <h5 className="header-txt"> SELF EMPLOYED DETAILS</h5>
              </div>
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

              <br />
              <div className="main-header-container">
                <div className="main-header-top"></div>
                <div className="main-header-bottom">
                  <i><p className="main-header-txt"> Section C – Financial & Credit History</p></i>
                </div>
              </div>


              <br />
              <div className="form-group">
                <label className="box-label">Current Bank/Building Society</label>
                <input type="text" className="box-input" value={formData.creditCommitments.currentAccIns} onChange={handleChange}/>
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


















            <div className="right-pane">
              <br />
              <div className="header-space"></div>
              <div>
                <div className="header-container">
                  <h1 className="main-header">APPLICATION TWO</h1>
                </div>
                <div className="form-group">
                  <label class="container left-pad-5">Guarantor &nbsp;
                  <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
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
                  <label className="box-label">Marital Status</label>
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
              </div>
              <br />
              <div className="header">
                <h5 className="header-txt"> CURRENT ADDRESS</h5>
              </div>
              <br />
              <div className="form-group">
                <label className="box-label">Are You</label>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />OWNER
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />TENANT
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />WITH PARENTS/RELATIVES OR FRIENDS
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="box-label">Rent &euro;</label>
                <input type="text" className="box-input custom-width-input" style={{ width: 66 + 'px' }} /> pm
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

              <br />
              <div className="header">
                <h5 className="header-txt"> CORRESPONDENCE ADDRESS</h5>
              </div>
              <br />
              <div className="form-group">
                <label class="container left-pad-5">First time buyer &nbsp;
                  <input type="radio" name="radio" />
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
              <div className="header">
                <h5 className="header-txt"> PREVIOUS ADDRESS</h5>(if less than 3 years at existing address)
            </div>
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

              <br />
              <div className="header">
                <h5 className="header-txt"> CONTACT DETAILS</h5>
              </div>
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

              <div className="header-space"></div>
              <div className="header">
                <h5 className="header-txt"> CURRENT INCOMES</h5>
              </div>
              <br />
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



              <br /><br />
              <div className="header">
                <h5 className="header-txt"> PREVIOUS EMPLOYMENT</h5> (if less than 1 years at current employer)
            </div>
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
                <label className="box-label">County</label>
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

              <br />
              <div className="header">
                <h5 className="header-txt"> SELF EMPLOYED DETAILS</h5>
              </div>
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



              <br />
              <div className="header-space"></div>
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


          <div className="custom-space"></div>
          <div className="header">
            <h5 className="header-txt"> DETAILS OF INTRODUCING INTERMEDIARY</h5>
          </div>
          <br />
          <div className="full-content">
            <table style={{ width: "100%" }}>
              <tr>
                <th>Financial Institution</th>
                <th>A/C Number</th>
                <th>Monthly Savings</th>
                <th>App1</th>
                <th>App2</th>
                <th>Balance</th>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" value={formData.savingsAccounts[0].accInstitution} onChange={handleChange}/>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" value={formData.savingsAccounts[0].accNum} onChange={handleChange}/>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input"  value={formData.savingsAccounts[0].monthlySavings} onChange={handleChange} />
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" value={formData.savingsAccounts[0].currentBal} onChange={handleChange}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" value={formData.savingsAccounts[1].accInstitution} onChange={handleChange}/>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" value={formData.savingsAccounts[1].accNum} onChange={handleChange}/>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" value={formData.savingsAccounts[1].monthlySavings} onChange={handleChange}/>
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" value={formData.savingsAccounts[1].currentBal} onChange={handleChange}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" />
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" />
                  </div>
                </td>
              </tr>

            </table>
          </div>
          <br />
          <div className="wrapper">
            <div className="left-content">
              <div className="header">
                <h5 className="header-txt">  MORTGAGE 1</h5>
              </div>
              <div className="form-group">
                <label className="box-label">Inception Date</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Mortgage Term</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Est. Sale Price &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Are you selling this property </label>
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
                <label className="box-label">Name of Lender</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Mortgage Acct. No.</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Address of Lender</label>
                <textarea type="text" rows="3" className="box-textarea" />
              </div>
              <div className="form-group">
                <label className="box-label">Property Value &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Balance Due &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Year Purchased</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">If fixed, for how many years</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Payments missed in last 6 months</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Payments missed in last 12 months</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Payments per month</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Rental Income per month &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Address of Property</label>
                <textarea type="text" rows="3" className="box-textarea" />
              </div>
              <div className="form-group">
                <label className="box-label">Type of Mortgage </label>
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
              <div className="form-group">
                <label className="box-label">Type of Ratee </label>
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
                    <input type="radio" name="radio" /><br />other
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>

            </div>
            <div className="middle-content">
              <div className="header">
                <h5 className="header-txt">  MORTGAGE 1</h5>
              </div>
              <div className="form-group">
                <label className="box-label">Inception Date</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Mortgage Term</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Est. Sale Price &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Are you selling this property </label>
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
                <label className="box-label">Name of Lender</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Mortgage Acct. No.</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Address of Lender</label>
                <textarea type="text" rows="3" className="box-textarea" />
              </div>
              <div className="form-group">
                <label className="box-label">Property Value &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Balance Due &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Year Purchased</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">If fixed, for how many years</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Payments missed in last 6 months</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Payments missed in last 12 months</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Payments per month</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Rental Income per month &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Address of Property</label>
                <textarea type="text" rows="3" className="box-textarea" />
              </div>
              <div className="form-group">
                <label className="box-label">Type of Mortgage </label>
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
              <div className="form-group">
                <label className="box-label">Type of Ratee </label>
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
                    <input type="radio" name="radio" /><br />other
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="header">
                <h5 className="header-txt">  MORTGAGE 1</h5>
              </div>
              <div className="form-group">
                <label className="box-label">Inception Date</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Mortgage Term</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Est. Sale Price &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Are you selling this property </label>
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
                <label className="box-label">Name of Lender</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Mortgage Acct. No.</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Address of Lender</label>
                <textarea type="text" rows="3" className="box-textarea" />
              </div>
              <div className="form-group">
                <label className="box-label">Property Value &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Balance Due &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Year Purchased</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">If fixed, for how many years</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Payments missed in last 6 months</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Payments missed in last 12 months</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Payments per month</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Rental Income per month &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Address of Property</label>
                <textarea type="text" rows="3" className="box-textarea" />
              </div>
              <div className="form-group">
                <label className="box-label">Type of Mortgage </label>
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
              <div className="form-group">
                <label className="box-label">Type of Ratee </label>
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
                    <input type="radio" name="radio" /><br />other
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <br />
          <p>Is property registered in any name other than that of the applicant</p>

          <div className="form-group">
            <label className="box-label">Details</label>
            <textarea type="text" rows="3" className="box-textarea" />
          </div>

          <br />
          <div className="header">
            <h5 className="header-txt"> FINANCIAL COMMITMENTS</h5>
          </div>
          <br />

          <div className="form-group">
            <label className="box-label">How many existing loans do you have</label>
            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
          </div>
          <div className="form-group">
            <label className="box-label">Amount Borrowed</label>
          </div>

          <div className="wrapper2">
            <div className="left-content2">
              <div className="form-group">
                <label className="box-label">Applicant 1 &euro;</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <div className="right-content2">
              <div className="form-group">
                <label className="box-label">Applicant 1 &euro;</label>
                <input type="text" className="box-input" />
              </div>
            </div>
          </div>

          <div className="full-content">
            <table style={{ width: "100%", fontSize: "9px", textAlign: "center" }}>
              <tr>
                <th>Financial Institution</th>
                <th>A/C Number</th>
                <th>App1</th>
                <th>App2</th>
                <th>Amount Owing</th>
                <th>Payment (Mly)</th>
                <th>Purpose</th>
                <th>Final Payment Date</th>
                <th>Refinance?</th>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>

                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label"></label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label"></label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
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
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>

                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label"></label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label"></label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
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
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>

                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="radio-area-2">
                    <label class="container">
                      <input type="radio" name="radio" /><br />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label">&euro;</label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label"></label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <label className="box-label"></label>
                    <input type="text" className="box-input" style={{ width: "inherit" }} />
                  </div>
                </td>
                <td>
                  <div className="form-group">
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
                </td>
              </tr>

            </table>
          </div>

          <div className="form-group">
            <label className="box-label">Rent &euro;</label>
            <input type="text" className="box-input" />
            <label className="box-label">Maintenance Payments &euro;</label>
            <input type="text" className="box-input" />
            <label className="box-label">Total &euro;</label>
            <input type="text" className="box-input" />
          </div>
          <br />
          <div className="header">
            <h5 className="header-txt"> CREDIT HISTORY</h5>
          </div>
          <br />

          <table style={{ width: "100%" }}>
            <tr style={{ textAlign: "center" }}>
              <th>Have you ever:</th>
              <th>App 1</th>
              <th>App 2</th>
            </tr>
            <tr>
              <td>Been refused a mortgage on this or any other property</td>
              <td style={{ textAlign: "center" }}>
                <div className="form-group">
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
              </td>
              <td style={{ textAlign: "center" }}>
                <div className="form-group">
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
              </td>
            </tr>
            <tr>
              <td>Had a court order registered against you</td>
              <td style={{ textAlign: "center" }}>
                <div className="form-group">
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
              </td>
              <td style={{ textAlign: "center" }}>
                <div className="form-group">
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
              </td>
            </tr>
            <tr>
              <td>Been insolvent, declared bankrupt or made any arrangements with creditors or any other action pending</td>
              <td style={{ textAlign: "center" }}>
                <div className="form-group">
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
              </td>
              <td style={{ textAlign: "center" }}>
                <div className="form-group">
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
              </td>
            </tr>
            <tr>
              <td>Had arrears on your existing mortgage with the last 24 months</td>
              <td style={{ textAlign: "center" }}>
                <div className="form-group">
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
              </td>
              <td style={{ textAlign: "center" }}>
                <div className="form-group">
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
              </td>
            </tr>
          </table>

          <div className="form-group">
            <label className="box-label">Details</label>
            <textarea type="text" rows="3" className="box-textarea" />
          </div>
          <br />
          <div className="main-header-container">
            <div className="main-header-top"></div>
            <div className="main-header-bottom">
              <i><p className="main-header-txt"> Section D – Mortgage Details</p></i>
            </div>
          </div>
          <br /><br />

          <div className="header">
            <h5 className="header-txt"> CUSTOMER TYPE</h5>
          </div>
          <br />

          <div className="wrapper">
            <div className="left-content">
              <input type="radio" name="radio" />&emsp;
            <label class="container">First Time Buyer &nbsp;
  
              <span class="checkmark"></span>
              </label> <br />
              <input type="radio" name="radio" />&emsp;
            <label class="container">Remortgage House &nbsp;
  
              <span class="checkmark"></span>
              </label> <br />
              <input type="radio" name="radio" />&emsp;
            <label class="container">Second Property &nbsp;
  
              <span class="checkmark"></span>
              </label> <br />
              <input type="radio" name="radio" />&emsp;
            <label class="container">RP &nbsp;
  
              <span class="checkmark"></span>
              </label>
            </div>

            <div className="right-content">
              <div className="form-group">

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
                </div> &emsp;
              <label>Max Approval Required</label>
              </div><br />
              <div className="form-group">

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
                </div> &emsp;
              <label>First Applicant</label>
              </div><br />
              <div className="form-group">

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
                </div> &emsp;
              <label>Second Applicant</label>
              </div>
            </div>
          </div>
          <br />
          <div className="form-group">

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
            </div> &emsp;
            <label>If joint application, is title of property to be in joint names</label>
          </div>


          <br />
          <div className="header">
            <h5 className="header-txt"> SECTION ONE (PURCHASE ONLY)</h5>
          </div>
          <br />

          <div className="wrapper">
            <div className="left-content2">
              <div className="form-group">
                <label className="box-label">Purchase price/cost of Building &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Site Price (if applicable) &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Legal & stamp duty (if applicable) &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Repairs/Renovations &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Other costs*  &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Total Expenditure  &euro;</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <div className="right-content2">
              <div className="form-group">
                <label className="box-label">Savings*  &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Grant  &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Gifts  &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Other funds*  &euro;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Total Finance  &euro;</label>
                <input type="text" className="box-input" />
              </div>
            </div>
          </div>


          <label className="box-label">Please supply details of other cost and/or savings, or other funding sources</label>
          <br />
          <div className="form-group">
            <textarea type="text" rows="3" className="box-textarea" />
          </div>
          <br />
          <div>
            <div className="form-group">
              <label>Is purchase:</label> &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />Local Authority Housing Scheme
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />Affordable Housing
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />Shared Ownership
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />Affordable Housing
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />Local Authority Tenant Purchase
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="box-label" >Rent &euro;</label>
            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
            <label className="box-label">Maintenance Payments &euro;</label>
            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
            <label className="box-label">Total  &euro;</label>
            <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
          </div>
          <br />
          <div className="header">
            <h5 className="header-txt"> SECTION ONE (PURCHASE ONLY)</h5>
          </div>
          <br />
          <div className="form-group">
            <label className="box-label">Remortgage amount &euro;</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Property value  &euro;</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Loan Value %</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Year of original purchase</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Current mortgage outstanding &euro;</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Age of property</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">New Mortgage required &euro;</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Purpose of additional borrowing</label>
            <input type="text" className="box-input" />
          </div>

          <br />
          <div className="header">
            <h5 className="header-txt"> MORTGAGE </h5>
          </div>
          <br />

          <div className="wrapper">
            <div className="left-content2">
              <div className="form-group">
                <label className="box-label">Purpose of additional borrowing</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Mortgage term (Years)</label>
                <input type="text" className="box-input" />
                <div className="form-group">

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
              <br />
              <div className="form-group">
                <label className="box-label">Loan amount &euro;</label>
                <input type="text" className="box-input" />
              </div>

              <div className="form-group">
                <label className="box-label">Type of rate required </label>
                <input type="text" className="box-input" />
              </div>
              <div className="float-right">
                <div className="form-group">
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
                </div>
              </div>

            </div>
            <div className="right-content2">
              <div className="form-group">
                <label className="box-label">Other/Initial years</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Commencement date</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Fixed for (years)</label>
                <input type="text" className="box-input" />
              </div>
            </div>
          </div>
          <br />
          <div className="header">
            <h5 className="header-txt"> SOLICITOR </h5>
          </div>
          <br />
          <div className="form-group">
            <label className="box-label">Solicitor Name</label>
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
            <input type="text" className="box-input" />
            <label className="box-label">Country</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Phone Number</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Mobile Number</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Fax Number</label>
            <input type="text" className="box-input" />
          </div>

          <br />
          <div className="main-header-container">
            <div className="main-header-top"></div>
            <div className="main-header-bottom">
              <i><p className="main-header-txt"> Section E – Property Details</p></i>
            </div>
          </div>
          <br />

          <div className="header">
            <h5 className="header-txt"> PROPERTY </h5>
          </div>

          <br />

          <div className="wrapper2">
            <div className="left-content2">
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
            </div>
            <div className="right-content2">
              <div className="form-group">
                <label className="box-label">Type of Property</label>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />NEWLY BUILT HOUSE
                <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />ONE OFF BUILT HOUSE
                <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />APARTMENT
                <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />SECOND HAND PROPERTY
                <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="box-label">Estimated completion/closing date</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">New Property</label> &nbsp;&nbsp;&nbsp;
              <label>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">Number of floors in block (If apartment)</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Estimated Value &euro;</label>
                <input type="text" className="box-input" />
              </div>
            </div>
          </div>

          <br />

          <div className="header">
            <h5 className="header-txt"> NUMBER OF ROOMS </h5>
          </div>

          <br />

          <div className="wrapper2">
            <div className="left-content2">
              <div className="form-group">
                <label className="box-label">Living rooms </label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Bedrooms</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Kitchens</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <div className="right-content2">
              <div className="form-group">
                <label className="box-label">Dining rooms</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Bathrooms</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Utility rooms</label>
                <input type="text" className="box-input" />
              </div>
            </div>
          </div>

          <br />

          <div className="header">
            <h5 className="header-txt"> IF BUYING OR BUILDING A NEW PROPERTY </h5>
          </div>
          <br />
          <div className="wrapper2">
            <div className="left-content2">
              <div className="form-group">
                <label className="box-label">Homebuilders Bond</label> &nbsp;&nbsp;&nbsp;
              <label>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">Part of a development</label> &nbsp;&nbsp;&nbsp;
              <label>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">Premier Guarantee</label> &nbsp;&nbsp;&nbsp;
              <label>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">Is fixed price contract in place</label> &nbsp;&nbsp;&nbsp;
              <label>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">Tenure of property</label> &nbsp;&nbsp;&nbsp;
              <label>Freehold&nbsp;&nbsp;
                <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>&nbsp;&nbsp;
              <label>Leasehold&nbsp;&nbsp;
                <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">Vacant possession</label> &nbsp;&nbsp;&nbsp;
              <label>Yes&nbsp;&nbsp;
                <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>&nbsp;&nbsp;
              <label>No&nbsp;&nbsp;
                <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">HB47/architects certificate available</label> &nbsp;&nbsp;&nbsp;
              <label>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">Private Owner Occupation Only</label> &nbsp;&nbsp;&nbsp;
              <label>Yes&nbsp;&nbsp;
                <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>&nbsp;&nbsp;
              <label>No&nbsp;&nbsp;
                <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="right-content2">
              <div className="form-group">

                <label>Direct labour construction&nbsp;&nbsp;
                <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>&nbsp;&nbsp;
              <label>Employee Labour&nbsp;&nbsp;
                <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">Stage payment required</label> &nbsp;&nbsp;&nbsp;
              <label>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">Number of payments</label>
                <input type="text" className="box-input" />
              </div>

              <div className="form-group">
                <label className="box-label">Architect’s level of supervision</label> &nbsp;&nbsp;&nbsp;
              <label>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">Number of years remaining on lease</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Age of property</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Purpose</label>
                <input type="text" className="box-input" />
              </div>

            </div>
          </div>
          <div className="form-group">
            <label className="box-label">Type of construction</label>
            <input type="text" className="box-input" />
          </div>

          <br />

          <div className="header">
            <h5 className="header-txt"> PEOPLE OVER 18 LIVING AT THE ADDRESS</h5>
          </div>
          <br />
          <table style={{ width: "100%" }}>
            <tr>
              <th style={{ width: "40%" }}>Full Name</th>
              <th style={{ width: "30%" }}>Date of Birth</th>
              <th style={{ width: "30%" }}>Relationship with applicant</th>
            </tr>
            <tr>
              <td><input type="text" className="box-input" /></td>
              <td><input type="text" className="box-input" /></td>
              <td><input type="text" className="box-input" /></td>
            </tr>
            <tr>
              <td><input type="text" className="box-input" /></td>
              <td><input type="text" className="box-input" /></td>
              <td><input type="text" className="box-input" /></td>
            </tr>
          </table>
          <br />
          <div className="header">
            <h5 className="header-txt"> SELLING AGENT DETAILS</h5>
          </div>
          <br />

          <div className="wrapper2">
            <div className="left-content2">
              <div className="form-group">
                <label className="box-label">First Name;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Last Name</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Telephone Number</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">County</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <div className="right-content2">
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
                <label className="box-label">Country</label>
                <input type="text" className="box-input" />
              </div>
            </div>
          </div>

          <br />
          <div className="header">
            <h5 className="header-txt"> VALUER DETAILS</h5>
          </div>
          <br />

          <div className="wrapper2">
            <div className="left-content2">
              <div className="form-group">
                <label className="box-label">First Name;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Last Name</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Telephone Number</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">County</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Company Name</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <div className="right-content2">
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
                <label className="box-label">Country</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">PIBA To Pay</label> &nbsp;&nbsp;&nbsp;
              <label>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <br />
          <div className="header">
            <h5 className="header-txt"> CONTACT FOR ACCESS FOR VALUATION</h5>
          </div>
          <br />

          <div className="wrapper2">
            <div className="left-content2">
              <div className="form-group">
                <label className="box-label">First Name;</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Last Name</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Telephone Number</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">County</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <div className="right-content2">
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
                <label className="box-label">Country</label>
                <input type="text" className="box-input" />
              </div>
            </div>
          </div>

          <br />
          <div className="main-header-container">
            <div className="main-header-top"></div>
            <div className="main-header-bottom">
              <i><p className="main-header-txt"> Section E – Property Details</p></i>
            </div>
          </div>
          <br />

          <div className="header">
            <h5 className="header-txt"> ARCHITECT DETAILS</h5>
          </div>
          <br />
          <div className="wrapper2">
            <div className="left-content2">
              <div className="form-group">
                <label className="box-label">Name</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <div className="right-content2">
              <div className="form-group">
                <label className="box-label">Telephone Number</label>
                <input type="text" className="box-input" />
              </div>
            </div>
          </div>


          <div className="header">
            <h5 className="header-txt"> BUILDER DETAILS</h5>
          </div>
          <br />
          <div className="wrapper2">
            <div className="left-content2">
              <div className="form-group">
                <label className="box-label">Name</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <div className="right-content2">
              <div className="form-group">
                <label className="box-label">Telephone Number</label>
                <input type="text" className="box-input" />
              </div>
            </div>
          </div>


          <div className="main-header-container">
            <div className="main-header-top"></div>
            <div className="main-header-bottom">
              <i><p className="main-header-txt"> Section F – Alternative Lending</p></i>
            </div>
          </div>
          <br />


          <div className="form-group">
            <label className="box-label">Have you had a mortgage on any other property other than previously detailed?</label>
            &nbsp;&nbsp;&nbsp;<div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />Yes
                <span class="checkmark"></span>
              </label>
            </div> &nbsp;&nbsp;&nbsp;
          <div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />No
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="box-label">If yes, please give Details</label>
            <textarea type="text" rows="3" className="box-textarea" />
          </div>
          <div className="form-group">
            <label className="box-label">Have there ever been any missed Repayments or revoked Credit Cards or Judgements?</label>
            &nbsp;&nbsp;&nbsp;<div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />Yes
                <span class="checkmark"></span>
              </label>
            </div> &nbsp;&nbsp;&nbsp;
          <div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />No
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <p>If yes, please specify by completing the following:</p>
          <div className="form-group">
            <label className="box-label">1. Current Mortgage - Highest Number of Installment Arrears in last 12 months &euro;</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">2. Current Mortgage - Highest Number of Installment Arrears in last 6 months &euro;</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">3. Other Facilities - Highest Number of Other Arrears in last 12 months  &euro;</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Have any judgement proceedings relating to debt ever been brought against you or any Judgments made against you?</label>
            &nbsp;&nbsp;&nbsp;<div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />Yes
                <span class="checkmark"></span>
              </label>
            </div> &nbsp;&nbsp;&nbsp;
          <div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />No
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <p>If yes, please specify by completing the following:</p>
          <div className="form-group">
            <label className="box-label">1. Judgments - Total Value Judgments Outstanding in last 24 months  &euro;</label>
            <input type="text" className="box-input" />
          </div>

          <div className="form-group">
            <label className="box-label">Have you ever had a mortgage application declined on this or any other property?</label>
            &nbsp;&nbsp;&nbsp;<div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />Yes
                <span class="checkmark"></span>
              </label>
            </div> &nbsp;&nbsp;&nbsp;
          <div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />No
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="box-label">If yes, please give Details</label>
            <textarea type="text" rows="3" className="box-textarea" />
          </div>
          <div className="form-group">
            <label className="box-label">Are there any matters which should be brought to the Lenders Attention?</label>
            &nbsp;&nbsp;&nbsp;<div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />Yes
                <span class="checkmark"></span>
              </label>
            </div> &nbsp;&nbsp;&nbsp;
          <div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />No
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="box-label">If yes, please give Details</label>
            <textarea type="text" rows="3" className="box-textarea" />
          </div>

          <br />
          <div className="main-header-container">
            <div className="main-header-top"></div>
            <div className="main-header-bottom">
              <i><p className="main-header-txt"> Section G – Declarations</p></i>
            </div>
          </div>
          <br />
          <div className="form-group">
            <label className="box-label">Declarations have been signed</label>
            &nbsp;&nbsp;&nbsp;<div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />Yes
                <span class="checkmark"></span>
              </label>
            </div> &nbsp;&nbsp;&nbsp;
          <div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />No
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="box-label">Customer has consented to Consumer Credit Act</label>
            &nbsp;&nbsp;&nbsp;<div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />Yes
                <span class="checkmark"></span>
              </label>
            </div> &nbsp;&nbsp;&nbsp;
          <div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />No
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="box-label">Customer has consented to Data Protection Act</label>
            &nbsp;&nbsp;&nbsp;<div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />Yes
                <span class="checkmark"></span>
              </label>
            </div> &nbsp;&nbsp;&nbsp;
          <div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />No
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <br />
          <div className="header">
            <h5 className="header-txt"> CONSENTS – CONSENT(S) BY APPLICANTS TO BROKER</h5>
          </div>
          <br />
          <div className="form-group">
            <label className="box-label">At Home</label> &nbsp;&nbsp;&nbsp;
              <label>
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="form-group">
            <label className="box-label">At Work</label> &nbsp;&nbsp;&nbsp;
              <label>
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="form-group">
            <label className="box-label">Leave message at home</label> &nbsp;&nbsp;&nbsp;
              <label>
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="form-group">
            <label className="box-label">Contact employer</label> &nbsp;&nbsp;&nbsp;
              <label>
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="form-group">
            <label className="box-label">Email</label> &nbsp;&nbsp;&nbsp;
              <label>
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="form-group">
            <label className="box-label">SMS</label> &nbsp;&nbsp;&nbsp;
              <label>
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="form-group">
            <label className="box-label">Consented to be contacted</label> &nbsp;&nbsp;&nbsp;
              <label>
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <br />
          <div className="header">
            <h5 className="header-txt"> DIRECT DEBITS</h5>
          </div>
          <br />
          <div className="form-group">
            <label className="box-label">Day of Month to Debit Account</label>
            <input type="text" className="box-input" />
          </div>
          <br />
          <div className="header">
            <h5 className="header-txt"> BANK DETAILS</h5>
          </div>
          <br />
          <div className="form-group">
            <label className="box-label">Bank Name</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Name(s) of Account</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Bank Sort Code</label>
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Account Number</label>
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
            <input type="text" className="box-input" />
          </div>
          <div className="form-group">
            <label className="box-label">Country</label>
            <input type="text" className="box-input" />
          </div>


          <br />
          <div className="header">
            <h5 className="header-txt"> CUSTOMER ADDRESS</h5>
          </div>
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
            <label className="box-label">Date Signed</label>
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
          <div className="header">
            <h5 className="header-txt"> GUARANTOR DETAILS</h5>
          </div>
          <br />
          <p>Some mortgage lenders may request that another party guarantee the loan. If another individual is to guarantee the loan, please enter their details in this section.</p>
          <div className="wrapper2">
            <div className="left-content2">
              <div className="form-group">
                <label className="box-label">First Name(s)</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Date of Birth</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Address</label>
                <textarea type="text" rows="3" className="box-textarea" />
              </div>
              <div className="form-group">
                <label className="box-label">Occupation</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Relationship to applicant(s)</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <div className="right-content2">
              <div className="form-group">
                <label className="box-label">Surname</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Home Telephone</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Work Telephone</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Mobile Phone</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">E-mail</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Basic Income &euro;</label>
                <input type="text" className="box-input" />
              </div>
            </div>
          </div>

          <br />
          <div className="header">
            <h5 className="header-txt">THESE QUESTIONS MUST BE ANSWERED</h5>
          </div>
          <br />
          <div className="form-group">
            <label className="box-label">Are you aware of any health issues that may affect your ability to work and meet the repayments of this facility?</label>
            &nbsp;&nbsp;&nbsp;<div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />Yes
                <span class="checkmark"></span>
              </label>
            </div> &nbsp;&nbsp;&nbsp;
          <div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />No
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="box-label">If yes, please provide details</label>
            <textarea type="text" rows="3" className="box-textarea" />
          </div>
          <div className="form-group">
            <label className="box-label">Are you aware of any possible changes to your future circumstances that would affect your ability to meet repayments on this facility?</label>
            &nbsp;&nbsp;&nbsp;<div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />Yes
                <span class="checkmark"></span>
              </label>
            </div> &nbsp;&nbsp;&nbsp;
          <div className="radio-area-2">
              <label class="container">
                <input type="radio" name="radio" />No
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="box-label">If yes, please provide details</label>
            <textarea type="text" rows="3" className="box-textarea" />
          </div>
          <br />
          <div className="warn-card">
            <p>Warning: If you do not meet the repayments on your credit agreement, your account will go into arrears. This may affect your credit rating, which may limit your ability to access credit in the future.</p>
          </div>

          <br />
          <div className="header">
            <h5 className="header-txt">PART 1 DECLARATION</h5>
          </div>
          <br />
          <p>
            I/we hereby declare that I/we have read and understood this part of the mortgage application form and that the information I/we have tendered herein is correct.
        </p>

          <div className="wrapper2">
            <div className="left-content2 ">
              <div className="form-group">
                <label className="box-label">Signed</label>
                <input type="text" className="box-input" />
              </div>
              <p>(Applicant 2 if applicable)</p>
              <div className="form-group">
                <label className="box-label">Signed</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <div className="right-content2">
              <div className="form-group">
                <label className="box-label">Dated</label>
                <input type="text" className="box-input" />
              </div>
              <p>&nbsp;</p>
              <div className="form-group">
                <label className="box-label">Dated</label>
                <input type="text" className="box-input" />
              </div>
            </div>
          </div>


          <br />
          <div className="header">
            <h5 className="header-txt">NOTES TO PART ONE OF THE APPLICATION FORM . EMPLOYMENT SECTOR (NOTE 1)</h5>
          </div>
          <br />

          <table style={{ width: "100%" }}>
            <tr>
              <td>Agriculture, Hunting, Forestry</td>
              <td>A</td>
              <td>Financial Intermediation</td>
              <td>J</td>
            </tr>
            <tr>
              <td>Fishing</td>
              <td>B</td>
              <td>Real Estate, Renting and Business Activities</td>
              <td>K</td>
            </tr>
            <tr>
              <td>Mining and Quarring</td>
              <td>C</td>
              <td>Public Administration and Defence</td>
              <td>L</td>
            </tr>
            <tr>
              <td>Manufacturing</td>
              <td>D</td>
              <td>Education</td>
              <td>M</td>
            </tr>
            <tr>
              <td>Electricity, Gas and Water Supply</td>
              <td>E</td>
              <td>Health and Social Work</td>
              <td>N</td>
            </tr>
            <tr>
              <td>Construction</td>
              <td>F</td>
              <td>Other Services</td>
              <td>O</td>
            </tr>
            <tr>
              <td>Wholesale and Retail Trade</td>
              <td>G</td>
              <td>Private Household with Employed Persons</td>
              <td>P</td>
            </tr>
            <tr>
              <td>Hotel and Restaurant</td>
              <td>H</td>
              <td>Extra-territorial Organisations and Bodies</td>
              <td>Q</td>
            </tr>
            <tr>
              <td>Transport, Storage and Communications</td>
              <td>I</td>
              <td></td>
              <td></td>
            </tr>

          </table>

          <br />
          <div className="header">
            <h5 className="header-txt">NOTES TO PART ONE OF THE APPLICATION FORM. OCCUPATION (NOTE 2)</h5>
          </div>
          <br />

          <table style={{ width: "100%" }}>
            <tr>
              <td>Manager or Administrator</td>
              <td>1</td>
              <td>Craft and Related</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Professional</td>
              <td>2</td>
              <td>Personal and Protective Services</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Associate Professional and Technical</td>
              <td>3</td>
              <td>Sales</td>
              <td>7</td>
            </tr>
            <tr>
              <td>Clerical and Secretarial</td>
              <td>4</td>
              <td>Plant and Machine Operatives</td>
              <td>8</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Other</td>
              <td>9</td>
            </tr>

          </table>

          <br />
          <div className="main-header-container">
            <div className="main-header-top"></div>
            <div className="main-header-bottom">
              <i><p className="main-header-txt"> Section H – Notes & Messages</p></i>
            </div>

          </div>
          <br />
          <div className="form-group">
            <textarea type="text" rows="15" className="box-textarea2" />
          </div>
          <br />
        </div>
      </div>
      </Form>

    </div>

  );
}
export default StepFour;
