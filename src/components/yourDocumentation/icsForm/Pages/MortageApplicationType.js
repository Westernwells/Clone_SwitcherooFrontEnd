import React from "react";
import RadioButton from "./RadioButton";

const MortageApplicationTypes = () => {
	return (
		<div className="application-type mt-4 mb-4">
			<div className="flex m-types">
				<h4 className="font-semibold">
					Mortgage Application Type{" "}
					<span className="dim">(please tick one box)</span>
				</h4>
				<RadioButton
					name="applicationType"
					labelText="First time buyer "
					isChecked="checked"
					className="ml-2 font-semibold"
				/>
			</div>
			<div className="flex m-types justify-between items-center font-semibold">
				<RadioButton
					name="applicationType"
					labelText="Second subsequent buyer"
				/>
				<RadioButton name="applicationType" labelText="Switcher" />
				<RadioButton
					name="applicationType"
					labelText="Switcher with equity release"
				/>
				<RadioButton name="applicationType" labelText="Top up " />
			</div>
		</div>
	);
};

export default MortageApplicationTypes;
