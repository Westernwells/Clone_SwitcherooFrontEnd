import React from "react";
import DefaultRow from "./DefaultRow";
import Logo from "../components/logo";
import MegaHeading from "./MegaHeading";

const SecondPage = () => {
	return (
		<>
			<div className="pageHeight" style={{ "--bottom": "55px" }}>
				<div className="elements-container color-primary mt-8 ">
					<Logo />
					<h1 className="red-border font-semibold text-lg mt-4">
						Contact Details
					</h1>
				</div>
				<div className="mt-4 mb-2 text-14 elements-container flex justify-between w-full">
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
						title="Mobile telephone number "
						name="personalDetails.phone"
					/>
					<DefaultRow title="Home telephone number" />
					<DefaultRow title="Work telephone number" />
					<DefaultRow title="E-mail address" name="personalDetails.email" />
				</div>
				<MegaHeading
					className="mt-4"
					headingTitle="Current Housing Details"
					headingNumber="2"
				/>
				<div className="elements-container mt-6">
					<DefaultRow
						title="If you are an owner occupier please state the full name and address of your current lender"
						inputHeight="250px"
						name="mortDetailsMover.lenderName"
					/>
					<DefaultRow
						title="If you are currently renting, please state your current monthly rent"
						additionalClassOne="with-symbol"
						additionalClassTwo="with-symbol"
						name="mortDetailsMover.monthlyRepay"
					/>
				</div>
			</div>
		</>
	);
};

export default SecondPage;
