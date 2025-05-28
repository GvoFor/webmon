import { StateCreator } from 'zustand';
import {
  MonitorScriptsAPIEndpoint,
  ReportsSuccessMessage,
  type ReportResponseDTO,
} from '~/modules/monitor-scripts/monitor-scripts.js';
import { http } from '~/modules/http/http.js';
import { type MonitorScriptReport } from '~/modules/monitor-scripts/monitor-scripts.js';
import { toastNotifier } from '~/modules/toast-notifier/toast-notifier.js';

type ScriptReportsSlice = {
  reports: MonitorScriptReport[];
  isReportsLoading: boolean;
  getReports: () => Promise<void>;
  toggleReportCheckMark: (id: number) => Promise<void>;
  deleteReport: (id: number) => Promise<void>;
};

const createSlice: StateCreator<ScriptReportsSlice> = (set, get) => ({
  reports: [],
  isReportsLoading: false,
  getReports: async () => {
    set({ isReportsLoading: true });

    const reports = await http.get<ReportResponseDTO[]>(
      MonitorScriptsAPIEndpoint.GET_ALL_REPORTS,
    );

    set({
      reports: reports.map<MonitorScriptReport>((report) => ({
        ...report,
        createAt: new Date(report.createdAt),
        initialIsMarkedAsChecked: report.isMarkedAsChecked,
      })),
      isReportsLoading: false,
    });

    /* TODO: move this to a separate action ?*/
    await http.patch<ReportResponseDTO[]>(
      MonitorScriptsAPIEndpoint.PATCH_BULK_REPORT,
      { isNew: false },
    );
    /* ===================================== */
  },
  toggleReportCheckMark: async (id: number) => {
    const report = get().reports.find((report) => report.id === id);

    if (!report) {
      return;
    }

    await http.patch<ReportResponseDTO[]>(
      MonitorScriptsAPIEndpoint.PATCH_REPORT,
      { isMarkedAsChecked: !report.isMarkedAsChecked },
      {
        params: { id },
      },
    );

    set(({ reports }) => ({
      reports: reports.map((report) =>
        report.id === id
          ? { ...report, isMarkedAsChecked: !report.isMarkedAsChecked }
          : report,
      ),
    }));
  },
  deleteReport: async (id: number) => {
    await http.delete<ReportResponseDTO[]>(
      MonitorScriptsAPIEndpoint.DELETE_REPORT,
      { params: { id } },
    );

    toastNotifier.showSuccess(ReportsSuccessMessage.DELETE);

    set(({ reports }) => ({
      reports: reports.filter((report) => report.id !== id),
    }));
  },
});

export { type ScriptReportsSlice, createSlice as createScriptReportsSlice };
