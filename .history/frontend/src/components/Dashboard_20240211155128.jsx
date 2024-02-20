import React, {useState} from "react";
import {Container, Row, Col, Nav} from "react-bootstrap";
// import Chats from "./Chats";
import Posts from "./Posts";
// import Groups from "./Groups";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("posts");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <Nav variant="pills" defaultActiveKey="posts" className="fl">
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
        <Col>
          {activeSection === "posts" && <Posts />}
          {/* {activeSection === "chats" && <Chats />} */}
          {/* {activeSection === "groups" && <Groups />} */}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
