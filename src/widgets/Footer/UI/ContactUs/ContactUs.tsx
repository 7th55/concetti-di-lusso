// Data
import { contactUsData } from './assets/data';
// Styles
import './styles.css';

export const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="contactUs__title">Contact Us</div>
      <div className="contactUs__content">
        <ul className="contactUs__list">
          {contactUsData.map((data) => (
            <li className="contactUs__list-item" key={data.link.text}>
              <a
                href={data.link.href}
                className={`contactUs__link contactUs__${data.icon}-icon`}
              >
                {data.link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
