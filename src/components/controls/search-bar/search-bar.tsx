import styles from "./search-bar.module.css";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    return (
        <div className={styles.searchBar}>
            <label className={styles.label} htmlFor="search">
                Search:
            </label>
            <input
                className={styles.inputBox}
                id="search"
                name="search"
                onChange={(event) => onSearch(event.target.value)}
            />
        </div>
    );
};

export { SearchBar };
