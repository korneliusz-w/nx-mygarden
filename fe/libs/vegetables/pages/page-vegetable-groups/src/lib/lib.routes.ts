import { Route } from '@angular/router';
import { PageVegetableGroupsComponent } from './page-vegetable-groups.component';

export const PAGE_VEGETABLE_GROUPS_PATH = 'groups';

export const pageVegetableGroupsRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: PageVegetableGroupsComponent }
];
