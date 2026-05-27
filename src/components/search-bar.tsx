interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    return (
        <div>
            <label htmlFor="search">Search bar</label>
            <input
                id="search"
                name="search"
                onChange={(event) => onSearch(event.target.value)}
            />
        </div>
    );
};

export { SearchBar };
