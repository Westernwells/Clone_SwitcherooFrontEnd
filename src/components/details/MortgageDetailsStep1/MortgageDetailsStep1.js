import React, { useState } from "react";
import { Row, Col, Select, Button, Modal } from "antd";
import "./MortgageDetailsStep1.css";

const { Option } = Select;
function MortgageDetailsStep1(props) {
  const [q4, setQ4] = useState(false);
  const [visible, setVisible] = useState(false)
  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };
  const [questions, setQuestions] = useState({
    situation: "",
    propAddress: "",
    appType: "",
    city: "",
    eircode: "",
    bedrooms:'',
    county:''
  });
  const county = [
    "Carlow",
    "Cavan",
    "Clare",
    "Cork City",
    "Cork County",
    "Denegal",
    "Dublin 1",
    "Dublin 2",
    "Dublin 3",
    "Dublin 4",
    "Dublin 5",
    "Dublin 6",
    "Dublin 6w",
    "Dublin 7",
    "Dublin 8",
    "Dublin 9",
    "Dublin 10",
    "Dublin 11",
    "Dublin 12",
    "Dublin 13",
    "Dublin 14",
    "Dublin 15",
    "Dublin 16",
    "Dublin 17",
    "Dublin 18",
    "Dublin 20",
    "Dublin 22",
    "Dublin 24",
    "Dublin Country(North)",
    "Dublin Country(South)",
    "Dublin Country(West)",
    "Galway City",
    "Galway Country",
    "Kerry",
    "Kildare",
    "Kilkenny",
    "Laois",
    "Leitrim City",
    "Limerick Country",
    "Longford",
    "Louth",
    "Mayo",
    "Meath",
    "Monaghan",
    "Offaly",
    "Roscommon",
    "Sligo",
    "Tipperary",
    "Waterford City",
    "Waterford Country",
    "Westmeath",
    "Wexford",
    "Wicklow"
  ];
  const bedrooms = [1, 2, 3, 4, 5, "5+"];
  function clickRadio(e) {
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  }
  var handleQ = e => {
    var radioContainers = e.target.parentNode.parentNode.childNodes;

    setQ4(!q4);
    setQuestions({ ...questions, [e.target.name]: e.target.value });
    if (e.target.name === "constructionNature" && e.target.value === "Self build") {
      setVisible(true);
    }
    // validateRadio(e.target.name, e.target.value);
    for (var i = 0; i < radioContainers.length; i++) {
      var input = radioContainers[i].childNodes[0];
      if (input.checked) {
        input.parentNode.style.background = "#fb9500";
        input.parentNode.style.border = "2px solid #fb9500";
      } else {
        input.parentNode.style.background = "lightgray";
        input.parentNode.style.border = "2px solid gray";
      }
    }
  };
  function handleInput(e) {
    setQuestions({ ...questions, [e.target.name]: e.target.value });
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
    setQuestions({ ...questions, county: value });
  }
  const handleRoute = route => {
    props.history.push(route);
  };

  const onsubmitForm = () => {
    let { set_Personal_Details, user } = props.data;
    console.log(questions);
    if (questions.situation != "" && questions.appType != "") {
      // props.getData(questions)
      props.MortgageFrom(questions.situation);
      props.isMortgageFrom(1);
      props.setProgress(
        questions.situation == "First time Borrower"
          ? 50
          : questions.situation === "Mortgage Switcher"
          ? 33
          : questions.situation == "House Mover"
          ? 25
          : 0
      );
      // console.log("! form data", {
      //   userId: user._id,
      //   ...questions
      // });
      // props.submitData(questions)
      set_Personal_Details({
        userId:user._id,
        ...questions
      })
    } else {
      alert("Please Enter Atleast one User Type!");
    }
  };
  function SelfBuildPopup() {

    return (
      <div>
        <Modal
          title="Notification"
          visible={visible}
          onOk={handleOk}
          // onCancel={handleCancel}
          footer={[

            <Button key="submit" type="primary" onClick={handleOk}>
              Ok
            </Button>,
          ]}
        >
          <h5>sorry we don’t do self build properties yet – check back with us later</h5>

        </Modal>
      </div>
    );
  }

  return (
    <div className="MortgageDetailsStep1">
      <SelfBuildPopup />
      {console.log(questions)}
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">
            So, Let's get the details on what you are looking for
          </h1>
          <h6 className="h61">Application Type</h6>
        </Col>
        <Col lg={20} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.peopleOnMortgage === "one"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="appType"
              id="q11"
              className=""
              // checked={questions.peopleOnMortgage === "one"}
              value="Single"
            />
            <label for="q11">Single</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.peopleOnMortgage === "two"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="appType"
              id="q12"
              className=""
              value="Joint"
            />
            <label for="q12">Joint</label>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">What is your situation?</h6>
        </Col>
        <Col lg={24} className="q1 q3">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.purposeOfMortgage === "First Time Buyer"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="situation"
              id="mortf"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="First time Borrower"
            />
            <label for="mortf">First time Borrower</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.purposeOfMortgage === "House Mover"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="situation"
              id="mortf1"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="Mortgage Switcher"
            />
            <label for="mortf1">Mortgage Switcher</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.purposeOfMortgage === "Switcher"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="situation"
              id="mortf2"
              // checked={
              //   questions.purposeOfMortgage === "Switcher"
              // }
              className=""
              value="House Mover"
            />
            <label for="mortf2">House Mover</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.purposeOfMortgage === "Switcher"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="situation"
              id="mortf3"
              // checked={
              //   questions.purposeOfMortgage === "Switcher"
              // }
              className=""
              value="Looking for an Investment Property"
            />
            <label for="mortf3">Looking for an Investment Property</label>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">
            What kind of property are you looking to mortgage?
          </h6>
        </Col>
        <Col lg={24} className="q1 q3">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.purposeOfMortgage === "First Time Buyer"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="kindOfProp"
              id="q31"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Apartment"
            />
            <label for="q31">Apartment</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.purposeOfMortgage === "House Mover"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="kindOfProp"
              id="q32"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="House"
            />
            <label for="q32">House</label>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">Nature of construction?</h6>
        </Col>
        <Col lg={24} className="q1 q4">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.constructionNature === "First Time Buyer"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="constructionNature"
              id="q41"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Part of a new development"
            />
            <label for="q41">Part of a new development</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.constructionNature === "House Mover"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="constructionNature"
              id="q42"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="Second hand home"
            />
            <label for="q42">Second hand home</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.constructionNature === "Switcher"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="constructionNature"
              id="q43"
              // checked={
              //   questions.purposeOfMortgage === "Switcher"
              // }
              className=""
              value="Self build"
            />
            <label for="q43">Self build</label>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">How many bedrooms?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className={questions.bedrooms != '' ? "select-option1 selectPro malta" : " select-option1 selectPro "}
              defaultValue="Select from options"
              onChange={value =>
                setQuestions({ ...questions, bedrooms: value })
              }
              name="bedrooms"
            >
              {bedrooms.map((value, index) => {
                return (
                  <Option key={index} value={value}>
                    {value}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">
            Please provide address of property you are looking to mortgate if
            available
          </h6>
        </Col>
        <Col lg={24}>
          <div className={questions.propAddress ? "input bg-orange" : "input"}>
            <input
              type="text"
              onChange={e => handleInput(e)}
              name="propAddress"
              placeholder="Address Line 1"
            />
          </div>
          <div className={questions.city ? "input bg-orange" : "input"}>
            <input
              type="text"
              onChange={e => handleInput(e)}
              name="city"
              placeholder="City"
            />
          </div>
          <div className="input">
            {/* <input type="text" name="Country" placeholder="County" /> */}
            <Select
              // className="select-option1 select-option-big"
              className={questions.county != '' ? "select-option1 selectPro select-option-big malta" : " select-option1 selectPro select-option-big "}

              defaultValue="County"
              onChange={e => handleInput(e)}
              name="county"
              onChange={value => setQuestions({ ...questions, county: value })}
            >
              {county.map((value, index) => {
                return (
                  <Option key={index} value={value}>
                    {value}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className={questions.eircode ? "input bg-orange" : "input"}>
            <input
              type="text"
              onChange={e => handleInput(e)}
              name="eircode"
              placeholder="Eircode"
            />
          </div>
        </Col>

        <Col lg={24}>
          <h1 className="heading1 heading2">Ok got it!</h1>
        </Col>

        <Col lg={10} offset={0}>
          <div className="btn-div">
            <Button
              style={{ height: "40px" }}
              onClick={() => window.history.back()}
              className="btn1"
            >
              Back
            </Button>
            <Button
              // onClick={() => handleRoute("/home/details/s2")}
              onClick={onsubmitForm}
              // onClick={() => {
              //   // props.changeProfRoute(1)
              // }}
              className="btn2"
            // loading={props.financial_data.loading}
            // disabled={
            //   (questions.filedBankruptcy &&
            //     questions.failedToPayLoan &&
            //     questions.purposeOfMortgage &&
            //     questions.peopleOnMortgage === "one") ||
            //     (questions.filedBankruptcy &&
            //       questions.failedToPayLoan &&
            //       questions.purposeOfMortgage &&
            //       questions.peopleOnMortgage === "two" &&
            //       questions.firstNameSecondApplicant &&
            //       questions.lastNameSecondApplicant &&
            //       questions.emailSecondApplicantValidation &&
            //       questions.emailSecondApplicantreValidation)
            //     ? false
            //     : true
            // }
            >
              Save & Continue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default MortgageDetailsStep1;


