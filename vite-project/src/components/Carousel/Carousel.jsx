import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="../../public/img/slide-home-2.jpg" onDragStart={handleDragStart} 
    role="presentation" className='img-carousel' 
    height={600}
    />,
    <img src="../../public/img/slide-home-1.jpg" onDragStart={handleDragStart} 
    role="presentation" className='img-carousel'
    height={600}
    />,
    <img src="../../public/img/slide-home-3.jpg" onDragStart={handleDragStart} 
    role="presentation" className='img-carousel'
    height={600}
    />,
];

const Gallery = () => {
    return (
        <AliceCarousel mouseTracking items={items} />
    );
}

export default Gallery