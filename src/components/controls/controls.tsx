import { Dispatch, SetStateAction } from "react";
import { FilterControls } from "./filter-controls/filter-controls";
import { SearchBar } from "./search-bar/search-bar";
import styles from "./controls.module.css";

interface ControlsProps {
    handleSearch: (searchTerm: string) => void;
    setFilter: Dispatch<
        SetStateAction<"TO_READ" | "READING" | "FINISHED" | "ABANDONED" | "ALL">
    >;
}
const Controls = ({ handleSearch, setFilter }: ControlsProps) => {
    return (
        <div className={styles.controls}>
            <SearchBar onSearch={handleSearch} />
            <FilterControls setFilter={setFilter} />
        </div>
    );
};

export { Controls };
