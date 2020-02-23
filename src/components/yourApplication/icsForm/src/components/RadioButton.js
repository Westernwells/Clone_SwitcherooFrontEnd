import React from "react";
import { useAppContext } from "./AppContext";
import { get, set } from "object-path";

const RadioButton = ({ name, labelText, className, value }) => {
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
		// console.log(appState);
	};
	const objectValue = queryValue(name);
	var isChecked = objectValue === value;
	return (
		<label className={className + " defaultRadio"}>
			{labelText}
			<input
				type="radio"
				name={name}
				value={value}
				checked={isChecked}
				onChange={e => setValue(e)}
			/>
			<div></div>
		</label>
	);
};

export default RadioButton;
