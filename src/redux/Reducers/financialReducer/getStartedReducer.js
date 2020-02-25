import * as Action from "../../actions/financial_health/getStartedActionType";

const initialstate = {
    data: null,

};

export default function(state = initialstate, action) {
    switch (action.type) {
        case Action.SAVE_Q4_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}
