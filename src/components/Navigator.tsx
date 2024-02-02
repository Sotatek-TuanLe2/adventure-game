import { INavigatorProps } from "../utils/models";
import "../styles/Navigator.scss";
import { ENavigatorType } from "../utils/constants";

const Navigator: React.FC<INavigatorProps> = (props) => {
  const { type, onMouseDown, onMouseUp, onMouseLeave } = props;

  const isLeft = type === ENavigatorType.Left;
  const className = `navigator navigator--${isLeft ? "left" : "right"}`;

  return (
    <button
      className={className}
      onPointerDown={onMouseDown}
      onPointerUp={onMouseUp}
      onPointerLeave={onMouseLeave}
    >
      <img src="./assets/icons/EyesIcon.png" alt="Eye icon" />
    </button>
  );
};

export default Navigator;