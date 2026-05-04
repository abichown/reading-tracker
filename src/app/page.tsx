"use client";

import { BookList } from "@/components/book-list";
import { Book } from "@/types/book";
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

export default function Home() {
    const [books, setBooks] = useState(defaultBooks);

    const onStatusChange = ({ bookId, newStatus }: onStatusChangeProps) => {
        const updatedBooks = books.map((book) => {
            if (book.id === bookId) {
                return {
                    ...book,
                    status: newStatus,
                };
            }
            return book;
        });
        setBooks(updatedBooks);
        return;
    };
    return (
        <main>
            <h1>Reading Tracker</h1>
            <BookList books={books} onStatusChange={onStatusChange} />
        </main>
    );
}
