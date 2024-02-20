import Login from "../components/Login";
import Register from "../components/Register";
import {Container, Row, Col} from "react-bootstrap";
import {useContext, useState} from "react";
import AuthContext from "../store/authContext";
import AddPost from "../components/AddPost";
import {Link} from "react-router-dom";
import PostInput from "../components/PostInput";
import Dashboard from "../components/Dashboard";

function Home() {
  const {user} = useContext(AuthContext);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fcfcfc",
        }}
      >
        {!user.isLogIn &&
          (showRegisterForm ? (
            <Register setShowRegisterForm={setShowRegisterForm} />
          ) : (
            <Login setShowRegisterForm={setShowRegisterForm} />
          ))}

        {user.isLogIn && (
          <>
            <Row className="justify-content-center">
              <Col xs={100} md={70000}>
                {/* Adjust md={8} to control the width of the PostInput component */}
               
              </Col>
            </Row>
            {/* <AddPost /> */}
            {/* <Link to={"/groups/1"} className="btn btn-primary mt-3">
            groups
          </Link> */}

            <Dashboard />
          </>
        )}
      </div>
    </Container>
  );
}

export default Home;
