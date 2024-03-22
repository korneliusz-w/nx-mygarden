import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pageVegetableCatalogRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pageVegetableCatalogRoutes)],
})
export class PageVegetableCatalogModule {}
