import { Book } from "@/types/book";
import { Dispatch, SetStateAction } from "react";

interface FilterControlsProps {
    setFilter: Dispatch<SetStateAction<"ALL" | Book["status"]>>;
}

const FilterControls = ({ setFilter }: FilterControlsProps) => {
    return (
        <>
            Filter by:
            <button onClick={() => setFilter("ALL")}>All</button>
            <button onClick={() => setFilter("TO_READ")}>To read</button>
            <button onClick={() => setFilter("READING")}>Reading</button>
            <button onClick={() => setFilter("FINISHED")}>Finished</button>
            <button onClick={() => setFilter("ABANDONED")}>Abandoned</button>
        </>
    );
};

export { FilterControls };
