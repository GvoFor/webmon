import { MonitorScriptsList } from './components/components.js';
import { useCallback, useState } from '~/hooks/hooks.js';

import styles from './styles.module.scss';
import {
  CreateScriptRequestDTO,
  type MonitorScript as MonitorScriptType,
} from '~/modules/monitor-scripts/monitor-scripts.js';
import { toastNotifier } from '~/modules/toast-notifier/toast-notifier.js';

const mockScripts: MonitorScriptType[] = [
  {
    id: 1,
    avatarUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
    name: 'Ladybug',
    description: 'Monitors Miraculous Ladybug series',
    monitorUrl: 'https://www.miraculousladybugseason6.org/',
    monitorSelector: '.post-thumb a',
    isActive: true,
  },
  {
    id: 2,
    avatarUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
    name: 'Ladybug',
    description: 'Monitors Miraculous Ladybug series',
    monitorUrl: 'https://www.miraculousladybugseason6.org/',
    monitorSelector: '.post-thumb a',
    isActive: true,
  },
];

const Scripts = (): React.JSX.Element => {
  // const {} = useStore(({}) => ({}));

  // useEffect(() => {}, []);

  const [scripts, setScripts] = useState(mockScripts);

  const handleEditClick = useCallback((_id: number) => {
    toastNotifier.showInfo('This feature is not implemented yet');
  }, []);

  const handleDeleteClick = useCallback((id: number) => {
    console.log('delete', id);
  }, []);

  const handleStatusToggle = useCallback(
    (id: number) => {
      setScripts((scripts) =>
        scripts.map((script) =>
          script.id === id ? { ...script, isActive: !script.isActive } : script,
        ),
      );
    },
    [setScripts],
  );

  const handleCreateScriptSubmit = useCallback(
    (payload: CreateScriptRequestDTO) => {
      console.log('CREATE', payload);
    },
    [],
  );

  return (
    <>
      <section className={styles['section']}>
        <MonitorScriptsList
          scripts={scripts}
          isScriptsLoading={false}
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
