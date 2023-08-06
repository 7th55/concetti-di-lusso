// Data
import { weAcceptData } from './assets/data';
// Styles
import './styles.css';

export const WeAccept = () => {
  return (
    <div className="weAccept">
      <div className="weAccept__title">We accept</div>
      <div className="weAccept__content">
        <ul className="weAccept__list">
          {weAcceptData.map((data) => (
            <li className="weAccept__list-item" key={data.icon}>
              <a
                href={data.href}
                className={`weAccept__link weAccept__${data.icon}-icon`}
              ></a>
            </li>
          ))}
        </ul>
        <div className="weAccept__copyright">
          <p className='weAccept__copyright-text'>© 2020, Concetti Di-Lusso Powered by Shopify</p>
        </div>
      </div>
    </div>
  );
};
