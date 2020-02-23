import React from "react";
import RadioButton from "./RadioButton";
const QuestionRow = ({ title, nameOne, nameSecond }) => {
	return (
		<div className="flex mt-2  justify-between items-center w-full ">
			<div className="w-2/5 ">
				<p>{title}</p>
			</div>
			<div className="text-justify w-28 flex justify-start">
				<RadioButton name={nameOne} labelText="Yes" value="yes" />
				<RadioButton
					name={nameOne}
					labelText="No"
					className="ml-12"
					value="no"
				/>
			</div>
			<div className="w-28 flex justify-start">
				<RadioButton name={nameSecond} labelText="Yes" value="yes" />
				<RadioButton
					name={nameSecond}
					labelText="No"
					className="ml-12"
					value="no"
				/>
			</div>
		</div>
	);
};

export default QuestionRow;
