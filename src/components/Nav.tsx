import styles from "./Nav.module.scss";
import { SetStateAction, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

type NavProps = {
  setSortType: React.Dispatch<React.SetStateAction<number>>;
  isSorting: boolean;
};

export const Nav = ({ setSortType, isSorting }: NavProps) => {
  const [dropdownShown, setDropdownShown] = useState(false);

  window.addEventListener("scroll", () => {
    setDropdownShown(false);
  });

  return (
    <div className={styles.nav}>
      {/* <div className={styles.navTitle}>What The Sort!</div> */}
      <div
        className={`${styles.dropDown} ${isSorting ? styles.dropInactive : ""}`}
      >
        <button
          onClick={() => {
            setDropdownShown(!dropdownShown);
          }}
          className={`${styles.sortType}`}
        >
          {isSorting ? (
            "Sorting ..."
          ) : (
            <div>
              Sort Type <FontAwesomeIcon icon={faCaretDown} />
            </div>
          )}
        </button>
        <div
          className={`${styles.dropdownMenu} ${
            !dropdownShown ? styles.dropInactive : ""
          }`}
        >
          <DropChoice
            title={"Bubble Sort"}
            value={0}
            setSortType={setSortType}
            setDropdownShown={setDropdownShown}
          />
          <DropChoice
            title={"Insertion Sort"}
            value={1}
            setSortType={setSortType}
            setDropdownShown={setDropdownShown}
          />
        </div>
      </div>
    </div>
  );
};

type DropChoiceType = {
  title: string;
  value: number;
  setSortType: React.Dispatch<SetStateAction<number>>;
  setDropdownShown: React.Dispatch<SetStateAction<boolean>>;
};

const DropChoice = ({
  title,
  value,
  setSortType,
  setDropdownShown,
}: DropChoiceType) => {
  const handleBtnClick = (index: string) => {
    setSortType(parseInt(index));
    setDropdownShown(false);
  };

  return (
    <button
      className={styles.dropChoice}
      value={value}
      onClick={(e) => handleBtnClick((e.target as HTMLInputElement).value)}
    >
      {title}
    </button>
  );
};
