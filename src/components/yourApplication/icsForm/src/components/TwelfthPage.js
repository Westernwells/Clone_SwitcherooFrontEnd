import React from "react";
import TopPageLogo from "./logo";

const TwelfthPage = () => {
	return (
		<>
			<div className="pageHeight mt-2" style={{ "--bottom": "50px" }}>
				<TopPageLogo />
				<div className="elements-container " style={{ fontSize: "12.1px" }}>
					<h1 className="red-border color-primary font-semibold text-lg mt-6">
						Important Regulatory Statutory Information
					</h1>
					<h2 className="mt-2 font-semibold ">WARNINGS:</h2>
					<h4 className="font-semibold ">
						In accordance with the provisions of the Consumer Credit Act 1995,
						the following are for your attention:
					</h4>
					<div className="p-1 mt-1 px-2 border border-2 border-black">
						<h2 className="font-semibold  text-center">WARNING:</h2>
						<p className="font-semibold ">
							YOUR HOME IS AT RISK IF YOU DO NOT KEEP UP PAYMENTS ON A MORTGAGE
							OR ANY OTHER LOAN <br />
							SECURED ON IT. THE PAYMENT RATES ON THIS HOUSING LOAN MAY BE
							ADJUSTED BY THE LENDER FROM
							<br /> TIME TO TIME.
						</p>
					</div>
					<p className="mt-2 ">
						Note: The above notice in respect of adjustments to repayment rates
						will not apply during any period when the loan is at a fixed rate.
					</p>
					<h4 className="mt-2 font-semibold " style={{ fontSize: "12.5px" }}>
						In accordance with the provision of the Consumer Protection Code
						(CPC) 2012 the following are for your <br />
						attention:
					</h4>
					<div className="p-1 mt-1 px-2 border border-2 border-black">
						<h2 className="font-semibold  text-center">WARNING:</h2>
						<p className="font-semibold ">
							IF YOU DO NOT KEEP UP YOUR REPAYMENTS YOU MAY LOSE YOUR HOME.
						</p>
					</div>
					<div className="p-1 mt-1 px-2 border border-2 border-black">
						<h2 className="font-semibold  text-center">WARNING:</h2>
						<p className="font-semibold ">
							IF YOU DO NOT MEET THE REPAYMENTS ON YOUR LOAN, YOUR ACCOUNT WILL
							GO INTO ARREARS. THIS MAY AFFECT YOUR CREDIT RATING WHICH MAY
							LIMIT YOUR ABILITY TO ACCESS CREDIT IN THE FUTURE.
						</p>
					</div>
					<p className="mt-2 ">
						The following warning applies in the case of variable rate loans:
					</p>
					<div className="p-1 mt-1 px-2 border border-2 border-black">
						<h2 className="font-semibold  text-center">WARNING:</h2>
						<p className="font-semibold ">
							THE COST OF YOUR MONTHLY REPAYMENTS MAY INCREASE.
						</p>
					</div>
					<p className="mt-2 ">
						The following warning applies in the case of fixed rate loans:
					</p>
					<div className="p-1 mt-1 px-2 border border-2 border-black">
						<h2 className="font-semibold  text-center">WARNING:</h2>
						<p className="font-semibold ">
							YOU MAY HAVE TO PAY CHARGES IF YOU PAY OFF A FIXED RATE LOAN
							EARLY.
						</p>
					</div>
					<h2 className="font-semibold  mt-8">The Central Credit Register</h2>
					<div className="p-1 mt-1 px-2 border border-2 border-black">
						<p className="font-semibold ">
							NOTICE: UNDER THE CREDIT REPORTING ACT 2013 LENDERS ARE REQUIRED
							TO PROVIDE PERSONAL AND CREDIT INFORMATION FOR CREDIT APPLICATIONS
							AND CREDIT AGREEMENTS OF €500 AND ABOVE TO THE CENTRAL CREDIT
							REGISTER. THIS INFORMATION WILL BE HELD ON THE CENTRAL CREDIT
							REGISTER AND MAY BE USED BY OTHER LENDERS WHEN MAKING DECISIONS ON
							YOUR CREDIT APPLICATIONS AND CREDIT AGREEMENTS.
						</p>
					</div>
					<p className="mt-4 ">
						The Central Credit Register is owned and operated by the Central
						Bank of Ireland. For information on your rights and duties under the
						Credit Reporting Act 2013, please refer to the factsheet prepared by
						the Central Bank of Ireland. This factsheet is available at
						www.centralcreditregister.ie
					</p>
					<div className="p-1 mt-2 px-2 border border-2 border-black">
						<h2 className="font-semibold  text-center">WARNING:</h2>
						<p className="font-semibold ">
							IF YOU DO NOT PROVIDE US WITH THE REQUESTED INFORMATION AND
							DOCUMENTATION, WE WILL NOT BE ABLE TO ASSESS YOUR APPLICATION AND
							CREDIT CANNOT BE GRANTED.
						</p>
					</div>
					<div className="p-1 mt-3 px-2 border border-2 border-black">
						<h2 className="font-semibold  text-center">WARNING:</h2>
						<p className="font-semibold ">
							IF YOU CANCEL OR MAKE A CLAIM FOR REIMBURSEMENT OF A DIRECT DEBIT
							REPAYING YOUR MORTGAGE ACCOUNT, AND FAIL TO MAKE ALTERNATIVE
							ARRANEGMENTS FOR PAYMENT, YOUR ACCOUNT WILL GO INTO ARREARS.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default TwelfthPage;
