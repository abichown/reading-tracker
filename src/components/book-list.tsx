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
    onDelete: ({ bookId }: { bookId: Book["id"] }) => void;
}

const BookList = ({ books, onStatusChange, onDelete }: BookListProps) => {
    const bookCards = books.map((book) => {
        return (
            <BookCard
                key={`${book.title}-${book.author}`}
                book={book}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
            />
        );
    });

    return <div>{bookCards}</div>;
};

export { BookList };
