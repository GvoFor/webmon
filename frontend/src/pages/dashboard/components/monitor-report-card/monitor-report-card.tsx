import { IconButton, MonitorScriptAvatar } from '~/components/components.js';
import styles from './styles.module.scss';
import { PreviewImage } from '../components.js';

import { formatDate } from '~/helpers/helpers.js';

type Properties = {
  scriptAvatarUrl?: string | undefined;
  scriptName: string;
  href: string;
  isNew?: boolean | undefined;
  previewImageUrl?: string | undefined;
  title: string;
  description: string;
  date: Date;
  isMarkedAsChecked: boolean;
  onMarkAsCheckedClicked: () => void;
  onDeleteClicked: () => void;
};

const MonitorReportCard = ({
  scriptAvatarUrl,
  scriptName,
  href,
  isNew,
  previewImageUrl,
  title,
  description,
  date,
  isMarkedAsChecked,
  onMarkAsCheckedClicked,
  onDeleteClicked,
}: Properties): React.JSX.Element => {
  return (
    <article className={styles['card-container']}>
      <a className={styles['card-link']} href={href} target="_blank"></a>
      <PreviewImage
        src={previewImageUrl}
        alt="Card preview image"
        className={styles['card-preview-image']}
      />
      <div className={styles['card-avatar-container']}>
        <MonitorScriptAvatar
          scriptName={scriptName}
          scriptAvatarUrl={scriptAvatarUrl}
        />
      </div>
      {isNew && <span className={styles['card-new-tag']}>New</span>}
      <div className={styles['card-body']}>
        <div className={styles['body-content']}>
          <h3 className={styles['body-title']}>{title}</h3>
          <p className={styles['body-description']}>{description}</p>
        </div>
        <div className={styles['body-footer']}>
          <IconButton
            iconName="trashCan"
            label="delete"
            variant="outlined"
            activeColor="danger"
            width={24}
            onClick={onDeleteClicked}
          />
          <p className={styles['body-date']}>
            {formatDate(date, 'dd.MM.yyyy')}
          </p>
          <IconButton
            iconName="checkLine"
            label="mark as checked"
            variant="outlined"
            activeColor="success"
            isActive={isMarkedAsChecked}
            width={24}
            onClick={onMarkAsCheckedClicked}
          />
        </div>
      </div>
    </article>
  );
};

export { MonitorReportCard, type Properties as MonitorReportCardProperties };
