import React, { Component } from 'react';
import './extras.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  setExtrasFromPageTwo,
  clearExtrasFromPageTwo
} from '../../../redux/actions/yourRecommendation/recommendationAction';

class Extras extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.extras !== prevProps.extras) {
      const extras = document.getElementById(
        'recommendation-secondpage-content'
      );

      let lengthSum = 0;
      let wantedIndex = 0;
      for (let i = 0; i < extras.childNodes.length; i++) {
        if (lengthSum < extras.clientHeight) {
          lengthSum =
            lengthSum +
            extras.childNodes[i].clientHeight +
            (i === 1 || i === 2 || i === 3 ? 16 : 25);
          wantedIndex = i;
        }
      }

      // console.log(extras.clientHeight, lengthSum, wantedIndex);
      const toRemoveNo = extras.childNodes.length - wantedIndex;

      let removedChild;
      let payload = [];
      for (let i = 0; i < toRemoveNo; i++) {
        removedChild = extras.removeChild(
          extras.childNodes[extras.childNodes.length - 1]
        );
        payload.unshift(removedChild);
      }

      console.log(payload);
      this.props.setExtrasFromPageTwo(payload);
    }
  }

  componentWillUnmount() {
    this.props.clearExtrasFromPageTwo();
  }

  render() {
    console.log('extra 1');
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
