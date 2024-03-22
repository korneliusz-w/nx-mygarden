import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'vegetables',
    loadChildren: () => import('@nx-mygarden/vegetables-shell').then(m => m.VegetablesShellModule)
  }
];
