import React from "react";
import RadioButton from "./RadioButton";

const MortageApplicationTypes = () => {
	return (
		<div className="application-type pb-4  font-semibold">
			<div className="flex m-types">
				<h4 className="font-semibold">
					Mortgage Application Type{" "}
					<span className="dim">(please tick one box)</span>
				</h4>
				<RadioButton
					name="applicationType"
					labelText="First time buyer "
					isChecked="checked"
					className="ml-8 "
				/>
			</div>
			<div className="flex m-types justify-between items-center ">
				<RadioButton
					name="applicationType"
					labelText="Second subsequent buyer"
					className=""
				/>
				<RadioButton name="applicationType" labelText="Switcher" className="" />
				<RadioButton
					name="applicationType"
					labelText="Switcher with equity release"
					className=""
				/>
				<RadioButton name="applicationType" labelText="Top up " />
			</div>
		</div>
	);
};

export default MortageApplicationTypes;
