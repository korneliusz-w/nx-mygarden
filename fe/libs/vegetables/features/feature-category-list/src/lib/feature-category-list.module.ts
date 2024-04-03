import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessCategoryModule } from '@nx-mygarden/data-access-category';
import { UiCategoryListComponent } from '@nx-mygarden/ui-category-list';

@NgModule({
  imports: [CommonModule, DataAccessCategoryModule, UiCategoryListComponent],
})
export class FeatureCategoryListModule {}
