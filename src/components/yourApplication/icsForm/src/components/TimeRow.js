import React from "react";
const DefaultRow = ({
	title,
	labelOne,
	labelTwo,
	className,
	labelClass,
	inputStyles
}) => {
	return (
		<div className="flex mt-1  justify-between items-start w-full ">
			<div className="w-2/5 ">
				<p>{title}</p>
			</div>
			<div className={className + " w-28 flex justify-between"}>
				<label className={labelClass ? labelClass : "ml-2"}>
					{labelOne}
					<input
						className={labelClass ? "bg-tertiary" : "bg-tertiary ml-2"}
						style={
							inputStyles ? inputStyles : { width: "35px", height: "24px" }
						}
					/>
				</label>
				<label className={labelClass ? labelClass : "ml-2"}>
					{labelTwo}
					<input
						className={labelClass ? "bg-tertiary" : "bg-tertiary ml-2"}
						style={
							inputStyles ? inputStyles : { width: "35px", height: "24px" }
						}
					/>
				</label>
			</div>
			<div className={className + " w-28 flex justify-between"}>
				<label className={labelClass ? labelClass : "ml-2"}>
					{labelOne}
					<input
						className={labelClass ? "bg-tertiary" : "bg-tertiary ml-2"}
						style={
							inputStyles ? inputStyles : { width: "35px", height: "24px" }
						}
					/>
				</label>
				<label className={labelClass ? labelClass : "ml-2"}>
					{labelTwo}
					<input
						className={labelClass ? "bg-tertiary" : "bg-tertiary ml-2"}
						style={
							inputStyles ? inputStyles : { width: "35px", height: "24px" }
						}
					/>
				</label>
			</div>
		</div>
	);
};

export default DefaultRow;
