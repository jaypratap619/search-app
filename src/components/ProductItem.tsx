import React, { useState } from 'react';
import './ProductItem.scss';
import productImage from '../assets/images/productItemImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface Product {
    name: string;
    mrp: string;
    brand: string;
    rating: number;
    image: string;
}

interface ProductItemProps {
    product: Product
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const [isWishlistActive, setWishlistActive] = useState(false);

    const toggleWishlist = () => {
        setWishlistActive(!isWishlistActive);
    };

    return (
        <div className="card card-container">
            <div className="card-image-container">
                <img src={product.image} className="card-img-top" alt="Product Image" />
                <div className={`wishlist-toggle ${isWishlistActive ? 'active' : ''}`} onClick={toggleWishlist}>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <a href="#" className="view-product-link" title="View Product">View Product</a>
            </div>
            <div className="card-body">
                <h5 className="card-title text-truncate">{product.name}</h5>
                <p className="card-text">
                    <div className='d-flex flex-row'>
                        <div className='discount-detail me-2'>
                            {parseInt(product.mrp + "300").toFixed(2)}
                        </div>
                        <div className='real-price'>
                            {product.mrp}
                        </div>
                    </div>
                </p>
                <p className="card-text"> <svg className='mb-9' xmlns="http://www.w3.org/2000/svg" width="116" height="20" viewBox="0 0 116 20" fill="none">
                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D" />
                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FDD33D" />
                    <path d="M34 0L36.2451 6.90983H43.5106L37.6327 11.1803L39.8779 18.0902L34 13.8197L28.1221 18.0902L30.3673 11.1803L24.4894 6.90983H31.7549L34 0Z" fill="#FDD33D" />
                    <path d="M58 0L60.2451 6.90983H67.5106L61.6327 11.1803L63.8779 18.0902L58 13.8197L52.1221 18.0902L54.3673 11.1803L48.4894 6.90983H55.7549L58 0Z" fill="#FDD33D" />
                    <path d="M82 0L84.2451 6.90983H91.5106L85.6327 11.1803L87.8779 18.0902L82 13.8197L76.1221 18.0902L78.3673 11.1803L72.4894 6.90983H79.7549L82 0Z" fill="#cecece" />

                </svg></p>
            </div>
        </div>
    );
};

export default ProductItem;


