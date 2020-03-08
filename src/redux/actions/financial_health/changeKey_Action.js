import * as actions from "./changeKey_ActionType";

export const changeKey = (key) => {
    return {
        type: actions.CHANGE_KEY,
        payload:key
    };
};