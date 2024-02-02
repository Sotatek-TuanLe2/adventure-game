import { IMapProps } from "../utils/models";
import "styles/Map.scss";

const Map: React.FC<IMapProps> = (props) => {
  const { map, mapReady, onGoTo, onChangeMapReady } = props;

  if (!map) {
    return (
      <div className="map-container"></div>
    );
  }

  const _handleGoTo = (goTo: number) => () => onGoTo(goTo);

  const _generateGoToButtonClass = (xAxis: string) => {
    const xAxisNumber = +xAxis.slice(0, xAxis.length - 1);
    return `map-container__path-button ${xAxisNumber > 50 ? "map-container__path-button--right" : ""}`;
  }

  const _renderGoToButtons = () => {
    if (!mapReady) {
      return null;
    }

    return map.hitZones.map((zone, index) => (
      <button
        key={`${map.id}-${index}`}
        className={_generateGoToButtonClass(zone.x)}
        style={{
          top: zone.y,
          left: zone.x,
        }}
        onClick={_handleGoTo(zone.goTo)}
      >
        <img src="./assets/icons/WalkIcon.png" alt="Walk icon" />
      </button>
    ))
  };

  return (
    <div className="map-container">
      <img 
        className="map-container__background-image" 
        alt="map"
        src={map.backgroundUrl}
        style={{
          marginLeft: "0%",
        }}
        onLoad={onChangeMapReady}
      />
      {_renderGoToButtons()}
    </div>
  );
};

export default Map;