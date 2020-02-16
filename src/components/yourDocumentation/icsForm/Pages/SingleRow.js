import React from "react";
const SingleRow = ({ title, inputHeight = 25 }) => {
	return (
		<div className="flex mt-2  justify-between items-start w-full ">
			<div className="w-2/5 text-sm">
				<p>{title}</p>
			</div>
			<textarea className="w-3/5 bg-tertiary" style={{ height: inputHeight }} ></textarea>
		</div>
	);
};

export default SingleRow;
