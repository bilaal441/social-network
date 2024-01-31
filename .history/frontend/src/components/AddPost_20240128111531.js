import React, {useState, useContext} from "react";
import MyModal from "./Modal";
import {Form, Button} from "react-bootstrap";
import useInput from "../hooks/use-input";
import classes from "./AddPost.module.css";
import AuthContext from "../store/authContext";
import {getJson} from "../helpers/helpers";

const AddPost = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Filter options based on the search term
    const filteredSuggestions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const {OnAddPost} = useContext(AuthContext);
  const [errorAddPost, setErrorAddpost] = useState({
    message: "",
    isError: false,
  });

  const [privacy, setPrivacy] = useState("public");

  const handlePrivacyChange = (event) => {
    setPrivacy(event.target.value);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const {
    isValid: titleIsValid,
    value: titleValue,
    hassError: titleInputHassError,
    valueChangeHandler: titleChangeHandler,
    valueInputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput((value) => value.trim() !== "");

  const {
    isValid: enterePostIsValid,
    value: enterePost,
    hassError: postInputHassError,
    valueChangeHandler: postChangeHandler,
    valueInputBlurHandler: postBlurHandler,
    reset: resetPostInput,
  } = useInput((value) => value.trim() !== "");

  const formIsValid = titleIsValid && enterePostIsValid ? true : false;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const data = {
      title: titleValue,
      body: enterePost,
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

  const titleInputClasses = titleInputHassError ? `${classes.invalid} ` : "";
  const pastInputClasses = postInputHassError ? `${classes.invalid} ` : "";

  return (
    <MyModal handleClose={handleClose} handleShow={handleShow} show={show}>
      <Form onSubmit={handleSubmit} className="py-3">
        <Form.Group controlId="formBasicTitle" className={titleInputClasses}>
          <Form.Label className="mt-2">title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            value={titleValue}
            onBlur={titleBlurHandler}
            onChange={titleChangeHandler}
          />

          {titleInputClasses && (
            <p className={classes["error-text"]}>
              input title must not be emty.
            </p>
          )}
        </Form.Group>

        <Form.Group controlId="formBasicText" className={pastInputClasses}>
          <Form.Label className="mt-2">Text</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="please add post"
            value={enterePost}
            onChange={postChangeHandler}
            onBlur={postBlurHandler}
          />

          {pastInputClasses && (
            <p className={classes["error-text"]}>
              input text must not be emty.
            </p>
          )}
        </Form.Group>

        <Form.Group controlId="privacy">
          <Form.Label>Choose Privacy:</Form.Label>
          <Form.Select value={privacy} onChange={handlePrivacyChange}>
            <option selected value="public">
              Public
            </option>
            <option value="private">Private</option>
            <option value="Allmost Private">Almost private</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label className="mt-2">Search follower</Form.Label>
          <Form.Control
            as="textarea"
            type="input"
            placeholder="please search follower to add"
            value={searchTerm}
            onChange={handleSearch}
            
          />

          {pastInputClasses && (
            <p className={classes["error-text"]}>
              input text must not be emty.
            </p>
          )}
        </Form.Group>

        <Button variant="primary my-3 " type="submit" disabled={!formIsValid}>
          Submit
        </Button>
      </Form>

      {errorAddPost.isError && (
        <p className={classes["error-text"]}>{errorAddPost.message}.</p>
      )}
    </MyModal>
  );
};

export default AddPost;
