import React from "react";
import DefaultRow from "./DefaultRow";
import QuestionRow from "./QuestionRow";
import SingleRow from "./SingleRow";
import MegaHeading from "./MegaHeading";
import TopPageLogo from "../../../../assets/icslogo.PNG";

const EighthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-2">
				<TopPageLogo />
				<MegaHeading headingTitle="Credit Information" headingNumber="8" />
				<div className="mt-1 mb-1 elements-container flex justify-between w-full">
					<div className="h-4 w-2/5"></div>
					<div className="h-4 w-28 text-center uppercase font-semibold color-primary ">
						Applicant 1
					</div>
					<div className="h-4 w-28 text-center uppercase font-semibold color-primary">
						Applicant 2
					</div>
				</div>
				<div className="elements-container mt-0 text-xs">
					<QuestionRow title="Have you personally or as a company director ever been declared bankrupt, insolvent or made an arrangement with creditors?" />
					<SingleRow title="If yes, when? " />
					<QuestionRow title="Have you ever had a judgement for debt registered against you? " />
					<SingleRow
						title="If yes, please provide details"
						inputHeight="75px"
					/>
					<QuestionRow title="Have you ever missed any payment or been in arrears on any mortgage, credit card or other financial commitment?" />
					<SingleRow
						title="If yes, please provide details"
						inputHeight="75px"
					/>
					<QuestionRow title="Have you ever been refused a mortgage on this or any other property or had an application for credit refused?" />
					<SingleRow
						title="If yes, please provide details"
						inputHeight="75px"
					/>
					<QuestionRow title="Have you ever had a property repossessed due to arrears or surrender?" />
					<SingleRow
						title="If yes, please provide details"
						inputHeight="75px"
					/>
					<QuestionRow title="Have you received a formal police caution in the last 5 years, ever been convicted of, or have any prosecutions pending?" />
					<DefaultRow
						title="If yes, please provide details"
						inputHeight="75px"
					/>
				</div>
			</div>
		</>
	);
};

export default EighthPage;
