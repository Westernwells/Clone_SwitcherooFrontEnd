import React from "react";
import Signature from "./Signature";
import TopPageLogo from "../../../../assets/icslogo.PNG";
const ThirteenthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-2">
				<TopPageLogo />
				<div className="elements-container mt-2">
					<h4 className="font-semibold text-xs">Important Notices</h4>
					<p className="text-gray-800">
						If you or your dependents intend to use the property as a principal
						place of residence, you must show evidence of mortgage protection
						insurance, unless you are exempt under the Consumer Credit Act 1995.
					</p>
					<h4 className="font-semibold text-xs mt-2">
						Consent under the Consumer Credit Act 1995
					</h4>
					<p className="text-gray-800">
						Under the Consumer Credit Act 1995 a customer’s consent is required
						if the customer wishes ICS Mortgages to be able to telephone him/her
						at his/her place of employment/business in connection with a Credit
						Agreement. From time to time ICS Mortgages may need to contact you
						during working hours in connection with the account. Should you wish
						to give your consent you should sign this part. I/we hereby consent
						to ICS Mortgages contacting me/us by telephone at my/our place of
						employment/business.
					</p>
					<Signature title="first" />
					<Signature title="second" />

					<h4 className="font-semibold text-xs mt-2">
						Under the Central Bank’s Consumer{" "}
					</h4>
					<p className="text-gray-800">
						Protection Code, we are not permitted to offer you a credit product
						that you cannot afford. Therefore, in advance, of granting you a
						credit product of any type, we will check your credit rating against
						the Central Credit Register and the Irish Credit Bureau. This
						information supports a full and accurate assessment of your ability
						to repay. In addition, we are required by law to ensure that the
						Central Credit Register is kept up to date and we report personal
						and credit information to the Central Credit Register. We also
						report credit facilities to the Irish Credit Bureau (“ICB”) in the
						legitimate interests of the Bank and the ICB. Please see the ICB’s
						data protection notice, which is available at
						http://www.icb.ie/pdf/Fair Processing Notice.pdf for details of how
						the ICB will process your personal data, and how you may exercise
						your rights in respect of your personal data held by the ICB.
					</p>
					<h4 className="font-semibold text-xs mt-2">Insurance Protection</h4>
					<p className="text-gray-800">
						To protect your home, you should arrange the appropriate insurances.
						ICS Mortgages requires buildings insurance in all cases and strongly
						recommends contents insurance. If the property is your principal
						residence, life insurance is compulsory by law, with certain
						exceptions.
					</p>
					<h4 className="font-semibold text-xs mt-2">Arrears</h4>
					<p className="text-gray-800">
						Arrears are any element of a mortgage repayment that have not been
						made and remain outstanding. Interest at the mortgage rate will be
						applied to the outstanding balance of your loan which includes any
						payments missed. This may result in increased cost of credit.
					</p>
					<h4 className="font-semibold text-xs mt-1">Valuation</h4>
					<p className="text-gray-800">
						Prior to getting mortgage approval from ICS Mortgages we will need a
						property valuation. The valuation needs to be completed by an ICS
						Mortgages approved valuer and you can contact us to arrange the
						valuation. You must pay a valuation fee, which will be a standard
						maximum fee of €185 (however the fee may be higher depending on the
						size of the property) which includes VAT but excludes valuer’s
						travel expenses. Final valuations: Properties incomplete at the time
						of the original valuation will require, on completion, a final
						valuation, the fee for which is €85.00 which includes VAT but
						excludes travel expenses.
					</p>
					<h4 className="font-semibold text-xs mt-2">Other fees</h4>
					<p className="text-gray-800">
						By signing this form, you are agreeing that any fees you need to pay
						are detailed in our Fees and Charges Schedule for Mortgages which
						are available on https://www.icsmortgages.ie/. On approval of your
						mortgage we will debit the agreed monthly instalment of your
						mortgage using the preferred method of payment that you have
						specified in your mortgage application.
					</p>
				</div>
			</div>
		</>
	);
};

export default ThirteenthPage;
