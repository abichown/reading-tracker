"use client";

import { AddBookForm } from "@/components/add-book-form";
import { BookList } from "@/components/book-list";
import { FilterControls } from "@/components/filter-controls";
import { SearchBar } from "@/components/search-bar";
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
        // no filter, no search
        if (filter === "ALL" && !searchTerm) return books;
        // filter, no search
        else if (filter !== "ALL" && !searchTerm) {
            return books.filter((book) => book.status === filter);
        }
        // no filter, search
        else if (filter === "ALL" && searchTerm) {
            return books.filter(
                (book) =>
                    book.author.toLowerCase().includes(searchTerm) ||
                    book.title.toLowerCase().includes(searchTerm),
            );
        }
        // filter, search
        else {
            const filteredBooks = books.filter(
                (book) => book.status === filter,
            );
            return filteredBooks.filter(
                (book) =>
                    book.author.toLowerCase().includes(searchTerm) ||
                    book.title.toLowerCase().includes(searchTerm),
            );
        }
    };

    const onSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm.toLowerCase());
    };

    return (
        <main>
            <h1>Reading Tracker</h1>
            <SearchBar onSearch={onSearch} />
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
