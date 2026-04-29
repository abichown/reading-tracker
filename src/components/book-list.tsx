"use client";

import type { Book } from "@/types/book";
import { BookCard } from "./book-card";

interface BookListProps {
    books: Book[];
}

const BookList = ({ books }: BookListProps) => {
    const bookCards = books.map((book) => {
        return (
            <BookCard
                key={`${book.title}-${book.author}`}
                title={book.title}
                author={book.author}
                status={book.status}
            />
        );
    });

    return <div>{bookCards}</div>;
};

export { BookList };
