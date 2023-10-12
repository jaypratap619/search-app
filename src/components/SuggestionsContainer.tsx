import React, { useEffect, useState } from 'react';
import './SuggestionsContainer.scss'
import productImage from '../assets/images/productItemImage.png';
import generateProduct from './helperFunctions/CreateRandomProduct';

interface SuggestionsContainerProps {

}
const SuggestionsContainer: React.FC<SuggestionsContainerProps> = ({ }) => {
    const [trendingProducts, setTrendingProducts] = useState<Array<any>>([])
    const [popularProducts, setPopularProducts] = useState<Array<any>>([])
    useEffect(() => {
        const newProducts = [];
        for (let i = 0; i < 4; i++) {
            newProducts.push(generateProduct());
        }
        // Update the state once with the entire array of products
        setTrendingProducts(newProducts);
        const newProducts1 = [];
        for (let i = 0; i < 4; i++) {
            newProducts1.push(generateProduct());
        }
        // Update the state once with the entire array of products
        setPopularProducts(newProducts1);
    }, [])
    return (
        <div className=" d-flex flex-column align-items-center mt-3">
            <div className="p-3 card col-md-7 col-sm-9 col-11">
                <h5>Latest trends</h5>

                <div className="row gutter-2 mt-3">
                    {
                        trendingProducts.map(product => {
                            return (
                                <div className="card col-md-3 col-sm-6 col-12" style={{ border: 'none' }}>
                                    <img src={product.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <small className="card-title">{product.name}</small>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h5>Popular suggestions</h5>
                {
                    popularProducts.map(product => {
                        return <p>{product.name}</p>
                    })
                }
            </div>
        </div>
    );
};

export default SuggestionsContainer;
