import React from "react";
import DefaultRow from "./DefaultRow";
import MegaHeading from "./MegaHeading";
import DataGrid from "./DataGrid";
import TopPageLogo from "./logo";

const SixthPage = () => {
	return (
		<>
			<div className="pageHeight" style={{ "--bottom": "55px" }}>
				<TopPageLogo />
				<DataGrid applicant="2">
					<h2 className="text-gray-700  font-normal text-base normal-case">
						6 Financial Commitments (continued)
					</h2>
				</DataGrid>
				<MegaHeading
					headingTitle="Existing Property Details"
					headingNumber="7"
					className="mt-10"
				/>
				<div className="elements-container mt-4">
					<DefaultRow title="Property address" inputHeight="100px" />
					<DefaultRow title="Eircode" />
					<DefaultRow
						title="Estimated market value"
						additionalClassOne="with-symbol "
						additionalClassTwo="with-symbol "
					/>
					<DefaultRow
						title="Debt "
						additionalClassOne="with-symbol "
						additionalClassTwo="with-symbol "
					/>
					<DefaultRow
						title="Rent (monthly) "
						additionalClassOne="with-symbol "
						additionalClassTwo="with-symbol "
					/>
					<DefaultRow
						title="Repayment (monthly) "
						additionalClassOne="with-symbol "
						additionalClassTwo="with-symbol "
					/>
					<DefaultRow
						title="Rate (to 2 decimals)"
						additionalClassOne="with-percentage "
						additionalClassTwo="with-percentage "
					/>
					<DefaultRow title="Lender name" />
				</div>
			</div>
		</>
	);
};

export default SixthPage;
