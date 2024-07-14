import { Images, ImageUrls } from "../../types/images";
import css from "./ImageCard.module.css";

type Props = {
  image: Images,
  onClick: (image: Images) => void,
}

export const ImageCard: React.FC<Props> = ({ image, onClick }) => {
  const handleClick = () => {
    
    onClick(image);
  };
  const { small, alt_description } = image.urls;
  return (
    <>
      <img
        className={css.imageListItem}
        src={small}
        alt={alt_description}
        onClick={handleClick}
      />
    </>
  );
};

export default ImageCard;
