import Login from "../components/Login";
import Register from "../components/Register";
import {Container} from "react-bootstrap";
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
      <div>


        
      </div>
      {!user.isLogIn &&
        (showRegisterForm ? (
          <Register setShowRegisterForm={setShowRegisterForm} />
        ) : (
          <Login setShowRegisterForm={setShowRegisterForm} />
        ))}

      {user.isLogIn && (
        <>
          <PostInput src={user.profileImg} />
          {/* <AddPost /> */}
          {/* <Link to={"/groups/1"} className="btn btn-primary mt-3">
            groups
          </Link> */}
          <div>
            <Dashboard />
          </div>
        </>
      )}
    </Container>
  );
}

export default Home;
