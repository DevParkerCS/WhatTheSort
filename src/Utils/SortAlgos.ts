import { useEffect, useState } from "react";

export const bubbleSort = async (
  divsToSort: JSX.Element[],
  setDivsToSort: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSorted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsSorting(true);

  for (let i = 0; i < divsToSort.length - 1; i++) {
    for (let j = 0; j < divsToSort.length - i - 1; j++) {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, 1)
      );
      if (divsToSort[j].props.height > divsToSort[j + 1].props.height) {
        let temp = divsToSort[j];
        divsToSort[j] = divsToSort[j + 1];
        divsToSort[j + 1] = temp;
        let newArr = divsToSort.slice();
        setDivsToSort(newArr);
      }
    }
  }
  setIsSorting(false);
  setIsSorted(true);
};

export const insertionSort = async (
  divsToSort: JSX.Element[],
  setDivsToSort: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSorted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsSorting(true);

  for (let i = 0; i < divsToSort.length; i++) {
    let keyVal = divsToSort[i];
    let j = i - 1;

    while (j >= 0 && keyVal.props.height < divsToSort[j].props.height) {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, 1)
      );
      divsToSort[j + 1] = divsToSort[j];
      j = j - 1;
      let newArr = divsToSort.slice();
      setDivsToSort(newArr);
    }
    divsToSort[j + 1] = keyVal;
    setDivsToSort(divsToSort.slice());
  }
  setIsSorting(false);
  setIsSorted(true);
};
