import { useEffect, useRef, useState } from "react";
import maps from "../mockData/maps.json";
import { IMap } from "../utils/models";
import { ENavigatorType } from "../utils/constants";
import { toast } from "react-toastify";

type HookReturnType = {
  map: IMap | null;
  onNavigateToLeft: () => void;
  onNavigateToRight: () => void;
  onStop: () => void;
  onGoTo: (goTo: number) => void;
  resetImagePosition: () => void;
}

const INTERVAL_ON_HOLD = 50;
const OFFSET_PERCENTAGE = 1;
const MAX_LEVEL = 8;

const useMainGame = ():HookReturnType => {
  const [map, setMap] = useState<IMap | null>(null);

  const interval = useRef<ReturnType<typeof setInterval>>();
  const marginLeft = useRef<number>(0);

  const _onChangeMap = (goTo: number) => {
    const newMap = maps.find(item => item.id === goTo);
    if (!newMap) {
      return;
    }
    setMap(newMap);
  };

  useEffect(() => {
    const FIRST_LEVEL = 0;
    _onChangeMap(FIRST_LEVEL);
  }, []);

  const _congratulations = (level: number) => {
    if (level !== MAX_LEVEL) {
      return;
    }

    toast.success("You've reached to the top! Congratulations!");
  };
  
  useEffect(() => {
    if (!map) {
      return;
    }

    _congratulations(map.id)
  }, [map]);

  const onHold = (fn: () => void) => {
    interval.current = setInterval(fn, INTERVAL_ON_HOLD);
  };

  const onStop = () => {
    clearInterval(interval.current);
  };

  const _updateLeftButtonPositions = () => {
    const btns = document.getElementsByClassName("map-container__path-button")  as HTMLCollectionOf<HTMLElement>;
    for(let i = 0; i < btns.length; i++) {
      const currentLeft = btns[i].style.left.toString().slice(0, btns[i].style.left.length - 1);
      btns[i].style.left = `${+currentLeft + OFFSET_PERCENTAGE}%`;
    }
  };

  const _updateRightButtonPositions = () => {
    const btns = document.getElementsByClassName("map-container__path-button") as HTMLCollectionOf<HTMLElement>;
    for(let i = 0; i < btns.length; i++) {
      const currentLeft = btns[i].style.left.toString().slice(0, btns[i].style.left.length - 1);
      btns[i].style.left = `${+currentLeft - OFFSET_PERCENTAGE}%`;
    }
  };

  const _updateImagePosition = (direction: typeof ENavigatorType[keyof typeof ENavigatorType]) => {
    const img = document.getElementsByClassName("map-container__background-image") as HTMLCollectionOf<HTMLElement>;
    const halfOfWidth = (img[0].offsetWidth - window.innerWidth)/2;
    const imgMarginLeft = window.getComputedStyle(img[0]).marginLeft;
    const imgMarginLeftNumber = +imgMarginLeft.slice(0, imgMarginLeft.length - 2); // remove 'px'
    const isLeft = direction === ENavigatorType.Left;

    if ((isLeft && +imgMarginLeftNumber >= halfOfWidth)
      || (!isLeft && +imgMarginLeftNumber <= -halfOfWidth)) {
      return;
    }

    marginLeft.current = isLeft 
      ? marginLeft.current + OFFSET_PERCENTAGE
      : marginLeft.current - OFFSET_PERCENTAGE;
    img[0].style.marginLeft = `${marginLeft.current}%`;
    isLeft ? _updateLeftButtonPositions() : _updateRightButtonPositions();
  }

  const _onLeft = () => _updateImagePosition(ENavigatorType.Left);

  const _onRight = () => _updateImagePosition(ENavigatorType.Right);

  const onNavigateToLeft = () => onHold(_onLeft);

  const onNavigateToRight = () => onHold(_onRight);

  const onGoTo = (goTo: number) => {
    if (goTo === map?.id) {
      toast.warning("This route is blocked!");
      return;
    }

    _onChangeMap(goTo);
  };

  const resetImagePosition = () => {
    const img = document.getElementsByClassName("map-container__background-image") as HTMLCollectionOf<HTMLElement>;
    marginLeft.current = 0;
    img[0].style.marginLeft = `${marginLeft.current}%`;
  };

  return {
    map,
    onNavigateToLeft,
    onNavigateToRight,
    onStop,
    onGoTo,
    resetImagePosition,
  };
};

export default useMainGame;