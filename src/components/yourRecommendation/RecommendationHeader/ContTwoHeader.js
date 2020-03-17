import React from 'react';
import logo from '../img/logo.png';

const ContTwoHeader = () => {
  return (
    <>
      <div className="recommendation-header" style={{ marginBottom: '20px' }}>
        <div style={{ flex: '1' }}>
          <img src={logo} alt="Logo" style={{ width: '80%' }} />
        </div>
        <div style={{ flex: '5', textAlign: 'center', paddingTop: '25px' }}>
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

        <div style={{ flex: '1', paddingTop: '25px' }}>
          <h5 style={{ fontSize: '1.1rem', color: '#97999b' }}>02-12-2020</h5>
        </div>
      </div>
    </>
  );
};

export default ContTwoHeader;
