import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pageVegetableCategoriesRoutes } from './lib.routes';
import { FeatureAddCategoryModule } from '@nx-mygarden/feature-add-category';
import { FeatureCategoryListModule } from '@nx-mygarden/feature-category-list';
import { PageVegetableCategoriesComponent } from './page-vegetable-categories.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pageVegetableCategoriesRoutes),
    FeatureAddCategoryModule,
    FeatureCategoryListModule,
  ],
  declarations: [PageVegetableCategoriesComponent],
})
export class PageVegetableCategoriesModule {}
