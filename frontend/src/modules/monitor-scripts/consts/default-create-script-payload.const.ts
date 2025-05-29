import { type CreateScriptRequestDTO } from '../monitor-scripts.js';

const DEFAULT_CREATE_SCRIPT_PAYLOAD: CreateScriptRequestDTO = {
  name: '',
  description: '',
  monitorUrl: '',
  monitorSelector: '',
};
export { DEFAULT_CREATE_SCRIPT_PAYLOAD };
