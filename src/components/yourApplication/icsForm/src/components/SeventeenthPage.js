import React from "react";
import TopPageLogo from "./logo";

const SeventeethPage = () => {
	return (
		<>
			<div
				className="pageHeight -mt-2"
				style={{ fontSize: "12.6px", "--bottom": "60px" }}
			>
				<TopPageLogo />
				<div className="elements-container  ">
					<h1 className="red-border color-primary font-semibold text-lg mt-6">
						Data Protection Notice
					</h1>
					<h4 className="font-semibold  mt-4">Data Controller</h4>
					<p className="text-gray-800">
						Dilosk DAC trading as ‘Dilosk’ and ‘ICS Mortgages’ (‘the Company’,
						‘We’, ‘Us’ or ‘Our’) is a Data Controller within the meaning of the
						General Data Protection Regulations (697/2016/EU) (‘GDPR’) and
						applicable Irish data protection legislation (currently the Irish
						Data Protection Acts 1988 to 2003 as may be amended). As a Data
						Controller we are obliged to provide you with information on how we
						collect, use, store and share your personal data. This document has
						been made available for that purpose.
					</p>
					<h4 className="font-semibold  mt-4">Data Protection Officer</h4>
					<p className="text-gray-800">
						The Company has appointed a designated Data Protection Officer. If
						you have any queries with respect to how the Company processes your
						personal data or wish to exercise your rights under GDPR please
						write to:
						<br />
						<br />
						The Data Protection Officer, P.O. Box 1077, Maynooth.
						<br />
						<br />
						Alternatively, you can email DPO@Dilosk.com. For general queries you
						can call Contact Support Number, e.g. 1890 542 542.
					</p>
					<h4 className="font-semibold  mt-4">Information we Collect</h4>
					<p className="text-gray-800">
						We collect information: (i) you give us; (ii) information generated
						during the provision of our services or use of our websites, and;
						(iii) information provided to us by third parties.
						<br />
						Types of information we may collect or hold about you include:
					</p>
					<ul className="list-disc mt-2 text-gray-800">
						<li className="px-6 mt-1">
							identity details, including your contact information;
						</li>
						<li className="px-6 mt-1">
							your financial details/financial circumstances;
						</li>
						<li className="px-6 mt-1">your marital status;</li>
						<li className="px-6 mt-1">your financial associations;</li>
						<li className="px-6 mt-1">
							information about you provided by others e.g. joint account
							applications;
						</li>
						<li className="px-6 mt-1">
							information which you have consented to us using; and
						</li>
						<li className="px-6 mt-1">
							other personal information such as: criminal conviction data;
							telephone recordings; and information provided when exercising
							your rights set out below.
						</li>
					</ul>
					<p className="mt-4 text-gray-800">
						Sometimes we may use your information even though you are not our
						customer. For example, you may be a beneficiary, guarantor, director
						or representative of a customer of ours or be a potential customer
						applying for one of our products or services.
					</p>
					<h4 className="font-semibold  mt-4">Information We Need</h4>
					<p className="text-gray-800">
						If you do not provide certain information we may not be able to:
						<br />
					</p>
					<ul className="list-disc text-gray-800">
						<li className="px-6 mt-1">assess your loan application;</li>
						<li className="px-6 mt-1">
							provide requested products or services to you;
						</li>
						<li className="px-6 mt-1">
							to continue to provide existing products or services;
						</li>
						<li className="px-6 mt-1">assess suitability</li>
					</ul>
					<p className="text-gray-800">
						We will tell you when we ask for information which is not a
						contractual requirement or is not needed to comply withour legal
						obligations.
					</p>
				</div>
			</div>
		</>
	);
};

export default SeventeethPage;
