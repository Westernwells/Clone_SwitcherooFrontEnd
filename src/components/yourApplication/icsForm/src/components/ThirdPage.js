import React from "react";
import DefaultRow from "./DefaultRow";
import MegaHeading from "./MegaHeading";
import Logo from "./logo";
const ThirdPage = () => {
	return (
		<>
			<div className="pageHeight -mt-4" style={{ "--bottom": "45px" }}>
				<Logo />
				<MegaHeading
					className="mt-4"
					headingTitle="Employment Details "
					headingNumber="3(a)"
				/>
				<div className="elements-container color-primary">
					<h1 className="font-semibold text-14 mt-4">
						If you are <span className="underline">self-employed</span> complete
						the questions in Section 3(b)
					</h1>
				</div>
				<div className="mt-4 text-14 mb-2 elements-container flex justify-between w-full">
					<div className="h-4 w-2/5"></div>
					<div className="h-4 w-28 text-center uppercase font-semibold color-primary ">
						Applicant 1
					</div>
					<div className="h-4 w-28 text-center uppercase font-semibold color-primary">
						Applicant 2
					</div>
				</div>
				<div className="elements-container mt-6">
					<DefaultRow title="Your job title" />
					<DefaultRow title="Start date of employment" />
					<DefaultRow
						title={(() => (
							<>
								Employment type eg: Permanent full time / Permanent part time /
								Fixed term / Casual /<br />
								Self employed / Full time education
								<br />
								Unemployed / Other / House person / Retired
							</>
						))()}
						name="employmentDetails.empType"
					/>
					<DefaultRow title="If temporary or on contract,length of term remaining" />
					<DefaultRow
						title="Your employer’s name"
						name="employmentDetails.tradingName"
					/>
					<DefaultRow
						title="Nature of employer’s business"
						name="employmentDetails.natureOfBusiness"
					/>
					<DefaultRow title="Your employer’s address" inputHeight="80px" />
					<DefaultRow title="Eircode" name="employmentDetails.eircode" />
					<DefaultRow
						title="Your employer’s telephone number"
						name="employmentDetails.accountantPhone"
					/>
					<DefaultRow title="If still in probationary period, please confirm date probationary period ends" />
					<p className="mt-4">
						Previous employment details (3 year history): Please provide full
						details of your employment if you have been less than 3 years with
						your current employer or have been self employed for less than 3
						years
					</p>
					<div className="flex w-full justify-between mt-4 ">
						<div className="flex flex-col" style={{ width: "49%" }}>
							<h1 className="color-primary text-14 text-center font-semibold">
								APPLICANT 1
							</h1>
							<textarea
								type="text"
								className="bg-tertiary mt-1"
								style={{ height: "280px" }}
							></textarea>
						</div>
						<div className="flex flex-col" style={{ width: "49%" }}>
							<h1 className="color-primary text-14 text-center font-semibold">
								APPLICANT 2
							</h1>
							<textarea
								type="text"
								className="bg-tertiary mt-1"
								style={{ height: "280px" }}
							></textarea>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ThirdPage;
