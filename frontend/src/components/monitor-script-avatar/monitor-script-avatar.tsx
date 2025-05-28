import styles from './styles.module.scss';

type Properties = {
  scriptAvatarUrl?: string | undefined;
  scriptName: string;
};

const MonitorScriptAvatar = ({
  scriptAvatarUrl,
  scriptName,
}: Properties): React.JSX.Element => {
  const letterToRender = scriptName[0] || 'S';
  return (
    <div className={styles['avatar-container']}>
      {scriptAvatarUrl ? (
        <img
          alt="Avatar"
          src={scriptAvatarUrl}
          className={styles['avatar-image']}
        ></img>
      ) : (
        <span className={styles['avatar-letter']}>{letterToRender}</span>
      )}
    </div>
  );
};

export { MonitorScriptAvatar };
