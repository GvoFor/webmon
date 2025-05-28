type ScriptReport = {
  id: number;
  createAt: Date;
  scriptAvatarUrl?: string | undefined;
  previewImageUrl?: string | undefined;
  scriptName: string;
  href: string;
  title: string;
  description: string;
  isMarkedAsChecked: boolean;
  initialIsMarkedAsChecked: boolean;
  isNew: boolean;
};

export { type ScriptReport };
