import React from "react";
import page5_1 from "../../../assets/p5_1.png";
import page5_2 from "../../../assets/p5_2.png";
import page5_3 from "../../../assets/p5_3.png";
import page5_4 from "../../../assets/p5_4.png";
import ptsbHeader from "../../../assets/ptsb-header.png";
import footer from "../../../assets/ptsb-footer.png";

function Page5() {
  return (
    <div className="container-fluid px-5 py-4 page5">

      <img src={ptsbHeader} height="48px" className="mt-4"></img>
      <img src={page5_1} width="700" className="mt-4"></img>
      <img src={page5_2} width="700"></img>
      <img src={page5_3} width="700"></img>
      <img src={page5_4} width="700"></img>
      <img src={footer} height="13"></img>
    </div>
  );
}

export default Page5;
