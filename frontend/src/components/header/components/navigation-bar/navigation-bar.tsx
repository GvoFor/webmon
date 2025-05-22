import { Children } from 'react';
import styles from './styles.module.scss';

type Properties = {
  children: React.ReactNode;
};

const NavigationBar = ({ children }: Properties): React.JSX.Element => {
  return (
    <nav>
      <ul className={styles['nav-list']}>
        {Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </nav>
  );
};

export { NavigationBar };
