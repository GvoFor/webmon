import { type MonitorScriptReport } from '~/modules/monitor-scripts/monitor-scripts.js';
import { MonitorReportCard } from '../components.js';

import styles from './styles.module.scss';
import { useCallback } from '~/hooks/hooks.js';
import { Loader } from '~/components/components.js';

type Properties = {
  reportCards: MonitorScriptReport[];
  isReportsLoading: boolean;
  onMarkAsCheckedClick: (cardId: number) => void;
  onDeleteClick: (cardId: number) => void;
};

const MonitorReportCardsList = ({
  reportCards,
  isReportsLoading,
  onMarkAsCheckedClick,
  onDeleteClick,
}: Properties): React.JSX.Element => {
  const handleMarkAsCheckedClick = useCallback(
    (cardId: number) => {
      return () => onMarkAsCheckedClick(cardId);
    },
    [onMarkAsCheckedClick],
  );

  const handleOnDeleteClick = useCallback(
    (cardId: number) => {
      return () => onDeleteClick(cardId);
    },
    [onDeleteClick],
  );

  if (isReportsLoading) {
    return (
      <div className={styles['loader-container']}>
        <Loader />
      </div>
    );
  }

  if (reportCards.length === 0) {
    return (
      <div className={styles['empty-list-placeholder-container']}>
        <p className={styles['empty-list-placeholder-text']}>
          No monitor reports here
        </p>
      </div>
    );
  }
  return (
    <ul className={styles['cards-list']}>
      {reportCards.map((reportCard) => (
        <li key={reportCard.id}>
          <MonitorReportCard
            title={reportCard.title}
            description={reportCard.description}
            createAt={reportCard.createAt}
            href={reportCard.href}
            isMarkedAsChecked={reportCard.isMarkedAsChecked}
            onMarkAsCheckedClicked={handleMarkAsCheckedClick(reportCard.id)}
            onDeleteClicked={handleOnDeleteClick(reportCard.id)}
            isNew={reportCard.isNew}
            scriptName={reportCard.scriptName}
            scriptAvatarUrl={reportCard.scriptAvatarUrl}
            previewImageUrl={reportCard.previewImageUrl}
          />
        </li>
      ))}
    </ul>
  );
};

export { MonitorReportCardsList };
