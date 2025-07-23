export const routePaths = {
  Home: '/',
  Project: '/project/:id',
} as const;

export type Paths = (typeof routePaths)[keyof typeof routePaths];
