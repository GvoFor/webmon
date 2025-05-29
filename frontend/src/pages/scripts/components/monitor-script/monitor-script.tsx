import {
  Icon,
  IconButton,
  Input,
  MonitorScriptAvatar,
  Output,
  ToggleButton,
} from '~/components/components.js';
import styles from './styles.module.scss';
import { useCallback, useState } from '~/hooks/hooks.js';
import { buildClasses } from '~/helpers/helpers.js';

type Properties = {
  avatarUrl?: string | undefined;
  name: string;
  description: string;
  monitorUrl: string;
  monitorSelector: string;
  isActive: boolean;
  onEditClick: () => void;
  onDeleteClick: () => void;
  onStatusToggle: () => void;
};

const MonitorScript = ({
  avatarUrl,
  name,
  description,
  monitorUrl,
  monitorSelector,
  isActive,
  onDeleteClick,
  onEditClick,
  onStatusToggle,
}: Properties): React.JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapseClick = useCallback(() => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  }, [setIsCollapsed]);

  const classNames = buildClasses(
    styles['script-container'],
    isCollapsed && styles['script-collapsed'],
  );

  return (
    <div className={classNames}>
      <div className={styles['script-header']}>
        <MonitorScriptAvatar
          scriptName={name}
          scriptAvatarUrl={avatarUrl}
          status={isActive ? 'active' : 'inactive'}
          color="light"
        />
        <h3 className={styles['script-name']}>{name}</h3>
        <div className={styles['collapse-button-container']}>
          <IconButton
            iconName="arrowDown"
            label={isCollapsed ? 'expand' : 'collapse'}
            width={32}
            onClick={handleCollapseClick}
          />
        </div>
      </div>
      <div className={styles['script-body']}>
        <p className={styles['script-description']}>{description}</p>
        <Output label="URL" value={monitorUrl} />
        <Output label="Selector" value={monitorSelector} />
      </div>
      <div className={styles['script-footer']}>
        <ToggleButton
          label={isActive ? 'deactivate' : 'activate'}
          onClick={onStatusToggle}
          isActive={isActive}
          icon={<Icon name="power" width={24} />}
        />
        <div className={styles['script-footer-buttons-container']}>
          <IconButton
            iconName="edit"
            label="delete"
            variant="outlined"
            width={24}
            onClick={onEditClick}
          />
          <IconButton
            iconName="trashCan"
            label="delete"
            variant="outlined"
            activeColor="danger"
            width={24}
            onClick={onDeleteClick}
          />
        </div>
      </div>
    </div>
  );
};

export { MonitorScript };
