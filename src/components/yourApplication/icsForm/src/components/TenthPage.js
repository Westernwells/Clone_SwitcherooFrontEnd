import React from "react";
import SingleRow from "./SingleRow";
import MegaHeading from "./MegaHeading";
import RadioButton from "./RadioButton";
import TopPageLogo from "./logo";
const TenthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-2" style={{ "--bottom": "45px" }}>
				<TopPageLogo />
				<MegaHeading
					headingTitle="Remortgage/Top Up Details"
					headingNumber="11"
				/>
				<div className="color-primary elements-container mt-6 font-semibold ">
					<h1>
						Please complete this section if you wish to top-up your mortgage
					</h1>
				</div>
				<div className="elements-container mt-6 ">
					<SingleRow title="Mortgage term" />
					<SingleRow title=" Date of purchase" />
					<SingleRow title="Name of existing lender" />
					<SingleRow
						title={(() => (
							<>
								Existing mortgage type
								<br /> (e.g. Fixed, Variable, Tracker)
							</>
						))()}
					/>
					<SingleRow title="Estimated current value of property" />
					<SingleRow title=" Current balance outstanding" />
					<SingleRow
						title=" Top up amount required"
						additionalClassOne="with-symbol"
					/>
					<h5>Equity release purpose</h5>
					<div className="flex w-full items-center justify-between mt-4">
						<RadioButton className="w-1/4" labelText="Renovation" />
						<RadioButton className="w-1/4" labelText="Education " />
						<RadioButton className="w-1/4" labelText="Medical " />
						<RadioButton className="w-1/4" labelText="Gift to family " />
					</div>
					<div className="flex w-full items-center justify-between mt-4">
						<RadioButton className="w-1/4" labelText="Debt consolidation " />
						<RadioButton
							className="w-1/4"
							labelText={(() => (
								<>
									Fund other
									<br />
									property purchase
								</>
							))()}
						/>
						<RadioButton
							className="w-1/4"
							labelText={(() => (
								<>
									Other <br />
									please specify
								</>
							))()}
						/>
						<RadioButton className="w-1/4" labelText="Not applicable " />
					</div>
				</div>
				<MegaHeading headingTitle="Solicitor Details" headingNumber="12" />
				<div className="elements-container mt-6 ">
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
