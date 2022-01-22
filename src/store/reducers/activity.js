import * as TYPES from "store/types";

const initValue = {
    activities: {},
    recentActivites: [],
};

const activityReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.SET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case TYPES.SET_RECENT_ACTIVITIES:
      return {
        ...state,
        recentActivites: action.payload,
      };
    default:
      return { ...state };
  }
};

export default activityReducer;
