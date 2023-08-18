// Components
import { Logo } from '/src/shared/UI/Logo';
import { HeaderMenu } from './UI/HeaderMenu';
import { ButtonsList } from './UI/ButtonsList';
// State
import { searchOpen } from '/src/features/Search/';
// Styles
import './styles.css';
import './animations.css';

export const Header = () => {
  const searching = searchOpen() === false;

  // TODO:
  // Согласовать анимацию закрытия с анимацией закрытия поля поиска
  // и вынести в отдельный компонент
  const animations = searching ? '' : 'header_disable';
  // 'header_enable'
  const logoAnimations = searching ? '' : 'header__logo_disable';
  // 'header__logo_enable header__logo_disable'
  // 'header__logo_enable'

  return (
    <div className="header">
      <div className="header__content-wrapper">
        <div className="header__padding">
          <div className={`header__logo ${logoAnimations}`}>
            <Logo />
          </div>
          <div
            style={{ pointerEvents: searching ? 'initial' : 'none' }}
            className={`header__menu ${animations}`}
          >
            <HeaderMenu />
          </div>
          <div className="header__buttons">
            <ButtonsList />
          </div>
        </div>
      </div>
    </div>
  );
};
