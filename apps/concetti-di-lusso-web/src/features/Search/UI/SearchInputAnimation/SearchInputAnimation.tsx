// Hooks
import { useState } from 'react';
// Store
import { useDispatch } from 'react-redux';
import { inputAnimationRun } from '/src/features/Search';
// Styles
import './styles.css';
import { useRouter } from 'next/router';

export const SearchInputAnimation = ({
  children,
  inputAnimation,
  animationEndHandler,
  closeInput,
}: {
  children: React.ReactNode;
  inputAnimation: 'searchInputAnimation_close' | '';
  animationEndHandler: (a: 'open' | 'close') => void;
  closeInput: () => void;
}) => {
  const dispatch = useDispatch();
  // Фиксит блики
  const [leftPosition, setLeftPosition] = useState(0);

  const router = useRouter();
  const linkPath = router.pathname === '/search' ? '/' : '/search';
  return (
    <div className="searchInputAnimation">
      <div
        style={{ left: `${leftPosition}px` }}
        className={`searchInputAnimation searchInputAnimation_open ${inputAnimation}`}
        onAnimationStart={(e) => {
          e.animationName === 'close' && setLeftPosition(2000);
          // Согласование анимации закрытия поля с анимциями хедера и лого
          e.animationName === 'close' && dispatch(inputAnimationRun(true));
        }}
        onAnimationEnd={(e) => {
          animationEndHandler(e.animationName as 'open' | 'close');
          if (e.animationName === 'close') {
            setLeftPosition(0);
            closeInput();
          }
        }}
      >
        {children}
      </div>
    </div>
  );
};
