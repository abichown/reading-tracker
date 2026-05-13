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
    onDelete: ({ bookId }: { bookId: Book["id"] }) => void;
}

const BookCard = ({ book, onStatusChange, onDelete }: BookCardProps) => {
    const handleOnClick = () => {
        onDelete({ bookId: book.id });
    };

    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <StatusDropdown
                bookId={book.id}
                currentStatus={book.status}
                onStatusChange={onStatusChange}
            />
            <button onClick={handleOnClick}>Delete book</button>
        </div>
    );
};

export { BookCard };
