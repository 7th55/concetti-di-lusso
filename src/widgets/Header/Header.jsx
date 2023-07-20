import { Logo } from '/src/shared/UI/Logo';
import { HeaderMenu } from './UI/HeaderMenu';
// Styles
import './styles.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content-wrapper">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__menu">
          <HeaderMenu />
        </div>
        <div className="header__buttons"></div>
      </div>
    </header>
  );
};
