import React from "react";


const Signature = ({title}) =>{
return (

    <div className="w-full flex  justify-between items-center mt-6">
    <div className="w-1/3">
        <h5>Signature of {title} applicant:</h5>
    </div>
    <div className="w-1/3">
        <input className="bg-tertiary w-full" style={{height:"30px"}}/>
    </div>
    <div className="w-1/3 flex justify-end items-center ">
   <span> Date:</span>
       <label className="bg-tertiary ml-1"  style={{height:"30px"}}>
        <input className="bg-tertiary px-1 focus:outline-none" style={{width:"30px",height:"30px"}}/> 
        <span>/</span>
        <input className="bg-tertiary px-1 focus:outline-none" style={{width:"30px",height:"30px"}}/>
        <span>/</span>
        <input className="bg-tertiary px-1 focus:outline-none" style={{width:"30px",height:"30px"}}/> 

        </label>
    </div>
</div>
);


}


export default Signature;