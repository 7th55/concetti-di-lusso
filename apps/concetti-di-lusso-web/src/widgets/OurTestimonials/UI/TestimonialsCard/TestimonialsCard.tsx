import { TestimonialData } from '/src/widgets/OurTestimonials/types';
import './styles.css';

export const TestimonialsCard = (props: TestimonialData) => {
  const { author, review } = props;
  return (
    <div className="testimonialsCard">
      <div className='testimonialsCard__review'>
        <p>{review}</p>
      </div>
      <div className='testimonialsCard__author'> 
        <p>-{author}</p>
      </div>
    </div>
  );
};
