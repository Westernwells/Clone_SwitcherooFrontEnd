import React, { Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import $ from 'jquery';
import { Tooltip } from 'antd';

class RecommendationButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickAble: true
    };
  }

  downloadPdf = () => {
    return new Promise(resolve => {
      const input1 = document.getElementsByClassName(
        'recommendation-firstpage'
      )[0];
      const input2 = document.getElementsByClassName(
        'recommendation-secondpage'
      )[0];
      const input3 = document.getElementsByClassName(
        'recommendation-thirdpage'
      )[0];

      // html2canvas(input1, {
      //   windowWidth: window.innerWidth,
      //   windowHeight: window.innerHeight
      // }).then(canvas1 => {
      //   html2canvas(input2, {
      //     windowWidth: window.innerWidth,
      //     windowHeight: window.innerHeight
      //   }).then(canvas2 => {
      //     html2canvas(input3, {
      //       windowWidth: window.innerWidth,
      //       windowHeight: window.innerHeight
      //     }).then(canvas3 => {
      //       const imgData1 = canvas1.toDataURL('image/png');
      //       const imgData2 = canvas2.toDataURL('image/png');
      //       const imgData3 = canvas3.toDataURL('image/png');
      //       const pdf = new jsPDF('p', 'pt', 'a4');
      //       let pdfWidth = pdf.internal.pageSize.getWidth();
      //       let pdfHeight = pdf.internal.pageSize.getHeight();
      //       pdf.addImage(imgData1, 'PNG', 0, 0, pdfWidth, pdfHeight);
      //       pdf.addPage();
      //       pdf.addImage(imgData2, 'PNG', 0, 0, pdfWidth, pdfHeight);
      //       pdf.addPage();
      //       pdf.addImage(imgData3, 'PNG', 0, 0, pdfWidth, pdfHeight);

      //       setTimeout(() => {
      //         pdf.save('Switcheroo-Recommendation.pdf');
      //         resolve('resolved');
      //       }, 4000);
      //     });
      //   });
      // });

      html2canvas(input1, { scale: 2 }).then(canvas1 => {
        html2canvas(input2, { scale: 2 }).then(canvas2 => {
          html2canvas(input3, { scale: 2 }).then(canvas3 => {
            const imgData1 = canvas1.toDataURL('image/png');
            const imgData2 = canvas2.toDataURL('image/png');
            const imgData3 = canvas3.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgProps = pdf.getImageProperties(imgData1);
            let pdfWidth = pdf.internal.pageSize.getWidth();
            let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData1, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.addPage();
            pdf.addImage(imgData2, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.addPage();
            pdf.addImage(imgData3, 'PNG', 0, 0, pdfWidth, pdfHeight);
            // pdf.output('dataurlnewwindow');
            setTimeout(() => {
              pdf.save('Switcheroo-Recommendation.pdf');
              resolve('resolved');
            }, 4000);
          });
        });
      });
    });
  };

  asyncDownloadPdf = () => {
    const btn = document.getElementById('recommendation-download-btn');
    btn.classList.add('recommendation-btn-clicked');
    const backupBtnText = btn.innerHTML;
    btn.innerHTML = 'downloading...';
    this.downloadPdf().then(() => {
      btn.classList.remove('recommendation-btn-clicked');
      btn.innerHTML = backupBtnText;
    });
  };

  printPdf = () => {
    return new Promise(resolve => {
      const input1 = document.getElementsByClassName(
        'recommendation-firstpage'
      )[0];
      const input2 = document.getElementsByClassName(
        'recommendation-secondpage'
      )[0];
      const input3 = document.getElementsByClassName(
        'recommendation-thirdpage'
      )[0];

      html2canvas(input1, { scale: 2 }).then(canvas1 => {
        html2canvas(input2, { scale: 2 }).then(canvas2 => {
          html2canvas(input3, { scale: 2 }).then(canvas3 => {
            const imgData1 = canvas1.toDataURL('image/png');
            const imgData2 = canvas2.toDataURL('image/png');
            const imgData3 = canvas3.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgProps = pdf.getImageProperties(imgData1);
            let pdfWidth = pdf.internal.pageSize.getWidth();
            let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData1, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.addPage();
            pdf.addImage(imgData2, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.addPage();
            pdf.addImage(imgData3, 'PNG', 0, 0, pdfWidth, pdfHeight);
            // pdf.output('dataurlnewwindow');
            // pdf.save('download.pdf');
            // pdf.autoPrint({ variant: 'non-conform' });
            setTimeout(() => {
              // window.open(pdf.output('bloburl'), '_blank');
              window.open(URL.createObjectURL(pdf.output('blob')));
              resolve('resolved');
            }, 4000);
          });
        });
      });
    });
  };

  asyncPrintPdf = () => {
    const btn = document.getElementById('recommendation-print-btn');
    // btn.classList.add('recommendation-btn-clicked');
    btn.style.opacity = '0.6';
    const backupBtnText = btn.innerHTML;
    btn.innerHTML = 'please wait...';
    this.printPdf().then(() => {
      btn.style.opacity = '1';
      btn.innerHTML = backupBtnText;
    });
  };

  uploadPdf = () => {
    let input = $(document.createElement('input'));
    input.attr('type', 'file');
    input.trigger('click');
    return false;
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          margin: '9px 30px 29px 0px',
          padding: '0px 40px'
        }}
      >
        <div style={{ flex: '1', textAlign: 'center' }}>
          <button
            id="recommendation-download-btn"
            className="recommendation-button"
            onClick={() => this.asyncDownloadPdf()}
          >
            Download
            {/* <FontAwesomeIcon icon={faDownload} /> */}
          </button>
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <Tooltip title="Please turn off adblock and then try">
            <button
              id="recommendation-print-btn"
              className="recommendation-button"
              onClick={() => this.asyncPrintPdf()}
            >
              Print
              {/* <FontAwesomeIcon icon={faPrint} /> */}
            </button>
          </Tooltip>
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <button
            id="recommendation-upload-btn"
            className="recommendation-button"
            onClick={() => this.uploadPdf()}
          >
            Upload
            {/* <FontAwesomeIcon icon={faUpload} /> */}
          </button>
        </div>
      </div>
    );
  }
}

export default RecommendationButtons;
