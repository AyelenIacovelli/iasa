import React from 'react'
import ProductCard from './ProductCard'
import "./productCardStyles.css"

const ProductsList = ({ data }) => {

    return (
        <div className='cards-container'>
            <>

                {
                    data?.map((item, index) => (
                        <ProductCard item={item} key={index} />
                    ))
                }

            </>
        </div>
    )
}

export default ProductsList