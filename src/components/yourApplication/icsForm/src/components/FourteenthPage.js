import React from "react";
import RadioButton from "./RadioButton";
import TopPageLogo from "./logo";

const FourteenthPage = () => {
	return (
		<>
			<div
				className="pageHeight -mt-1"
				style={{ fontSize: "12.6px", "--bottom": "55px" }}
			>
				<TopPageLogo />
				<div className="elements-container mt-8">
					<h4 className="font-semibold  mt-6">
						Transfer of Mortgages i.e. Securitisation
					</h4>
					<p className="text-gray-800">
						Your attention is drawn to the possibility that ICS Mortgages, in
						common with many other mortgage lenders worldwide, may decide to
						securitise some of its mortgages. Financial Institutions are limited
						in the amount they can lend by the level of their capital and, to
						release capital to capitalise future lending’s, including mortgage
						lending, mortgages may be transferred to investors.
						<br />
						This practice is known as securitisation. Relevant investors include
						the world’s major financial institutions. In practice, you should
						not be aware of any effect from securitisation because ICS Mortgages
						will continue to manage your mortgage, including the setting of
						interest rates and the handling of arrears, subject to the powers
						and discretion of the transferee under such a scheme.
					</p>
					<h4 className="font-semibold  mt-4">
						Responsible Lending – Our Approach
					</h4>
					<p className="text-gray-800">
						We have a responsibility to you to act as a prudent and responsible
						lender. That means that we will be open and honest with you in the
						manner in which we promote and offer our products. We will provide
						clear information on the cost of your borrowing and we will provide
						sufficient details in relation to fees, charges, and terms and
						conditions to enable you make an informed decision before entering
						into the transaction. Before advancing any facility, an assessment
						of your ability to meet the required repayments will be completed
						and any advance will be limited to the amount we believe will ensure
						you can meet repayments comfortably while still meeting other
						essential financial and lifestyle commitments. To assist us in this
						regard it is important that you provide us with a complete record of
						your financial affairs, particularly in relation to any non-bank
						commitments.
					</p>
					<h4 className="font-semibold  mt-4">
						Arrangements for repaying your mortgage
					</h4>
					<p className="text-gray-800">
						Your monthly mortgage repayment will be due on the last day of each
						month. Depending on when your funds are released , your first
						mortgage repayment may not occur within a calendar month following
						drawdown of the funds. Please note that the interest will start to
						accrue on your mortgage from the date the funds are released.
					</p>
					<h4 className="font-semibold  mt-4">Product Information</h4>
					<div className="flex flex-col text-gray-800">
						<p>I\we confirm we have received the following (please tick)</p>
						<RadioButton
							labelText="ICS Mortgage Product Brochure"
							className="w-4/5 flex justify-between items-center mt-1"
						/>
						<RadioButton
							labelText="Data Protection Notice"
							className="w-4/5 flex justify-between items-center  mt-1"
						/>
						<RadioButton
							labelText="Terms of Business"
							className="w-4/5 flex justify-between items-center  mt-1"
						/>
						<RadioButton
							labelText="Fees and Charges Schedule."
							className="w-4/5 flex justify-between items-center  mt-1"
						/>
					</div>
					<h4 className="font-semibold  mt-4">
						Status of advice and suitability assessment
					</h4>
					<p className="text-gray-800">
						For the purposes of European Union (Consumer Mortgage Credit
						Agreements) Regulations 2016, ICS Mortgages will not provide
						advisory service in respect of mortgages. We will however assess
						product suitability and provide you with all explanations and
						product information required to make an informed decision. Should
						your application be approved, a Statement of Suitability setting out
						the reasons why the product(s) or service(s) offered is/are
						considered suitable, or the most suitable, for your particular
						needs, objective and circumstances will be issued to you as part of
						Loan Offer pack.
						<br />
						Lending criteria, terms & conditions will apply. Mortgage approval
						is subject to assessment of suitability and affordability.
						Applicants must be aged 18 or over. Security is required, and credit
						agreement will be secured by a mortgage or by a right related to
						residential immovable property. Life and Home Insurance are also
						required.
					</p>
				</div>
			</div>
		</>
	);
};

export default FourteenthPage;
