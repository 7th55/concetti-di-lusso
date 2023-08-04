import './styles.css';
import { Button } from '/src/shared/UI/Button';
import { buttonStylesClass } from '/src/shared/lib/buttonStyles';

export const GetInTouch = () => {
  return (
    <div className="getInTouch">
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
              placeholder="Email Address"
              type="email"
              className="getInTouch__email"
            />
            <div className="getInTouch__subscribe-button">
              <Button
                buttonStylesClassName={buttonStylesClass({
                  type: 'regular',
                  hover: false,
                })}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
