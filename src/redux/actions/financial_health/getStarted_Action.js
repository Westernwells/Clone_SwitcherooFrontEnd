import * as actions from "./getStartedActionType";

export const saveQ4Data = (data) => {
    console.log("action",data)
    return {
        type: actions.SAVE_Q4_DATA,
        payload : data
    };
};