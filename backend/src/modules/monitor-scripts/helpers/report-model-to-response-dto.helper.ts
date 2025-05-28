import { type ReportResponseDTO, type ReportModel } from '../types/types.js';

const reportModelToResponseDto = (model: ReportModel): ReportResponseDTO => ({
  id: model.id,
  createdAt: model.createdAt,
  scriptName: model.scriptName,
  scriptAvatarUrl: model.scriptAvatarUrl,
  previewImageUrl: model.previewImageUrl,
  href: model.href,
  title: model.title,
  description: model.description,
  isMarkedAsChecked: model.isMarkedAsChecked,
  isNew: model.isNew,
});

export { reportModelToResponseDto };
