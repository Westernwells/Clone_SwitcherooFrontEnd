import React from "react";
import SingleRow from "./SingleRow";
import MegaHeading from "./MegaHeading";
import RadioButton from "./RadioButton";
import TopPageLogo from "../../../../assets/icslogo.PNG";
const TenthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-6">
				<TopPageLogo />
				<MegaHeading
					headingTitle="Remortgage/Top Up Details"
					headingNumber="11"
				/>
				<div className="color-primary elements-container mt-6 font-semibold text-sm">
					<h1>
						Please complete this section if you wish to top-up your mortgage
					</h1>
				</div>
				<div className="elements-container mt-6 text-sm">
					<SingleRow title="Mortgage term" />
					<SingleRow title=" Date of purchase" />
					<SingleRow title="Name of existing lender" />
					<SingleRow title=" Existing mortgage type (e.g. Fixed, Variable, Tracker)" />
					<SingleRow title="Estimated current value of property" />
					<SingleRow title=" Current balance outstanding" />
					<SingleRow title=" Top up amount required" />
					<h5>Equity release purpose</h5>
					<div className="flex w-full items-center justify-between mt-4">
						<RadioButton labelText="Renovation" />
						<RadioButton labelText="Education " />
						<RadioButton labelText="Medical " />
						<RadioButton labelText="Gift to family " />
					</div>
					<div className="flex w-full items-center justify-between mt-4">
						<RadioButton labelText="Debt consolidation " />
						<RadioButton labelText="Fund other property purchase" />
						<RadioButton labelText="Other please specify " />
						<RadioButton labelText="Not applicable " />
					</div>
				</div>
				<MegaHeading headingTitle="Solicitor Details" headingNumber="12" />
				<div className="elements-container mt-6 text-sm">
					<SingleRow
						title="Name, address and Eircode of solicitor"
						inputHeight="100px"
					/>
					<SingleRow title="Telephone number " />
				</div>
			</div>
		</>
	);
};

export default TenthPage;
