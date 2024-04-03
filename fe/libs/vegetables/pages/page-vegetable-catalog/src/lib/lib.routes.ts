import { Route } from '@angular/router';
import { PageVegetableCatalogComponent } from './page-vegetable-catalog.component';

export const PAGE_VEGETABLE_CATALOG_PATH = 'catalog';

export const pageVegetableCatalogRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: PageVegetableCatalogComponent }
];
