import { ImageCard } from "../ImageCard/ImageCard";
import { nanoid } from "nanoid";
import css from "./ImageGallery.module.css";
import { Images } from "../../types/images";
import React from "react";

type Props = {
  images: Images[],
  onClick: (image: Images) => void,
}

export const ImageGallery: React.FC<Props>  = ({ images, onClick }) => {
  return (
    <ul className={css.imageList}>
      {images.map((image) => {
        const id = nanoid();
        return (
          <li key={id} className={css.imageListItem}>
            <ImageCard image={image} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
