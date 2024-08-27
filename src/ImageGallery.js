// src/ImageGallery.js
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
  // Add URLs of your images here
  'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1724716800&semt=ais_hybrid',
  'https://images.unsplash.com/photo-1571707351199-b00407f924de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDQ5NDE4OXx8ZW58MHx8fHx8',
  'https://us.123rf.com/450wm/ismaeljs/ismaeljs1901/ismaeljs190101238/115027649-red-tree-leaf-on-the-ground-in-the-nature.jpg?ver=6',
  'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg'
  // Add more images as needed
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <ImageItem key={index} src={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default ImageGallery;
