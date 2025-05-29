const APIEndpoint = {
  GET_ALL_SCRIPTS: 'monitor-scripts',
  PATCH_SCRIPT: 'monitor-scripts/:id',
  PORT_SCRIPT: 'monitor-scripts',
  DELETE_SCRIPT: 'monitor-scripts/:id',
  GET_ALL_REPORTS: 'monitor-scripts/reports',
  PATCH_REPORT: 'monitor-scripts/reports/:id',
  PATCH_BULK_REPORT: 'monitor-scripts/reports',
  DELETE_REPORT: 'monitor-scripts/reports/:id',
} as const;

export { APIEndpoint };
