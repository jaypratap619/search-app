import React, { useState, ChangeEvent, FormEvent } from 'react';
import searchIcon from '../assets/images/search.svg';
import './SearchBar.scss'; // Create a CSS file for styling

interface SearchBarProps {
    onSearchSubmit: (value: string) => void,
    handleSearchClick?: () => void,
    widthClass: string
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit, widthClass, handleSearchClick }) => {
    const [val, setVal] = useState<string>('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setVal(event.target.value);
    };

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearchSubmit(val);
    };

    return (
        <div className={widthClass}>
            <form onSubmit={onFormSubmit} className='d-flex'>
                <div className="search-container">
                    <input
                        className="search-input"
                        type="search"
                        onChange={onInputChange}
                        value={val}
                        placeholder="Search"
                        aria-label="Search"
                        onClick={() => {
                            if (handleSearchClick) handleSearchClick()
                        }}
                    />
                    <button className='search-button' type="submit">
                        <img src={searchIcon} alt="Search" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
