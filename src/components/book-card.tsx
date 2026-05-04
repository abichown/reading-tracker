"use client";

import { Book } from "@/types/book";
import { StatusDropdown } from "./status-dropdown";

interface BookCardProps {
    bookId: Book["id"];
    title: Book["title"];
    author: Book["author"];
    status: Book["status"];
    onStatusChange: ({
        bookId,
        newStatus,
    }: {
        bookId: Book["id"];
        newStatus: Book["status"];
    }) => void;
}

const BookCard = ({
    bookId,
    title,
    author,
    status,
    onStatusChange,
}: BookCardProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{author}</p>
            <StatusDropdown
                bookId={bookId}
                currentStatus={status}
                onStatusChange={onStatusChange}
            />
        </div>
    );
};

export { BookCard };
