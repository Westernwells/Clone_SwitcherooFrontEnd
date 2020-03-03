import React from "react";
import page3_1 from "../../../assets/p3_1.png";
import page3_2 from "../../../assets/p3_2.png";
import page3_3 from "../../../assets/p3_3.png";
import page3_4 from "../../../assets/p3_4.png";
import footer from "../../../assets/ptsb-footer.png";

class Page3 extends React.Component {
  getSplitInput = (boxCount, key) => {
    let inputs = [];
    for (let i = 0; i < boxCount; i++) {
      inputs.push(
        <input
          className="accountNumber mr-1 primary-input text-center"
          maxLength="1"
          key={i}
        />
      );
    }
    return inputs;
  };

  render() {
    return (
      <div className="container-fluid px-5 py-4">
        <img src={page3_1} width="700" className="mt-4"></img>
        <img src={page3_2} width="700" className="mt-3"></img>
        <img src={page3_3} width="700"></img>

        <div className="d-flex flex-row w-80 justify-content-between align-items-end mt-2">
          <div className="w-70 d-flex flex-row justify-content-between align-items-end">
            <label className="w-40" style={{ fontSize: "12px" }}>
              Signature of first applicant:
            </label>
            <input type="text" className="primary-input form-control w-56" />
          </div>
          <div className="d-flex flex-row w-25 align-items-end">
            <label className="mr-2" style={{ fontSize: "12px" }}>
              Date:
            </label>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
          </div>
        </div>

        <div className="d-flex flex-row w-80 justify-content-between align-items-end mt-2">
          <div className="w-70 d-flex flex-row justify-content-between align-items-end">
            <label className="w-40" style={{ fontSize: "12px" }}>
              Signature of second applicant:
            </label>
            <input type="text" className="primary-input form-control w-56" />
          </div>
          <div className="d-flex flex-row w-25 align-items-end">
            <label className="mr-2" style={{ fontSize: "12px" }}>
              Date:
            </label>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
          </div>
        </div>

        <img src={footer} height="13" className="mt-5"></img>
      </div>
    );
  }
}

export default Page3;
