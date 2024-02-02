import React, { useEffect } from 'react';
import "./imageViewerStyles.css"
import { MdNavigateNext, MdNavigateBefore, MdClose } from "react-icons/md"

const ImageViewer = ({ image, onClose, onPrev, onNext }) => {

    const handleContainerClick = (event) => {
        if (event.target.tagName === 'IMG' || event.target.tagName === 'BUTTON') {
            return;
        }
        onClose();
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className='image-viewer' onClick={handleContainerClick}>
            <span className='close-button' onClick={onClose}><MdClose className='close' /></span>
            <button onClick={(e) => { e.stopPropagation(); onPrev(); }}><MdNavigateBefore className='prev' /></button>
            <img src={image.img} alt={image.title} />
            <button onClick={(e) => { e.stopPropagation(); onNext(); }}><MdNavigateNext className='next' /></button>
        </div>
    );
}

export default ImageViewer;