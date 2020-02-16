import React from "react";

const RadioButton = ({ isChecked, name, labelText, className }) => {
	return (
		<label className={className + " defaultRadio"}>
			{labelText}
			<input type="radio" name={name} checked={isChecked} />
			<div></div>
		</label>
	);
};

export default RadioButton;
