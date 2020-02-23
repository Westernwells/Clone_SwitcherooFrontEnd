import React from "react";
import DefaultRow from "./DefaultRow";
import MegaHeading from "./MegaHeading";
import DataGrid from "./DataGrid";
import TopPageLogo from "./logo";

const FifthPage = () => {
	return (
		<>
			<div className="pageHeight" style={{ "--bottom": "50px" }}>
				<TopPageLogo />
				<MegaHeading headingTitle="Savings Details" headingNumber="5" />
				<div className="mt-2 mb-2 elements-container flex justify-between w-full">
					<div className="h-6 w-2/5"></div>
					<div className="h-6 w-28 text-center uppercase font-semibold color-primary ">
						Applicant 1
					</div>
					<div className="h-6 w-28 text-center uppercase font-semibold color-primary">
						Applicant 2
					</div>
				</div>
				<div className="elements-container mt-4">
					<DefaultRow
						title="Total savings "
						additionalClassOne="with-symbol "
						additionalClassTwo="with-symbol "
					/>
					<DefaultRow
						title="Savings in Irish financial institutions only"
						additionalClassOne="with-symbol "
						additionalClassTwo="with-symbol "
					/>
					<DefaultRow title="Financial institution names" />
					<DefaultRow />
					<DefaultRow />
					<DefaultRow />
				</div>
				<MegaHeading headingTitle="Financial Commitments" headingNumber="6" />
				<DataGrid applicant="1" />
			</div>
		</>
	);
};

export default FifthPage;
