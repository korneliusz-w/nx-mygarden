import { Route } from '@angular/router';
import { PageVegetableCategoriesComponent } from './page-vegetable-categories.component';

export const PAGE_VEGETABLE_CATEGORIES_PATH = 'categories';

export const pageVegetableCategoriesRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: PageVegetableCategoriesComponent }
];
