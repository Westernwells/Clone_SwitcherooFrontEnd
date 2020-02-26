import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './first.css';
import Capture15 from './img/Capture15.PNG';
import Capture14 from './img/Capture14.PNG';
import Capture16 from './img/Capture16.PNG';
import Capture17 from './img/Capture17.PNG';
import Capture18 from './img/Capture18.PNG';
import Capture19 from './img/Capture19.PNG';
import Capture20 from './img/Capture20.PNG';
import Capture21 from './img/Capture21.PNG';

const First = () => {
  const [formData, setformData] = useState({
    objectFromDb: {},
    uniqueMandateReference: '',
    yourName: '',
    streetNameAndNumber: '',
    city: '',
    country: '',
    IBAN: '',
    typeOfPayment: 'Recurrent',
    dateOfSigning: ''
  });

  // Thirty four empty strings
  const thirtyFour_empty_strings = [];
  for (let i = 0; i < 34; i++) {
    thirtyFour_empty_strings.push('');
  }

  // Eight empty strings
  const eight_empty_strings = [];
  for (let i = 0; i < 8; i++) {
    eight_empty_strings.push('');
  }

  const [streetNameAndNumberR1, setStreetNameAndNumberR1] = useState('');
  const [streetNameAndNumberR2, setStreetNameAndNumberR2] = useState('');
  const [streetNameAndNumberR3, setStreetNameAndNumberR3] = useState('');
  const [IBAN, setIBAN] = useState(thirtyFour_empty_strings);
  const [dateOfSigning, setDateOfSigning] = useState(eight_empty_strings);

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  // Move focus to next field
  const moveFocusAhead = (e, index, maxIndex) => {
    const length = e.target.value.length,
      maxLength = e.target.maxLength;
    if (length === maxLength && index !== maxIndex)
      e.target.parentNode.nextSibling.childNodes[0].focus();
  };

  // "maxLength" does not work with type:number, so do it manually
  const trimToOne = e => {
    const length = e.target.value.length;
    const maxLength = e.target.maxLength;

    if (length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
  };

  // Combine street name and number rows
  const combineStreetNamendNumber = () => {
    const addEmptySpace = streetNameAndNumberR1.concat(' ');
    const firstTwoRows = addEmptySpace.concat(streetNameAndNumberR2);
    const addAnotherEmptySpace = firstTwoRows.concat(' ');
    const completeStreetNameAndNumber = addAnotherEmptySpace.concat(
      streetNameAndNumberR3
    );
    return completeStreetNameAndNumber;
  };

  // common purpose onChange handeler
  const onChange = e =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  // onChange handeler for IBAN
  const onChangeforIBAN = (e, index) => {
    const newIBAN = IBAN.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setIBAN(newIBAN);
    // move focus to next input field
    moveFocusAhead(e, index, 33);
  };

  // onChange handeler for date of signing
  const onChangeforDate = (e, index) => {
    trimToOne(e);
    const newDate = dateOfSigning.map((entry, idx) => {
      if (index !== idx) return entry;
      return e.target.value;
    });

    setDateOfSigning(newDate);
    // move focus to next input field
    moveFocusAhead(e, index, 7);
  };

  // get data from database
  const getData = async () => {
    try {
      const res = await axios.get(
        'https://switchroo.herokuapp.com/detailsYouNeed/getDetails/5e1cad6962b8dc001761e3cd'
      );
      const data = res.data.personalDetails;
      // setFormData with data from db
      setStreetNameAndNumberR1(
        !data.currentAddress.address ? '' : data.currentAddress.address
      );
      setformData({
        ...formData,
        objectFromDb: res.data,
        yourName: !data.firstName ? '' : data.firstName + ' ' + data.lastName,
        city: !data.currentAddress.city
          ? ''
          : data.currentAddress.city + ', ' + data.currentAddress.eircode,
        country: 'Ireland'
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    if (formData.uniqueMandateReference.length === 0) {
      return alert("'Unique Mandate Reference' field is required");
    }
    if (formData.yourName.length === 0) {
      return alert("'Your Name' field is required");
    }
    formData.streetNameAndNumber = combineStreetNamendNumber();
    if (formData.streetNameAndNumber.length === 0) {
      return alert("'Street name and numvber' field is required");
    }
    if (formData.city.length === 0) {
      return alert("'City/postcode' field is required");
    }
    if (formData.country.length === 0) {
      return alert("'Country' field is required");
    }
    formData.IBAN = IBAN.join('');
    if (formData.IBAN.length === 0) {
      return alert("'IBAN' field is required");
    }
    formData.dateOfSigning = dateOfSigning.join('');

    // prepare the object to save in db
    let { objectFromDb } = formData;
    objectFromDb.personalDetails.currentAddress.city = formData.city;
    objectFromDb.personalDetails.currentAddress.address =
      formData.streetNameAndNumber;
    let splitedName = formData.yourName.split(' ');
    objectFromDb.personalDetails.firstName = splitedName[0];
    objectFromDb.personalDetails.lastName = splitedName[1];

    // send post request to API
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post(
        'https://switchroo.herokuapp.com/detailsYouNeed/saveDetails',
        config,
        objectFromDb
      );
    } catch (error) {
      console.log(error);
    }

    // print / save as pdf
    let backUp = document.body.innerHTML;
    let locationBackUp = window.location.href;
    let contentToPrint = document.getElementsByClassName('first')[0].innerHTML;
    document.body.innerHTML = contentToPrint;
    document.body.style.padding = '0px 30px';
    window.print();
    document.body.style.padding = '0px';
    document.body.innerHTML = backUp;
    window.location.href = locationBackUp;
  };

  return (
    <div id="first" className="first">
      <div>
        <img
          src={Capture15}
          alt="Sepa Direct Debit Mandate"
          style={{ width: '100%' }}
        />
      </div>
      <div className="first-wrapper mb-5">
        <form onSubmit={e => onSubmit(e)}>
          <div className="mb-2 pb-2 border-dotted">
            <img src={Capture16} alt="..." style={{ width: '100%' }} />
            <input
              type="text"
              className="input"
              maxLength="35"
              style={{ width: '100%' }}
              name="uniqueMandateReference"
              value={formData.uniqueMandateReference}
              onChange={e => onChange(e)}
            />
          </div>
          <img src={Capture14} alt="..." style={{ width: '100%' }} />
          <div className="border-dotted mrgn-btm">
            <div className="row m-0 input-mrgn-btm">
              <div style={{ width: '24%' }}>
                <p className="text-bold m-0">Your name*(max.70characters)</p>
              </div>
              <div className="col p-0">
                <input
                  className="input"
                  type="text"
                  style={{ width: '100%' }}
                  name="yourName"
                  value={formData.yourName}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
            <div className="row m-0">
              <div style={{ width: '24%' }}>
                <p className="text-bold m-0">Street name and number*</p>
              </div>
              <div className="col p-0">
                <input
                  className="input input-mrgn-btm"
                  type="text"
                  style={{ width: '100%' }}
                  name="yourName"
                  value={streetNameAndNumberR1}
                  onChange={e => setStreetNameAndNumberR1(e.target.value)}
                />
                <input
                  className="input input-mrgn-btm"
                  type="text"
                  style={{ width: '100%' }}
                  name="yourName"
                  value={streetNameAndNumberR2}
                  onChange={e => setStreetNameAndNumberR2(e.target.value)}
                />
                <input
                  className="input input-mrgn-btm"
                  type="text"
                  style={{ width: '100%' }}
                  name="yourName"
                  value={streetNameAndNumberR3}
                  onChange={e => setStreetNameAndNumberR3(e.target.value)}
                />
              </div>
            </div>
            <div className="row m-0 input-mrgn-btm">
              <div style={{ width: '24%' }}>
                <p className="text-bold m-0">City/postcode*</p>
              </div>
              <div className="col p-0">
                <input
                  className="input"
                  type="text"
                  style={{ width: '100%' }}
                  name="city"
                  value={formData.city}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
            <div className="row m-0">
              <div style={{ width: '24%' }}>
                <p className="text-bold">Country*</p>
              </div>
              <div className="col p-0">
                <input
                  className="input"
                  type="text"
                  style={{ width: '100%' }}
                  name="country"
                  value={formData.country}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="border-dotted mrgn-btm">
            <img src={Capture17} alt="..." style={{ width: '100%' }} />
            <div className="row mx-0 mt-2 pr-2">
              {IBAN.map((input, index) => (
                <div className="col p-0 iban-input-wrapper" key={index}>
                  <input
                    className="input input-min"
                    type="text"
                    maxLength="1"
                    value={input}
                    onChange={e => onChangeforIBAN(e, index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <NameOfCreditor />
          <div className="">
            <img src={Capture19} alt="..." style={{ width: '100%' }} />
            <div className="row mx-0 mt-1">
              <div className="col-auto p-0">
                <p className="text-bold mb-1">Date of signing</p>
              </div>
              <div className="col">
                {dateOfSigning.map((input, index) => (
                  <input
                    key={index}
                    className="date"
                    type="number"
                    maxLength="1"
                    placeholder={
                      index < 2 ? 'd' : index === 2 || index < 4 ? 'm' : 'y'
                    }
                    value={input}
                    onChange={e => onChangeforDate(e, index)}
                  />
                ))}
              </div>
            </div>
            <div className="row mx-0">
              <img src={Capture20} alt="..." style={{ width: '100%' }} />
            </div>
            <img src={Capture21} alt="..." style={{ width: '100%' }} />
          </div>
          <input
            type="submit"
            className="btn btn-outline-primary btn-lg btn-block mt-3 hide-on-print "
            value="Save & Print as PDF"
          />
        </form>
      </div>
    </div>
  );
};
const NameOfCreditor = () => {
  return (
    <div className="border-dotted mrgn-btm pb-3 text-bold">
      <img src={Capture18} alt="..." style={{ width: '100%' }} />
    </div>
  );
};

export default First;
