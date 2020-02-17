import React from "react";

const MegaHeading = ({ headingTitle, headingNumber }) => {
	return (
		<div className="mt-2 flex items-center mega-container bg-primary">
			<div className="elements-container w-11/12">
				<h1 className="text-white text-3xl font-semibold">{headingTitle}</h1>
			</div>
			<h1 className="text-white text-2xl font-semibold bg-secondary w-1/12 h-full flex justify-center items-center">
				{headingNumber}
			</h1>
		</div>
	);
};

export default MegaHeading;
