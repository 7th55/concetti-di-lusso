import { Button } from '/src/shared/UI/Button';
// Styles
import './styles.css';

export const ButtonsList = () => {
  const buttons = ['search', 'favorites', 'shopping'];
  return (
    <div className="buttons-list">
      <div className="buttons-list__shopping-buttons">
        {buttons.map((button) => (
          <div className='buttons-list__shopping-button'>
          <Button buttonType={button} hover={false} />
          </div>
        ))}
      </div>
      <div className="buttons-list__sign-in-button">
        <Button buttonType="signIn">Sign In</Button>
      </div>
    </div>
  );
};
