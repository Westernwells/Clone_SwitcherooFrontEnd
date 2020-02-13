import * as actions from "./detailsActionType";

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

export {
  setDetailsData,
  LoadingDetailsData,
  setDetailsDataCredit
};
