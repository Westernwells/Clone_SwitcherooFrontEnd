import React from 'react';
import './styles.css';
import YourRecommendationHeaderText1 from '../img/YourRecommendationHeaderText1.png';
import logo from '../img/logo.png';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ContOneHeader = ({ introduction }) => {
  return (
    <>
      <div className="recommendation-header">
        <div style={{ flex: '1' }}>
          <img src={logo} alt="Logo" style={{ width: '87%' }} />
        </div>
        <div style={{ flex: '5', textAlign: 'center', paddingTop: '20px' }}>
          <h5
            style={{
              fontSize: '1.5rem',
              letterSpacing: '0.05rem',
              color: '#6f7174'
            }}
          >
            STATEMENT OF SUITABILITY
          </h5>
        </div>
        <div style={{ flex: '1' }}>
          <p className="recommendation-text" style={{ lineHeight: '1.3' }}>
            Switcheroo.ie <br /> 13 Bagget Street Upper Dublin 4 <br /> D04W7K5
            <br />
            02-12-2020
          </p>
        </div>
      </div>
      <div style={{ paddingRight: '20px' }}>
        <img
          src={YourRecommendationHeaderText1}
          alt="..."
          style={{ width: '85%', margin: 'auto', display: 'block' }}
        />
      </div>
      <div className="recommendation-para">
        <p className="recommendation-text" style={{ marginBottom: '25px' }}>
          {introduction[0]}
        </p>
        <p className="recommendation-text">{introduction[1]}</p>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  introduction: state.yourRecommendationReducer.introduction
});

export default connect(mapStateToProps, null)(withRouter(ContOneHeader));
