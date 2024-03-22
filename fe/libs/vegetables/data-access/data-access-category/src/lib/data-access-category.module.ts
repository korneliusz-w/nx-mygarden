import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessCategoryService } from './data-access-category.service';

@NgModule({
  imports: [CommonModule],
  providers: [DataAccessCategoryService]
})
export class DataAccessCategoryModule {}
