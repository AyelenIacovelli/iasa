import React from 'react'
import "../../../data/Trabajos"
import "./productCardStyles.css"

const ProductCard = ({ item }) => {
    return (
        <div className='product__card'>
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