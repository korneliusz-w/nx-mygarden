import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pageVegetableCategoriesRoutes } from './lib.routes';
import { FeatureAddCategoryModule } from '@nx-mygarden/feature-add-category';
import { FeatureCategoryListModule } from '@nx-mygarden/feature-category-list';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pageVegetableCategoriesRoutes), FeatureAddCategoryModule, FeatureCategoryListModule],
})
export class PageVegetableCategoriesModule {}
