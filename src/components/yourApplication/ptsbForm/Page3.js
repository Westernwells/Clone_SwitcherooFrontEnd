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
        <img src={footer} height="13"></img>
      </div>
    );
  }
}

export default Page3;
