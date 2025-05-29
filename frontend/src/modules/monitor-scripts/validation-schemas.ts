import { z } from 'zod';

// TODO: refactor this using enums and constants
const createScriptValidationSchema = z.object({
  avatarUrl: z.string().optional(),
  name: z.string().nonempty({ message: 'Name required' }),
  description: z.string(),
  monitorUrl: z.string().nonempty({ message: 'URL required' }),
  monitorSelector: z.string().nonempty({ message: 'Selector required' }),
});

export { createScriptValidationSchema };
