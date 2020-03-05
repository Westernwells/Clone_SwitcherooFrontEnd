import React, { useState, useEffect } from "react";
import axios from "axios";
import "./third.css";
import ThirdCapture4 from "./img/ThirdCapture4.PNG";
import ThirdCapture5 from "./img/ThirdCapture5.png";
import ThirdCapture8 from "./img/ThirdCapture8.PNG";

const Third = () => {
  const [formData, setFormdata] = useState({
    objectFromDb: {},
    IBAN: "",
    BICCode: "",
    name: "",
    address: "",
    city: "",
    country: "",
    dateOfSigning: ""
  });

  const [addressR1, setAddressR1] = useState("");
  const [addressR2, setAddressR2] = useState("");
  const [addressR3, setAddressR3] = useState("");

  //   Local onChange handeler
  const onChange = e => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangeForAddressR1 = e => {
    setAddressR1(e.target.value);
  };

  const onChangeForAddressR2 = e => {
    setAddressR2(e.target.value);
  };

  const onChangeForAddressR3 = e => {
    setAddressR3(e.target.value);
  };

  const combineAdressRows = () => {
    const addEmptySpace = addressR1.concat(" ");
    const firstTwoRows = addEmptySpace.concat(addressR2);
    const addAnotherEmptySpace = firstTwoRows.concat(" ");
    const completeStreetNameAndNumber = addAnotherEmptySpace.concat(addressR3);
    return completeStreetNameAndNumber;
  };

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://switchroo.herokuapp.com/detailsYouNeed/getDetails/5e1cad6962b8dc001761e3cd"
      );
      const data = res.data.personalDetails;
      // populate data from API and place it into the form fields
      // address
      setAddressR1(
        !data.currentAddress.address ? "" : data.currentAddress.address
      );
      setFormdata({
        ...formData,
        objectFromDb: res.data,
        name: !data.firstName ? "" : data.firstName + " " + data.lastName,
        city: !data.currentAddress.city
          ? ""
          : data.currentAddress.city + ", " + data.currentAddress.eircode,
        country: "Ireland",
        BICCode: !res.data.creditCommitments.sortCode
          ? ""
          : res.data.creditCommitments.sortCode
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //   onSubmit handeler
  const onSubmit = async e => {
    e.preventDefault();
    formData.address = combineAdressRows();

    // PREPARE THE OBJECT TO SAVE IN DB
    const { objectFromDb } = formData;
    objectFromDb.personalDetails.currentAddress.city = formData.city
      .split(",")[0]
      .trim();
    objectFromDb.personalDetails.currentAddress.address = formData.address.trim();
    let splitedName = formData.name.split(" ");
    objectFromDb.personalDetails.firstName = splitedName[0];
    objectFromDb.personalDetails.lastName = splitedName[1];
    objectFromDb.creditCommitments.sortCode = formData.BICCode;

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
    let contentToPrint = document.getElementsByClassName("third")[0].innerHTML;
    document.body.innerHTML = contentToPrint;
    document.body.style.padding = "0px 95px 0px 80px";
    document.body.style.fontFamily = "'Times New Roman', Times, serif";
    window.print();
    document.body.style.padding = "0px";
    document.body.style.fontFamily = "";
    document.body.innerHTML = backUp;
    window.location.href = locationBackUp;
  };

  return (
    <div className="thirddd">
      <div className="third">
        <form onSubmit={e => onSubmit(e)}>
          <img src={ThirdCapture4} alt="..." style={{ width: "100%" }} />
          {/* IBAN row */}
          <div className="row mx-0 mt-1 third-IBAN">
            <div
              style={{ width: "20%", padding: "3px 0px", textAlign: "center" }}
            >
              <p className="left-heading">IBAN</p>
              <small className="left-text">(Bank Account to be Debited)</small>
            </div>
            <div style={{ width: "73.5%", padding: "0px 3px" }}>
              <input
                type="text"
                name="IBAN"
                value={formData.IBAN}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <small className="bottom-text-IBAN">
            Example of IBAN -IE23IPBS99061312345678
          </small>
          {/* BIC Code row */}
          <div className="row mx-0 mt-1 third-BIC">
            <div
              style={{ width: "20%", padding: "3px 0px", textAlign: "center" }}
            >
              <p className="left-heading">BIC Code</p>
              <small className="left-text">(the Bank Identifier code)</small>
            </div>
            <div style={{ width: "31%", padding: "0px 3px" }}>
              <input
                type="text"
                name="BICCode"
                value={formData.BICCode}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className="bottom-text-BIC">
            <small className="">Example of Swift Code --IPBSIE2D</small>
          </div>
          {/* Your Name row */}
          <div className="innerForm">
            <div className="row mx-0 third-yourName">
              <div style={{ width: "21.5%" }}>
                <p className="left-heading">Your Name</p>
                <small className="left-text">
                  (name of Account to be Debited)
                </small>
              </div>
              <div style={{ width: "75%" }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
            <div className="row mx-0 third-yourAddress">
              <div style={{ width: "21.5%" }}>
                <p className="left-heading">Your Address</p>
                <small className="left-text">
                  (address held by debting Bank- if joint account primary
                  address)
                </small>
              </div>
              <div style={{ width: "75%" }}>
                <input
                  type="text"
                  style={{ marginBottom: "8px" }}
                  onChange={e => onChangeForAddressR1(e)}
                  value={addressR1}
                />
                <input
                  type="text"
                  style={{ marginBottom: "8px" }}
                  onChange={e => onChangeForAddressR2(e)}
                  value={addressR2}
                />
                <input
                  type="text"
                  style={{ marginBottom: "8px" }}
                  onChange={e => onChangeForAddressR3(e)}
                  value={addressR3}
                />
              </div>
            </div>
            <div className="row mx-0 city-postCode-row">
              <div style={{ width: "21.5%" }}>
                <p className="third-city-heading">City / Post Code</p>
              </div>
              <div style={{ width: "35.6%" }}>
                <input
                  type="text"
                  className="third-city-input"
                  name="city"
                  value={formData.city}
                  onChange={e => onChange(e)}
                />
              </div>
              <div style={{ width: "13.6%" }}>
                <p className="third-postCode-heading">Country</p>
              </div>
              <div style={{ width: "25.8%" }}>
                <input
                  type="text"
                  className="third-postCode-input"
                  name="country"
                  value={formData.country}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
            <img src={ThirdCapture5} alt="..." style={{ width: "100%" }} />
            <div className="row mx-0">
              <div className="col-auto third-date-heading-parent">
                <p className="third-date-heading">Date of signing</p>
              </div>
              <div className="col">
                <input
                  type="date"
                  className="third-date-input"
                  name="dateOfSigning"
                  value={formData.dateOfSigning}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="importantNote">
            <img
              src={ThirdCapture8}
              alt="..."
              style={{ width: "100%", marginBottom: "76px" }}
            />
          </div>
          <p className="footer-text">Direct Debit Mandate</p>
          <input
            type="submit"
            className="btn btn-outline-secondary btn-lg btn-block hide-on-print"
            value="Save & Print"
          />
        </form>
      </div>
    </div>
  );
};

export default Third;
