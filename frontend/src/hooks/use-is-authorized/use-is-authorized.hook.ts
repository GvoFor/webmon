import { useEffect, useState } from '../hooks.js';
import { useStore } from '~/store/store.js';

type ReturnType = {
  isAuthorized: boolean;
  isAuthorizedLoading: boolean;
};

const useIsAuthorized = (): ReturnType => {
  const { user, isUserLoading } = useStore(({ auth }) => auth);

  const [isAuthorized, setIsAuthorized] = useState(user !== null);

  useEffect(() => {
    setIsAuthorized(() => user !== null);
  }, [user, setIsAuthorized]);

  return {
    isAuthorized,
    isAuthorizedLoading: isUserLoading,
  };
};

export { useIsAuthorized };
