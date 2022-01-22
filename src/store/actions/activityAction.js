import * as TYPES from "store/types";

export const setRecentActivities = (activities) => ({
    type: TYPES.SET_ACTIVITIES,
    payload: activities,
})

export const setMonthlyStats = (activities) => ({
    type: TYPES.SET_RECENT_ACTIVITIES,
    payload: activities,
})