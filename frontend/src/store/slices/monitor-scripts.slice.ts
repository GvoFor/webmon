import { StateCreator } from 'zustand';
import {
  MonitorScriptsAPIEndpoint,
  type ReportResponseDTO,
} from '~/modules/monitor-scripts/monitor-scripts.js';
import { http } from '~/modules/http/http.js';
import { type MonitorScriptReport } from '~/modules/monitor-scripts/monitor-scripts.js';

type MonitorScriptsSlice = {
  reports: MonitorScriptReport[];
  isReportsLoading: boolean;
  getReports: () => Promise<void>;
};

const createSlice: StateCreator<MonitorScriptsSlice> = (set) => ({
  reports: [],
  isReportsLoading: false,
  isReportsError: false,
  getReports: async () => {
    set({ isReportsLoading: true });

    const reports = await http.get<ReportResponseDTO[]>(
      MonitorScriptsAPIEndpoint.GET_ALL_REPORTS,
    );

    set({
      reports: reports.map<MonitorScriptReport>((report) => ({
        ...report,
        createAt: new Date(report.createdAt),
      })),
      isReportsLoading: false,
    });
  },
});

export { type MonitorScriptsSlice, createSlice as createMonitorScriptsSlice };
