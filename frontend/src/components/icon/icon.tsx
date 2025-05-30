import { iconNameToSvgMap } from './icon-name-to-svg.map.js';
import { IconName } from '~/types/types.js';

import styles from './styles.module.scss';

type Properties = {
  name: IconName;
  width: number;
  height?: number;
};

const Icon = ({
  name,
  width,
  height = width,
}: Properties): React.JSX.Element => {
  const SvgIcon = iconNameToSvgMap[name];

  return <SvgIcon className={styles['icon']} width={width} height={height} />;
};

export { Icon };
