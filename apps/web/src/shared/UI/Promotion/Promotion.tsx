import './styles.css';

export const Promotion = ({ info = 'FREE SHIPPING! Orders $35+' }) => {
  return <div className="promotion">{info}</div>;
};
