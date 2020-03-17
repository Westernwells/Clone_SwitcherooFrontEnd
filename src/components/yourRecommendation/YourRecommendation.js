import React, { useEffect, Component } from "react";
import "./styles.css";
import { Col } from "antd";
import Rightbar from "../home/rightbar/rightbar";
import ContOneHeader from "./RecommendationHeader/ContOneHeader";
import ContTwoHeader from "./RecommendationHeader/ContTwoHeader";
import YourCircumstances from "./YourCircumstances/YourCircumstances";
import OurRecommendation from "./OurRecommendation/OurRecommendation";
import Extras from "./extras/Extras";
import ExtrasFromPageTwo from "./extras/ExtrasFromPageTwo";
import Risk from "./risk/Risk";
import NextSteps from "./nextSteps/NextSteps";
import Signature from "./signature/Signature";
import RecommendationButtons from "./Buttons/RecommendationButtons";
import Footer from "./Footer/Footer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setText } from "../../redux/actions/yourRecommendation/recommendationAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faPrint,
  faUpload
} from "@fortawesome/free-solid-svg-icons";

class YourRecommendation extends Component {
  state = {};

  componentDidMount() {
    if (this.props.recommendation.length === 0) {
      this.props.setText();
    }
  }

  render() {
    return (
      <>
        <Col style={{ height: "calc(100vh - 100px)" }} lg={18}>
          <RecommendationButtons />
          <div className="recommendation-toPrint">
            <div className="recommendation-page-wrapper">
              <div className="recommendation-firstpage">
                <div id="recommendation-firstpage-content">
                  <ContOneHeader />
                  <YourCircumstances />
                  <OurRecommendation />
                </div>
                <div id="recommendation-firstpage-footer">
                  <p>
                    Switcheroo.ie, 13 Baggot Street Upper, Dublin 4, D04 W7K5
                  </p>
                </div>
              </div>
            </div>
            <div className="recommendation-page-wrapper">
              <div className="recommendation-secondpage">
                <div id="recommendation-secondpage-content">
                  <ContTwoHeader />
                  <Extras />
                  <Risk />
                  <NextSteps />
                  <Signature />
                </div>
                <div id="recommendation-secondpage-footer">
                  <p>
                    Switcheroo.ie, 13 Baggot Street Upper, Dublin 4, D04 W7K5
                  </p>
                </div>
              </div>
            </div>
            <div className="recommendation-page-wrapper">
              <div className="recommendation-thirdpage">
                <div id="recommendation-thirdpage-content">
                  <ContTwoHeader />
                  <ExtrasFromPageTwo />
                </div>
                <div id="recommendation-thirdpage-footer">
                  <p>
                    Switcheroo.ie, 13 Baggot Street Upper, Dublin 4, D04 W7K5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" lg={6}>
          <div className="gutter-box rightbar-container">
            <Rightbar />
          </div>
        </Col>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    recommendation: state.yourRecommendationReducer.recommendation,
    extraFromPageTwo: state.yourRecommendationReducer.extraFromPageTwo
  };
};

export default connect(mapStateToProps, { setText })(
  withRouter(YourRecommendation)
);
