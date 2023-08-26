// Hooks
import { searching, useSearchState } from '/src/features/Search';
// Components
import Link from 'next/link';
import { Logo } from '/src/shared/UI/Logo';
import { HeaderMenu } from './UI/HeaderMenu';
import { ButtonsList } from './UI/ButtonsList';
// Styles
import './styles.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch();
  const searchingValue = useSearchState();

  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  useEffect(() => {
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
    windowWidth !== undefined && windowWidth <= 1250 && searchingValue
      ? 'header__logo_moveUp'
      : undefined;
  const blurMenu = searchingValue ? 'header__menu_blur' : '';
  return (
    <div className="header">
      <div className="header__content-wrapper">
        <div className="header__padding">
          <div style={{ top: moveLogo && -30 }} className={`header__logo`}>
            <div onClick={() => dispatch(searching(false))}>
              <Link href="/">
                <Logo />
              </Link>
            </div>
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
