import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessCategoryModule } from '@nx-mygarden/data-access-category';
import { UiAddCategoryFormComponent } from '@nx-mygarden/ui-add-category-form';

@NgModule({
  imports: [CommonModule, DataAccessCategoryModule, UiAddCategoryFormComponent],
})
export class FeatureAddCategoryModule {
  
  constructor() {
    console.log('ggg')
  }
}
