import * as actions from "./detailsActionType";

const setPersonalData = payload => ( {
  type: actions.SET_PERSONAL_DETAILS,
  payload
} );
const setDetailsData = payload => ( {
  type: actions.SET_DETAILS_DATA,
  payload
} );
const LoadingDetailsData = payload => ( {
  type: actions.DETAILS_DATA_LOADING,
  payload
} );
const setDetailsDataCredit=payload=>({
  type:actions.SET_DETAILS_DATA_CREDIT,
  payload
})
const setBankDetails = (payload)=>({
  type:actions.SET_BANK_DETAILS,
  payload
})
const setBanks = (payload)=>({
  type:actions.SET_BANKS,
  payload
})

export {
  setPersonalData,
  setDetailsData,
  LoadingDetailsData,
  setDetailsDataCredit,
  setBankDetails,
  setBanks,
};
