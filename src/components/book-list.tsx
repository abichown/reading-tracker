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
}

const BookList = ({ books, onStatusChange }: BookListProps) => {
    const bookCards = books.map((book) => {
        return (
            <BookCard
                key={`${book.title}-${book.author}`}
                bookId={book.id}
                title={book.title}
                author={book.author}
                status={book.status}
                onStatusChange={onStatusChange}
            />
        );
    });

    return <div>{bookCards}</div>;
};

export { BookList };
