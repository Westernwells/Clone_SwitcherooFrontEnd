import React from 'react';
import './Signature.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Signature = ({ applicant1Name, applicant2Name }) => {
  return (
    <div className="recommendation-signature">
      <p className="recommendation-text" style={{ marginBottom: '25px' }}>
        Dear Alison
      </p>
      <p className="recommendation-text" style={{ marginBottom: '25px' }}>
        We have read your statement of Suitablity and are happy with your
        Recommendation. Please proceed with this cover as recommended
      </p>
      <div className="rf-applicants-names">
        <div style={{ flex: '1', marginBottom: '37px' }}>
          <h4>{applicant1Name}</h4>
          <div
            style={{
              marginTop: '70px',
              marginBottom: '35px',
              height: '2px',
              width: '60%',
              backgroundColor: '#828385'
            }}
          ></div>
          <b>Date:</b>
        </div>
        <div style={{ flex: '1', marginBottom: '37px' }}>
          <h4>{applicant2Name}</h4>
          <div
            style={{
              marginTop: '70px',
              marginBottom: '35px',
              height: '2px',
              width: '60%',
              backgroundColor: '#828385'
            }}
          ></div>
          <b>Date:</b>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  applicant1Name: state.yourRecommendationReducer.applicant1Name,
  applicant2Name: state.yourRecommendationReducer.applicant2Name
});

export default connect(mapStateToProps, null)(withRouter(Signature));
