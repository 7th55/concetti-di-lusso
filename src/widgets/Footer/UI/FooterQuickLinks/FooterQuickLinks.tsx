// Data
import { linksData } from './assets/data';
// Styles
import './styles.css';

export const FooterQuickLinks = () => {
  return (
    <div>
      <div className="footerQuickLinks__title">Quick links</div>
      <div className="footerQuickLinks__content">
        <ul className="footerQuickLinks__list">
          {linksData.map((link) => (
            <li className="footerQuickLinks__list-item" key={link.text}>
              <a href={link.href} className="footerQuickLinks__link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
