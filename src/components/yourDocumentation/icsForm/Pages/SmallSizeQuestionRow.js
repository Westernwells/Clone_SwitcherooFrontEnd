import React from "react";
import RadioButton from "./RadioButton";

const SmallSizeQuestionRow = ({title}) => {
	return (
		<>
            <div className="elements-container flex justify-between w-2/3">
                <div className="h-6 w-1/4 text-gray-900">
                    <h4>{title}</h4>
                </div>
                <div className="h-6  text-center w-1/5">
                    <div className="flex justify-around">
                        <RadioButton />
                        <RadioButton />
                    </div>
                </div>
                <div className="h-6  text-center w-1/5">
                    <div className="flex justify-around">
                        <RadioButton />
                        <RadioButton />
                    </div>
                </div>
            </div>

		</>
	);
};

export default SmallSizeQuestionRow;
