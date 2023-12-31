import { Promotion } from '/src/shared/UI/Promotion';
import './styles.css';

export const Info = ({
  phone = '801-462-6210',
  email = 'Support@concetti-di-lusso.com',
  location = '8385 South Allen Street, Suite 111, Sandy UT 84070',
}) => {
  const info = [
    {
      styles: { icon: 'info__phone-icon', position: 'info__phone' },
      content: phone,
    },
    {
      styles: { icon: 'info__email-icon', position: 'info__email' },
      content: email,
    },
    {
      styles: { icon: 'info__location-icon', position: 'info__location' },
      content: location,
    },
  ];

  return (
    <section className="info">
      <div className="info__content-wrapper">
        <ul className="info__content-list">
          {info.map((info) => (
            <li
              key={info.content}
              className={`info__content-item ${info.styles.position}`}
            >
              <span className={`info__icon ${info.styles.icon}`}></span>
              <div className="info__text">{info.content}</div>
            </li>
          ))}
        </ul>
        <div className="info__promotion">
          <Promotion />
        </div>
      </div>
    </section>
  );
};
