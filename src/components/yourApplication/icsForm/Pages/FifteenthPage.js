import React from "react";
import SmallSizeQuestionRow from "./SmallSizeQuestionRow";
import Signature from "./Signature";
import TopPageLogo from "../../../../assets/icslogo.PNG";

const FourteenthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-2">
				<TopPageLogo />
				<div className="elements-container mt-6">
					<h4 className="font-semibold text-sm mt-6">Direct Marketing</h4>
					<p className="text-gray-800">
						ICS Mortgages will use your personal data to identify products,
						services and benefits which we believe may be of interest to you.
						Based on your indicated direct marketing preferences below we will
						inform you on how you can avail of these products and services using
						the following methods:
					</p>
				</div>
				<div className="mt-6 mb-6 elements-container flex justify-between w-2/3">
					<div className="h-6 w-1/4"></div>
					<div className="h-6  text-center w-1/5">
						Applicant 1
						<div className="flex justify-around">
							<h3 className="uppercase font-semibold text-sm">Yes</h3>
							<h3 className="uppercase font-semibold text-sm">No</h3>
						</div>
					</div>
					<div className="h-6  text-center w-1/5">
						Applicant 2
						<div className="flex justify-around">
							<h3 className="uppercase font-semibold text-sm">Yes</h3>
							<h3 className="uppercase font-semibold text-sm">No</h3>
						</div>
					</div>
				</div>
				<SmallSizeQuestionRow title="Post" />
				<SmallSizeQuestionRow title="Home phone" />
				<SmallSizeQuestionRow title="Mobile Phone" />
				<SmallSizeQuestionRow title="Online" />
				<SmallSizeQuestionRow title="Email" />
				<SmallSizeQuestionRow title="Text message" />
				<div className="mt-6 elements-container w-full text-sm text-gray-900">
					<p>
						If at any time you change your mind and you wish to amend your
						direct marketing preferences, you may contact us by writing to ICS
						Mortgages, PO Box 1077, Maynooth, Co. Kildare, or calling 1890 542
						542.
					</p>
					<h4 className="font-semibold text-sm mt-6">Explicit Consent</h4>
					<p className="text-gray-800">
						Where in support of this application I/we may have provided
						information, which comes under the definition of special categories
						of personal data (information regarding Race, Ethnic Origin,
						Political Opinion, Religious or Philosophical beliefs, Trade Union
						Membership, Biometric or Genetic Data, Health, Sex Life or Sexual
						Orientation) and/or information relating to criminal
						convictions/offences, I/we consent to its storage and use in
						relation to this application. I/we understand that the information
						will only be used for this purpose.
					</p>
					<p className="mt-6 text-sm">
						I/we may withdraw this consent at any time.
					</p>
					<h4 className="font-semibold text-sm mt-6">Signatures</h4>
					<Signature title="first" />
					<Signature title="second" />
					<h4 className="font-semibold text-sm mt-6">
						Communications about your account
					</h4>
					<p>
						Notwithstanding your marketing choices above, we will contact you
						with information relevant to the operation and maintenance of your
						account using the contact details you have provided us with.
					</p>
				</div>
			</div>
		</>
	);
};

export default FourteenthPage;
