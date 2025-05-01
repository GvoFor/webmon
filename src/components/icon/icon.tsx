import { iconNameToSvgMap } from './icon-name-to-svg.map';
import { IconName } from './types';

import styles from './styles.module.scss';

type Properties = {
  width: number;
  height: number;
  icon: IconName;
};

const Icon = ({ icon, width, height }: Properties): React.JSX.Element => {
  const SvgIcon = iconNameToSvgMap[icon];

  return <SvgIcon className={styles['icon']} width={width} height={height} />;
};

export { Icon };
