import React from "react";
import { useAppContext } from "./AppContext";
import { get, set } from "object-path";

const DataGrid = ({ applicant, children }) => {
	const { appState, setAppState } = useAppContext();
	const queryValue = path => {
		let returnValue = get(appState, path);
		if (typeof returnValue == "object") {
			return "";
		} else {
			return returnValue;
		}
	};
	const setValue = event => {
		set(appState, event.target.name, event.target.value);
		setAppState({ ...appState });
	};
	return (
		<>
			<div className="elements-container mt-6 flex justify-between flex-wrap">
				<div className="w-full color-primary uppercase font-semibold">
					{children}
					<h2 className="mt-2">Applicant {applicant}</h2>
					<br />
				</div>
				<div className="w-15 ">Type of Outgoing </div>
				<div className="w-15 ">Lender Name </div>
				<div className="w-15 ">Purpose of Loan </div>
				<div className="w-15 ">Terms of Loan e.g. 4 years remaining</div>
				<div className="w-15 ">Balance </div>
				<div className="w-15 ">Monthly Payment</div>
				<div className="w-full flex justify-between mt-2">
					<input
						className="bg-tertiary w-15"
						name="applicant2.creditCommitments.loanOrOverdraftCosts.0.accType"
						value={queryValue(
							"applicant2.creditCommitments.loanOrOverdraftCosts.0.accType"
						)}
						onChange={e => setValue(e)}
					/>
					<input
						className="bg-tertiary w-15"
						name="applicant2.creditCommitments.loanOrOverdraftCosts.0.lenderName"
						value={queryValue(
							"applicant2.creditCommitments.loanOrOverdraftCosts.0.lenderName"
						)}
						onChange={e => setValue(e)}
					/>
					<input
						className="bg-tertiary w-15"
						name="applicant2.creditCommitments.loanOrOverdraftCosts.0.accPurpose"
						value={queryValue(
							"applicant2.creditCommitments.loanOrOverdraftCosts.0.accPurpose"
						)}
						onChange={e => setValue(e)}
					/>
					<input className="bg-tertiary w-15" />
					<input
						className="bg-tertiary w-15"
						name="applicant2.creditCommitments.loanOrOverdraftCosts.0.maxOutstandingBal"
						value={queryValue(
							"applicant2.creditCommitments.loanOrOverdraftCosts.0.maxOutstandingBal"
						)}
						onChange={e => setValue(e)}
					/>
					<input
						className="bg-tertiary w-15"
						name="applicant2.creditCommitments.loanOrOverdraftCosts.0.monthlyRepayments"
						value={queryValue(
							"applicant2.creditCommitments.loanOrOverdraftCosts.0.monthlyRepayments"
						)}
						onChange={e => setValue(e)}
					/>
				</div>
				<div className="w-full flex justify-between mt-2">
					<input
						className="bg-tertiary w-15"
						name="applicant2.creditCommitments.loanOrOverdraftCosts.1.accType"
						value={queryValue(
							"applicant2.creditCommitments.loanOrOverdraftCosts.1.accType"
						)}
						onChange={e => setValue(e)}
					/>
					<input
						className="bg-tertiary w-15"
						name="applicant2.creditCommitments.loanOrOverdraftCosts.1.lenderName"
						value={queryValue(
							"applicant2.creditCommitments.loanOrOverdraftCosts.1.lenderName"
						)}
						onChange={e => setValue(e)}
					/>
					<input
						className="bg-tertiary w-15"
						name="applicant2.creditCommitments.loanOrOverdraftCosts.1.accPurpose"
						value={queryValue(
							"applicant2.creditCommitments.loanOrOverdraftCosts.1.accPurpose"
						)}
						onChange={e => setValue(e)}
					/>
					<input className="bg-tertiary w-15" />
					<input
						className="bg-tertiary w-15"
						name="applicant2.creditCommitments.loanOrOverdraftCosts.1.maxOutstandingBal"
						value={queryValue(
							"applicant2.creditCommitments.loanOrOverdraftCosts.1.maxOutstandingBal"
						)}
						onChange={e => setValue(e)}
					/>
					<input
						className="bg-tertiary w-15"
						name="applicant2.creditCommitments.loanOrOverdraftCosts.1.monthlyRepayments"
						value={queryValue(
							"applicant2.creditCommitments.loanOrOverdraftCosts.1.monthlyRepayments"
						)}
						onChange={e => setValue(e)}
					/>
				</div>
				<div className="w-full flex justify-between mt-2">
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
				</div>
				<div className="w-full flex justify-between mt-2">
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
				</div>
				<div className="w-full flex justify-between mt-2">
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
					<input className="bg-tertiary w-15" />
				</div>
				<div className="w-full flex justify-between mt-4">
					<div style={{ width: "66%" }}>
						<p className="uppercase ">Total</p>
					</div>
					<input className="w-15 bg-tertiary" />
					<input className="w-15 bg-tertiary" />
				</div>
				<div>
					<p className="font-semibold  mt-6">Additional Commitments</p>
				</div>
				<div className="flex w-full  justify-between">
					<div style={{ width: "32%" }}>Type </div>
					<div style={{ width: "32%" }}> Amount </div>
					<div style={{ width: "32%" }}> Frequency</div>
				</div>
				<div className="flex w-full  justify-between mt-2">
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
				</div>
				<div className="flex w-full  justify-between mt-2">
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
				</div>
				<div className="flex w-full  justify-between mt-2">
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
					<input className="bg-tertiary" style={{ width: "32%" }} />
				</div>
			</div>
		</>
	);
};

export default DataGrid;
