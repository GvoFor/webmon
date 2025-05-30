import { StateCreator } from 'zustand';
import {
  MonitorScriptsAPIEndpoint,
  ScriptsSuccessMessage,
  type CreateScriptRequestDTO,
  type ScriptResponseDTO,
} from '~/modules/monitor-scripts/monitor-scripts.js';
import { http } from '~/modules/http/http.js';
import { type MonitorScript } from '~/modules/monitor-scripts/monitor-scripts.js';
import { toastNotifier } from '~/modules/toast-notifier/toast-notifier.js';

type ScriptsSlice = {
  scripts: MonitorScript[];
  isScriptsLoading: boolean;
  getScripts: () => Promise<void>;
  toggleScriptStatus: (id: number) => Promise<void>;
  createScript: (payload: CreateScriptRequestDTO) => Promise<void>;
  deleteScript: (id: number) => Promise<void>;
  clearScripts: () => void;
};

const createSlice: StateCreator<ScriptsSlice> = (set, get) => ({
  scripts: [],
  isScriptsLoading: false,
  getScripts: async () => {
    set({ isScriptsLoading: true });

    const scripts = await http.get<ScriptResponseDTO[]>(
      MonitorScriptsAPIEndpoint.GET_ALL_SCRIPTS,
    );

    set({ scripts, isScriptsLoading: false });
  },
  toggleScriptStatus: async (id: number) => {
    const script = get().scripts.find((script) => script.id === id);

    if (!script) {
      return;
    }

    await http.patch<ScriptResponseDTO[]>(
      MonitorScriptsAPIEndpoint.PATCH_SCRIPT,
      { isActive: !script.isActive },
      {
        params: { id },
      },
    );

    set(({ scripts }) => ({
      scripts: scripts.map((script) =>
        script.id === id ? { ...script, isActive: !script.isActive } : script,
      ),
    }));
  },
  createScript: async (payload: CreateScriptRequestDTO) => {
    const script = await http.post<ScriptResponseDTO>(
      MonitorScriptsAPIEndpoint.PORT_SCRIPT,
      payload,
    );

    toastNotifier.showSuccess(ScriptsSuccessMessage.CREATE);

    set(({ scripts }) => ({
      scripts: [...scripts, script],
    }));
  },
  deleteScript: async (id: number) => {
    await http.delete<ScriptResponseDTO[]>(
      MonitorScriptsAPIEndpoint.DELETE_SCRIPT,
      { params: { id } },
    );

    toastNotifier.showSuccess(ScriptsSuccessMessage.DELETE);

    set(({ scripts }) => ({
      scripts: scripts.filter((script) => script.id !== id),
    }));
  },
  clearScripts: () => {
    set({ scripts: [] });
  },
});

export { type ScriptsSlice, createSlice as createScriptsSlice };
