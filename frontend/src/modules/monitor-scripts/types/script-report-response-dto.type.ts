type ReportResponseDTO = {
  id: number;
  createdAt: string;
  scriptName: string;
  scriptAvatarUrl?: string | undefined;
  previewImageUrl?: string | undefined;
  href: string;
  title: string;
  description: string;
  isMarkedAsChecked: boolean;
  isNew: boolean;
};

export { type ReportResponseDTO };
