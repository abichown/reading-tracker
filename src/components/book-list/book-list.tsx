"use client";

import type { Book } from "@/types/book";
import styles from "./book-list.module.css";
import { BookCard } from "../book-card/book-card";

interface BookListProps {
    books: Book[];
    onStatusChange: ({
        bookId,
        newStatus,
    }: {
        bookId: Book["id"];
        newStatus: Book["status"];
    }) => void;
    onDeleteBook: ({ bookId }: { bookId: Book["id"] }) => void;
}

const BookList = ({ books, onStatusChange, onDeleteBook }: BookListProps) => {
    const bookCards = books.map((book) => {
        return (
            <BookCard
                key={`${book.title}-${book.author}`}
                book={book}
                onStatusChange={onStatusChange}
                onDelete={onDeleteBook}
            />
        );
    });

    return (
        <div className={styles.bookList}>
            <h2>Your library</h2>
            <div className={styles.bookCards}>{bookCards}</div>
        </div>
    );
};

export { BookList };
