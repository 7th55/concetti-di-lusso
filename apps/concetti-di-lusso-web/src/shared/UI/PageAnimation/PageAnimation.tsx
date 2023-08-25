// Store
import { animationRunPageAnimation } from '/src/shared/store/pageAnimationSlice';
// Hooks
import { useDispatch } from 'react-redux';
// Styles
import './style.css';

export const PageAnimation = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="pageAnimation"
      onAnimationStart={(e) => {
        e.animationName === 'pageOpacity' &&
          dispatch(animationRunPageAnimation(true));
      }}
      onAnimationEnd={(e) => {
        e.animationName === 'pageOpacity' &&
          dispatch(animationRunPageAnimation(false));
      }}
    >
      {children}
    </div>
  );
};
