import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import "./PtsbStyle.css";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: null,
      generating: false
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    fetch(
      "https://switchroo.herokuapp.com/detailsYouNeed/getDetails/5e1cad6962b8dc001761e3cd"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ obj: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div id="root" className="ptsb-form mt-6">
        <section>
          <div className="print-wrap page1">
            {this.state.obj && <Page1 form={this.state.obj} />}
          </div>
        </section>
        <section>
          <div className="print-wrap page2">
            {this.state.obj && <Page2 form={this.state.obj} />}
          </div>
        </section>
        <section>
          <div className="print-wrap page3">
            {this.state.obj && <Page3 form={this.state.obj} />}
          </div>
        </section>
        <section>
          <div className="print-wrap page4">
            {this.state.obj && <Page4 form={this.state.obj} />}
          </div>
        </section>
        <section>
          <div className="print-wrap page5">
            {this.state.obj && <Page5 form={this.state.obj} />}
          </div>
        </section>
        <section className="lastPage">
          <div className="print-wrap page6">
            {this.state.obj && <Page6 form={this.state.obj} />}
          </div>
        </section>

        <div className="w-100 text-center">
          <button
            className="print-button mb-5 btn btn-primary"
            type="submit"
            onClick={this.generatePDF}
            disabled={this.state.generating}
          >
            <div className="d-flex flex-row align-items-center justify-content-center">
            { this.state.generating ? 'Generating PDF...' : 'Save and Generate PDF' }
            {
              this.state.generating &&
              <div class="ml-2 spinner-border ptsb-spinner" role="status">
                <span class="sr-only">Generating PDF...</span>
              </div>
            }
            </div>

          </button>
        </div>
      </div>
    );
  }

  generatePDF = async () => {
    this.setState({
      ...this.state,
      generating: true
    });
    // window.scrollTo(0,0)
    const pdf = new jsPDF();

    for (let i = 0; i < 6; i++) {
      i > 0 && pdf.addPage();
      const canvas = await html2canvas(
        document.getElementsByClassName("print-wrap")[i],
        {
          scrollY: -window.scrollY,
          scale: 2
        }
      );
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
    }

    pdf.save("PTSB-Form");
    this.setState({
      ...this.state,
      generating: false
    });
  }
}

export default Main;
