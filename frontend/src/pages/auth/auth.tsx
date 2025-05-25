import { AppRoutes } from '~/enums/enums.js';
import { useCallback, useLocation } from '~/hooks/hooks.js';
import {
  type SignInRequestDTO,
  type SignUpRequestDTO,
} from '~/modules/auth/auth.js';

import { SignInForm, SignUpForm } from './components/components.js';
import styles from './styles.module.scss';

const Auth = (): React.JSX.Element => {
  const { pathname } = useLocation();

  const handleSignInSubmit = useCallback((payload: SignInRequestDTO): void => {
    // TODO: handle sign in;
  }, []);

  const handleSignUpSubmit = useCallback((payload: SignUpRequestDTO): void => {
    // TODO: handle sign up
  }, []);

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
