import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  setExtrasFromPageTwo,
  clearExtrasFromPageTwo
} from '../../../redux/actions/yourRecommendation/recommendationAction';

class ExtrasFromPageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const extras = document.getElementById('recommendation-secondpage-content');
    if (extras.childNodes.length > 4) {
      // console.log('componenet did mount check for 4');
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
      const noOfElementsToRemove = extras.childNodes.length - wantedIndex;

      let removedChild;
      let payload = [];
      for (let i = 0; i < noOfElementsToRemove; i++) {
        removedChild = extras.removeChild(
          extras.childNodes[extras.childNodes.length - 1]
        );
        payload.unshift(removedChild);
      }

      console.log(
        'componenet did update',
        extras.childNodes.length,
        extras.clientHeight,
        lengthSum,
        wantedIndex,
        payload
      );
      this.props.setExtrasFromPageTwo(payload);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.extras !== prevProps.extras) {
      console.log('componenet did update check for 4');
      const extras = document.getElementById(
        'recommendation-secondpage-content'
      );
      console.log('componenet did update', extras.childNodes.length);

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
      const noOfElementsToRemove = extras.childNodes.length - wantedIndex;

      let removedChild;
      let payload = [];
      for (let i = 0; i < noOfElementsToRemove; i++) {
        removedChild = extras.removeChild(
          extras.childNodes[extras.childNodes.length - 1]
        );
        payload.unshift(removedChild);
      }

      console.log(
        'componenet did update',
        extras.childNodes.length,
        extras.clientHeight,
        lengthSum,
        wantedIndex,
        payload
      );
      this.props.setExtrasFromPageTwo(payload);
    }
    const container = document.getElementsByClassName('extraFrompageTwo')[0];
    for (let i = 0; i < this.props.extraFromPageTwo.length; i++) {
      container.appendChild(this.props.extraFromPageTwo[i]);
    }
  }

  componentWillUnmount() {
    this.props.clearExtrasFromPageTwo();
  }

  render() {
    return <div className="extraFrompageTwo"></div>;
  }
}

const mapStateToProps = state => ({
  extraFromPageTwo: state.yourRecommendationReducer.extraFromPageTwo,
  extras: state.yourRecommendationReducer.extraFromPageOne
});

export default connect(mapStateToProps, {
  setExtrasFromPageTwo,
  clearExtrasFromPageTwo
})(withRouter(ExtrasFromPageTwo));
