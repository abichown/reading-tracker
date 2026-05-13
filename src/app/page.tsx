"use client";

import { AddBookForm } from "@/components/add-book-form";
import { BookList } from "@/components/book-list";
import { FilterControls } from "@/components/filter-controls";
import { Book } from "@/types/book";
import { randomUUID } from "crypto";
import { useState } from "react";

const defaultBooks: Book[] = [
    {
        id: "1",
        title: "Harry Potter",
        author: "J.K Rowling",
        status: "ABANDONED",
    },
    {
        id: "2",
        title: "Boudiccas Daughter",
        author: "Elodie Harper",
        status: "FINISHED",
    },
    {
        id: "3",
        title: "The Constant Princess",
        author: "Phillipa Gregory",
        status: "READING",
    },
];

interface onStatusChangeProps {
    bookId: Book["id"];
    newStatus: Book["status"];
}

interface onAddBookProps {
    title: Book["title"];
    author: Book["author"];
}

interface onDeleteBookProps {
    bookId: Book["id"];
}

export default function Home() {
    const [books, setBooks] = useState(defaultBooks);
    const [filter, setFilter] = useState<"ALL" | Book["status"]>("ALL");

    const handleStatusChange = ({ bookId, newStatus }: onStatusChangeProps) => {
        setBooks((books) =>
            books.map((book) => {
                if (book.id === bookId) {
                    return {
                        ...book,
                        status: newStatus,
                    };
                }
                return book;
            }),
        );
        return;
    };

    const handleAddBook = ({ title, author }: onAddBookProps) => {
        setBooks((books) => [
            ...books,
            {
                id: crypto.randomUUID(),
                title,
                author,
                status: "TO_READ",
            } as Book,
        ]);
    };

    const handleDeleteBook = ({ bookId }: onDeleteBookProps) => {
        setBooks((books) => books.filter((book) => book.id !== bookId));
    };

    const filterBooks = () => {
        if (filter === "ALL") return books;
        return books.filter((book) => book.status === filter);
    };

    return (
        <main>
            <h1>Reading Tracker</h1>
            <FilterControls setFilter={setFilter} />
            <BookList
                books={filterBooks()}
                onStatusChange={handleStatusChange}
                onDeleteBook={handleDeleteBook}
            />
            <AddBookForm onAddBook={handleAddBook} />
        </main>
    );
}
