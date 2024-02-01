import { IMapProps } from "../utils/models";
import "styles/Map.scss";

const Map: React.FC<IMapProps> = (props) => {
  const { map, onGoTo } = props;

  const _handleGoTo = (goTo: number) => () => onGoTo(goTo);

  return (
    <div className="map-container">
      <img 
        className="map-container__background-image" 
        alt="map"
        src={map.backgroundUrl}
        style={{
          marginLeft: "0%",
        }}
      />
      {map.hitZones.map((zone, index) => (
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
      ))}
    </div>
  );
};

export default Map;