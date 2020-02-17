import React from "react";
import SingleRow from "./SingleRow";
import MegaHeading from "./MegaHeading";
import SingleQuestionRow from "./SingleQuestionRow";
import TopPageLogo from "../../../../assets/icslogo.PNG";

const EighthPage = () => {
	return (
		<>
			<div className="pageHeight">
				<TopPageLogo />
				<MegaHeading
					headingTitle="Property to be Mortgaged"
					headingNumber="9"
				/>
				<div className="elements-container mt-2 text-xs">
					<SingleRow
						title="Full postal address and Eircode of the property to be mortgaged"
						inputHeight="70px"
					/>
					<SingleRow title="Purchase price " />
					<SingleRow title="Estimated Market Value" />
					<SingleRow
						title="Description of property house/detached/semi/terraced/ bungalow or apartment "
						inputHeight="60px"
					/>
					<SingleQuestionRow title="Is the property registered under the Homebond,Premier Guarantee or Construction Registrar (Ireland) Ltd schemes?" />
				</div>
				<MegaHeading
					headingTitle="Details of the Mortgage You Require "
					headingNumber="10"
				/>
				<div className="color-primary elements-container mt-2 font-semibold text-sm">
					<h1>Also see section 11 if you are remortgaging</h1>
				</div>
				<div className="elements-container mt-6 text-sm">
					<SingleRow title="Mortgage term" />
					<SingleRow title="Total mortgage amount " />
					<SingleQuestionRow title="Type of mortgage required" />
					<SingleRow title="Total deposit" />
					<SingleRow
						title="Please state the source of the deposit you are going to use to purchase the property"
						inputHeight="70px"
					/>
					<SingleRow title="Deposit from savings" />
					<SingleRow title="Deposit from gift" />
					<SingleRow title="Deposit from Help-To-Buy" />
					<SingleRow title=" Deposit from other" />
					<SingleQuestionRow title="Did you participate in the Government Help-To-Buy incentive?" />
					<SingleRow title="Help-To-Buy Application Number" />
					<SingleRow title="Help-To-Buy Access Code " />
				</div>
			</div>
		</>
	);
};

export default EighthPage;
