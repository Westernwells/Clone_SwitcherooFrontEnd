import React, { useEffect, Component } from 'react';
import './styles.css';
import { Col } from 'antd';
import Rightbar from '../home/rightbar/rightbar';
import ContOneHeader from './RecommendationHeader/ContOneHeader';
import ContTwoHeader from './RecommendationHeader/ContTwoHeader';
import YourCircumstances from './YourCircumstances/YourCircumstances';
import OurRecommendation from './OurRecommendation/OurRecommendation';
import Extras from './extras/Extras';
import Risk from './risk/Risk';
import NextSteps from './nextSteps/NextSteps';
import Signature from './signature/Signature';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setText } from '../../redux/actions/yourRecommendation/recommendationAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faPrint,
  faUpload
} from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// const YourRecommendation = ({ setText, recommendation }) => {
//   const downloadPdf = () => {
//     // const input = document.getElementsByClassName(
//     //   'recommendation-container'
//     // )[0];
//     // html2canvas(input).then(canvas => {
//     //   const imgData = canvas.toDataURL('image/png');
//     //   const pdf = new jsPDF();
//     //   pdf.addImage(imgData, 'JPEG', 0, 0);
//     //   pdf.save('Switcheroo-Recommendation.pdf');
//     // });
//     const input = document.getElementById('recommendation-cont-one');
//     html2canvas(input).then(canvas => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 0, 0);
//       // pdf.output('dataurlnewwindow');
//       pdf.save('download.pdf');
//     });
//   };

//   useEffect(() => {
//     if (recommendation.length === 0) {
//       setText();
//     }
//   }, [setText]);

//   return (
//     <>
//       <Col style={{ height: 'calc(100vh - 100px)' }} lg={18}>
//         <div
//           style={{
//             display: 'flex',
//             margin: '9px 30px 29px 0px',
//             padding: '0px 40px'
//           }}
//         >
//           <div style={{ flex: '1', textAlign: 'center' }}>
//             <button
//               className="recommendation-button"
//               onClick={() => downloadPdf()}
//             >
//               Download <FontAwesomeIcon icon={faDownload} />
//             </button>
//           </div>
//           <div style={{ flex: '1', textAlign: 'center' }}>
//             <button className="recommendation-button">
//               Print <FontAwesomeIcon icon={faPrint} />
//             </button>
//           </div>
//           <div style={{ flex: '1', textAlign: 'center' }}>
//             <button className="recommendation-button">
//               Upload <FontAwesomeIcon icon={faUpload} />
//             </button>
//           </div>
//         </div>
//         <div id="recommendation-cont-one" className="recommendation-container">
//           <ContOneHeader />
//           <div style={{ paddingRight: '20px' }}>
//             <YourCircumstances />
//             <OurRecommendation />
//           </div>
//         </div>
//         <div id="recommendation-cont-two" className="recommendation-container">
//           <div id="recommendationThree-content">
//             <ContTwoHeader />
//             <Extras />
//             <Risk />
//             <div id="recommendation-footer">
//               <Footer />
//             </div>
//           </div>
//         </div>
//         <div
//           id="recommendation-cont-three"
//           className="recommendation-container"
//         >
//           <div id="recommendationThree-content">
//             <ContTwoHeader />
//             <NextSteps />
//             <div id="recommendation-footer">
//               <Signature />
//             </div>
//           </div>
//         </div>
//       </Col>

//       <Col className="gutter-row" lg={6}>
//         <div className="gutter-box rightbar-container">
//           <Rightbar />
//         </div>
//       </Col>
//     </>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     recommendation: state.yourRecommendationReducer.recommendation
//   };
// };

// export default connect(mapStateToProps, { setText })(
//   withRouter(YourRecommendation)
// );

class YourRecommendation extends Component {
  state = {};

  componentDidMount() {
    if (this.props.recommendation.length === 0) {
      this.props.setText();
    }
  }

  print = () => {
    const input = document.getElementById('recommendation-cont-one');
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save('download.pdf');
    });
  };

  componentDidUpdate() {
    const contTwo = document.getElementById('recommendation-cont-two');
    const contTwoHeight = contTwo.clientHeight;
    const contTwoChildren = contTwo.children[0].children;
    console.log(contTwoHeight, contTwoChildren.length);
  }

  render() {
    return (
      <>
        <Col style={{ height: 'calc(100vh - 100px)' }} lg={18}>
          <div
            style={{
              display: 'flex',
              margin: '9px 30px 29px 0px',
              padding: '0px 40px'
            }}
          >
            <div style={{ flex: '1', textAlign: 'center' }}>
              <button
                className="recommendation-button"
                // onClick={() => downloadPdf()}
              >
                Download
                {/* <FontAwesomeIcon icon={faDownload} /> */}
              </button>
            </div>
            <div style={{ flex: '1', textAlign: 'center' }}>
              <button
                className="recommendation-button"
                onClick={() => this.print()}
              >
                Print
                {/* <FontAwesomeIcon icon={faPrint} /> */}
              </button>
            </div>
            <div style={{ flex: '1', textAlign: 'center' }}>
              <button className="recommendation-button">
                Upload
                {/* <FontAwesomeIcon icon={faUpload} /> */}
              </button>
            </div>
          </div>
          <div
            id="recommendation-cont-one"
            className="recommendation-container"
          >
            <ContOneHeader />
            <div style={{ paddingRight: '20px' }}>
              <YourCircumstances />
              <OurRecommendation />
            </div>
          </div>
          <div
            id="recommendation-cont-two"
            className="recommendation-container"
          >
            <div id="recommendationThree-content">
              <ContTwoHeader />
              <Extras />
              <Risk />
              <NextSteps />
              <div id="recommendation-footer">
                <Footer />
              </div>
            </div>
          </div>
          <div
            id="recommendation-cont-three"
            className="recommendation-container"
          >
            <div id="recommendationThree-content">
              <ContTwoHeader />
              <div id="recommendation-footer">
                <Signature />
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
    recommendation: state.yourRecommendationReducer.recommendation
  };
};

export default connect(mapStateToProps, { setText })(
  withRouter(YourRecommendation)
);
