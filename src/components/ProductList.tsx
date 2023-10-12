import React, { useState } from 'react';
import './ProductList.scss'
import ProductItem from './ProductItem';
interface Product {
    name: string;
    mrp: string;
    brand: string;
    rating: number;
    image: string;
}

interface ProductListProps {
    products: Array<Product>

}
const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className='p-4 mt-5'>
            <div className="container">
                <div className="row gutter-2">
                    {
                        products.map(product => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                                    <ProductItem product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default ProductList;
