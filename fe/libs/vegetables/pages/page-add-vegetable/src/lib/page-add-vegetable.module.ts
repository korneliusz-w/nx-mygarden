import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pageAddVegetableRoutes } from './lib.routes';
import { PageAddVegetableComponent } from './page-add-vegetable.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pageAddVegetableRoutes)],
  declarations: [PageAddVegetableComponent],
})
export class PageAddVegetableModule {}
