import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import notifier from "services/notifier.service";
import { getMonthlyStats } from "services/acitivity.service";
import { setMonthlyStats } from "store/actions/activityAction";
import { useHistory } from "react-router";

function MonthlyStats() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [statsList, setStatsList] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getMonthlyStats()
      .catch((err) => notifier.error(err.message));
    if(data) {
      const list = [];
      Object.keys(data).map((key) => {
        let distance = 0;
        let time = 0;
        let gain = 0;
        data[key].map((item) => {
          distance += item.distance;
          time += item.moving_time;
          gain += item.total_elevation_gain;

        });
        list.push({ key, distance, time, gain });
      });
      setStatsList(list);
      dispatch(setMonthlyStats(data));
    }
  }

  const viewDetails = (item) => {
    history.push('/activities?month='+item.key);
  }

  return (
    <>
      <Container fluid>
        <Row>
        {statsList &&  statsList.length > 0 &&
        statsList.map((item) => (
          <Col md="4" key={item.key}>
            <Card onClick={() =>viewDetails(item)} className="cursor-pointer">
              <Card.Header className="px-4">
                <Card.Title as="h4">{item.key}</Card.Title>
              </Card.Header>
              <Card.Body className="px-4">
                <div>
                  <p className="d-flex justify-content-between"><span>Distance:</span><span>{item.distance.toFixed(2)} m</span></p>
                  <p className="d-flex justify-content-between"><span>Run Time:</span><span>{item.time} s</span></p>
                  <p className="d-flex justify-content-between"><span>Gain:</span><span>{item.gain}</span></p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )) 
        }
        </Row>
      </Container>
    </>
  );
}

export default MonthlyStats;
