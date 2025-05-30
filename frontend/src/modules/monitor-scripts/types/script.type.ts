type Script = {
  id: number;
  // userId: number; There is also userId on backend
  avatarUrl?: string | undefined;
  name: string;
  description: string;
  monitorUrl: string;
  monitorSelector: string;
  isActive: boolean;
};

export { type Script };
