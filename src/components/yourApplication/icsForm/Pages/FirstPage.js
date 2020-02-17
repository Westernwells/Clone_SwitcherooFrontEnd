import React from "react";
import DefaultRow from "./DefaultRow";
import TimeRow from "./TimeRow";
import QuestionRow from "./QuestionRow";
import TopPageLogo from "../../../../assets/icslogo.PNG";
import MortageApplicationTypes from "./MortageApplicationType";
import MegaHeading from "./MegaHeading";
const FirstPaege = ({ appData }) => {
  const print = () => {
    window.print();
  };
  console.log(appData.personalDetails);
  return (
    <>
      <div className="relative pageHeight">
        <button
          className="absolute print-button px-6 py-2 text-white mt-5 bg-red-500 text-2xl"
          onClick={() => print()}
        >
          Print
        </button>
        <div className="elements-container">
          <TopPageLogo />
          <MortageApplicationTypes />
        </div>
        <MegaHeading headingTitle="Personal Information" headingNumber="1" />
        <div className="mt-2 mb-2 elements-container flex justify-between w-full">
          <div className="h-6 w-2/5"></div>
          <div className="h-6 w-28 text-center uppercase font-semibold color-primary ">
            Applicant 1
          </div>
          <div className="h-6 w-28 text-center uppercase font-semibold color-primary">
            Applicant 2
          </div>
        </div>
        <div className="elements-container flex flex-col justify-center items-center w-full">
          <DefaultRow
            title="Title: Mr, Mrs, Miss, Ms, Dr etc"
            name="youGoBy"
            appData={appData.personalDetails}
          />
          <DefaultRow
            title="Your first name(s)"
            name="firstName"
            appData={appData.personalDetails}
          />
          <DefaultRow
            title="Your surname"
            name="surname"
            appData={appData.personalDetails}
          />
          <DefaultRow
            title="Gender "
            name="yourIdentification"
            appData={appData.personalDetails}
          />
          <DefaultRow title="Have you ever been known by any other names? (please include maiden name)" />
          <DefaultRow
            title="Your date of birth"
            name="dateOfBirth"
            appData={appData.personalDetails}
          />
          <DefaultRow title="PPS Number" />
          <DefaultRow
            title="Your marital / civil status: e.g. Married, Single,Divorced, Separated, Widowed, Living together"
            inputHeight="30px"
            name="maritalStatus"
            appData={appData.personalDetails}
          />
          <DefaultRow
            title="Your current address"
            inputHeight="80px"
            name="currentAddress"
            appData={appData.personalDetails}
          />
          <DefaultRow title="Eircode" />
          <DefaultRow
            title="Current dwelling type: e.g. Living with family /Living with friends / Other / Owner occupier /Tenant"
            inputHeight="50px"
          />
          <DefaultRow
            title="If residing less than 3 years at current address,please provide your previous addresses along with dates of residency at each address (Indicate if you owned/tenant/living with relative/friend)"
            inputHeight="100px"
          />
          <TimeRow
            title="Time at current address"
            labelOne="Years"
            labelTwo="Months"
          />
          <DefaultRow title="Your nationality" />
          {/* <DefaultRow title="Your nationality" /> */}
          <DefaultRow title="How long have you been resident in Ireland?" />
          <QuestionRow title="Do you require a visa to work in Ireland?" />
          <DefaultRow title="What visa is required?" />
          {/* <TimeRow title="Number of dependents" labelOne="Adult dependents(OVER 18 YRS)" labelTwo="Child dependents(UNDER 18 YRS)"/> */}
          <QuestionRow title="Do you require a visa to work in Ireland?" />
        </div>
      </div>
    </>
  );
};

export default FirstPaege;
