import React, { Component } from 'react';
import './extras.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  setExtrasFromPageTwo,
  clearExtrasFromPageTwo
} from '../../../redux/actions/yourRecommendation/recommendationAction';

class Extras extends Component {
  render() {
    const { extras } = this.props;
    return (
      <>
        {extras.map((p, idx) => (
          <p key={idx} className="recommendation-text">
            {p}
          </p>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    extras: state.yourRecommendationReducer.extraFromPageOne
  };
};

export default connect(mapStateToProps, {
  setExtrasFromPageTwo,
  clearExtrasFromPageTwo
})(withRouter(Extras));
