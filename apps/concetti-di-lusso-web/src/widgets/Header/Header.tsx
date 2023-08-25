// Hooks
import { useSearchOpen } from '/src/features/Search';
// Components
import { Logo } from '/src/shared/UI/Logo';
import { HeaderMenu } from './UI/HeaderMenu';
import { ButtonsList } from './UI/ButtonsList';
// Styles
import './styles.css';
import { useEffect, useLayoutEffect, useState } from 'react';

export const Header = () => {
  const searching = useSearchOpen();

  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  useLayoutEffect(() => {
    const setResize = () => setWindowWidth(window.innerWidth);
    if (window !== undefined) {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', setResize);
    }

    return () => {
      window.removeEventListener('resize', setResize);
    };
  }, []);
  
// UI
  const moveLogo =
    windowWidth !== undefined && windowWidth <= 1250 && searching
      ? 'header__logo_moveUp'
      : undefined;
  const blurMenu = searching ? 'header__menu_blur' : '';
  return (
    <div className="header">
      <div className="header__content-wrapper">
        <div className="header__padding">
          <div style={{ top: moveLogo && -30 }} className={`header__logo`}>
            <Logo />
          </div>
          <div className={`header__menu ${blurMenu}`}>
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
