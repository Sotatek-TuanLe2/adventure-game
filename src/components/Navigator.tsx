import { INavigatorProps } from "../utils/models";
import "../styles/Navigator.scss";
import { ENavigatorType } from "../utils/constants";

const Navigator: React.FC<INavigatorProps> = (props) => {
  const { type, onMouseDown, onMouseUp, onMouseLeave } = props;

  const isLeft = type === ENavigatorType.Left;
  const className = `navigator navigator--${isLeft ? "left" : "right"}`;
  const content = isLeft ? "LEFT" : "RIGHT";

  return (
    <button
      className={className}
      onPointerDown={onMouseDown}
      onPointerUp={onMouseUp}
      onPointerLeave={onMouseLeave}
    >
      {content}
    </button>
  );
};

export default Navigator;