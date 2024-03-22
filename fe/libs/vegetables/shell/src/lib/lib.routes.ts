import { Route } from '@angular/router';
import { PAGE_ADD_VEGETABLE_PATH } from '@nx-mygarden/page-add-vegetable';
import { PAGE_VEGETABLE_CATALOG_PATH } from '@nx-mygarden/page-vegetable-catalog';
import { PAGE_VEGETABLE_CATEGORIES_PATH } from '@nx-mygarden/page-vegetable-categories';
import { PAGE_VEGETABLE_GROUPS_PATH } from '@nx-mygarden/page-vegetable-groups';

export const vegetablesShellRoutes: Route[] = [
  {
    path: PAGE_ADD_VEGETABLE_PATH,
    loadChildren: ()=>import('@nx-mygarden/page-add-vegetable').then(m => m.PageAddVegetableModule)
  },
  {
    path: PAGE_VEGETABLE_CATALOG_PATH,
    loadChildren: () => import('@nx-mygarden/page-vegetable-catalog').then(m => m.PageVegetableCatalogModule)
  },
  {
    path: PAGE_VEGETABLE_CATEGORIES_PATH,
    loadChildren: () => import('@nx-mygarden/page-vegetable-categories').then(m => m.PageVegetableCategoriesModule)
  },
  {
    path: PAGE_VEGETABLE_GROUPS_PATH,
    loadChildren: () => import('@nx-mygarden/page-vegetable-groups').then(m => m.PageVegetableGroupsModule)
  }
];
