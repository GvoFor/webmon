import { AppRoutes } from '~/enums/enums.js';
import {
  useCallback,
  useEffect,
  useIsAuthorized,
  useLocation,
  useNavigate,
} from '~/hooks/hooks.js';
import {
  type SignInRequestDTO,
  type SignUpRequestDTO,
} from '~/modules/auth/auth.js';

import { SignInForm, SignUpForm } from './components/components.js';
import styles from './styles.module.scss';
import { useStore } from '~/store/store.js';

const Auth = (): React.JSX.Element => {
  const { isAuthorized } = useIsAuthorized();
  const { signIn, signUp } = useStore(({ auth }) => auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSignInSubmit = useCallback(
    (payload: SignInRequestDTO): void => {
      signIn(payload);
    },
    [signIn],
  );

  const handleSignUpSubmit = useCallback(
    (payload: SignUpRequestDTO): void => {
      signUp(payload);
    },
    [signUp],
  );

  useEffect(() => {
    if (isAuthorized) {
      navigate(AppRoutes.DASHBOARD);
    }
  }, [isAuthorized, navigate]);

  const renderForm = (): React.ReactNode => {
    switch (pathname) {
      case AppRoutes.SIGN_IN: {
        return <SignInForm onSubmit={handleSignInSubmit} />;
      }

      case AppRoutes.SIGN_UP: {
        return <SignUpForm onSubmit={handleSignUpSubmit} />;
      }
    }

    return null;
  };

  return <section className={styles['form-container']}>{renderForm()}</section>;
};

export { Auth };
