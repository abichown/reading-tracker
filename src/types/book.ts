interface Book {
    id: string;
    title: string;
    author: string;
    status: "TO_READ" | "READING" | "FINISHED" | "ABANDONED";
}

export type { Book };
