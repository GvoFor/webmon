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
  const className = buildClasses(styles['link'], {
    [styles['v-text']]: variant === 'text',
    [styles['v-button']]: variant === 'button',
  });

  return (
    <a className={className} href={href}>
      {text}
    </a>
  );
};

export { NavigationLink };
