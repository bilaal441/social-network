import {Button} from "react-bootstrap";
import classes from "./Active.module.css";

const Action = ({numberAction, actionName, toggleAction, active}) => {
  return (
    <li className={`${classes.active} ${classes.action}`}>
      <span>{numberAction}</span>
      <button></button>
      <button onClick={toggleAction.bind(actionName)}>{actionName}<button/>
    </li>
  );
};

export default Action;
