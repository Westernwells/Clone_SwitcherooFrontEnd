import React, { Component } from 'react';
import { Col } from 'antd';
import Rightbar from '../../../home/rightbar/rightbar';
import './styles.css';
import courier from '../img/courier.png';

class Courier extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Col lg={18}>
          <div className="courier-container">
            <p className="courier-container-text">
              <strong>
                We also need original signed copies of these documents and some
                of the previous documents you have provided . To make your life
                a little easier, the cost of postage is on us so just send a
                <span style={{ color: '#fb9500' }}> freepost</span> to the
                address provided. Or if you prefer we can have courier pick it,
                just give us a call and we will send a courier by
              </strong>
            </p>
            <div className="courier-middle">
              <div className="courier-img">
                <img src={courier} alt="..." />
              </div>
              <div className="courier-address">
                <div className="courier-address-text">
                  <p>
                    Panda Cpital <br />
                    T/A Switcheroo.ie <br />
                    13 Baggot Street Upper <br />
                    <strong>Freepost FDN5330</strong>
                    <br />
                    Dublin 4 <br />
                    D04 W7K5
                  </p>
                </div>
              </div>
              <div className="courier-back">
                <input
                  type="button"
                  value="Back"
                  onClick={() => {
                    this.props.history.push('/home/yourApplication/');
                  }}
                />
              </div>
              <div className="courier-continue">
                <input
                  type="button"
                  value="Continue"
                  onClick={() => {
                    this.props.history.push('/home/yourApplication/documents');
                  }}
                />
              </div>
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

export default Courier;
