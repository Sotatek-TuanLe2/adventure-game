import { IMapProps } from "../utils/models";
import "styles/Map.scss";
import useMap from "hooks/useMap";

const Map: React.FC<IMapProps> = (props) => {
  const { map, onGoTo } = props;
  const { mapReady, onChangeMapReady } = useMap(map);

  const _handleGoTo = (goTo: number) => () => onGoTo(goTo);

  if (!map) {
    return (
      <div className="map-container"></div>
    );
  }

  const _renderGoToButtons = () => {
    if (!mapReady) {
      return null;
    }

    return map.hitZones.map((zone, index) => (
      <button
        key={`${map.id}-${index}`}
        className="map-container__path-button"
        style={{
          top: zone.y,
          left: zone.x,
        }}
        onClick={_handleGoTo(zone.goTo)}
      >
        Go
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