import styles from './styles.module.scss';

type Properties = {
  label: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const Button = ({
  label,
  type = 'button',
  onClick = () => {},
}: Properties): React.JSX.Element => {
  return (
    <button
      aria-label={label}
      className={styles['button']}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export { Button };
