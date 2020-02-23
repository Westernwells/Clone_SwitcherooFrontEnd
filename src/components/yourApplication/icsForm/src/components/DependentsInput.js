import React from "react";
const DependentsInput = ({ title, labelOne, labelTwo }) => {
	return (
		<div className="flex mt-2  justify-between items-start w-full ">
			<div className="w-2/5 ">
				<p>{title}</p>
			</div>
		</div>
	);
};

export default DependentsInput;
