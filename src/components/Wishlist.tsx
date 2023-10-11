import React, { useState } from 'react';
import './Wishlist.scss'
const Wishlist: React.FC = () => {
    const [isWishlistActive, setIsWishlistActive] = useState(false);

    const handleWishlistClick = () => {
        setIsWishlistActive(!isWishlistActive);
    };

    return (
        <div className={`wishlist ${isWishlistActive ? 'active' : ''}`} onClick={handleWishlistClick}>
            Wishlist
        </div>
    );
};

export default Wishlist;
