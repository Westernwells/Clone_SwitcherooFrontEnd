import * as actions from "./bankAccType";

const LoadingAccountsData = payload => ({
  type: actions.ACCOUNTS_DATA_LOADING,
  payload
});
const SetAccountsData = payload => ({
  type: actions.SET_ACCOUNTS_DATA,
  payload
});
const RemoveAccountsData = payload => ({
  type: actions.REMOVETESTATE,
  payload
});

export { SetAccountsData, RemoveAccountsData, LoadingAccountsData };
