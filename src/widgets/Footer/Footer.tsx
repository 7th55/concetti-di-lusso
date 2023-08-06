import { ContactUs } from './UI/ContactUs';
import { FooterQuickLinks } from './UI/FooterQuickLinks';
import { WeAccept } from './UI/WeAccept';
// Styles
import './styles.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content-wrapper">
        <div className="footer__content">
          <div className="footer__quick-links">
            <FooterQuickLinks />
          </div>
          <div className="footer__contact-us">
            <ContactUs />
          </div>
          <div className="footer__we-accept">
            <WeAccept />
          </div>
        </div>
      </div>
    </div>
  );
};
