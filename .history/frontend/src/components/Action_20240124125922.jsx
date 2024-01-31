import {Button} from "react-bootstrap";

const Action = ({numberAction, actionName}) => {
  return (
    <li className="action">
      <span>{numberAction}</span>
      <Button variant="primary" onC>{actionName}</Button>
    </li>
  );
};

export default Action;
