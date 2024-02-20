import classes from "./Action.module.css";

const Action = ({numberAction, actionName, toggleAction, active}) => {
  const activeClass = actionName === active ? classes.active : "";
  // i could use the classnames library to make this more readable
  return (
    <li className={`${classes.action} ${activeClass} `}>
      <span>{numberAction}</span>
      <button onClick={toggleAction.bind(null, actionName)}>
        {actionName}
      </button>
    </li>
  );
};

export default Action;
