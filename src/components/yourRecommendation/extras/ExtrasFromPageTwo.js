import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearExtrasFromPageTwo } from '../../../redux/actions/yourRecommendation/recommendationAction';

class ExtrasFromPageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const extras = document.getElementById('recommendation-secondpage-content');

    console.log(extras.childNodes.length);
  }

  componentDidUpdate(prevProps) {
    const extras = document.getElementById('recommendation-secondpage-content');

    console.log(extras.childNodes.length);
    if (this.props.extraFromPageTwo !== prevProps.extraFromPageTwo) {
      // console.log(this.props.extraFromPageTwo);
      const container = document.getElementsByClassName('extraFrompageTwo')[0];
      for (let i = 0; i < this.props.extraFromPageTwo.length; i++) {
        container.appendChild(this.props.extraFromPageTwo[i]);
      }
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
  extraFromPageTwo: state.yourRecommendationReducer.extraFromPageTwo
});

export default connect(mapStateToProps, { clearExtrasFromPageTwo })(
  withRouter(ExtrasFromPageTwo)
);
