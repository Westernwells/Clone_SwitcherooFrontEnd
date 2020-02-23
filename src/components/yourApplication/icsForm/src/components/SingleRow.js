import React from "react";
import { useAppContext } from "./AppContext";
import { get, set } from "object-path";
const SingleRow = ({ additionalClassOne, title, inputHeight = 25, name }) => {
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
		<div className="flex mt-2  justify-between items-start w-full ">
			<div className="w-2/5 ">
				<p>{title}</p>
			</div>
			<div
				className={
					additionalClassOne ? additionalClassOne + " w-3/5 " : " w-3/5 "
				}
			>
				<textarea
					className="bg-tertiary w-full"
					style={{ height: inputHeight }}
					value={queryValue(name)}
					name={name}
					onChange={e => setValue(e)}
				></textarea>
			</div>
		</div>
	);
};

export default SingleRow;
