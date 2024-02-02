import { ENavigatorType } from "./constants";

export interface IHitZone {
  x: string;
  y: string;
  goTo: number;
}

export interface IMap {
  id: number;
  backgroundUrl: string;
  hitZones: IHitZone[];
}

export interface INavigatorProps {
  type: typeof ENavigatorType[keyof typeof ENavigatorType];
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
}

export interface IMapProps {
  map: IMap | null;
  onGoTo: (goTo: number) => void;
  resetImagePosition: () => void;
}