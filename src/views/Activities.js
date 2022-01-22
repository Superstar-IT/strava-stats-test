import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotificationAlert from "react-notification-alert";
import {
  Card,
  Container,
  Table,
} from "react-bootstrap";
import { setRecentActivities, setMonthlyStats } from "store/actions/activityAction";
import { getActivities, getMonthlyStats } from "services/acitivity.service";
import notifier from "services/notifier.service";

function Activities() {
  const { search } = useLocation();
  let currentMonth = null;
  if(search) {
    currentMonth = search.match(/\d{4}-\d{2}/)? search.match(/\d{4}-\d{2}/)[0] : null;
  }
  const dispatch = useDispatch();
  const { activities, recentActivites } = useSelector((state) => state.activity);
  const activityList = currentMonth ? recentActivites[currentMonth] : activities;

  useEffect(() => {
    if(!currentMonth) {
      getActivities()
        .then((res) => dispatch(setRecentActivities(res)))
        .catch((err) => notifier.error(err.message));
    } else if(!recentActivites[currentMonth]) {
      getMonthlyStats()
        .then((res) => dispatch(setMonthlyStats(res)))
        .catch((err) => notifier.error(err.message))
    }
  }, [])

  return (
    <Container fluid>
      <Card>
        <Card.Header>
          <Card.Title as="h4">{ `${currentMonth || 'Recent'} Activities` }</Card.Title>
        </Card.Header>
        <Card.Body className="table-full-width table-responsive px-3">
          {activityList && activityList.length > 0 ?
            <Table className="table-hover table-striped">
              <thead>
                <tr>
                  <th className="border-0">Name</th>
                  <th className="border-0">Date</th>
                  <th className="border-0">Distance</th>
                  <th className="border-0">Moving Time</th>
                  <th className="border-0">Elevation Gain</th>
                </tr>
              </thead>
              <tbody>
                { activityList.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.start_date}</td>
                      <td>{item.distance}</td>
                      <td>{item.moving_time}</td>
                      <td>{item.total_elevation_gain}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table> : 
            <div className="px-3">No Activity</div>
          }
          
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Activities;
