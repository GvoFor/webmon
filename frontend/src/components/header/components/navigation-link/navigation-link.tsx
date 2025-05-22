import { NavLink } from '../../../../components/components';
import { buildClasses } from '../../../../helpers/helpers';

import styles from './styles.module.scss';

type LinkVariant = 'text' | 'button';

type Properties = {
  variant?: LinkVariant;
  href: string;
  text: string;
};

const NavigationLink = ({
  variant = 'text',
  href,
  text,
}: Properties): React.JSX.Element => {
  return (
    <NavLink
      className={({ isActive }) =>
        buildClasses(
          buildClasses(styles['link'], {
            [styles['v-text']]: variant === 'text',
            [styles['v-button']]: variant === 'button',
            [styles['active']]: isActive,
          }),
        )
      }
      to={href}
    >
      {text}
    </NavLink>
  );
};

export { NavigationLink };
