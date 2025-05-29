import { useCallback, useState } from '~/hooks/hooks.js';
import { buildClasses } from '~/helpers/helpers.js';
import { CreateScriptForm } from '../components.js';

import styles from './styles.module.scss';
import { Icon } from '~/components/components.js';
import { type CreateScriptRequestDTO } from '~/modules/monitor-scripts/monitor-scripts.js';

type Properties = {
  onSubmit: (payload: CreateScriptRequestDTO) => void;
};

const NewScriptButton = ({ onSubmit }: Properties): React.JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapseClick = useCallback(() => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  }, [setIsCollapsed]);

  const classNames = buildClasses(
    styles['new-button-container'],
    isCollapsed && styles['new-button-collapsed'],
  );

  return (
    <div className={classNames}>
      <button className={styles['new-button']} onClick={handleCollapseClick}>
        <Icon name="plus" width={48} />
      </button>
      <div className={styles['new-button-form']}>
        <CreateScriptForm
          onCollapseClick={handleCollapseClick}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export { NewScriptButton };
