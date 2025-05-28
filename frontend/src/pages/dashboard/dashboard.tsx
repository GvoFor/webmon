import { MonitorReportCardsList } from './components/monitor-report-cards-list/monitor-report-cards-list.js';
import { useCallback, useEffect, useMemo } from '~/hooks/hooks.js';
import { useStore } from '~/store/store.js';

import styles from './styles.module.scss';

const Dashboard = (): React.JSX.Element => {
  const {
    reports,
    getReports,
    isReportsLoading,
    deleteReport,
    toggleReportCheckMark,
  } = useStore(({ scriptReports }) => scriptReports);

  useEffect(() => {
    getReports();
  }, [getReports]);

  const checkedCards = useMemo(
    () =>
      reports.filter(
        ({ initialIsMarkedAsChecked }) => initialIsMarkedAsChecked,
      ),
    [reports],
  );

  const uncheckedCards = useMemo(
    () =>
      reports.filter(
        ({ initialIsMarkedAsChecked }) => !initialIsMarkedAsChecked,
      ),
    [reports],
  );

  const handleMarkAsCheckedClick = useCallback(
    (cardId: number) => {
      toggleReportCheckMark(cardId);
    },
    [toggleReportCheckMark],
  );
  const handleDeleteClick = useCallback(
    (cardId: number) => {
      deleteReport(cardId);
    },
    [deleteReport],
  );

  return (
    <>
      <section className={styles['section']}>
        <h2 className={styles['section-title']}>To Check</h2>
        <MonitorReportCardsList
          reportCards={uncheckedCards}
          isReportsLoading={isReportsLoading}
          onMarkAsCheckedClick={handleMarkAsCheckedClick}
          onDeleteClick={handleDeleteClick}
        />
      </section>
      <section className={styles['section']}>
        <h2 className={styles['section-title']}>Checked</h2>
        <MonitorReportCardsList
          reportCards={checkedCards}
          isReportsLoading={isReportsLoading}
          onMarkAsCheckedClick={handleMarkAsCheckedClick}
          onDeleteClick={handleDeleteClick}
        />
      </section>
    </>
  );
};

export { Dashboard };
