// Hooks
import { useDispatch } from 'react-redux';
// Store
import {
  searchAnimationsInput,
  searchOpen,
  toggleClose,
} from '/src/features/Search';
// Styles
import './styles.css';

export const MenuAnimation = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  // Согласование анимаций
  const searching = searchOpen();
  const searchAnimationsEnd = searchAnimationsInput().close;

  const blurAnimation = searching ? 'menuAnimation_blur' : '';
  const closeAnimation = searchAnimationsEnd && 'menuAnimation_unblur';
  return (
    <div
      style={{ pointerEvents: searching ? 'none' : 'initial' }}
      className={`menuAnimation ${blurAnimation} ${closeAnimation}`}
      onAnimationEnd={(e) => {
        // Согласование анимации c SearchInputAnimation
        e.animationName === 'unblur' && dispatch(toggleClose());
      }}
    >
      {children}
    </div>
  );
};