import React, { Component } from 'react';
import './styles.css';
import { withRouter } from 'react-router-dom';
import {
  setText,
  setExtras
} from '../../../redux/actions/yourRecommendation/recommendationAction';
import { connect } from 'react-redux';

class OurRecommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (
      this.props.recommendation !== prevProps.recommendation
      // heightOfPara > contOneAllowedHeight
      // this.props.extra.length === 0
    ) {
      const contOneHeight =
        document.getElementsByClassName('recommendation-firstpage')[0]
          .clientHeight - 30;
      const para = document.getElementsByClassName(
        'recommendation-recommendation'
      )[0];
      const positionOfPara = para.offsetTop;
      const contOneAllowedHeight = contOneHeight - positionOfPara;
      let heightOfPara = para.clientHeight;
      let childrenOfPara = para.children;
      let abc = 0;
      let def = 0;
      for (let i = 0; i < childrenOfPara.length; i++) {
        if (abc < contOneAllowedHeight) {
          abc = abc + childrenOfPara[i].clientHeight + 16;
          def = i;
        }
      }
      let ghi = childrenOfPara.length - def;

      let recommendationInstance = this.props.recommendation;
      let extras = [];
      let popped;
      for (let i = 0; i < ghi; i++) {
        popped = recommendationInstance.pop();
        extras.unshift(popped);
      }
      // console.log('chnaged state!', recommendationInstance, extras);
      this.props.setExtras({
        updatedRecommendation: recommendationInstance,
        extras
      });
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className="recommendation-recommendation">
        <h4 style={{ marginBottom: '15px' }}>Our recommendation:</h4>
        {this.props.recommendation.map((p, idx) => (
          <p key={idx} className="recommendation-text">
            {p}
          </p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    introduction: state.yourRecommendationReducer.introduction,
    circumstances: state.yourRecommendationReducer.circumstances,
    recommendation: state.yourRecommendationReducer.recommendation,
    extra: state.yourRecommendationReducer.extraFromPageOne,
    loading: state.yourRecommendationReducer.loading
  };
};

export default connect(mapStateToProps, { setText, setExtras })(
  withRouter(OurRecommendation)
);
