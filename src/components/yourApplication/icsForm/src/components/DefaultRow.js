import React from "react";
import { useAppContext } from "./AppContext";
import { get, set } from "object-path";
const DefaultRow = ({
	styles,
	className,
	title,
	inputHeight = 25,
	name = "",
	additionalClassOne,
	additionalClassTwo,
	secondName
}) => {
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
		<div
			className={
				className
					? className + " flex mt-1  justify-between items-start w-full "
					: " flex mt-1  justify-between items-start w-full "
			}
			style={styles}
		>
			<div className="w-2/5 ">
				<p>{title}</p>
			</div>
			<div
				className={additionalClassOne ? additionalClassOne + " w-28" : " w-28"}
			>
				<textarea
					className="w-full bg-tertiary"
					value={queryValue(name)}
					name={name}
					onChange={e => setValue(e)}
					style={{ height: inputHeight }}
				></textarea>
			</div>
			<div
				className={additionalClassTwo ? additionalClassTwo + " w-28" : " w-28"}
			>
				<textarea
					className="w-full bg-tertiary"
					style={{ height: inputHeight }}
					value={queryValue(secondName)}
					name={secondName}
					onChange={e => setValue(e)}
				></textarea>
			</div>
		</div>
	);
};

export default DefaultRow;
