import { type MonitorScriptReport } from '~/modules/monitor-scripts/monitor-scripts.js';
import styles from './styles.module.scss';
import { MonitorReportCardsList } from './components/monitor-report-cards-list/monitor-report-cards-list.js';
import { useCallback } from '~/hooks/hooks.js';

/* TEMP */
const mockCards: MonitorScriptReport[] = [
  {
    id: 1,
    title: 'Miraculous Season 6 Episode 15 The Ruler English Sub',
    description:
      'Watch Miraculous Season 6 Episode 15 The Ruler English Sub , Season 6, Season 5 and Season 4 all latest Episodes, Specials on our website Miraculous Season 6 free online.',
    date: new Date(2025, 4, 28),
    href: 'https://www.miraculousladybugseason6.org/2025/04/miraculous-season-6-episode-15-the-ruler-english-sub.html',
    isMarkedAsChecked: false,
    isNew: true,
    scriptName: 'Ladybug',
    scriptAvatarUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
    previewImageUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
  },
  {
    id: 3,
    title: 'Miraculous Season 6 Episode 15 The Ruler English Sub',
    description:
      'Watch Miraculous Season 6 Episode 15 The Ruler English Sub , Season 6, Season 5 and Season 4 all latest Episodes, Specials on our website Miraculous Season 6 free online.',
    date: new Date(2025, 4, 28),
    href: 'https://www.miraculousladybugseason6.org/2025/04/miraculous-season-6-episode-15-the-ruler-english-sub.html',
    isMarkedAsChecked: false,
    isNew: true,
    scriptName: 'Ladybug',
    scriptAvatarUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
    previewImageUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
  },
  {
    id: 4,
    title: 'Miraculous Season 6 Episode 15 The Ruler English Sub',
    description:
      'Watch Miraculous Season 6 Episode 15 The Ruler English Sub , Season 6, Season 5 and Season 4 all latest Episodes, Specials on our website Miraculous Season 6 free online.',
    date: new Date(2025, 4, 28),
    href: 'https://www.miraculousladybugseason6.org/2025/04/miraculous-season-6-episode-15-the-ruler-english-sub.html',
    isMarkedAsChecked: false,
    isNew: false,
    scriptName: 'Ladybug',
    scriptAvatarUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
    previewImageUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
  },
  {
    id: 5,
    title: 'Miraculous Season 6 Episode 15 The Ruler English Sub',
    description:
      'Watch Miraculous Season 6 Episode 15 The Ruler English Sub , Season 6, Season 5 and Season 4 all latest Episodes, Specials on our website Miraculous Season 6 free online.',
    date: new Date(2025, 4, 28),
    href: 'https://www.miraculousladybugseason6.org/2025/04/miraculous-season-6-episode-15-the-ruler-english-sub.html',
    isMarkedAsChecked: false,
    isNew: false,
    scriptName: 'Ladybug',
    scriptAvatarUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
    previewImageUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
  },
  {
    id: 2,
    title: 'Смотреть Доктор Стоун 1 сезон 1 серия на Jut.su',
    description:
      'Посмотреть онлайн Доктор Стоун - 1 серия 1 сезона в русской озвучке',
    date: new Date(2025, 4, 21),
    href: 'https://jut.su/dr-stoune/season-1/episode-1.html',
    isMarkedAsChecked: true,
    isNew: false,
    scriptName: 'Dr. Stone',
    scriptAvatarUrl:
      'https://gen.jut.su/uploads/preview/263/0/0/1_1562482671.jpg',
    previewImageUrl:
      'https://gen.jut.su/uploads/preview/263/0/0/1_1562482671.jpg',
  },
  {
    id: 4,
    title: 'Miraculous Season 6 Episode 15 The Ruler English Sub',
    description:
      'Watch Miraculous Season 6 Episode 15 The Ruler English Sub , Season 6, Season 5 and Season 4 all latest Episodes, Specials on our website Miraculous Season 6 free online.',
    date: new Date(2025, 4, 28),
    href: 'https://www.miraculousladybugseason6.org/2025/04/miraculous-season-6-episode-15-the-ruler-english-sub.html',
    isMarkedAsChecked: true,
    isNew: false,
    scriptName: 'Ladybug',
    scriptAvatarUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
    previewImageUrl:
      'http://www.miraculousladybugseason6.org/wp-content/uploads/2025/04/Miraculous-Season-6-Episode-15-The-Ruler.webp',
  },
];

const Dashboard = (): React.JSX.Element => {
  const checkedCards = mockCards.filter(
    ({ isMarkedAsChecked }) => isMarkedAsChecked,
  );

  const uncheckedCards = mockCards.filter(
    ({ isMarkedAsChecked }) => !isMarkedAsChecked,
  );

  const handleMarkAsCheckedClick = useCallback((cardId: number) => {}, []);
  const handleDeleteClick = useCallback((cardId: number) => {}, []);

  return (
    <>
      <section className={styles['section']}>
        <h2 className={styles['section-title']}>To Check</h2>
        <MonitorReportCardsList
          reportCards={uncheckedCards}
          onMarkAsCheckedClick={handleMarkAsCheckedClick}
          onDeleteClick={handleDeleteClick}
        />
      </section>
      <section className={styles['section']}>
        <h2 className={styles['section-title']}>Checked</h2>
        <MonitorReportCardsList
          reportCards={checkedCards}
          onMarkAsCheckedClick={handleMarkAsCheckedClick}
          onDeleteClick={handleDeleteClick}
        />
      </section>
    </>
  );
};

export { Dashboard };
