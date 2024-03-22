import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessCategoryModule } from '@nx-mygarden/data-access-category';

@NgModule({
  imports: [CommonModule, DataAccessCategoryModule],
})
export class FeatureCategoryListModule {}
