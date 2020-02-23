import React from "react";
import RadioButton from "./RadioButton";
const SingleQuestionRow = ({ title, labelOne, labelTwo, additionalClass }) => {
	return (
		<div className="flex mt-2  justify-between items-center w-full ">
			<div className="w-2/5 ">
				<p>{title}</p>
			</div>
			<div className="w-28 flex justify-start">
				<RadioButton
					isChecked={false}
					name="isJobApplicant1"
					labelText={labelOne ? labelOne : "Yes"}
				/>
				<RadioButton
					isChecked={false}
					name="isJobApplicant1"
					labelText={labelTwo ? labelTwo : "No"}
					className={additionalClass ? additionalClass : "ml-12"}
				/>
			</div>
			<div className="w-28 flex justify-around"></div>
		</div>
	);
};

export default SingleQuestionRow;
