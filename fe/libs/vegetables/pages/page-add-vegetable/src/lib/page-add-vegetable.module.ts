import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pageAddVegetableRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pageAddVegetableRoutes)],
})
export class PageAddVegetableModule {}
