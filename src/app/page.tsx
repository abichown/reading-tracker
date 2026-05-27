"use client";

import { useState } from "react";
import { AddBookForm } from "@/components/add-book-form";
import { BookList } from "@/components/book-list";
import { FilterControls } from "@/components/filter-controls";
import { SearchBar } from "@/components/search-bar";
import { Book } from "@/types/book";

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

const createBook = ({
    author,
    title,
}: {
    author: Book["author"];
    title: Book["title"];
}): Book => {
    return {
        id: crypto.randomUUID(),
        title,
        author,
        status: "TO_READ",
    };
};

export default function Home() {
    const [books, setBooks] = useState(defaultBooks);
    const [filter, setFilter] = useState<"ALL" | Book["status"]>("ALL");
    const [searchTerm, setSearchTerm] = useState("");

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
    };

    const handleAddBook = ({ title, author }: onAddBookProps) => {
        setBooks((books) => [...books, createBook({ author, title })]);
    };

    const handleDeleteBook = ({ bookId }: onDeleteBookProps) => {
        setBooks((books) => books.filter((book) => book.id !== bookId));
    };

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    const normalisedSearchTerm = searchTerm.toLowerCase();

    const filteredBooks = books
        .filter((book) => filter === "ALL" || book.status === filter)
        .filter(
            (book) =>
                book.author.toLowerCase().includes(normalisedSearchTerm) ||
                book.title.toLowerCase().includes(normalisedSearchTerm),
        );

    return (
        <main>
            <h1>Reading Tracker</h1>
            <SearchBar onSearch={handleSearch} />
            <FilterControls setFilter={setFilter} />
            <BookList
                books={filteredBooks}
                onStatusChange={handleStatusChange}
                onDeleteBook={handleDeleteBook}
            />
            <AddBookForm onAddBook={handleAddBook} />
        </main>
    );
}
