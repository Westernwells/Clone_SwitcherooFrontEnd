import React from "react";
import ptsbHeader from "../../../assets/ptsb-header.png";
import footer from "../../../assets/ptsb-footer.png";
import page2_1 from "../../../assets/p2_1.png";
import page2_2 from "../../../assets/p2_2.png";

import CheckBox from "./CheckBox";

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    const form = this.props.form;

    this.state = {
      checkSavings: !form.creditCommitments.loanOrOverdraftCosts[0].accPurpose === 'savings',
      checkLoan: !form.creditCommitments.loanOrOverdraftCosts[0].creditUnionLoc === 'Dublin',
      checkPrevLoan: true,
      checkOthercommit: true,
      checkFuture: true,
      futureChanges: form.declarations.futureChanges,
      creditCommitments: form.creditCommitments,
      savingsAccounts: form.savingsAccounts
    };
  }

  getSplitInput = (boxCount, key) => {
    let inputs = [];

    for (let i = 0; i < boxCount; i++) {
      const classes = `accountNumber mr-${
        i === 6 && key === "accountNumber" ? 4 : 1
        } primary-input text-center`;
      inputs.push(<input className={classes} maxLength="1" key={i} />);
    }

    return inputs;
  };

  inputChange = (
    event,
    index,
    key = null,
    subkey = null,
    keyToUpdate = null
  ) => {
    if (key) {
      this.state[key][subkey][keyToUpdate][index] = event.target.value;
      this.setState({
        ...this.state
      });
    } else {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  };

  toggleCheckbox = key => {
    this.setState({
      [key]: !this.state.key
    });
  };

  render() {
    return (
      <div className="container-fluid px-5 py-4">

        <img src={ptsbHeader} height="48px" className="mt-4"></img>

        <h2 className="mt-2 font-weight-bold color-primary">
          Responsible Lending – Our Approach
        </h2>
        <img src={page2_1} width="700" className="mt-2"></img>

        <div className="d-flex flex-column w-95">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="w-80"></div>
            <div className="w-20 d-flex justify-content-end">
              <div className="input-group radio-group d-flex justify-content-end">
                <label className="mr-3">No</label>
                <label className="mr-1">Yes</label>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="w-80">
              <label>
                a) Do you or your spouse / partner have any savings or shares in
                a Credit Union?
              </label>
            </div>
            <div className="w-20 d-flex justify-content-end">
              <div
                id="checkSavings"
                onClick={e => {
                  this.toggleCheckbox("checkSavings");
                }}
              >
                <CheckBox
                  noMarginRight="true"
                  check={this.state.checkSavings}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center mt-1">
            <div className="w-80">
              <label>
                b) Do you or your spouse / partner currently hold loan
                account(s) in a Credit Union?
              </label>
            </div>
            <div className="w-20 d-flex justify-content-end">
              <div
                id="checkLoan"
                onClick={e => {
                  this.toggleCheckbox("checkLoan");
                }}
              >
                <CheckBox
                  noMarginRight="true"
                  check={this.state.checkLoan}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center mt-1">
            <div className="w-80">
              <label>
                c) Have you or your spouse / partner previously held loan
                account(s) with a Credit Union?
              </label>
            </div>
            <div className="w-20 d-flex justify-content-end">
              <div
                id="checkPrevLoan"
                onClick={e => {
                  this.toggleCheckbox("checkPreviousLoan");
                }}
              >
                <CheckBox
                  noMarginRight="true"
                  check={this.state.checkPrevLoan}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center mt-1">
            <div className="w-80">
              <label>
                d) Do you or your spouse / partner have any other Non-Bank
                repayment commitments? <br />
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;(for example - Occupational Loan
                  Scheme, Money Lender, Family Member
                </span>
              </label>
            </div>
            <div className="w-20 d-flex justify-content-end mt-n3">
              <div
                id="checkOtherCommit"
                onClick={e => {
                  this.toggleCheckbox("checkOtherCommit");
                }}
              >
                <CheckBox
                  noMarginRight="true"
                  check={this.state.checkOthercommit}
                />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-1">
          Note : If the answer to any of (a) to (d) above if “Yes” , please
          provide full details of each facility in the box provided below.
        </p>

        <table className="w-100">
          <tbody>
            <tr className="border-1">
              <th className="border-right-1">
                Name of Credit Union / Other Lender
              </th>
              <th className="border-right-1 w-23p1">Savings Balance</th>
              <th className="border-right-1 w-23p1">Loan Balance</th>
              <th className="w-23p1">Monthly Commitment</th>
            </tr>

            <tr className="border-left-1 border-right-1 border-bottom-1">
              <td className="border-right-1">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "O");
                    }}
                    value={
                      this.state["creditCommitments"][
                      "loanOrOverdraftCosts"
                      ][0]["creditUnionLoc"]
                    }
                  />
                </div>
              </td>

              <td className="border-right-1">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="euro input-group-text primary-input border-0 input-placeholder">
                      €
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "0");
                    }}
                  />
                </div>
              </td>

              <td className="border-right-1">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="euro input-group-text primary-input border-0 input-placeholder">
                      €
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "0");
                    }}
                  />
                </div>
              </td>

              <td>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="euro input-group-text primary-input border-0 input-placeholder">
                      €
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "0");
                    }}
                  />
                </div>
              </td>
            </tr>

            <tr className="border-left-1 border-right-1 border-bottom-1">
              <td className="border-right-1">
                <div className="input-group">
                <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "O");
                    }}
                    value={
                      this.state["creditCommitments"][
                      "loanOrOverdraftCosts"
                      ][1]["creditUnionLoc"]
                    }
                  />
                </div>
              </td>

              <td className="border-right-1">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="euro input-group-text primary-input border-0 input-placeholder">
                      €
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "0");
                    }}
                  />
                </div>
              </td>

              <td className="border-right-1">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="euro input-group-text primary-input border-0 input-placeholder">
                      €
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "0");
                    }}
                  />
                </div>
              </td>

              <td>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="euro input-group-text primary-input border-0 input-placeholder">
                      €
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "0");
                    }}
                  />
                </div>
              </td>
            </tr>

            <tr className="border-left-1 border-right-1 border-bottom-1">
              <td className="border-right-1">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "O");
                    }}
                  />
                </div>
              </td>

              <td className="border-right-1">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="euro input-group-text primary-input border-0 input-placeholder">
                      €
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "0");
                    }}
                  />
                </div>
              </td>

              <td className="border-right-1">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="euro input-group-text primary-input border-0 input-placeholder">
                      €
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "0");
                    }}
                  />
                </div>
              </td>

              <td>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="euro input-group-text primary-input border-0 input-placeholder">
                      €
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control primary-input border-0"
                    onChange={e => {
                      this.inputChange(e, "0");
                    }}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="mt-3 mb-2 font-weight-bold color-primary">
          Known Future Changes in your Circumstances
        </h2>

        <div className="d-flex flex-row align-items-center">
          <p className="w-90" style={{ fontSize: "0.65rem" }}>
            Are you aware of any possible changes to your future circumstances
            that may affect your ability to meet your repayments on this
            facility?
          </p>

          <div className="justify-content-end w-10 d-flex flex-row ">
            <div
              className="mr-2"
              id="checkFuture"
              value={this.state.checkFuture}
              onClick={e => {
                this.toggleCheckbox("checkFuture");
              }}
            >
              <CheckBox
                noMarginRight="true"
                lowercase="true"
                label="true"
                reducedMargin="true"
                check={this.state.futureChanges}
              />
            </div>
          </div>
        </div>

        <p>If yes, please give details:</p>

        <textarea
          name=""
          className="primary-input w-100"
          id="futureChanges"
          value={this.state.futureChanges}
          onChange={this.inputChange}
        ></textarea>

        <h2 className="mt-2 font-weight-bold color-primary">
          Customer Consent - Special Category Data - Health Related Information
          (If Provided){" "}
        </h2>

        <p className="mt-2">
          I/We have provided specific health-related information in the form
          above which{" "}
          <u>I/We feel is relevant to the application for this product.</u>{" "}
        </p>
        <p>
          I/We understand that Permanent TSB will only use this information in
          the decision process for my/our mortgage
        </p>

        <p>
          I/We understand that Permanent TSB will retain this information as
          part of the record of this decision as Permanent TSB is obliged to do
          under the Consumer Protection Code.
        </p>

        <p>
          I/We hereby consent to Permanent TSB using my/our personal health
          information in the decision process.
        </p>

        <div className="d-flex flex-row w-80 justify-content-between align-items-end mt-2">
          <div className="w-70 d-flex flex-row justify-content-between align-items-end">
            <label className="w-40">Signature of first applicant:</label>
            <input type="text" className="primary-input form-control w-56" />
          </div>
          <div className="d-flex flex-row w-25 align-items-end">
            <label className="mr-2">Date:</label>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
          </div>
        </div>

        <div className="d-flex flex-row w-80 justify-content-between align-items-end mt-2">
          <div className="w-70 d-flex flex-row justify-content-between align-items-end">
            <label className="w-40">Signature of second applicant:</label>
            <input type="text" className="primary-input form-control w-56" />
          </div>
          <div className="d-flex flex-row w-25 align-items-end">
            <label className="mr-2">Date:</label>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
          </div>
        </div>

        <img src={page2_2} width="700" className="mt-1"></img>

        <h2 className="mt-2 font-weight-bold color-primary">
          Consent under the Consumer Credit Act 1995
        </h2>

        <p className="mt-2">
          Under the Consumer Credit Act 1995 a customer’s consent is required if
          the customer wishes permanent tsb to be able to telephone him/her at
          his/her place of employment/business in connection with a Credit
          Agreement. From time to time permanent tsb may need to contact you
          during working hours in connection with the Account. Should you wish
          to give your consent you should sign this part.
        </p>

        <p className="mt-1">
          I/we hereby consent to permanent tsb contacting me/us by telephone at
          my/our place of employment/business.
        </p>

        <div className="d-flex flex-row w-80 justify-content-between align-items-end mt-2">
          <div className="w-70 d-flex flex-row justify-content-between align-items-end">
            <label className="w-40" style={{ fontSize: "12px" }}>
              Signature of first applicant:
            </label>
            <input type="text" className="primary-input form-control w-56" />
          </div>
          <div className="d-flex flex-row w-25 align-items-end">
            <label className="mr-2" style={{ fontSize: "12px" }}>
              Date:
            </label>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
          </div>
        </div>

        <div className="d-flex flex-row w-80 justify-content-between align-items-end mt-2">
          <div className="w-70 d-flex flex-row justify-content-between align-items-end">
            <label className="w-40" style={{ fontSize: "12px" }}>
              Signature of second applicant:
            </label>
            <input type="text" className="primary-input form-control w-56" />
          </div>
          <div className="d-flex flex-row w-25 align-items-end">
            <label className="mr-2" style={{ fontSize: "12px" }}>
              Date:
            </label>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
            <p className="mr-1">/</p>
            {this.getSplitInput(2, "date")}
          </div>
        </div>

        <img src={footer} height="13" className="mt-4"></img>
      </div>
    );
  }
}

export default Page2;
