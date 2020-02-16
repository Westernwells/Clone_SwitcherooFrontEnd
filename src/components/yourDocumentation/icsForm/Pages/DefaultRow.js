import React from "react";
const DefaultRow = ({ title, inputHeight = 25 , name,appData}) => {
	return (
		<div className="flex mt-2  justify-between items-start w-full ">
			<div className="w-2/5 text-sm">
				<p>{title}</p>
			</div>
			<textarea className="w-28 bg-tertiary" value={appData? appData[name] : ""} name={name} style={{ height: inputHeight }} ></textarea>
			<textarea className="w-28 bg-tertiary" style={{ height: inputHeight }} ></textarea>
		</div>
	);
};

export default DefaultRow;
