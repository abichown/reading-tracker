import { useEffect, useState } from "react";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleUserInput = (event: any) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        onSearch(searchTerm);
    }, [searchTerm]);

    return (
        <div>
            <label id="search">Search bar</label>
            <input name="search" onChange={handleUserInput} />
        </div>
    );
};

export { SearchBar };
