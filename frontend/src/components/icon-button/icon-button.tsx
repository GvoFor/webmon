import { Icon } from '~/components/components.js';
import { type IconName } from '~/types/types.js';

import styles from './styles.module.scss';

type Properties = {
  iconName: IconName;
  label: string;
  width: number;
  height?: number;
  onClick: () => void;
};

const IconButton = ({
  iconName,
  label,
  width,
  height = width,
  onClick,
}: Properties): React.JSX.Element => {
  return (
    <button
      aria-label={label}
      className={styles['icon-button']}
      onClick={onClick}
      type="button"
    >
      <span className="visually-hidden">{label}</span>
      <Icon name={iconName} width={width} height={height} />
    </button>
  );
};

export { IconButton };
