import * as React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import './SearchResults.scss'
import zeviLogo from '../assets/images/zevi-logo.svg'
import FilterMenu from '../components/FilterMenu';
import ProductList from '../components/ProductList';
import generateProduct from '../components/helperFunctions/CreateRandomProduct';
interface Product {
    name: string;
    mrp: string;
    brand: string;
    rating: number;
    image: string;
}
interface ISearchResultsProps {
    searchText: string
    onSearchSubmit: (value: string) => void;
}

const SearchResults: React.FunctionComponent<ISearchResultsProps> = ({ searchText, onSearchSubmit }) => {
    const [products, setProducts] = useState<Array<Product>>([]);
    useEffect(() => {
        const newProducts = [];
        for (let i = 0; i < 10; i++) {
            newProducts.push(generateProduct());
        }
        setProducts(newProducts);
    }, [])

    return (
        <div className='searchResults pt-3'>
            <div className="d-flex row justify-content-center">
                <SearchBar widthClass={"col-6"} onSearchSubmit={onSearchSubmit} />
            </div>
            <img className='zevi-logo2 align-items-center col-4' src={zeviLogo} alt="4" />
            <div className="row">
                <div className="col-3"><FilterMenu products={products} /></div>
                <div className="col-9"><ProductList products={products} /></div>
            </div>
        </div>
    );
}

export default SearchResults;
