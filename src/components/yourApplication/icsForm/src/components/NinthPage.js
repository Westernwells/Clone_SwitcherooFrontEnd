import React from "react";
import SingleRow from "./SingleRow";
import MegaHeading from "./MegaHeading";
import SingleQuestionRow from "./SingleQuestionRow";
import TopPageLogo from "./logo";

const EighthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-8 mb-2" style={{ "--bottom": "25px" }}>
				<TopPageLogo />
				<MegaHeading
					headingTitle="Property to be Mortgaged"
					headingNumber="9"
				/>
				<div className="elements-container mt-6 ">
					<SingleRow
						title="Full postal address and Eircode of the property to be mortgaged"
						inputHeight="70px"
					/>
					<SingleRow
						title="Purchase price "
						additionalClassOne="with-symbol"
						name="mortDetailsMover.purchasePrice"
					/>
					<SingleRow
						title="Estimated Market Value"
						additionalClassOne="with-symbol"
						name="mortDetailsMover.currentValue"
					/>
					<SingleRow
						title="Description of property house/detached/semi/terraced/ bungalow or apartment "
						inputHeight="60px"
						name="mortDetailsMover.currentPropType"
					/>
					<SingleQuestionRow title="Is the property registered under the Homebond,Premier Guarantee or Construction Registrar (Ireland) Ltd schemes?" />
				</div>
				<MegaHeading
					headingTitle="Details of the Mortgage You Require "
					headingNumber="10"
					className="mt-6"
				/>
				<div className="color-primary elements-container text-base mt-4 font-semibold ">
					<h1>Also see section 11 if you are remortgaging</h1>
				</div>
				<div className="elements-container mt-2 ">
					<SingleRow title="Mortgage term" />
					<SingleRow
						title="Total mortgage amount "
						name="mortDetails.estimatedLoan"
					/>
					<SingleQuestionRow
						title="Type of mortgage required"
						additionalClass="ml-24"
						labelOne="Fixed"
						labelTwo="Variable"
					/>
					<SingleRow title="Total deposit" />
					<SingleRow
						title="Please state the source of the deposit you are going to use to purchase the property"
						inputHeight="70px"
					/>
					<SingleRow
						title="Deposit from savings"
						additionalClassOne="with-symbol"
					/>
					<SingleRow
						title="Deposit from gift"
						additionalClassOne="with-symbol"
					/>
					<SingleRow
						title="Deposit from Help-To-Buy"
						additionalClassOne="with-symbol"
					/>
					<SingleRow
						title=" Deposit from other"
						additionalClassOne="with-symbol"
					/>
					<SingleQuestionRow
						title={(() => (
							<>
								Did you participate in the
								<br />
								Government Help-To-Buy incentive?
							</>
						))()}
					/>
					<SingleRow title="Help-To-Buy Application Number" />
					<SingleRow title="Help-To-Buy Access Code " />
				</div>
			</div>
		</>
	);
};

export default EighthPage;
