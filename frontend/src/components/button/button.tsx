import { buildClasses } from '~/helpers/helpers.js';
import styles from './styles.module.scss';

type Properties = {
  label: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  variant?: 'solid' | 'outlined';
};

const Button = ({
  label,
  type = 'button',
  onClick = () => {},
  variant = 'solid',
}: Properties): React.JSX.Element => {
  return (
    <button
      aria-label={label}
      className={buildClasses(styles['button'], styles[`variant-${variant}`])}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export { Button };
