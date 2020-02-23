import React from "react";
import DefaultRow from "./DefaultRow";
import MegaHeading from "./MegaHeading";
import TopPageLogo from "./logo";

const FourthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-6" style={{ "--bottom": "35px" }}>
				<TopPageLogo />
				<MegaHeading
					headingTitle="Self-Employment Details"
					headingNumber="3(b)"
				/>
				<div className="elements-container color-primary">
					<h1 className="font-semibold  mt-4 text-14">
						If you are <span className="underline">self-employed </span>or a
						director of a limited company please complete this section
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
				<div className="elements-container mt-2">
					<DefaultRow
						title="State your percentage shareholding in the business"
						additionalClassOne="with-percentage"
						additionalClassTwo="with-percentage"
						name="employmentDetails.percOfOwnership"
					/>
					<DefaultRow
						title="Your business name and address"
						inputHeight="120px"
						name="employmentDetails.businessAddress"
					/>
					<DefaultRow title="Eircode" name="employmentDetails.eircode" />
					<DefaultRow title="CRO Registration Number" />
					<DefaultRow title="Position in the business" />
					<DefaultRow
						title="Your business telephone number"
						name="employmentDetails.accountantPhone"
					/>
					<DefaultRow
						title="Nature of your business"
						name="employmentDetails.natureOfBusiness"
					/>
					<DefaultRow
						title="Date business established"
						name="employmentDetails.yearEstablished"
					/>
				</div>
				<MegaHeading headingTitle="Income Details" headingNumber="4" />
				<div className="elements-container color-primary">
					<h1 className="font-semibold  mt-4 text-14">
						Please provide all information on a gross basis i.e. before
						deduction of tax
					</h1>
				</div>
				<div className="mt-2 mb-2 elements-container flex justify-between w-full">
					<div className="h-6 w-2/5  font-bold" style={{ fontSize: "13px" }}>
						Annual Income Details (PAYE only)
					</div>
					<div className="h-6 w-28 text-center uppercase font-semibold color-primary ">
						Applicant 1
					</div>
					<div className="h-6 w-28 text-center uppercase font-semibold color-primary">
						Applicant 2
					</div>
				</div>
				<div className="elements-container mt-2">
					<DefaultRow
						title="Your basic salary"
						name="incomeDetails.currentYear.basicSalary"
					/>
					<DefaultRow
						title="Your guaranteed overtime"
						name="incomeDetails.currentYear.overtimeEarned"
					/>
					<DefaultRow
						title="Your guaranteed bonus"
						name="incomeDetails.currentYear.bonusEarned"
					/>
					<DefaultRow
						title="Your commission"
						name="incomeDetails.currentYear.commissionEarned"
					/>
					<DefaultRow
						title="Your car allowance"
						name="incomeDetails.currentYear.gauranteedAllow"
					/>
					<DefaultRow
						title="Other income"
						name="incomeDetails.currentYear.otherIncome"
					/>
					<div className="my-1  font-bold" style={{ fontSize: "13px" }}>
						Annual income details (self-employed)
					</div>
					<DefaultRow title="State your drawings or salary" />
					<DefaultRow title="Total of last three years salary" />
				</div>
			</div>
		</>
	);
};

export default FourthPage;
