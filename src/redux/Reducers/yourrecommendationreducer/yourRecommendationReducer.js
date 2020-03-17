import * as actions from '../../actions/yourRecommendation/RecommendationTypes';

const initialState = {
  introduction: [],
  circumstances: [],
  recommendation: [],
  extraFromPageOne: [],
  extraFromPageTwo: [],
  applicant1Name: '',
  applicant2Name: '',
  loading: true
};

export default function(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case actions.SET_TEXT:
      return {
        ...state,
        introduction: payload.introduction,
        circumstances: payload.circumstances,
        recommendation: payload.recommendation,
        applicant1Name: payload.applicant1Name,
        applicant2Name: payload.applicant2Name,
        loading: false
      };
    case actions.SET_EXTRAS:
      return {
        ...state,
        recommendation: payload.updatedRecommendation,
        extraFromPageOne: payload.extras
      };

    case actions.SET_EXTRAS_FROM_PAGE_TWO:
      return {
        ...state,
        extraFromPageTwo: payload
      };
    case actions.CLEAR_EXTRAS_FROM_PAGE_TWO:
      return {
        ...state,
        extraFromPageTwo: []
      };
    default:
      return state;
  }
}
