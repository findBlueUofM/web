//import React from 'react';
import './ImageButton.css';
import React, { ReactNode } from 'react';
interface ImageButtonProps {
  imageSrc: string;
  altText: string;
  label: ReactNode;
  link: string;
}
const ImageButton: React.FC<ImageButtonProps> = ({ imageSrc, altText, label, link }) => {
  return (
    <a href={link} className="image-button">
      <img src={imageSrc} alt={altText} className="image" />
      <span className="label">{label}</span>
    </a>
  );
};
export default ImageButton;
