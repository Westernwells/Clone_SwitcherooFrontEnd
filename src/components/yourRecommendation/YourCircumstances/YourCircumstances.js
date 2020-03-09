import React from 'react';
import './styles.css';
import { ourRecommendation } from '../object';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const YourCircumstances = ({ circumstances }) => {
  return (
    <div className="recommendation-circumstances">
      <h4 style={{ marginBottom: '15px' }}>Your circumstances</h4>
      {circumstances.map((p, idx) => (
        <p className="recommendation-text">{p}</p>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  circumstances: state.yourRecommendationReducer.circumstances
});

export default connect(mapStateToProps, null)(withRouter(YourCircumstances));
