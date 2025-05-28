import { Icon } from '~/components/components.js';
import { type IconName } from '~/types/types.js';

import styles from './styles.module.scss';
import { buildClasses } from '~/helpers/helpers.js';

type Properties = {
  iconName: IconName;
  label: string;
  width: number;
  height?: number;
  variant?: 'primary' | 'outlined';
  isActive?: boolean;
  activeColor?: 'primary' | 'danger' | 'success';
  onClick: () => void;
};

const IconButton = ({
  iconName,
  label,
  width,
  height = width,
  variant = 'primary',
  isActive = false,
  activeColor = 'primary',
  onClick,
}: Properties): React.JSX.Element => {
  const classNames = buildClasses(
    styles['icon-button'],
    styles[`variant-${variant}`],
    isActive && styles['active'],
    styles[`active-${activeColor}`],
  );

  return (
    <button
      aria-label={label}
      className={classNames}
      onClick={onClick}
      type="button"
    >
      <span className="visually-hidden">{label}</span>
      <Icon name={iconName} width={width} height={height} />
    </button>
  );
};

export { IconButton };
