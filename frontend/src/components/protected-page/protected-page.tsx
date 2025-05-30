import { AppRoutes } from '~/enums/app-routes.enum.js';
import { useEffect, useIsAuthorized, useNavigate } from '~/hooks/hooks.js';

type Properties = {
  children: React.JSX.Element;
};

const ProtectedPage = ({ children }: Properties): React.JSX.Element => {
  const { isAuthorized } = useIsAuthorized();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(AppRoutes.ROOT);
    }
  }, [isAuthorized, navigate]);

  return children;
};

export { ProtectedPage };
