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

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                onClose();
            } else if (event.key === 'ArrowLeft') {
                onPrev();
            } else if (event.key === 'ArrowRight') {
                onNext();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [onClose, onNext, onPrev]);

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