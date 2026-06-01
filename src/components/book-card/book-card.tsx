"use client";

import { Book } from "@/types/book";
import styles from "./book-card.module.css";
import { StatusDropdown } from "../status-dropdown/status-dropdown";

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
        <div className={styles.bookCard}>
            <h3>{book.title}</h3>
            <p>{`Author: ${book.author}`}</p>
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
