import { useEffect, useState } from '../hooks.js';
import { useStore } from '~/store/store.js';

type ReturnType = boolean;

const useIsAuthorized = (): ReturnType => {
  const { user } = useStore(({ auth }) => auth);
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    setIsAuthorized(() => user !== null);
  }, [user]);

  return isAuthorized;
};

export { useIsAuthorized };
