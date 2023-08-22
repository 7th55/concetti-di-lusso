import Image from 'next/image';
import './styles.css';
// Data
import { advantagesData } from './data';

export const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages__content-wrapper">
        <div className="advantages__list">
          {advantagesData.map((data) => (
            <div key={data.header} className="advantages__card">
              <div className="advantages__card-image">
                <Image 
                src={data.img.src} alt={data.img.alt} />
              </div>
              <div className="advantages__card-content">
                <div className="advantages__card-header">
                  <h3>{data.header}</h3>{' '}
                </div>
                <div className="advantages__card-text">{data.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
