import { NavLink } from '~/components/components.js';
import { buildClasses } from '~/helpers/helpers.js';

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
            [styles['v-text'] as string]: variant === 'text',
            [styles['v-button'] as string]: variant === 'button',
            [styles['active'] as string]: isActive,
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
