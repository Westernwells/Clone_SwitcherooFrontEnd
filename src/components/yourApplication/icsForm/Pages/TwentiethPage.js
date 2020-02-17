import React from "react";
import Signature from "./Signature";
import TopPageLogo from "../../../../assets/icslogo.PNG";
const TwentiethPage = () => {
	return (
		<>
			<div className="pb-10 -mt-6">
				<TopPageLogo />
				<div className="elements-container text-sm text-gray-800 mt-10">
					<p>
						If you are not happy with any aspect of how your data is used, you
						also have the right to complain to the Data Protection Commission in
						Ireland. You can contact the Office of the Data Protection
						Commissioner at:
					</p>
					<div className="w-4/5 flex justify-between items-center mt-2">
						<p className="w-1/4">Telephone: </p>
						<p className="w-4/5">
							+353 (0)761 104 800 or Lo Call Number 1890 252 231
						</p>
					</div>
					<div className="w-4/5 flex justify-between items-center mt-2">
						<p className="w-1/4">Fax: </p>
						<p className="w-4/5">+353 57 868 4757</p>
					</div>
					<div className="w-4/5 flex justify-between items-center mt-2">
						<p className="w-1/4">Email:</p>
						<p className="w-4/5">info@dataprotection.ie </p>
					</div>
					<div className="w-4/5 flex justify-between items-start mt-2">
						<p className="w-1/4">Postal Address: </p>
						<p className="w-4/5">
							Data Protection Commission,
							<br />
							Canal House,
							<br />
							Station Road,
							<br />
							Portarlington,
							<br />
							R32 AP23,
							<br />
							Co. Laois{" "}
						</p>
					</div>
					<h4 className="font-semibold text-sm mt-4">
						Declarations & Authorisations
					</h4>
					<ul className="list-decimal">
						<li className="px-6 mt-2">
							I/we apply to ICS Mortgages for a mortgage loan and declare that
							the information and Personal Details provided, and documentation
							furnished by me/us are true and correct, to the best of my/our
							knowledge, information and belief.
						</li>
						<li className="px-6 mt-2">
							I/we agree to have the property adequately insured for the
							duration of the loan.
						</li>
						<li className="px-6 mt-2">
							I/we agree that ICS Mortgages reserves the right to restrict,
							amend or withdraw any offer made.
						</li>
						<li className="px-6 mt-2">
							I/we declare that I/we have never been insolvent and have never
							made arrangements with creditors and have never been involved in
							any court proceedings for debt.
						</li>
						<li className="px-6 mt-2">
							I/we authorise ICS Mortgages to make all reasonable enquiries of
							my/our accountant, solicitor, mortgage lender, broker and/or any
							other person, in connection with and arising from my application
							and any aspect thereof.
						</li>
						<li className="px-6 mt-2">
							By signing this form, I/we acknowledge that where I/we apply for
							or avail of a credit facility, ICS Mortgages and its Contracted
							Agents will: (a) carry out credit reviews including automated
							credit decision processes in line with the privacy notice below
							and will obtain details of my/our credit history from the Irish
							Credit Bureau (“ICB”) or any other credit rating agency or Central
							Credit Register; (b) I understand that multiple credit reviews
							will be conducted where greater than 3 months has lapsed since
							first applying or availing of a credit facility and a credit
							review being conducted.
						</li>
						<li className="px-6 mt-2">
							That in the event of my/our application being declined ICS
							Mortgages can provide a letter giving the reason for declining the
							application.
						</li>
					</ul>
					<Signature title="first" />
					<Signature title="second" />
				</div>
			</div>
		</>
	);
};

export default TwentiethPage;
