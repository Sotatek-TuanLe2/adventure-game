import { useEffect, useState } from "react";
import { IMap } from "utils/models";

type HookReturnType = {
  mapReady: boolean;
  onChangeMapReady: () => void;
}

const useMap = (map: IMap | null):HookReturnType => {
  const [mapReady, setMapReady] = useState<boolean>(false);

  useEffect(() => {
    console.log("map.id", map?.id);
    console.log("map", map)
    if (!map) {
      return;
    }
    setMapReady(false);
  }, [map]);

  const onChangeMapReady = () => setMapReady(true);

  return {
    mapReady,
    onChangeMapReady,
  };
};

export default useMap;