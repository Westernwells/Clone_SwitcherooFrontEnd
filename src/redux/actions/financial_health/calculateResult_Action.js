import * as actions from "./calculateResultActionType";

export const calculateResults = (route,message) => {
    return {
        type: actions.SAVE_RESULTS,
        route : route,
        message : message
    };
};