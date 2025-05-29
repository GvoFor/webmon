import { type ScriptModel } from './script-model.type.js';

type ScriptPatchRequestDTO = Pick<ScriptModel, 'id' | 'isActive'>;

export { type ScriptPatchRequestDTO };
