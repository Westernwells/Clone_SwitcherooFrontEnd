import React from "react";
import DefaultRow from "./DefaultRow";
import MegaHeading from "./MegaHeading";
import TopPageLogo from "../../../../assets/icslogo.PNG";

const FourthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-6">
				<TopPageLogo />
				<MegaHeading
					headingTitle="Self-Employment Details"
					headingNumber="3(b)"
				/>
				<div className="elements-container color-primary">
					<h1 className="font-semibold text-sm mt-4">
						If you are self-employed or a director of a limited company please
						complete this section
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
					<DefaultRow title="State your percentage shareholding in the business" />
					<DefaultRow
						title="Your business name and address"
						inputHeight="120px"
					/>
					<DefaultRow title="Eircode" />
					<DefaultRow title="CRO Registration Number" />
					<DefaultRow title="Position in the business" />
					<DefaultRow title="Your business telephone number" />
					<DefaultRow title="Nature of your business" />
					<DefaultRow title="Date business established" />
				</div>
				<MegaHeading headingTitle="Income Details" headingNumber="4" />
				<div className="elements-container color-primary">
					<h1 className="font-semibold text-sm mt-4">
						If you are self-employed or a director of a limited company please
						complete this section
					</h1>
				</div>
				<div className="mt-2 mb-2 elements-container flex justify-between w-full">
					<div className="h-6 w-2/5 text-sm font-bold">
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
					<DefaultRow title="Your basic salary" />
					<DefaultRow title="Your guaranteed overtime" />
					<DefaultRow title="Your guaranteed bonus" />
					<DefaultRow title="Your commission" />
					<DefaultRow title="Your car allowance" />
					<DefaultRow title="Other income" />
					<div className="my-1 text-sm font-bold">
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
