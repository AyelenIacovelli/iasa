import React, { useEffect, useState } from 'react'
import "../../../data/Trabajos"
import "./productCardStyles.css"

const ProductCard = ({ item, onImageClick, index }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 1500 * index); // 0.5 segundos

        return () => clearTimeout(timeout);
    }, [index]);

    const handleClick = () => {
        onImageClick(item);
    };

    return (
        <div className={`product__card ${isVisible ? 'product__card-visible' : ''}`} onClick={handleClick}>
            <div className='product__card-img'>
                <img src={item.img} alt={item.title} />
            </div>
            <div className='product__card-desc'>
                <p>{item.desc}</p>
            </div>
        </div>
    )
}

export default ProductCard