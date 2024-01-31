import {Button} from "react-bootstrap";

const Action = ({numberAction, actionName, toggleAction, ac}) => {
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
