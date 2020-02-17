import React from "react";
import RadioButton from './RadioButton'
const QuestionRow = ({ title, labelOne, labelTwo }) => {
	return (
		<div className="flex mt-2 text-sm justify-between items-center w-full ">
			<div className="w-2/5 text-sm">
				<p>{title}</p>
			</div>
			<div className="w-28 flex justify-around">
                <RadioButton isChecked={false} name="isJobApplicant1" labelText="Yes"/>
                <RadioButton isChecked={false} name="isJobApplicant1" labelText="No"/>
             </div>
             <div className="w-28 flex justify-around">
                <RadioButton isChecked={false} name="isJobApplicant2" labelText="Yes"/>
                <RadioButton isChecked={false} name="isJobApplicant2" labelText="No"/>
             </div>
        </div>
	);
};

export default QuestionRow;
