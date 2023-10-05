import { useEffect, useState } from "react";

type SortArgs = {
  divsToSort: JSX.Element[];
  setDivsToSort: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSorted: React.Dispatch<React.SetStateAction<boolean>>;
  sortSpeedRef: React.MutableRefObject<number>;
  isPaused: React.MutableRefObject<boolean>;
};

export const bubbleSort = async ({
  divsToSort,
  setDivsToSort,
  setIsSorting,
  setIsSorted,
  sortSpeedRef,
  isPaused,
}: SortArgs) => {
  setIsSorting(true);

  for (let i = 0; i < divsToSort.length - 1; i++) {
    for (let j = 0; j < divsToSort.length - i - 1; j++) {
      if (isPaused.current) {
        break;
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, 100 / (sortSpeedRef.current / 5))
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
      break;
    }
  }
  setIsSorting(false);
  if (isPaused.current) {
    setIsSorted(false);
  } else {
    setIsSorted(true);
  }
};

export const insertionSort = async ({
  divsToSort,
  setDivsToSort,
  setIsSorting,
  setIsSorted,
  sortSpeedRef,
  isPaused,
}: SortArgs) => {
  setIsSorting(true);

  for (let i = 0; i < divsToSort.length; i++) {
    let keyVal = divsToSort[i];
    let j = i - 1;

    while (j >= 0 && keyVal.props.height < divsToSort[j].props.height) {
      if (isPaused.current) {
        break;
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, 100 / (sortSpeedRef.current / 10))
      );
      divsToSort[j + 1] = divsToSort[j];
      j = j - 1;
      let newArr = divsToSort.slice();
      setDivsToSort(newArr);
    }
    if (isPaused.current) {
      isPaused.current = false;
      break;
    }
    divsToSort[j + 1] = keyVal;
    setDivsToSort(divsToSort.slice());
  }
  setIsSorting(false);
  if (isPaused.current) {
    setIsSorted(false);
  } else {
    setIsSorted(true);
  }
};
