import { TestimonialsCard } from './UI/TestimonialsCard';
import { testimonialsData } from './UI/TestimonialsCard/assets/data';
// Styles
import './styles.css';

export const OurTestimonials = () => {
  return (
    <div className="ourTestimonials">
      <div className="ourTestimonials__content-wrapper">
        <div className="ourTestimonials__header">
          <div className="ourTestimonials__header-content">
            <h3>Our Testimonials</h3>
          </div>
        </div>
        <div className="ourTestimonials__content">
          {testimonialsData.map((data) => (
            <TestimonialsCard {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};
