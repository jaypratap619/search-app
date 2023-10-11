import React, { useState } from 'react';
import './ProductItem.scss'
const ProductItem: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isWishlistActive, setIsWishlistActive] = useState(false);

    const handleWishlistClick = () => {
        setIsWishlistActive(!isWishlistActive);
    };

    return (
        <div className={`product-item ${isHovered ? 'hovered' : ''}`}>
            <img src="product-image.jpg" alt="Product" />
            <h3>Product Name</h3>
            <p>Product Description</p>
            <button className={`wishlist ${isWishlistActive ? 'active' : ''}`} onClick={handleWishlistClick}>
                Wishlist
            </button>
            {isHovered && <button className="view-product">View Product</button>}
        </div>
    );
};

export default ProductItem;
