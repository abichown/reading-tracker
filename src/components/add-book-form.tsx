import { useState } from "react";

interface AddBookFormProps {
    onAddBook: ({ title, author }: { title: string; author: string }) => void;
}

const AddBookForm = ({ onAddBook }: AddBookFormProps) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!title) {
            setErrorMessage("Title is required");
            return;
        }
        if (!author) {
            setErrorMessage("Author is required");
            return;
        }

        onAddBook({ title, author });
        setTitle("");
        setAuthor("");
        setErrorMessage("");
    };

    return (
        <>
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    onChange={(event) => {
                        setErrorMessage("");
                        setTitle(event.target.value);
                    }}
                    value={title}
                />
                <label htmlFor="author">Author</label>
                <input
                    id="author"
                    name="author"
                    onChange={(event) => {
                        setErrorMessage("");
                        setAuthor(event.target.value);
                    }}
                    value={author}
                />
                <button type="submit">Add book</button>
            </form>
            {!!errorMessage && errorMessage}
        </>
    );
};

export { AddBookForm };
