// Hooks
import { useState } from 'react';
// Store
import { searchAnimationsInput, searchOpen } from '/src/features/Search';
// Styles
import './styles.css';

export const LogoAnimation = ({ children }: { children: React.ReactNode }) => {
  // Согласование с Search
  const searching = searchOpen();
  // Согласование с SearchAnimation
  const searchAnimations = searchAnimationsInput().close;

  // Добавление анимации закрытия только после того
  // как анимация открытия была завершена
  const [logoAnimationStart, setLogoAnimationStart] = useState(false);

  const logoAnimationOpen = searching ? 'logoAnimation_moveUp' : '';
  const logoAnimationClose =
    searching && logoAnimationStart ? 'logoAnimation_moveDown' : '';

  const closeAnimationsLogo =
    searchAnimations && logoAnimationStart && 'logoAnimation_moveDown';

  return (
    <div
      onAnimationEnd={(e) => {
        e.animationName === 'moveUpLogo' && setLogoAnimationStart(true);
        e.animationName === 'moveDownLogo' && setLogoAnimationStart(false);
      }}
      className={`logoAnimation ${logoAnimationOpen} ${logoAnimationClose} ${closeAnimationsLogo}`}
    >
      {children}
    </div>
  );
};
