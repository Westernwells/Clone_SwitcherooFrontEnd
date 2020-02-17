import React from "react";
import DefaultRow from "./DefaultRow";
import MegaHeading from "./MegaHeading";
import Logo from "../../../../assets/icslogo.PNG";
const ThirdPage = () => {
  return (
    <>
      <div className="pageHeight -mt-4">
        <Logo />
        <MegaHeading headingTitle="Employment Details " headingNumber="3(a)" />
        <div className="elements-container color-primary">
          <h1 className="font-semibold text-lg mt-2">
            If you are self-employed complete the questions in Section 3(b)
          </h1>
        </div>
        <div className="mt-2 mb-2 elements-container flex justify-between w-full">
          <div className="h-6 w-2/5"></div>
          <div className="h-6 w-28 text-center uppercase font-semibold color-primary ">
            Applicant 1
          </div>
          <div className="h-6 w-28 text-center uppercase font-semibold color-primary">
            Applicant 2
          </div>
        </div>
        <div className="elements-container mt-6">
          <DefaultRow title="Your job title" />
          <DefaultRow title="Start date of employment" />
          <DefaultRow title="Employment type eg: Permanent full time / Permanent part time / Fixed term / Casual / Self employed / Full time education Unemployed / Other / House person / Retired" />
          <DefaultRow title="If temporary or on contract,length of term remaining" />
          <DefaultRow title="Your employer’s name" />
          <DefaultRow title="Nature of employer’s business" />
          <DefaultRow title="Your employer’s address" inputHeight="80px" />
          <DefaultRow title="Eircode" />
          <DefaultRow title="Your employer’s telephone number" />
          <DefaultRow title="If still in probationary period, please confirm date probationary period ends" />
          <p className="mt-2 text-xs">
            Previous employment details (3 year history): Please provide full
            details of your employment if you have been less than 3 years with
            your current employer or have been self employed for less than 3
            years
          </p>
          <div className="flex w-full justify-between mt-4 ">
            <div className="flex flex-col" style={{ width: "49%" }}>
              <h1 className="color-primary text-center font-semibold">
                APPLICANT 1
              </h1>
              <textarea
                type="text"
                className="bg-tertiary"
                style={{ height: "250px" }}
              ></textarea>
            </div>
            <div className="flex flex-col" style={{ width: "49%" }}>
              <h1 className="color-primary text-center font-semibold">
                APPLICANT 2
              </h1>
              <textarea
                type="text"
                className="bg-tertiary"
                style={{ height: "250px" }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
