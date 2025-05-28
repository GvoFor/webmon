type ScriptReport = {
  id: number;
  scriptAvatarUrl?: string;
  scriptName: string;
  href: string;
  isNew?: boolean;
  previewImageUrl?: string;
  title: string;
  description: string;
  date: Date;
  isMarkedAsChecked: boolean;
};

export { type ScriptReport };
