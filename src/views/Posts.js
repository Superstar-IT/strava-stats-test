import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotificationAlert from "react-notification-alert";
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import notifier from "services/notifier.service";
import { getRecentPosts } from "services/post.service";
import { setRecentPosts } from "store/actions/postAction";
import { getPostsByUser } from "services/post.service";
import { SET_USERS } from "store/types";

function Posts() {
  const { search } = useLocation();
  let userId = null;
  if(search) {
    userId = search.match(/\d+/)? parseInt(search.match(/\d+/)[0]) : null;
  }
  const dispatch = useDispatch();
  const { users, recentPosts } = useSelector((state) => state.post);
  const postList = userId ? users[userId] : recentPosts;

  useEffect(() => {
    if(!userId) {
      getRecentPosts()
        .then((res) => dispatch(setRecentPosts(res)))
        .catch((err) => notifier.error(err.message));
    } else if(!users[userId]) {
      getPostsByUser(userId)
        .then((res) => dispatch(SET_USERS({ ...users, [userId]: res})))
        .catch((err) => notifier.error(err.message));
    }
  }, []);

  return (
    <Container fluid>
      <Row>
        {postList && postList.length > 0 ?
          postList.map((item) => (
            <Col md="3" sm="4" xs="6" className="d-flex" key={item.id}>
              <Card>
                <Card.Header>
                  <Card.Title as="h4">{item.title}</Card.Title>
                  <p className="category">User {item.userId}</p>
                </Card.Header>
                <Card.Body>
                  <p>{item.body}</p>
                </Card.Body>
              </Card>
            </Col>
          )) :
          <div className="typography-line">
            <h2>No Users</h2>
          </div> 
        }
      </Row>
    </Container>
  );
}

export default Posts;
