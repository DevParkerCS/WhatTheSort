import styles from "../App.module.scss";
import { BarDiv } from "../App";

type SortArgs = {
  divsToSort: JSX.Element[];
  setDivsToSort: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>;
  sortSpeedRef: React.MutableRefObject<number>;
  isPaused: React.MutableRefObject<boolean>;
  setEndIndex: React.Dispatch<React.SetStateAction<number>>;
  endIndex: number;
};

export const bubbleSort = async ({
  divsToSort,
  setDivsToSort,
  setIsSorting,
  sortSpeedRef,
  isPaused,
  setEndIndex,
  endIndex,
}: SortArgs) => {
  setIsSorting(true);

  for (let i = 0; i <= endIndex; i++) {
    for (let j = 0; j < endIndex - i; j++) {
      if (isPaused.current) {
        break;
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, 100 / (sortSpeedRef.current / 10))
      );
      if (divsToSort[j].props.height > divsToSort[j + 1].props.height) {
        let temp = divsToSort[j];
        divsToSort[j] = divsToSort[j + 1];
        divsToSort[j + 1] = temp;
        let newArr = divsToSort.slice();
        setDivsToSort(newArr);
      }
    }
    if (isPaused.current) {
      setEndIndex(endIndex - i);
      break;
    }
    if (i === divsToSort.length - 1) {
      isPaused.current = true;
    }
  }
  setIsSorting(false);
};

export const insertionSort = async ({
  divsToSort,
  setDivsToSort,
  setIsSorting,
  sortSpeedRef,
  isPaused,
  setEndIndex,
  endIndex,
}: SortArgs) => {
  setIsSorting(true);

  for (let i = 0; i <= endIndex; i++) {
    let keyVal = divsToSort[i];
    let j = i - 1;

    while (j >= 0 && keyVal.props.height < divsToSort[j].props.height) {
      divsToSort[j + 2] = (
        <BarDiv isSorting={false} height={divsToSort[j + 2].props.height} />
      );
      if (isPaused.current) {
        break;
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, 100 / (sortSpeedRef.current / 10))
      );
      divsToSort[j + 1] = (
        <BarDiv isSorting={true} height={divsToSort[j].props.height} />
      );
      j--;
      let newArr = divsToSort.slice();
      setDivsToSort(newArr);
    }
    divsToSort[j + 2] = (
      <BarDiv isSorting={false} height={divsToSort[j + 2].props.height} />
    );
    if (isPaused.current) {
      break;
    }
    if (i === divsToSort.length - 1) {
      isPaused.current = true;
    }
    divsToSort[j + 1] = keyVal;
    setDivsToSort(divsToSort.slice());
  }
  setIsSorting(false);
};
