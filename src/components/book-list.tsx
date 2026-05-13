"use client";

import type { Book } from "@/types/book";
import { BookCard } from "./book-card";

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

    return <div>{bookCards}</div>;
};

export { BookList };
