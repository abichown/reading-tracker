"use client";

import { Book } from "@/types/book";

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
    const onChange = (e: any) => {
        const newStatus = e.target.value as Book["status"];
        onStatusChange({ bookId, newStatus });
    };

    return (
        <>
            <label htmlFor="status">Status:</label>
            <select
                name="status"
                id="status"
                value={currentStatus}
                onChange={onChange}
            >
                <option value="TO_READ">To read</option>
                <option value="READING">Reading</option>
                <option value="FINISHED">Finished</option>
                <option value="ABANDONED">Abandoned</option>
            </select>
        </>
    );
};

export { StatusDropdown };
