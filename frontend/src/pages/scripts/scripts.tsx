import { MonitorScriptsList } from './components/components.js';
import { useCallback, useEffect } from '~/hooks/hooks.js';

import styles from './styles.module.scss';
import { type CreateScriptRequestDTO } from '~/modules/monitor-scripts/monitor-scripts.js';
import { toastNotifier } from '~/modules/toast-notifier/toast-notifier.js';
import { useStore } from '~/store/store.js';

const Scripts = (): React.JSX.Element => {
  const {
    scripts,
    isScriptsLoading,
    getScripts,
    createScript,
    deleteScript,
    toggleScriptStatus,
  } = useStore(({ scripts }) => scripts);

  useEffect(() => {
    getScripts();
  }, [getScripts]);

  const handleEditClick = useCallback((_id: number) => {
    toastNotifier.showInfo('This feature is not implemented yet');
  }, []);

  const handleDeleteClick = useCallback(
    (id: number) => {
      deleteScript(id);
    },
    [deleteScript],
  );

  const handleStatusToggle = useCallback(
    (id: number) => {
      toggleScriptStatus(id);
    },
    [toggleScriptStatus],
  );

  const handleCreateScriptSubmit = useCallback(
    async (payload: CreateScriptRequestDTO) => {
      createScript(payload);
    },
    [createScript],
  );

  return (
    <>
      <section className={styles['section']}>
        <MonitorScriptsList
          scripts={scripts}
          isScriptsLoading={isScriptsLoading}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
          onStatusToggle={handleStatusToggle}
          onCreateScriptSubmit={handleCreateScriptSubmit}
        />
      </section>
    </>
  );
};

export { Scripts };
