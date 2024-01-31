import classes from "./Action.module.css";

const Action = ({numberAction, actionName, toggleAction, active}) => {
   
  return (
    <li className={`${classes.active} ${classes.action}`}>
      <span>{numberAction}</span>
      <button onClick={toggleAction.bind(actionName)}>{actionName}</button>
    </li>
  );
};

export default Action;
