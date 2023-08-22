// Components
import Image from 'next/image';
// Data
import { productGalleryData } from './assets/data';
// Styles
import './styles.css';

export const ProductGallery = () => {
  return (
    <div className="productGallery">
      <div className="productGallery__content-wrapper">
        <div className="productGallery__header">
          <div className="productGallery__header-content">
            <h3>Product Gallery</h3>
          </div>
        </div>
        <div className="productGallery__content">
          <div className="productGallery__gallery">
            {productGalleryData.map((data) => (
              <div key={data.img.alt} className="productGallery__image">
                <Image src={data.img.src} alt={data.img.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
