import React, { useState, useEffect } from "react";
import axios from "axios";
import SecondCapture3 from "./img/SecondCapture3.png";
// import SecondCapture4 from "./img/SecondCapture4.PNG";
import ThirdCapture3 from "./img/ThirdCapture3.PNG";
import pencil1 from "./img/pencil1.PNG";
import home from "./img/home.PNG";
import "./second.css";

const Second = () => {
  // Parent State
  const [formData, setFormData] = useState({
    objectFromDb: {},
    lan: "",
    debtorName: "",
    debtorAddress: "",
    city: "",
    postCode: "",
    country: "",
    IBAN: "",
    typeOfPayment: "Recurrent",
    date1: "",
    date2: ""
  });

  //   create an array with 24 empty strings to use in "useState" for various input fields
  let twentyFour_empty_strings = [];
  for (let i = 0; i < 24; i++) {
    twentyFour_empty_strings.push("");
  }
  //   create an array with 12 empty strings to use in "useState" for various input fields
  let twelve_empty_strings = [];
  for (let i = 0; i < 12; i++) {
    twelve_empty_strings.push("");
  }

  //   declare states for each input
  const [lan, setLan] = useState(["", "", "", "", "", "", "", "", ""]);
  const [debtorName, setDebtorName] = useState(twentyFour_empty_strings);
  const [debtorAddressR1, setDebtorAddressR1] = useState(
    twentyFour_empty_strings
  );
  const [debtorAddressR2, setDebtorAddressR2] = useState(
    twentyFour_empty_strings
  );
  const [debtorAddressR3, setDebtorAddressR3] = useState(
    twentyFour_empty_strings
  );
  const [debtorAddressR4, setDebtorAddressR4] = useState(
    twentyFour_empty_strings
  );
  const [city, setCity] = useState(twelve_empty_strings);
  const [postCode, setPostCode] = useState(twelve_empty_strings);
  const [country, setCountry] = useState(twelve_empty_strings);
  const [IBAN, setIBAN] = useState(twentyFour_empty_strings);
  const [date1, setDate1] = useState(["", "", ""]);
  const [date2, setDate2] = useState(["", "", ""]);

  // Move focus to next input field
  const moveFocusAhead = (e, index, maxIndex) => {
    const length = e.target.value.length,
      maxLength = e.target.maxLength;
    if (length === maxLength && index !== maxIndex)
      e.target.nextSibling.focus();
  };

  // trim type="number" to specified maxLength
  const trimToMaxLength = e => {
    const length = e.target.value.length;
    const maxLength = e.target.maxLength;

    if (length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
  };

  //   move focus to first and only child node of next sibling of current input
  const moveFocusAhead2 = (e, index, maxIndex) => {
    const length = e.target.value.length,
      maxLength = e.target.maxLength;
    if (length === maxLength && index !== maxIndex) {
      e.target.parentNode.nextSibling.childNodes[0].focus();
    }
  };

  //   onChange handeler for Loacl Account Number
  const onChangeForLan = (e, index) => {
    const newLan = lan.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setLan(newLan);
    // Move focus to next input field
    moveFocusAhead2(e, index, 8);
  };

  //   onChange handeler for Debtor Name
  const onchangeforDebtorName = (e, index) => {
    const newDebtorName = debtorName.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setDebtorName(newDebtorName);
    // Move focus to next input field
    moveFocusAhead2(e, index, 23);
  };

  //   onChange handeler for Debtor Address line 1
  const onchangeforDebtorAddressR1 = (e, index) => {
    const newDebtorAddressR1 = debtorAddressR1.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setDebtorAddressR1(newDebtorAddressR1);
    // Move focus to next input field
    moveFocusAhead2(e, index, 23);
  };

  //   onChange handeler for Debtor Address line 2
  const onchangeforDebtorAddressR2 = (e, index) => {
    const newDebtorAddressR2 = debtorAddressR2.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setDebtorAddressR2(newDebtorAddressR2);
    // Move focus to next input field
    moveFocusAhead2(e, index, 23);
  };

  //   onChange handeler for Debtor Address line 3
  const onchangeforDebtorAddressR3 = (e, index) => {
    const newDebtorAddressR3 = debtorAddressR3.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setDebtorAddressR3(newDebtorAddressR3);
    // Move focus to next input field
    moveFocusAhead2(e, index, 23);
  };

  //   onChange handeler for Debtor Address line 4
  const onchangeforDebtorAddressR4 = (e, index) => {
    const newDebtorAddressR4 = debtorAddressR4.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setDebtorAddressR4(newDebtorAddressR4);
    // Move focus to next input field
    moveFocusAhead2(e, index, 23);
  };

  // combine address rows and return
  const combineAddressRows = () => {
    const firstTwoRows = debtorAddressR1
      .join("")
      .trim()
      .split("")
      .concat(debtorAddressR2);
    const firstThreeRows = firstTwoRows.concat(debtorAddressR3);
    const completeDebtorAddress = firstThreeRows.concat(debtorAddressR4);
    return completeDebtorAddress.join("");
  };

  //   onChange handeler for City
  const onchangeforCity = (e, index) => {
    const newCity = city.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setCity(newCity);
    // Move focus to next input field
    moveFocusAhead2(e, index, 11);
  };

  //   onChange handeler for Post Code
  const onchangeforPostCode = (e, index) => {
    const newPostCode = postCode.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setPostCode(newPostCode);
    // Move focus to next input field
    moveFocusAhead2(e, index, 11);
  };

  //   onChange handeler for Country
  const onchangeforCountry = (e, index) => {
    const newCountry = country.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setCountry(newCountry);
    // Move focus to next input field
    moveFocusAhead2(e, index, 11);
  };

  //   onChange handeler for IBAN
  const onchangeforIBAN = (e, index) => {
    const newIBAN = IBAN.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setIBAN(newIBAN);
    // Move focus to next input field
    moveFocusAhead2(e, index, 23);
  };

  const onchangeforDate1 = (e, index) => {
    trimToMaxLength(e);
    const newDate1 = date1.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setDate1(newDate1);
    moveFocusAhead2(e, index, 2);
  };

  const onchangeforDate2 = (e, index) => {
    trimToMaxLength(e);
    const newDate2 = date2.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setDate2(newDate2);
    moveFocusAhead2(e, index, 2);
  };

  // add empty spaces at end
  const addEmptyStrings = (string, maxLength) => {
    string = string.split("");
    for (let i = string.length; i < maxLength; i++) {
      string.push("");
    }
    return string;
  };

  // get rqeuest to API
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://switchroo.herokuapp.com/detailsYouNeed/getDetails/5e1cad6962b8dc001761e3cd"
      );
      const data = res.data.personalDetails;
      setFormData({ ...setFormData, objectFromDb: res.data });
      // populate name from db
      let nameDb = !data.firstName ? "" : data.firstName + " " + data.lastName;
      // nameDb = nameDb.padEnd(24).split('');
      nameDb = addEmptyStrings(nameDb, 24);
      setDebtorName(nameDb);
      // populate city from db
      let cityDb = !data.currentAddress.city
        ? ""
        : addEmptyStrings(data.currentAddress.city, 12);
      setCity(cityDb);
      // populate eircode / post code from db
      let postCodeDb = !data.currentAddress.eircode
        ? ""
        : addEmptyStrings(data.currentAddress.eircode.toString(), 12);
      setPostCode(postCodeDb);
      // populate address from db
      let addressDb = !data.currentAddress.address
        ? ""
        : addEmptyStrings(data.currentAddress.address, 24);
      setDebtorAddressR1(addressDb);
      // set country
      setCountry(addEmptyStrings("Ireland", 12));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect hook
  useEffect(() => {
    getData();
  }, []);

  //   on submit handeler
  const onSubmit = async e => {
    e.preventDefault();
    formData.lan = lan.join("");
    if (formData.lan.length !== 9) {
      return alert("Please enter valid Local Accound Number");
    }
    formData.debtorName = debtorName.join("").trim();
    if (formData.debtorName.length === 0) {
      return alert("Debtor Name is required");
    }
    formData.debtorAddress = combineAddressRows();
    formData.city = city.join("").trim();
    formData.postCode = postCode.join("").trim();
    formData.country = country.join("");
    formData.IBAN = IBAN.join("");
    if (formData.IBAN.length === 0) {
      return alert("Debtor Account Number - IBAN is required");
    }
    formData.date1 = date1.join("");
    formData.date2 = date2.join("");

    // prepare the object to save in db
    let { objectFromDb } = formData;
    objectFromDb.personalDetails.currentAddress.city = formData.city;
    objectFromDb.personalDetails.currentAddress.eircode = formData.postCode;
    objectFromDb.personalDetails.currentAddress.address =
      formData.debtorAddress;
    let splitedName = formData.debtorName.split(" ");
    objectFromDb.personalDetails.firstName = splitedName[0];
    objectFromDb.personalDetails.lastName = splitedName[1];

    // send post request to API
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post(
        "https://switchroo.herokuapp.com/detailsYouNeed/saveDetails",
        objectFromDb,
        config
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }

    // print / save as pdf
    let backUp = document.body.innerHTML;
    let locationBackUp = window.location.href;
    let contentToPrint = document.getElementsByClassName("second")[0].innerHTML;
    document.body.innerHTML = contentToPrint;
    window.print();
    document.body.innerHTML = backUp;
    window.location.href = locationBackUp;
  };

  return (
    <div className="second">
      <div>
        <img
          src={SecondCapture3}
          alt="Sepa Direct Debit Mandate"
          style={{ width: "100%" }}
        />
      </div>
      <div className="second-wrapper">
        <form onSubmit={e => onSubmit(e)}>
          <div className="row mx-0 align-items-center loanAccountNumber">
            <div className="col p-0">
              <h4 className="loanAccountNumber-heading">Loan account number</h4>
            </div>
            <div className="col p-0 pl-4" style={{ height: "100%" }}>
              <div className="row mx-0" style={{ height: "100%" }}>
                {lan.map((input, index) => (
                  <div
                    className="col p-0 loanAccountNumber-inputMiddle-parent"
                    key={index}
                  >
                    <input
                      type="text"
                      maxLength="1"
                      className={
                        index === 0
                          ? "loanAccountNumber-inputLeft"
                          : index === 8
                          ? "loanAccountNumber-inputRight"
                          : "loanAccountNumber-inputMiddle"
                      }
                      value={input}
                      onChange={e => onChangeForLan(e, index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <img
            src={ThirdCapture1}
            style={{ width: '100%' }}
            alt="For office use only"
          /> */}
          <TextAndForOfficeUseOnly firstClass="font-second" />
          <div className="line"></div>
          <p className="font-second m-0 pb-2">
            Please complete all the fields marked*
          </p>
          {/* First Box */}
          <div
            className="row mx-0"
            style={{
              border: "2px solid #75c04a",
              borderRadius: "20px",
              overflow: "hidden"
            }}
          >
            <div className="col p-0">
              {/* Debtor Name row */}
              <div className="row m-0 align-items-center">
                {/* Left coloumn */}
                <div className="debtorName">
                  <p className="font-second m-0" style={{ textAlign: "right" }}>
                    Debtor Name*
                  </p>
                </div>
                {/* Right coloumn */}
                <div className="debtorName-rightWrapper">
                  <div className="row m-0 px-2">
                    {debtorName.map((input, index) => (
                      <div className="col p-0" key={index}>
                        <input
                          type="text"
                          maxLength="1"
                          className={
                            index === 0
                              ? "debtorName-inputLeft"
                              : index === 23
                              ? "debtorName-inputRight"
                              : "debtorName-inputMiddle"
                          }
                          value={input}
                          onChange={e => onchangeforDebtorName(e, index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Debtor Address row */}
              <div className="row m-0">
                {/* Left coloumn */}
                <div className="debtorAddress">
                  <p className="font-second" style={{ textAlign: "right" }}>
                    Debtor Address
                  </p>
                </div>
                {/* Right coloumn */}
                <div className="debtorAddress-rightWrapper">
                  {/* First row */}
                  <div className="row m-0 px-2">
                    {debtorAddressR1.map((input, index) => (
                      <div className="col p-0" key={index}>
                        <input
                          type="text"
                          maxLength="1"
                          className={
                            index === 0
                              ? "debtorAddress-inputLeft"
                              : index === 23
                              ? "debtorAddress-inputRight"
                              : "debtorAddress-inputMiddle"
                          }
                          value={input}
                          onChange={e => onchangeforDebtorAddressR1(e, index)}
                        />
                      </div>
                    ))}
                  </div>
                  {/* second row */}
                  <div className="row px-2 innerRows">
                    {debtorAddressR2.map((input, index) => (
                      <div className="col p-0" key={index}>
                        <input
                          type="text"
                          maxLength="1"
                          className={
                            index === 0
                              ? "debtorAddress-inputLeft"
                              : index === 23
                              ? "debtorAddress-inputRight"
                              : "debtorAddress-inputMiddle"
                          }
                          value={input}
                          onChange={e => onchangeforDebtorAddressR2(e, index)}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Third row */}
                  <div className="row px-2 innerRows">
                    {debtorAddressR3.map((input, index) => (
                      <div className="col p-0" key={index}>
                        <input
                          type="text"
                          maxLength="1"
                          className={
                            index === 0
                              ? "debtorAddress-inputLeft"
                              : index === 23
                              ? "debtorAddress-inputRight"
                              : "debtorAddress-inputMiddle"
                          }
                          value={input}
                          onChange={e => onchangeforDebtorAddressR3(e, index)}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Fourth row */}
                  <div className="row px-2 innerRows">
                    {debtorAddressR4.map((input, index) => (
                      <div className="col p-0" key={index}>
                        <input
                          type="text"
                          maxLength="1"
                          className={
                            index === 0
                              ? "debtorAddress-inputLeft"
                              : index === 23
                              ? "debtorAddress-inputRight"
                              : "debtorAddress-inputMiddle"
                          }
                          value={input}
                          onChange={e => onchangeforDebtorAddressR4(e, index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* City row */}
              <div className="row m-0">
                {/* Left coloumn */}
                <div className="city">
                  <p className="font-second m-0" style={{ textAlign: "right" }}>
                    City
                  </p>
                </div>
                {/* Right coloumn */}
                <div className="city-rightWrapper">
                  <div className="row m-0 px-2">
                    <div className="col p-0">
                      <div className="row mx-0">
                        {city.map((input, index) => (
                          <div className="col p-0" key={index}>
                            <input
                              type="text"
                              maxLength="1"
                              className={
                                index === 0
                                  ? "city-inputLeft"
                                  : index === 11
                                  ? "city-inputRight"
                                  : "city-inputMiddle"
                              }
                              value={input}
                              onChange={e => onchangeforCity(e, index)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col p-0"></div>
                  </div>
                </div>
              </div>
              {/* Post Code row */}
              <div className="row m-0">
                {/* Left coloumn */}
                <div className="postCode">
                  <p className="font-second m-0" style={{ textAlign: "right" }}>
                    Post Code
                  </p>
                </div>
                {/* Right coloumn */}
                <div className="postCode-rightWrapper">
                  <div className="row m-0 px-2">
                    <div className="col p-0">
                      <div className="row mx-0">
                        {postCode.map((input, index) => (
                          <div className="col p-0" key={index}>
                            <input
                              type="text"
                              maxLength="1"
                              className={
                                index === 0
                                  ? "postCode-inputLeft"
                                  : index === 11
                                  ? "postCode-inputRight"
                                  : "postCode-inputMiddle"
                              }
                              value={input}
                              onChange={e => onchangeforPostCode(e, index)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col p-0"></div>
                  </div>
                </div>
              </div>
              {/* Country row */}
              <div className="row m-0">
                {/* Left coloumn */}
                <div className="country">
                  <p className="font-second m-0" style={{ textAlign: "right" }}>
                    Country
                  </p>
                </div>
                {/* Right coloumn */}
                <div className="country-rightWrapper">
                  <div className="row m-0 px-2">
                    <div className="col p-0">
                      <div className="row mx-0">
                        {country.map((input, index) => (
                          <div className="col p-0" key={index}>
                            <input
                              type="text"
                              maxLength="1"
                              className={
                                index === 0
                                  ? "country-inputLeft "
                                  : index === 11
                                  ? "country-inputRight"
                                  : "country-inputMiddle"
                              }
                              value={input}
                              onChange={e => onchangeforCountry(e, index)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col p-0"></div>
                  </div>
                </div>
              </div>
              {/* IBAN row */}
              <div className="row m-0">
                {/* Left coloumn */}
                <div className="IBAN">
                  <p className="font-second" style={{ textAlign: "right" }}>
                    Debtor Account Number - IBAN*
                  </p>
                </div>
                {/* Right coloumn */}
                <div className="IBAN-rightWrapper">
                  <div className="row m-0 px-2">
                    {IBAN.map((input, index) => (
                      <div className="col p-0" key={index}>
                        <input
                          type="text"
                          maxLength="1"
                          className={
                            index === 0
                              ? "IBAN-inputLeft"
                              : index === 23
                              ? "IBAN-inputRight"
                              : "IBAN-inputMiddle"
                          }
                          value={input}
                          onChange={e => onchangeforIBAN(e, index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pencil">
            <img src={pencil1} alt="pencil" />
          </div>
          {/* Second Box */}
          <div
            className="row mx-0 mt-3"
            style={{
              border: "2px solid #75c04a",
              borderRadius: "20px",
              overflow: "hidden"
            }}
          >
            <div className="col p-0">
              <SecondBoxRows
                textLeft="Creditor Name*"
                textRight="Haven Mortages Limited"
                styleLeft={{ padding: "22px 10px 0px 10px" }}
                styleRight={{ padding: "22px 35px 0px 35px" }}
              />
              <SecondBoxRows
                textLeft="Creditor Identifier*"
                textRight="IE56ZZZ305641"
                styleLeft={{ padding: "10px 10px 0px 10px" }}
                styleRight={{ padding: "10px 35px 0px 35px" }}
              />
              <SecondBoxRows
                textLeft="Creditor Address*"
                textRight="2 Burlington Road"
                styleLeft={{ padding: "10px 10px 0px 10px" }}
                styleRight={{ padding: "10px 35px 0px 35px" }}
              />
              <SecondBoxRows
                textLeft="City*"
                textRight="Dublin 4"
                styleLeft={{ padding: "10px 10px 0px 10px" }}
                styleRight={{ padding: "10px 35px 0px 35px" }}
              />
              <SecondBoxRows
                textLeft="Post Code*"
                textRight="D04 WV00"
                styleLeft={{ padding: "10px 10px 0px 10px" }}
                styleRight={{ padding: "10px 35px 0px 35px" }}
              />
              <SecondBoxRows
                textLeft="Country*"
                textRight="Ireland"
                styleLeft={{ padding: "10px 10px 18px 10px" }}
                styleRight={{ padding: "10px 35px 18px 35px" }}
              />
            </div>
          </div>
          <div className="home">
            <img src={home} alt="pencil" />
          </div>
          {/* Type of payment */}
          <div className="row mx-0 my-4 align-items-center">
            <div className="col-4 p-0">
              <p className="font-second m-0">
                Type of payment* [please select]
              </p>
            </div>
            <div className="col-3 p-0 pl-3">
              <p className="font-second m-0 payment-box-crossed">
                Recurrent payment
              </p>
            </div>
            <div className="col-3 p-0 pl-5 ml-4">
              <p className="font-second m-0 payment-box">or One-off payment</p>
            </div>
          </div>
          {/* Signatures and Date */}
          {/* First row */}
          <div className="row mx-0 mt-3">
            {/* Left */}
            <div className="signatureAndDate-left">
              <div className="row m-0">
                <div className="col-3 px-0 signatureAndDate-left-bgClr">
                  <p className="font-second">Signature 1*</p>
                </div>
                {/* <div className="col-9 p-0"></div> */}
              </div>
            </div>
            {/* Right */}
            <div style={{ width: "38%" }}>
              <div className="col p-0 ml-2 signatureAndDate-right">
                <div className="row mx-0">
                  <div className="col-3 signatureAndDate-right-bgClr">
                    <p className="font-second m-0">Date</p>
                  </div>
                  {date1.map((input, index) => (
                    <div
                      key={index}
                      className="col-3 p-0"
                      style={
                        index !== 2
                          ? {
                              borderRight: "2px solid #75c04a",
                              height: "65px"
                            }
                          : {
                              height: "65px"
                            }
                      }
                    >
                      <input
                        type="number"
                        maxLength={index !== 2 ? "2" : "4"}
                        className="second-date"
                        onChange={e => onchangeforDate1(e, index)}
                        value={input}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Second row */}
          <div className="row mx-0 mt-3">
            {/* Left */}
            <div className="signatureAndDate-left">
              <div className="row m-0">
                <div className="col-3 px-0 signatureAndDate-left-bgClr">
                  <p className="font-second">Signature 1*</p>
                </div>
                {/* <div className="col-9 p-0"></div> */}
              </div>
            </div>
            {/* Right */}
            <div style={{ width: "38%" }}>
              <div className="col p-0 ml-2 signatureAndDate-right">
                <div className="row mx-0">
                  <div className="col-3 signatureAndDate-right-bgClr">
                    <p className="font-second m-0">Date</p>
                  </div>
                  {date2.map((input, index) => (
                    <div
                      key={index}
                      className="col-3 p-0"
                      style={
                        index !== 2
                          ? {
                              borderRight: "2px solid #75c04a",
                              height: "65px"
                            }
                          : {
                              height: "65px"
                            }
                      }
                    >
                      <input
                        type="number"
                        maxLength={index !== 2 ? "2" : "4"}
                        className="second-date"
                        onChange={e => onchangeforDate2(e, index)}
                        value={input}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="row mx-0">
            {/* <img src={SecondCapture4} alt="..." style={{ width: "100%" }} /> */}
          </div>
          <input
            type="submit"
            className="btn btn-outline-success btn-lg btn-block mb-4 hide-on-print"
            value="Save & Print"
          />
        </form>
      </div>
    </div>
  );
};

const SecondBoxRows = ({ textLeft, textRight, styleLeft, styleRight }) => {
  return (
    <div className="row mx-0">
      {/* Left coloumn */}
      <div className="secondBoxRow-left" style={styleLeft}>
        <p className="font-second m-0" style={{ textAlign: "right" }}>
          {textLeft}
        </p>
      </div>
      {/* Right coloumn */}
      <div className="secondBoxRow-right" style={styleRight}>
        <p className="font-second m-0">{textRight}</p>
      </div>
    </div>
  );
};

const TextAndForOfficeUseOnly = ({ firstClass }) => {
  return (
    <div className="row mx-0" style={{ paddingTop: "27px" }}>
      <div
        className={`col-7 ${firstClass}`}
        style={{
          padding: "2px 33px 2px 2px"
        }}
      >
        <img src={ThirdCapture3} style={{ width: "100%" }} alt="Text" />
        {/* <p style={{ textAlign: 'justify' }}>
          By signing this mandata form, you authorise [A] Haven to send
          instructions to your bank to debit your account and [B] your bank to
          debit your account in accordance with instructions from Haven. As part
          of your rights, you are entitled to a refund from your bank under the
          terms and conditions of your agrrement with your bank. A refund must
          be claimed within 8 weeks starting from the date on hwich your account
          was debited. Your rights are explained in a statement that you can
          obtain from your bank.
        </p> */}
        <p style={{ margin: "0px", paddingLeft: "5px" }}>
          {/* Please return your completed form to: <br /> */}
          <b>Haven Mortgages Limited, 2 Burlington Road, Dublin 4.</b>
        </p>
      </div>
      <div className={`col-5 forOfficeUseOnly ${firstClass}`}>
        <b>FOR OFFICE USE ONLY</b>
        <p className="m-0 mb-2">SEPA Direct Debit Mandate</p>
        <div className="forOfficeUseOnly-box"></div>
        <p className="m-0 mt-2 mb-3">
          Unique Mandate Reference [UMR] -<br />
          to be completed by Haven
        </p>
        <b>PRIVATE & CONFIDENTIAL</b>
      </div>
    </div>
  );
};

export default Second;
