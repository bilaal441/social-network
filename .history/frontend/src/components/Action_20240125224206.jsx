import {Button} from "react-bootstrap";
import classes from "./Active.module.css";

const Action = ({numberAction, actionName, toggleAction, active}) => {
  return (
    <li className={`${classes.active} ${classes.action}`}>
      <span>{numberAction}</span>
      < buonClick={toggleAction.bind(actionName)}>{actionName}</>
    </li>
  );
};

export default Action;
