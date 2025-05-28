import { type MonitorScriptReport } from '~/modules/monitor-scripts/monitor-scripts.js';
import { MonitorReportCard } from '../components.js';

import styles from './styles.module.scss';
import { useCallback } from '~/hooks/hooks.js';

type Properties = {
  reportCards: MonitorScriptReport[];
  onMarkAsCheckedClick: (cardId: number) => void;
  onDeleteClick: (cardId: number) => void;
};

const MonitorReportCardsList = ({
  reportCards,
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

  return (
    <ul className={styles['cards-list']}>
      {reportCards.map((reportCard) => (
        <li key={reportCard.id}>
          <MonitorReportCard
            title={reportCard.title}
            description={reportCard.description}
            date={reportCard.date}
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
