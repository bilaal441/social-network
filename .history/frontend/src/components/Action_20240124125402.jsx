import {Button} from "react-bootstrap";

const Action = ({numberAction, actionName}) => {
  return (
    <div className="action">
      <span>{numberAction}</span>
    </div>
  );
};

export default Action;
