import { NavLink } from '~/components/components.js';

import styles from './styles.module.scss';

type Properties = {
  children: React.ReactNode;
  to: string;
};

const Link = ({ to, children }: Properties): React.JSX.Element => {
  return (
    <span className={styles['link']}>
      <NavLink to={to}>{children}</NavLink>
    </span>
  );
};

export { Link };
