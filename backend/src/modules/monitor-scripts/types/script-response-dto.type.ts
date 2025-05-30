import { type ScriptModel } from './script-model.type.js';

type ScriptResponseDTO = Omit<ScriptModel, 'createdAt' | 'updatedAt'>;

export { type ScriptResponseDTO };
