import useMainGame from "../hooks/useMainGame";
import "../styles/MainGame.scss";
import { ENavigatorType } from "../utils/constants";
import Map from "./Map";
import Navigator from "./Navigator";

const MainGame: React.FC = () => {
  const { 
    map,
    onNavigateToLeft,
    onNavigateToRight,
    onStop,
    onGoTo,
    resetImagePosition,
  } = useMainGame();

  return (
    <div className="main-game">
      <Navigator
        type={ENavigatorType.Left}
        onMouseDown={onNavigateToLeft}
        onMouseUp={onStop}
        onMouseLeave={onStop}
      />
      <Map
        map={map}
        onGoTo={onGoTo}
        resetImagePosition={resetImagePosition}
      />
      <Navigator
        type={ENavigatorType.Right}
        onMouseDown={onNavigateToRight}
        onMouseUp={onStop}
        onMouseLeave={onStop}
      />
    </div>
  );
};

export default MainGame;