// Components
import { Logo } from '/src/shared/UI/Logo';
import { HeaderMenu } from './UI/HeaderMenu';
import { ButtonsList } from './UI/ButtonsList';
import { MenuAnimation } from './UI/MenuAnimation';
import { LogoAnimation } from './UI/LogoAnimation';
// Styles
import './styles.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__content-wrapper">
        <div className="header__padding">
          <div className="header__logo">
            <LogoAnimation>
              <Logo />
            </LogoAnimation>
          </div>
          <div className="header__menu">
            <MenuAnimation>
              <HeaderMenu />
            </MenuAnimation>
          </div>
          <div className="header__buttons">
            <ButtonsList />
          </div>
        </div>
      </div>
    </div>
  );
};
