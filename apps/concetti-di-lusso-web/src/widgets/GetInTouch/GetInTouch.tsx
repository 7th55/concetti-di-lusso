// Components
import { Button } from '/src/shared/UI/Button';
// Styles
import './styles.css';

export const GetInTouch = () => {
  return (
    <section className="getInTouch">
      <div className="getInTouch__content-wrapper">
        <div className="getInTouch__header">
          <div className="getInTouch__header-content">
            <h3>Get In Touch</h3>
          </div>
        </div>
        <div className="getInTouch__content">
          <div className="getInTouch__text">
            <p>
              {
                'Subscribe to our weekly newsletter and receive exclusive offers on products\n you love!'
              }
            </p>
          </div>
          <div className="getInTouch__form">
            <input
              id="getInTouchEmailInput"
              placeholder="Email Address"
              type="email"
              className="getInTouch__email"
            />
            <div className="getInTouch__subscribe-button">
              <Button buttonStyle="regular">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
