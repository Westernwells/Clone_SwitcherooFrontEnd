import * as Action from "../../actions/backAccounts/bankAccType";

const initialstate = {
  loading: false,
  bank_accounts_data: {},
  errors: false,
  modal: false
};

export default function(state = initialstate, action) {
  console.log("ACTIONS 12", action);
  switch (action.type) {
    case Action.ACCOUNTS_DATA_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
