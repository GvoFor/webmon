import { buildClasses } from '~/helpers/helpers.js';
import styles from './styles.module.scss';

type Properties = {
  label: string;
  isActive: boolean;
  icon?: React.JSX.Element;
  onClick: () => void;
};

const ToggleButton = ({
  label,
  isActive,
  icon,
  onClick,
}: Properties): React.JSX.Element => {
  const classNames = buildClasses(
    styles['toggle-container'],
    isActive && styles['active'],
  );
  return (
    <button aria-label={label} className={classNames} onClick={onClick}>
      <span className="visually-hidden">{label}</span>
      <div className={styles['toggle-button']}>{icon}</div>
    </button>
  );
};

export { ToggleButton };
