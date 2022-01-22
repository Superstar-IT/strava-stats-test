import moment from "moment";
import activities from "services/activities.json";

export const getAccessToken = () => {
    //return access token using OAuth.
    return '';
}

export const getActivities = async (startTime = null, endTime = null) => {
    /* Get activities using Strava API
    const token = await getAccessToken();
    return axios.get('https://www.strava.com/api/v3/athlete/activities', 
        {
            params: {
                before: endTime,
                after: startTime,
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    ).then((res) => res.data);
    */
    return activities;
}

export const getMonthlyStats = async () => {
    const monthlyStats = {};    
    
    for(let i = 0; i < 3; i++) {
        const month = moment().subtract(i, 'months');

        const startTime = month.startOf('month').unix();
        const endTime = month.endOf('month').unix();
        
        await getActivities(startTime, endTime)
            .then((res) => {
                monthlyStats[month.format('YYYY-MM')] = res;
            })
            .catch((err) => {
                monthlyStats[month.format('YYYY-MM')] = [];
            });
    }

    return monthlyStats;
}