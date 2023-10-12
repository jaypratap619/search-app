import React, { useState } from 'react';
import './FilterMenu.scss'
import FilterBy from './FilterByBrand';
import FilterByPrice from './FilterByPrice';
import FilterByRating from './FilterByRating';
interface Product {
    name: string;
    mrp: string;
    brand: string;
    rating: number;
    image: string;
}
interface FilterMenuProps {
    products: Array<Product>
}

const FilterMenu: React.FC<FilterMenuProps> = ({ products }) => {
    return (
        <div className='container'>
            <h3>Search Results</h3>
            <FilterBy filterName='Brand' products={products} />
            <FilterByPrice />
            <FilterByRating />
        </div>
    );
};

export default FilterMenu;
