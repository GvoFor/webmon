const AppRoutes = {
  ANY: '*',
  ROOT: '/',
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  DASHBOARD: '/dashboard',
  SCRIPTS: '/monitor-scripts',
} as const;

export { AppRoutes };
