import {
  type CreateScriptRequestDTO,
  type MonitorScript as MonitorScriptType,
} from '~/modules/monitor-scripts/monitor-scripts.js';
import { MonitorScript, NewScriptButton } from '../components.js';
import { useCallback } from '~/hooks/hooks.js';
import { Loader } from '~/components/components.js';

import styles from './styles.module.scss';

type Properties = {
  scripts: MonitorScriptType[];
  isScriptsLoading: boolean;
  onEditClick: (scriptId: number) => void;
  onDeleteClick: (scriptId: number) => void;
  onStatusToggle: (scriptId: number) => void;
  onCreateScriptSubmit: (payload: CreateScriptRequestDTO) => void;
};

const MonitorScriptsList = ({
  scripts,
  isScriptsLoading,
  onEditClick,
  onDeleteClick,
  onStatusToggle,
  onCreateScriptSubmit,
}: Properties): React.JSX.Element => {
  const handleEditClick = useCallback(
    (scriptId: number) => {
      return () => onEditClick(scriptId);
    },
    [onEditClick],
  );

  const handleDeleteClick = useCallback(
    (scriptId: number) => {
      return () => onDeleteClick(scriptId);
    },
    [onDeleteClick],
  );

  const handleStatusToggle = useCallback(
    (scriptId: number) => {
      return () => onStatusToggle(scriptId);
    },
    [onStatusToggle],
  );

  if (isScriptsLoading) {
    return (
      <div className={styles['loader-container']}>
        <Loader />
      </div>
    );
  }

  return (
    <ul className={styles['scripts-list']}>
      {scripts.map((script) => (
        <li key={script.id}>
          <MonitorScript
            avatarUrl={script.avatarUrl}
            name={script.name}
            description={script.description}
            monitorUrl={script.monitorUrl}
            monitorSelector={script.monitorSelector}
            isActive={script.isActive}
            onDeleteClick={handleDeleteClick(script.id)}
            onEditClick={handleEditClick(script.id)}
            onStatusToggle={handleStatusToggle(script.id)}
          />
        </li>
      ))}
      <li>
        <NewScriptButton onSubmit={onCreateScriptSubmit} />
      </li>
    </ul>
  );
};

export { MonitorScriptsList };
