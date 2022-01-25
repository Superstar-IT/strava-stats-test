import * as TYPES from "store/types";

const initValue = {
    users: {},
    recentPosts: [],
};

const postReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.SET_RECENT_POSTS:
      return {
        ...state,
        recentPosts: action.payload,
      };
    case TYPES.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return { ...state };
  }
};

export default postReducer;
