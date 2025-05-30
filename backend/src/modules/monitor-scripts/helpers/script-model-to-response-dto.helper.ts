import { type ScriptResponseDTO, type ScriptModel } from '../types/types.js';

const scriptModelToResponseDto = (model: ScriptModel): ScriptResponseDTO => ({
  id: model.id,
  userId: model.userId,
  avatarUrl: model.avatarUrl,
  name: model.name,
  description: model.description,
  monitorUrl: model.monitorUrl,
  monitorSelector: model.monitorSelector,
  isActive: model.isActive,
});

export { scriptModelToResponseDto };
