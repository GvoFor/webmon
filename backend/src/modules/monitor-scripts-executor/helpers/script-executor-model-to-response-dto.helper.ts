import {
  type ScriptExecutorResponseDTO,
  type ScriptExecutorModel,
} from '../types/types.js';

const scriptExecutorModelToResponseDto = (
  model: ScriptExecutorModel,
): ScriptExecutorResponseDTO => ({
  id: model.id,
  scriptId: model.scriptId,
  firstHref: model.firstHref,
  lastHref: model.lastHref,
});

export { scriptExecutorModelToResponseDto };
