import React from "react";
import DefaultRow from "./DefaultRow";
import TimeRow from "./TimeRow";
import QuestionRow from "./QuestionRow";
import TopPageLogo from "./logo";
import MortageApplicationTypes from "./MortageApplicationType";
import MegaHeading from "./MegaHeading";
const FirstPage = () => {
	const print = () => {
		window.print();
	};
	return (
		<>
			<div className="relative pageHeight pt-3" style={{ "--bottom": "20px" }}>
				<button
					className="absolute print-button px-6 py-2 text-white mt-5 bg-red-500 text-2xl"
					onClick={() => print()}
				>
					Print
				</button>
				<div className="elements-container pt-6">
					<TopPageLogo />
					<MortageApplicationTypes />
				</div>
				<MegaHeading headingTitle="Personal Information" headingNumber="1" />
				<div className="mt-6 text-14 mb-2 elements-container flex justify-between w-full">
					<div className="h-4 w-2/5"></div>
					<div className="h-4 w-28 text-center uppercase font-semibold color-primary ">
						Applicant 1
					</div>
					<div className="h-4 w-28 text-center uppercase font-semibold color-primary">
						Applicant 2
					</div>
				</div>
				<div className="elements-container flex flex-col justify-center items-center w-full">
					<DefaultRow
						title="Title: Mr, Mrs, Miss, Ms, Dr etc"
						name="personalDetails.youGoBy"
						secondName="applicant2.personalDetails.youGoBy"
					/>
					<DefaultRow
						title="Your first name(s)"
						name="personalDetails.firstName"
						secondName="applicant2.personalDetails.firstName"
					/>
					<DefaultRow title="Your surname" name="surname" />
					<DefaultRow
						title="Gender "
						name="personalDetails.yourIdentification"
					/>
					<DefaultRow title="Have you ever been known by any other names? (please include maiden name)" />
					<DefaultRow
						title="Your date of birth"
						name="personalDetails.dateOfBirth"
						styles={{ marginTop: "1.5px" }}
					/>
					<DefaultRow title="PPS Number" name="declarations.ppsNum" />
					<DefaultRow
						title="Your marital / civil status: e.g. Married, Single, Divorced, Separated, Widowed, Living together"
						inputHeight="30px"
						name="personalDetails.maritalStatus"
					/>
					<DefaultRow
						title="Your current address"
						inputHeight="70px"
						name="personalDetails.currentAddress"
						className="mt-1"
					/>
					<DefaultRow
						title="Eircode"
						name="personalDetails.currentAddress.eircode"
					/>
					<DefaultRow
						title="Current dwelling type: e.g. Living with family /Living with friends / Other / Owner occupier / Tenant"
						inputHeight="50px"
						name="personalDetails.familyHome"
						secondName="applicant2.personalDetails.familyHome"
					/>
					<DefaultRow
						title={(() => (
							<>
								If residing less than 3 years at current address, please provide
								your previous addresses along with dates of residency at each
								address{" "}
								<i>
									{" "}
									(Indicate if you owned/tenant/living with relative/friend)
								</i>
							</>
						))()}
						inputHeight="100px"
					/>
					<TimeRow
						title="Time at current address"
						labelOne="Years"
						labelTwo="Months"
					/>
					<DefaultRow title="Your nationality" />
					{/* <DefaultRow title="Your nationality" /> */}
					<DefaultRow
						title="How long have you been resident in Ireland?"
						name="declarations.durationInIreland"
					/>
					<QuestionRow
						title="Do you require a visa to work in Ireland?"
						nameOne="declarations.requireVisa"
					/>
					<DefaultRow
						title="What visa is required?"
						name="declarations.typeOfVisa"
					/>
					<TimeRow
						title="Number of dependents"
						labelOne={(() => (
							<span
								style={{
									fontSize: "10px",
									width: "80%"
								}}
							>
								Adult <br /> dependents <br />
								(OVER 18 YRS)
							</span>
						))()}
						labelTwo={(() => (
							<span
								style={{
									fontSize: "10px",
									width: "100%"
								}}
							>
								Child <br />
								dependents <br />
								(UNDER 18 YRS)
							</span>
						))()}
						className="text-8"
						ageData={true}
						labelClass="flex relative w-1/2 justify-between"
						inputStyles={{
							width: "20%",
							position: "absolute",
							right: "24px",
							height: "28px"
						}}
					/>
					<QuestionRow title="Do you require a visa to work in Ireland?" />
				</div>
			</div>
		</>
	);
};

export default FirstPage;
