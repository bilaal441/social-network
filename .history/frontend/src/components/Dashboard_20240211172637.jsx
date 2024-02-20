import React, {useState} from "react";
import {Container, Row, Col, Nav} from "react-bootstrap";
import Posts from "./Posts";
import {dummyPosts} from "../store/dummydata";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("posts");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <Nav
            variant="pills"
            defaultActiveKey="posts"
            className="d-flex justify-content-between"
          >
            <Nav.Item>
              <Nav.Link
                eventKey="posts"
                onClick={() => handleSectionClick("posts")}
              >
                Posts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="chats"
                onClick={() => handleSectionClick("chats")}
              >
                Chats
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="groups"
                onClick={() => handleSectionClick("groups")}
              >
                Groups
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col style={{textAlign: "center"}}>
          {activeSection === "posts" && <Posts posts={dummyPosts} />}
          {/* {activeSection === "chats" && <Chats />} */}
          {/* {activeSection === "groups" && <Groups />} */}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
