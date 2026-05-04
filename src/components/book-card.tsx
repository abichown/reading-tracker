"use client";

import { Book } from "@/types/book";
import { StatusDropdown } from "./status-dropdown";

interface BookCardProps {
    book: Book;
    onStatusChange: ({
        bookId,
        newStatus,
    }: {
        bookId: Book["id"];
        newStatus: Book["status"];
    }) => void;
}

const BookCard = ({ book, onStatusChange }: BookCardProps) => {
    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <StatusDropdown
                bookId={book.id}
                currentStatus={book.status}
                onStatusChange={onStatusChange}
            />
        </div>
    );
};

export { BookCard };
