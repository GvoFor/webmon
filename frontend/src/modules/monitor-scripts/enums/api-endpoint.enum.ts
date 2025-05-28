const APIEndpoint = {
  GET_ALL_REPORTS: 'monitor-scripts/reports',
  PATCH_REPORT: 'monitor-scripts/reports/:id',
  PATCH_BULK_REPORT: 'monitor-scripts/reports',
  DELETE_REPORT: 'monitor-scripts/reports/:id',
} as const;

export { APIEndpoint };
