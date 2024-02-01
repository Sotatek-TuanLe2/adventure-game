import { INavigatorProps } from "../utils/models";
import "../styles/Navigator.scss";
import { ENavigatorType } from "../utils/constants";

const Navigator: React.FC<INavigatorProps> = (props) => {
  const { type, onMouseDown, onMouseUp, onMouseLeave } = props;

  const className = `navigator navigator--${type === ENavigatorType.Left ? "left" : "right"}`;
  const content = type === ENavigatorType.Left ? "LEFT" : "RIGHT";

  return (
    <button
      className={className}
      onMouseDown={onMouseDown}
      // onPointerDown={onMouseDown}
      onMouseUp={onMouseUp}
      // onPointerUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      // onPointerLeave={onMouseLeave}
    >
      {content}
    </button>
  );
};

export default Navigator;