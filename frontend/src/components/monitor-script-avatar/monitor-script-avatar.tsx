import { buildClasses } from '~/helpers/helpers.js';
import styles from './styles.module.scss';

type Properties = {
  scriptAvatarUrl?: string | undefined;
  scriptName: string;
  status?: 'none' | 'active' | 'inactive';
  color?: 'brand' | 'light';
};

const MonitorScriptAvatar = ({
  scriptAvatarUrl,
  scriptName,
  status = 'none',
  color = 'brand',
}: Properties): React.JSX.Element => {
  const letterToRender = scriptName[0] || 'A';
  const classNames = buildClasses(
    styles['avatar-container'],
    styles[`avatar-color-${color}`],
    styles['avatar-status-indicator'],
    styles[`avatar-status-indicator-${status}`],
  );
  return (
    <div className={classNames}>
      {scriptAvatarUrl ? (
        <img
          alt="Avatar"
          src={scriptAvatarUrl}
          className={styles['avatar-image']}
        ></img>
      ) : (
        <span>{letterToRender}</span>
      )}
    </div>
  );
};

export { MonitorScriptAvatar };
