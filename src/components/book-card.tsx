interface BookCardProps {
    title: string;
    author: string;
    status: "TO_READ" | "READING" | "FINISHED" | "ABANDONED";
}

const BookCard = ({ title, author, status }: BookCardProps) => {
    const handleChangeStatus = () => {
        // TODO: Logic to change the status of the book
        console.log(`Changing status of "${title}" by ${author}`);
    };

    return (
        <div>
            <h2>{title}</h2>
            <p>{author}</p>
            <p>Status: {status}</p>
            <button onClick={handleChangeStatus}>Change status</button>
        </div>
    );
};

export { BookCard };
