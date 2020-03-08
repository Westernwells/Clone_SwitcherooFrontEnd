import React from 'react';
import './extras.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Extras = ({ extras }) => {
  return (
    <div className="recommendation-extras">
      {extras.map((p, idx) => (
        <p key={idx} className="recommendation-text">
          {p}
        </p>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    extras: state.yourRecommendationReducer.extraFromPageOne
  };
};

export default connect(mapStateToProps, {})(withRouter(Extras));
