import {Button} from "react-bootstrap";
import classes from "./Active.modu"

const Action = ({numberAction, actionName, toggleAction, active}) => {
  return (
    <li className="action">
      <span>{numberAction}</span>
      <Button variant="primary" onClick={ toggleAction.bind(actionName)}>
        {actionName}
      </Button>
    </li>
  );
};

export default Action;
