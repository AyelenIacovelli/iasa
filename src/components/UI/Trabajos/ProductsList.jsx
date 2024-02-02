import React, { useState } from 'react'
import ProductCard from './ProductCard'
import "./productCardStyles.css"
import ImageViewer from '../Galeria/ImageViewer';

const ProductsList = ({ data }) => {

    const [viewerOpen, setViewerOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openImageViewer = (image, index) => {
        setCurrentImage(image);
        setCurrentIndex(index);
        setViewerOpen(true);
    };

    const closeImageViewer = () => {
        setViewerOpen(false);
    };

    const showPrevImage = () => {
        const prevIndex = (currentIndex - 1 + data.length) % data.length;
        setCurrentImage(data[prevIndex]);
        setCurrentIndex(prevIndex);
    };

    const showNextImage = () => {
        const nextIndex = (currentIndex + 1) % data.length;
        setCurrentImage(data[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    return (
        <div className='cards-container'>
            {data?.map((item, index) => (
                <ProductCard key={index} item={item} onImageClick={() => openImageViewer(item, index)} />
            ))}

            {viewerOpen && (
                <ImageViewer
                    image={currentImage}
                    onClose={closeImageViewer}
                    onPrev={showPrevImage}
                    onNext={showNextImage}
                />
            )}
        </div>
    )
}

export default ProductsList