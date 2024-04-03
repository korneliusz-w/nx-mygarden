import { Route } from '@angular/router';
import { PageAddVegetableComponent } from './page-add-vegetable.component';

export const PAGE_ADD_VEGETABLE_PATH = 'add-vegetable';

export const pageAddVegetableRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: PageAddVegetableComponent }
];
