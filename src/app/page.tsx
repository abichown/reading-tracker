import { BookList } from "@/components/book-list";
import { Book } from "@/types/book";

const books: Book[] = [
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

export default function Home() {
    return (
        <main>
            <h1>Reading Tracker</h1>
            <BookList books={books} />
        </main>
    );
}
