"use client";

import { Book } from "@/types/book";
import styles from "./status-dropdown.module.css";

interface StatusDropdownProps {
    bookId: Book["id"];
    currentStatus: Book["status"];
    onStatusChange: ({
        bookId,
        newStatus,
    }: {
        bookId: Book["id"];
        newStatus: Book["status"];
    }) => void;
}

const StatusDropdown = ({
    bookId,
    currentStatus,
    onStatusChange,
}: StatusDropdownProps) => {
    const onChange = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLSelectElement;
        const newStatus = target.value as Book["status"];
        onStatusChange({ bookId, newStatus });
    };

    return (
        <div className={styles.dropdown}>
            <label htmlFor={`status-${bookId}`}>Status:</label>
            <select
                name="status"
                id={`status-${bookId}`}
                value={currentStatus}
                onChange={onChange}
            >
                <option value="TO_READ">To read</option>
                <option value="READING">Reading</option>
                <option value="FINISHED">Finished</option>
                <option value="ABANDONED">Abandoned</option>
            </select>
        </div>
    );
};

export { StatusDropdown };
