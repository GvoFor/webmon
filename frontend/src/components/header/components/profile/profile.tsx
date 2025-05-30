import { Icon } from '~/components/components.js';

import styles from './styles.module.scss';
import { useStore } from '~/store/store.js';
import { useCallback, useNavigate } from '~/hooks/hooks.js';
import { AppRoutes } from '~/enums/app-routes.enum.js';

const Profile = (): React.JSX.Element => {
  const { signOut } = useStore(({ auth }) => auth);
  const { clearReports } = useStore(({ scriptReports }) => scriptReports);
  const { clearScripts } = useStore(({ scripts }) => scripts);
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    /* TODO: add popup with sign out button */
    signOut();
    clearReports();
    clearScripts();
    navigate(AppRoutes.SIGN_IN);
  }, [signOut, clearReports, clearScripts, navigate]);

  return (
    <button className={styles['profile-wrapper']} onClick={handleOnClick}>
      <Icon name="user" width={48} />
    </button>
  );
};

export { Profile };
