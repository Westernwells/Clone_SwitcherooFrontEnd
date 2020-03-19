import React, { Component } from 'react';
import './styles.css';
import { Col, Row } from 'antd';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Rightbar from '../../../home/rightbar/rightbar';
import icon4 from '../img/icon4.png';
import icon6 from '../img/icon6.png';
import icon7 from '../img/icon7.png';
import PIBA from '../img/PIBA.png';
import MaskGroup1 from '../img/MaskGroup1.png';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <>
        <Col lg={18}>
          <div className="application-container">
            <p className="application-container-text">
              So, lets now get your mortgage in principal. While, this is not a
              legally binding document it is very strong signal from the bank
              that they will lend to you but it will be subject to a number of
              conditions that you will need to complete when you are ready e.g.
              your life insurance, property valuation.
            </p>
            <p className="application-container-text">
              We have populated following documents for you as much as we can
              but you need to review them, make sure you are happy or{' '}
              <strong>edit as needed</strong> and then print and then{' '}
              <strong>upload signed copies.</strong>
            </p>
            <div className="application-process-container">
              <div>
                <p className="application-process-number">1</p>
              </div>
              <div
                style={{ marginLeft: '-45px' }}
                className="application-process-box"
              >
                <div style={{ width: '80%' }}>
                  <img src={icon6} alt="..." style={{ width: '15%' }} />
                  <p className="">Review your documents</p>
                </div>
              </div>
              <p className="application-process-number">2</p>
              <div
                style={{ marginLeft: '-45px' }}
                className="application-process-box"
              >
                <div style={{ width: '80%' }}>
                  <img src={icon7} alt="..." style={{ width: '15%' }} />
                  <p className="">Edit as needed</p>
                </div>
              </div>
              <p className="application-process-number">3</p>
              <div
                style={{ marginLeft: '-45px' }}
                className="application-process-box"
              >
                <div style={{ width: '80%' }}>
                  <img src={icon4} alt="..." style={{ width: '15%' }} />
                  <p className="">Print and upload signed copies</p>
                </div>
              </div>
            </div>
            <div className="application-forms">
              <Forms img={PIBA} heading="Your Mortgage Application" />
              <Forms img={MaskGroup1} heading="Your Declaration of Consent" />
            </div>
            <div className="application-continue">
              <input
                type="button"
                value="Continue"
                onClick={() => {
                  this.props.history.push('/home/yourApplication/courier');
                }}
              />
            </div>
          </div>
        </Col>

        <Col className="gutter-row" lg={6}>
          <div className="gutter-box rightbar-container">
            <Rightbar />
          </div>
        </Col>
      </>
    );
  }
}

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { img, heading } = this.props;
    return (
      <div className="application-form">
        <div className="application-forms-img">
          <div>
            <img src={img} alt="..." />
          </div>
        </div>
        <div className="application-forms-heading">
          <b>{heading}</b>
        </div>
        <div className="application-forms-uploaded">
          <div style={{ textAlign: 'center' }}>
            <img src={icon4} alt="..." style={{ width: '50%' }} />
            <p>Uploaded</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Application;
