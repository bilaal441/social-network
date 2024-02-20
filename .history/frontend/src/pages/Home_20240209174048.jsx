import Login from "../components/Login";
import Register from "../components/Register";
import {Container} from "react-bootstrap";
import {useContext, useState} from "react";
import AuthContext from "../store/authContext";
import AddPost from "../components/AddPost";
import { Link } from "react-router-dom";

function Home() {
  const {user} = useContext(AuthContext);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  return (
    <Container>
      {!user.isLogIn &&
        (showRegisterForm ? (
          <Register setShowRegisterForm={setShowRegisterForm} />
        ) : (
          <Login setShowRegisterForm={setShowRegisterForm} />
        ))}

      {user.isLogIn && (
        <>
          <AddPost />
          <Link></Link>
        </>
      )}
    </Container>
  );
}

export default Home;
