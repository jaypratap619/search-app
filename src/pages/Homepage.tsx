import React, { useState, ChangeEvent, FormEvent } from 'react';
import SearchBar from '../components/SearchBar';
import './Homepage.scss'
import zeviLogo from '../assets/images/zevi-logo.svg'
import { faker } from '@faker-js/faker';
import SuggestionsContainer from '../components/SuggestionsContainer';
interface HomepageProps {
    onSearchSubmit: (value: string) => void;
}

const Homepage: React.FC<HomepageProps> = ({ onSearchSubmit }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const handleSearchClick = () => {
        // Generate fake suggestions using Faker API
        const fakeSuggestions = Array.from({ length: 5 }, () => faker.commerce.productName());
        setSuggestions(fakeSuggestions);
        setShowSuggestions(true);
    };
    return (
        <div className='homepage text-align-center'>
            <img className='zevi-logo' src={zeviLogo} alt="" />
            <div className='d-flex justify-content-center pt-5'>
                <SearchBar widthClass={"col-md-6 col-sm-8 col-10"} onSearchSubmit={onSearchSubmit} handleSearchClick={handleSearchClick} />
            </div>
            {
                showSuggestions && <SuggestionsContainer />
            }

        </div>
    );
};

export default Homepage;
