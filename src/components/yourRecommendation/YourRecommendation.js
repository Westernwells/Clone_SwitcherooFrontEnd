import React, { useEffect, Component } from 'react';
import './styles.css';
import { Col } from 'antd';
import Rightbar from '../home/rightbar/rightbar';
import ContOneHeader from './RecommendationHeader/ContOneHeader';
import ContTwoHeader from './RecommendationHeader/ContTwoHeader';
import YourCircumstances from './YourCircumstances/YourCircumstances';
import OurRecommendation from './OurRecommendation/OurRecommendation';
import Extras from './extras/Extras';
import ExtrasFromPageTwo from './extras/ExtrasFromPageTwo';
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

  downloadPdf = () => {
    const input1 = document.getElementsByClassName(
      'recommendation-firstpage'
    )[0];

    const input2 = document.getElementsByClassName(
      'recommendation-secondpage'
    )[0];
    const input3 = document.getElementsByClassName(
      'recommendation-thirdpage'
    )[0];
    html2canvas(input1).then(canvas1 => {
      html2canvas(input2).then(canvas2 => {
        html2canvas(input3).then(canvas3 => {
          const imgData1 = canvas1.toDataURL('image/png');
          const imgData2 = canvas2.toDataURL('image/png');
          const imgData3 = canvas3.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData1, 'PNG', 0, 0);
          pdf.addPage();
          pdf.addImage(imgData2, 'PNG', 0, 0);
          pdf.addPage();
          pdf.addImage(imgData3, 'PNG', 0, 0);
          // pdf.output('dataurlnewwindow');
          pdf.save('download.pdf');
        });
      });
    });
  };

  printPdf = () => {
    // const backUp = document.body.innerHTML;
    // document.body.innerHTML = document.getElementsByClassName(
    //   'recommendation-toPrint'
    // )[0].innerHTML;
    // window.print();
    // document.body.innerHTML = backUp;
  };

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
                onClick={() => this.downloadPdf()}
              >
                Download
                {/* <FontAwesomeIcon icon={faDownload} /> */}
              </button>
            </div>
            <div style={{ flex: '1', textAlign: 'center' }}>
              <button
                className="recommendation-button"
                onClick={() => this.printPdf()}
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
