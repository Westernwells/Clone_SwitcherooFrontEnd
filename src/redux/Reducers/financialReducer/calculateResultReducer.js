import * as Action from "../../actions/financial_health/calculateResultActionType";

const initialstate = {
    data: null

};

export default function(state = initialstate, action) {
    switch (action.type) {
        case Action.SAVE_RESULTS:
            return {
                ...state,
                data: {...state.data,[action.route] : action.message }
            };
        default:
            return state;
    }
}
