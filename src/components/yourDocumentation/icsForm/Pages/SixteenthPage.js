import React from "react";
import SingleRow from "./SingleRow";
import RadioButton from "./RadioButton";
import Signature from "./Signature";
import TopPageLogo from "../../../../assets/icslogo.PNG";

const SixteenthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-2">
				<TopPageLogo />
				<div className="elements-container mt-6 text-xs text-grey-900">
					<h4 className="font-semibold">SEPA Direct Debit Mandate</h4>

					<SingleRow title="Your Mortgage Reference Number: " />
					<h4 className="font-semibold">For office use only</h4>
					<div className="p-2 border-2 border-primary">
						<SingleRow title="Creditor Identification Number:" />
						<SingleRow title="Creditor Name:" />
						<SingleRow title="Creditor Address:" />
					</div>
					<div className="mt-2"></div>
					<SingleRow title="Debiting Account Details:" />
					<SingleRow title="Requested Date of Monthly Repayment:" />
					<SingleRow title="IBAN (Bank Account to be Debited):" />
					<SingleRow title="BIC Code (The Bank Identifier code):" />
					<SingleRow title="Your Name: (Name of Account to be Debited):" />
					<SingleRow title=" Your Address: (Address held by debiting Bank if joint account primary address)" />
					<SingleRow title="City / Post Code:" />
					<SingleRow title="Country: " />
					<div className="flex justify-start items-start w-full mt-2">
						<div className="w-2/5 text-xs">
							<p>Type of Payment: Recurring Payment </p>
						</div>
						<div className="3/5" style={{ marginLeft: "-5px" }}>
							<RadioButton />
						</div>
					</div>
					<p className="mt-2 text-gray-800 text-xs">
						By signing this mandate form, you authorise (a) ICS Mortgages to
						send instructions to your bank to debit your account and (b) your
						bank to debit your account in accordance with the instruction from
						ICS Mortgages.
						<br />
						As part of your rights, you are entitled to a refund from your bank
						under the terms and conditions of your agreement with your bank. A
						refund must be claimed within 8 weeks starting from the date on
						which your account was debited. Your rights are explained in a
						statement that you can obtain from your bank.
					</p>

					<p className="mt-6 text-gray-800 text-xs">
						Note: Where the account being debited is a joint account and more
						that 1 person is needed to withdraw funds, then all parties must
						sign this form.
					</p>
					<h4 className="font-semibold text-xs mt-6">Signatures</h4>
					<Signature title="first" />
					<Signature title="second" />
					<p className="mt-6 text-gray-800 text-xs">
						Note: Your rights regarding this mandate are explained in a
						statement that you may obtain from your bank.
					</p>
					<p className="mt-6 text-gray-800 text-xs">
						<b>IMPORTANT NOTE: </b>No amendments are allowable to direct debits
						eight days prior to your repayment due date. If amendment is
						received during this period, the amendment will be processed after
						your next repayment due date.
					</p>
				</div>
			</div>
		</>
	);
};

export default SixteenthPage;
