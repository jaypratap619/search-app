import React, { useState, ChangeEvent, FormEvent } from 'react';
import SearchBar from '../components/SearchBar';
import './Homepage.scss'

interface HomepageProps {
    onSearchSubmit: (value: string) => void;
}

const Homepage: React.FC<HomepageProps> = ({ onSearchSubmit }) => {
    return (
        <div className='homepage'>
            <SearchBar onSearchSubmit={onSearchSubmit} />
        </div>
    );
};

export default Homepage;
