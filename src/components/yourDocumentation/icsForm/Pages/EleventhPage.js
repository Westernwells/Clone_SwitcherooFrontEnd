import React from "react";
import MegaHeading from "./MegaHeading";
import TopPageLogo from "../../../../assets/icslogo.PNG";

const TenthPage = () => {
	return (
		<>
			<div className="pageHeight -mt-4">
				<TopPageLogo />
				<MegaHeading
					headingTitle="Additional Information 13"
					headingNumber="13"
				/>
				<div className="elements-container mt-6 text-sm">
					<h3>
						Please use this page to detail any additional information that you
						want to provide or have been unable to detail fully in the boxes
						provided.
					</h3>
					<textarea
						className="mt-2 bg-tertiary"
						style={{ width: "100%", height: "800px" }}
					></textarea>
				</div>
			</div>
		</>
	);
};

export default TenthPage;
