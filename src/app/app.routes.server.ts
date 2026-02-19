import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Client },
  { path: 'teams', renderMode: RenderMode.Client },

  { path: '**', renderMode: RenderMode.Client },
];

