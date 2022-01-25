import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import notifier from "services/notifier.service";
import { useHistory } from "react-router";
import { getRecentPosts } from "services/post.service";
import { setUsers, setRecentPosts } from "store/actions/postAction";

function Users() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const posts = await getRecentPosts()
      .catch((err) => notifier.error(err.message));
    if(posts) {
      const users = {};
      posts.map((post) => {
        if(users[post.userId]) {
          users[post.userId].push(post);
        } else {
          users[post.userId] = [post];
        }
      });
      dispatch(setUsers(users));
      dispatch(setRecentPosts(posts));
      const userDetails = Object.keys(users).map((userId) => ({
        userId,
        posts: users[userId].length,
        lastPost: users[userId][0],
      }));
      setUserList(userDetails);
    }
  }

  const viewPosts = (item) => {
    history.push('/posts?userId='+item.userId);
  }

  return (
    <>
      <Container fluid>
        <Row>
        {userList &&  userList.length > 0 ?
          userList.map((user) => (
            <Col md="3" sm="4" xs="6" key={user.id} key={user.userId}>
              <Card onClick={() =>viewPosts(user)} className="cursor-pointer">
                <Card.Header className="px-4">
                  <Card.Title as="h4">User {user.userId}</Card.Title>
                </Card.Header>
                <Card.Body className="px-4">
                  <div>
                    <p className="d-flex justify-content-between"><span>Posts:</span><span>{user.posts}</span></p>
                  </div>
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
    </>
  );
}

export default Users;
