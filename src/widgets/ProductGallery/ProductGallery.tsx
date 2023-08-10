import { productGalleryData } from './assets/data';
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
              <div key={data.img.src} className="productGallery__image">
                <img src={data.img.src} alt={data.img.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
