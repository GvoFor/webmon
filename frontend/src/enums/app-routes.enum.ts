const AppRoutes = {
  ANY: '*',
  ROOT: '/',
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  DASHBOARD: '/dashboard',
} as const;

export { AppRoutes };
