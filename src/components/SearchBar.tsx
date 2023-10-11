import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import searchIcon from '../assets/images/search.svg';
import './SearchBar.scss'; // Create a CSS file for styling

interface SearchBarProps {
    onSearchSubmit: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit }) => {
    const [val, setVal] = useState<string>('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setVal(event.target.value);
    };

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearchSubmit(val);
    };

    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <form onSubmit={onFormSubmit} className='d-flex'>
                        <div className="search-container">
                            <input
                                className="form-control search-input"
                                type="search"
                                onChange={onInputChange}
                                value={val}
                                placeholder="Search for photos"
                                aria-label="Search"
                            />
                            <button className='search-button' type="submit">
                                <img src={searchIcon} alt="Search" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
