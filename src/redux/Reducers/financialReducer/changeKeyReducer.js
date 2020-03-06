import * as Action from "../../actions/financial_health/changeKey_ActionType";

const initialstate = {
    data: null

};

export default function(state = initialstate, action) {
    switch (action.type) {
        case Action.CHANGE_KEY:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}
