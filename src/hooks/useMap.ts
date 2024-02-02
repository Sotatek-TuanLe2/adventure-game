import { useEffect, useState } from "react";
import { IMap } from "utils/models";

type HookArgumentType = {
  map: IMap | null;
}

type HookReturnType = {
  mapReady: boolean;
  onChangeMapReady: () => void;
}

const useMap = ({...args}: HookArgumentType):HookReturnType => {
  const { map } = args;
  const [mapReady, setMapReady] = useState<boolean>(false);

  useEffect(() => {
    if (!map) {
      return;
    }
    setMapReady(false);
  }, [map?.id]);

  const onChangeMapReady = () => setMapReady(true);

  return {
    mapReady,
    onChangeMapReady,
  };
};

export default useMap;