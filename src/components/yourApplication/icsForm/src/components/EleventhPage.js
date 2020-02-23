import React from "react";
import MegaHeading from "./MegaHeading";
import TopPageLogo from "./logo";

const TenthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-4" style={{ "--bottom": "35px" }}>
				<TopPageLogo />
				<MegaHeading
					headingTitle="Additional Information 13"
					headingNumber="13"
				/>
				<div className="elements-container mt-6 ">
					<h3 style={{ fontSize: "13px" }}>
						Please use this page to detail any additional information that you
						want to provide or have been unable to detail fully in the boxes
						provided.
					</h3>
					<textarea
						className="mt-6 bg-tertiary"
						style={{ width: "100%", height: "800px" }}
					></textarea>
				</div>
			</div>
		</>
	);
};

export default TenthPage;
