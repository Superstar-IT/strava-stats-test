import * as TYPES from "store/types";

export const setUsers = (users) => ({
    type: TYPES.SET_USERS,
    payload: users,
})

export const setRecentPosts = (posts) => ({
    type: TYPES.SET_RECENT_POSTS,
    payload: posts,
})