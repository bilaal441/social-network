import classes from "./Action.module.css";

const Action = ({numberAction, actionName, toggleAction, active}) => {
   const activeClass = actionName === active ? classes.active : ""
  return (
    <li className={`${act} ${classes.action}`}>
      <span>{numberAction}</span>
      <button onClick={toggleAction.bind(actionName)}>{actionName}</button>
    </li>
  );
};

export default Action;
