import styles from "./Nav.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

type NavProps = {
  setSortType: React.Dispatch<React.SetStateAction<number>>;
};

export const Nav = ({ setSortType }: NavProps) => {
  const handleBtnClick = (sortTitle: string, index: string) => {
    setSortType(parseInt(index));
  };
  return (
    <div className={styles.nav}>
      <div className={styles.navTitle}>What The Sort!</div>
      <div className={styles.dropDown}>
        <div className={styles.sortType}>
          Sort Type <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <ul>
          <li
            value={0}
            onClick={(e) =>
              handleBtnClick(
                "Bubble Sort",
                (e.target as HTMLInputElement).value
              )
            }
          >
            Bubble Sort
          </li>
          <li
            value={1}
            onClick={(e) =>
              handleBtnClick("Quick Sort", (e.target as HTMLInputElement).value)
            }
          >
            Quick Sort
          </li>
          <li
            value={2}
            onClick={(e) =>
              handleBtnClick(
                "Insertion Sort",
                (e.target as HTMLInputElement).value
              )
            }
          >
            Insertion Sort
          </li>
        </ul>
      </div>
    </div>
  );
};
