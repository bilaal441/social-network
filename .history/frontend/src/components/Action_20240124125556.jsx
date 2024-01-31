import {Button} from "react-bootstrap";

const Action = ({numberAction, actionName}) => {
  return (
    <li className="action">
      <span>{numberAction}</span>
      <Button variant="primary" style={{ backgroundColor: '#007bff' }}>
      Click me
    </Button>
    </li>
  );
};

export default Action;
