import {Button} from "react-bootstrap";
import classes from "./Active.module.css";

const Action = ({numberAction, actionName, toggleAction, active}) => {
  return (
    <li className={`${classes.active} ${classes.action}`}>
      <span>{numberAction}</span>
      <Button onClick={toggleAction.bind(actionName)}>{actionName}</Button>
    </li>
  );
};

export default Action;
