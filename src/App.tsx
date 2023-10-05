import styles from "./App.module.scss";
import { SetStateAction, useEffect, useState, useRef } from "react";
import { bubbleSort, insertionSort } from "./Utils/SortAlgos";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [divsToSort, setDivsToSort] = useState<JSX.Element[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [sortType, setSortType] = useState<number>(0);
  const [isSorted, setIsSorted] = useState(false);
  const sortSpeedRef = useRef(100);
  const isPaused = useRef(true);

  const sortInfo = [
    {
      name: "Bubble Sort",
      description:
        "Bubble Sort is a straightforward sorting algorithm that arranges a list of elements in ascending or descending order. It operates by repeatedly comparing adjacent elements in the list and swapping them if they are in the wrong order. The process continues until no more swaps are needed, indicating that the list is now sorted. This algorithm gets its name from the way smaller elements 'bubble' to the top of the list during each pass. While not the most efficient sorting method for large datasets, Bubble Sort provides a foundational understanding of sorting concepts and is often used in educational settings to introduce the principles of sorting algorithms.",
      whyLearn:
        "Bubble Sort's simplicity makes it an excellent starting point for anyone new to sorting algorithms. It serves as a fundamental building block for grasping more complex sorting methods. By visualizing the sorting process and understanding the mechanics of element comparison and swapping, learners can develop a solid foundation in sorting logic. While Bubble Sort may not be the go-to choice for sorting large datasets due to its inefficiency with larger lists, the knowledge gained from studying it can be a stepping stone to exploring more advanced and efficient sorting techniques, making it an essential algorithm in the journey of algorithmic understanding.",
      realExample:
        "In the real world, Bubble Sort can be likened to the process of sorting physical objects, such as arranging a deck of playing cards. Imagine you have a deck of shuffled cards, and you want to organize them in ascending order by rank. You start from the top of the deck and compare adjacent pairs of cards. If the cards are out of order, you swap them, much like Bubble Sort compares and swaps elements in a list. You continue this process, repeatedly moving through the deck until no more swaps are needed. Eventually, all the cards are sorted from the lowest to the highest rank. While Bubble Sort may not be the fastest method for this task, it illustrates the basic principles of comparison and swapping, making it a relatable analogy for understanding sorting algorithms in everyday scenarios.",
    },
    {
      name: "Quick Sort",
      description:
        "Insertion Sort is a simple and intuitive sorting algorithm that arranges a list of elements, such as numbers or data records, into either ascending or descending order. The algorithm works by dividing the list into two parts: the left part, which starts as a single element and gradually grows into a sorted section, and the right part, which contains the unsorted elements. Insertion Sort iteratively takes one element from the unsorted section and inserts it into its correct position within the sorted section, shifting other elements as necessary. This process continues until all elements are sorted. While not as efficient as more complex sorting algorithms for large datasets, Insertion Sort is easy to understand and implement, making it a suitable choice for small lists or as a stepping stone for learning more advanced sorting techniques.",
      whyLearn:
        "Learning Quick Sort is essential for anyone interested in computer science, data science, or software development. There are several compelling reasons to explore this algorithm. Firstly, Quick Sort is one of the most efficient sorting algorithms available, making it crucial for optimizing the performance of applications dealing with large datasets. Understanding Quick Sort equips individuals with valuable problem-solving skills and enhances their ability to design efficient algorithms for a wide range of real-world applications, from search engines to database management. Additionally, Quick Sort introduces the concept of divide-and-conquer, a fundamental strategy used in various computer science algorithms, making it a foundational knowledge piece for aspiring programmers and computer scientists. Moreover, it is frequently used in technical interviews, so mastering Quick Sort can significantly enhance one's job prospects in the tech industry. Overall, learning Quick Sort is an investment in both problem-solving skills and career opportunities in the field of computer science and software engineering.",
      realExample:
        "In the real world, Quick Sort can be compared to how a mail distribution center efficiently sorts packages based on their destinations. Imagine a bustling distribution center with packages arriving from various locations. To streamline the process, the center selects a particular package as the \"pivot,\" typically one bound for a central hub. The center then quickly routes all other packages: those with destinations before the pivot's location are sent in one direction, and those with destinations after the pivot's location are sent in another. This clever partitioning minimizes the number of times each package needs to be handled and sorted. The center repeats this process recursively for each set of packages, effectively distributing them to their respective destinations in a highly efficient manner. This real-world analogy illustrates how Quick Sort's divide-and-conquer strategy optimizes the sorting process, making it invaluable in logistics and supply chain management, where efficient sorting is essential for timely deliveries.",
    },
    {
      name: "Insertion Sort",
      description:
        "Insertion Sort is a simple and intuitive sorting algorithm that arranges a list of elements, such as numbers or data records, into either ascending or descending order. The algorithm works by dividing the list into two parts: the left part, which starts as a single element and gradually grows into a sorted section, and the right part, which contains the unsorted elements. Insertion Sort iteratively takes one element from the unsorted section and inserts it into its correct position within the sorted section, shifting other elements as necessary. This process continues until all elements are sorted. While not as efficient as more complex sorting algorithms for large datasets, Insertion Sort is easy to understand and implement, making it a suitable choice for small lists or as a stepping stone for learning more advanced sorting techniques.",
      whyLearn:
        "Learning Insertion Sort is valuable for individuals venturing into computer science, programming, or algorithmic thinking. There are several compelling reasons to explore this algorithm. Firstly, Insertion Sort provides a solid foundation for understanding fundamental sorting principles, making it an ideal starting point for beginners. Its simplicity allows learners to grasp key concepts like element comparison and shifting with ease. Additionally, Insertion Sort is often used as a stepping stone to more complex sorting algorithms, helping individuals build a strong problem-solving skill set. This algorithm's practicality extends to real-world applications, such as sorting short lists or optimizing specific scenarios where simplicity and ease of implementation are priorities. In essence, learning Insertion Sort not only cultivates essential sorting knowledge but also lays the groundwork for tackling more advanced algorithms in the world of computer science and programming.",
      realExample:
        "In the real world, Insertion Sort can be likened to how people sort physical items in a small drawer or container. Imagine you have a drawer filled with a mix of various items like coins, keys, and paperclips. To organize them efficiently, you start with a single item (the \"pivot\") and insert it into the drawer in the correct position, shifting other items as needed. You continue this process, taking one item at a time from the unsorted section and placing it in its proper place within the drawer's sorted section. Over time, the drawer becomes neatly organized with all items in their rightful positions. This practical analogy illustrates how Insertion Sort's straightforward approach is effective for managing smaller collections of items, much like sorting algorithms work with data.",
    },
  ];

  const generateRandomBars = () => {
    setDivsToSort([]);
    setIsSorted(false);
    for (let i = 0; i < 100; i++) {
      let randHeight = Math.floor(Math.random() * 100);
      setDivsToSort((prevState) => {
        return [...prevState, <BarDiv height={randHeight} />];
      });
    }
  };

  const decideSortType = () => {
    const sortArgs = {
      divsToSort: divsToSort,
      setDivsToSort: setDivsToSort,
      setIsSorting: setIsSorting,
      setIsSorted: setIsSorted,
      sortSpeedRef: sortSpeedRef,
      isPaused: isPaused,
    };

    isPaused.current = false;

    switch (sortType) {
      case 0:
        bubbleSort(sortArgs);
        break;
      case 1:
        console.log("quicksort");
        break;
      case 2:
        insertionSort(sortArgs);
        break;
      default:
        bubbleSort(sortArgs);
        break;
    }
  };

  useEffect(() => {
    generateRandomBars();
  }, [sortType]);

  return (
    <div>
      <Nav setSortType={setSortType} isSorting={isSorting} />
      <div className={styles.contentWrapper}>
        <div className={styles.barsWrapper}>
          {divsToSort.map((m) => {
            return m;
          })}
        </div>
        <UserActionItems
          isSorting={isSorting}
          isSorted={isSorted}
          generateRandomBars={generateRandomBars}
          sortSpeedRef={sortSpeedRef}
          decideSortType={decideSortType}
          isPaused={isPaused}
        />
        <SortInformation
          sortObj={sortType ? sortInfo[sortType] : sortInfo[0]}
        />
      </div>
      <Footer />
    </div>
  );
}

type BarDivProps = {
  height: number;
};

const BarDiv = ({ height }: BarDivProps) => {
  return (
    <div className={`${styles.barDiv}`} style={{ height: `${height}%` }}></div>
  );
};

type UserActionItemsType = {
  isSorting: boolean;
  isSorted: boolean;
  decideSortType: () => void;
  sortSpeedRef: React.MutableRefObject<number>;
  generateRandomBars: () => void;
  isPaused: React.MutableRefObject<boolean>;
};

const UserActionItems = ({
  isSorting,
  isSorted,
  decideSortType,
  sortSpeedRef,
  generateRandomBars,
  isPaused,
}: UserActionItemsType) => {
  return (
    <div className={styles.actionItemsWrapper}>
      <h2 className={styles.speedTitle}>Sort Speed</h2>
      <input
        min={10}
        max={100}
        step={10}
        className={styles.sortSpeedInput}
        type="range"
        defaultValue={100}
        onChange={(e) => (sortSpeedRef.current = parseInt(e.target.value))}
      />
      <div className={styles.actionBtnWrapper}>
        <button
          className={`${styles.actionBtn} ${styles.sortBtn}`}
          onClick={decideSortType}
          disabled={isSorting || isSorted}
        >
          Sort
        </button>
        <button
          className={`${styles.actionBtn} ${styles.arrBtn}`}
          disabled={isSorting}
          onClick={generateRandomBars}
        >
          Generate New Array
        </button>
        <button
          className={`${styles.actionBtn} ${styles.pauseBtn} ${
            !isPaused.current ? styles.active : ""
          }`}
          onClick={() => (isPaused.current = true)}
        >
          Pause
        </button>
      </div>
    </div>
  );
};

type SortInformationProps = {
  sortObj: SortObjType;
};

type SortObjType = {
  name: string;
  description: string;
  whyLearn: string;
  realExample: string;
};

const SortInformation = ({ sortObj }: SortInformationProps) => {
  return (
    <div>
      <h1 className={styles.sortTitle}>What Is {sortObj.name}?</h1>
      <h2 className={styles.sortText}>{sortObj.description}</h2>
      <h1 className={styles.sortTitle}>Why Should You Learn {sortObj.name}?</h1>
      <h2 className={styles.sortText}>{sortObj.whyLearn}</h2>
      <h1 className={styles.sortTitle}>Real World Example of {sortObj.name}</h1>
      <h2 className={styles.sortText}>{sortObj.realExample}</h2>
    </div>
  );
};

export default App;
