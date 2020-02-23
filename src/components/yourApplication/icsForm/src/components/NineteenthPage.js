import React from "react";
import TopPageLogo from "./logo";

const NineteenthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-2 mb-2" style={{ "--bottom": "65px" }}>
				<TopPageLogo />
				<div
					className="elements-container text-xs text-gray-800 "
					style={{ fontSize: "11.6px" }}
				>
					<h4 className="font-semibold text-xs mt-6">
						Your Rights with respect to pur use of your data
					</h4>
					<p>
						In the course of providing its services to you, complying with legal
						obligations or pursuing our legitimate interests, we may share your
						personal data with the following categories of recipients:
					</p>
					<ul className="list-disc text-gray-800 px-4">
						<li className="px-6 mt-2">
							third parties with whom: (i) we need to share your information to
							facilitate transactions you have requested, and (ii) you ask us to
							share your information;
						</li>
						<li className="px-6 mt-2">our appointed agents</li>
						<li className="px-6 mt-2">your authorised representatives;</li>
						<li className="px-6 mt-2">
							service providers who provide us with support services to enable
							delivery of our services;
						</li>
						<li className="px-6 mt-2">
							statutory and regulatory bodies (including central and local
							government) and law enforcement authorities;
						</li>
						<li className="px-6 mt-2">credit reference/rating agencies;</li>
						<li className="px-6 mt-2">
							debt collection agencies, budgeting and advice agencies, tracing
							agencies, receivers, liquidators, examiners, Official Assignee for
							Bankruptcy and equivalent in other jurisdictions, any other party
							involved in facilitating a potential or actual transfer of any
							mortgage loan or product provided to you or in connection with a
							securitisation;
						</li>
						<li className="px-6 mt-2">
							pension fund administrators, trustees of collective investment
							undertakings and pensions trustees, insurers/re-insurers;
						</li>
						<li className="px-6 mt-2">business or joint venture partners.</li>
					</ul>
					<h4 className="font-semibold text-xs mt-4">
						How long we will hold your Data
					</h4>
					<p className="text-gray-800">
						How long we hold your data for is subject to a number of pieces of
						legislation and regulations - as a general rule, we will keep your
						data for 6 years after the end our relationship with you or the last
						service provided. We will however endeavor not to keep any of your
						personal data longer than is necessary to fulfil the relevant
						purpose and/or comply with a specific legal retention period.
					</p>
					<h4 className="font-semibold text-xs mt-4">
						Recipients of Your Personal Data – Third Parties
					</h4>
					<p>
						From 25 May 2018, you have several enhanced rights in relation to
						how we use your information, including the right, without undue
						delay, to:
					</p>
					<ul className="list-disc px-4">
						<li className="px-6 mt-2">
							{" "}
							find out if we use, access or receive your information;
						</li>
						<li className="px-6 mt-2">
							{" "}
							have inaccurate/incomplete information corrected and updated;
						</li>
						<li className="px-6 mt-2">
							{" "}
							object to particular use of your personal data for our legitimate
							business interests or direct marketing purposes;
						</li>
						<li className="px-6 mt-2">
							{" "}
							to withdraw consent at any time where processing is based on
							consent.
						</li>
						<li className="px-6 mt-2">
							{" "}
							in certain circumstances, to have your information deleted or our
							use of your data restricted;
						</li>
						<li className="px-6 mt-2">
							{" "}
							in certain circumstances, a right not to be subject to solely
							automated decisions and where we make such automated decisions, a
							right to have a person review the decision;
						</li>
						<li className="px-6 mt-2">
							{" "}
							exercise the right to data portability (i.e. obtain a transferable
							copy of your information we hold to transfer to another provider);
						</li>
					</ul>
					<p className="mt-6">
						If you wish to exercise any of your data rights, you can contact Our
						Data Protection officer by writing to the address above or emailing
						DPO@Dilosk.com.
						<br /> If we are unable to deal with your request fully within a
						calendar month (due to the complexity or number of requests) we may
						extend this period by a further two calendar months and shall
						explain the reason why. If you make your request electronically, we
						will try to provide you with the relevant information
						electronically.
					</p>
				</div>
			</div>
		</>
	);
};

export default NineteenthPage;
