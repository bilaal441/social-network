import React, {useState, useContext} from "react";
import MyModal from "./Modal";
import {Form, Button} from "react-bootstrap";
import AuthContext from "../store/authContext";
import {getJson} from "../helpers/helpers";

const AddPost = () => {
  const {catogaries, OnAddPost} = useContext(AuthContext);
  const [chosenCats, setChosenCats] = useState([]);
  const [errorAddPost, setErrorAddpost] = useState({
    message: "",
    isError: false,
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const catogariesOnchange = (id, e) => {
    if (e.target.checked) {
      setChosenCats([...chosenCats, id]);
    } else {
      setChosenCats(chosenCats.filter((el) => el !== id));
    }
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const data = {
      title: titleValue,
      body: enterePost,
      categories: chosenCats,
    };
    try {
      const res = await getJson("add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          user_token: document.cookie,
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      if (res.success) {
        resetTitleInput();
        resetPostInput();
        OnAddPost(res.post);
        handleClose();
        setErrorAddpost({message: "", isError: false});
      }
    } catch (error) {
      setErrorAddpost({message: error.message, isError: true});
    }
  };

  return (
    <MyModal handleClose={handleClose} handleShow={handleShow} show={show}>
      <Form onSubmit={handleSubmit} className="py-3">
        <Form.Group controlId="formBasicTitle">
          <Form.Label className="mt-2">title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            value={titleValue}
            onBlur={titleBlurHandler}
            onChange={titleChangeHandler}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label className="mt-2">Text</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="please add post"
            value={enterePost}
            onChange={postChangeHandler}
          />
        </Form.Group>

        <div className="mt-4">
          {catogaries.length > 0 &&
            catogaries?.map((el) => (
              <Form.Check
                type={"checkbox"}
                key={el.id}
                value={el.name}
                onChange={catogariesOnchange.bind(null, el.name)}
                label={el.name}
              />
            ))}
        </div>
        <Button variant="primary my-3 " type="submit" disabled={!formIsValid}>
          Submit
        </Button>
      </Form>
    </MyModal>
  );
};

export default AddPost;
