import { Dispatch, SetStateAction } from "react";
import { Book } from "@/types/book";
import styles from "./filter-controls.module.css";

interface FilterControlsProps {
    setFilter: Dispatch<SetStateAction<"ALL" | Book["status"]>>;
}

const FilterControls = ({ setFilter }: FilterControlsProps) => {
    return (
        <div className={styles.filterControls}>
            <label className={styles.label}>Filter by:</label>
            <button className={styles.button} onClick={() => setFilter("ALL")}>
                All
            </button>
            <button
                className={styles.button}
                onClick={() => setFilter("TO_READ")}
            >
                To read
            </button>
            <button
                className={styles.button}
                onClick={() => setFilter("READING")}
            >
                Reading
            </button>
            <button
                className={styles.button}
                onClick={() => setFilter("FINISHED")}
            >
                Finished
            </button>
            <button
                className={styles.button}
                onClick={() => setFilter("ABANDONED")}
            >
                Abandoned
            </button>
        </div>
    );
};

export { FilterControls };
