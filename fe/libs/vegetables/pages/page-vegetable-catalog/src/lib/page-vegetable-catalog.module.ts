import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pageVegetableCatalogRoutes } from './lib.routes';
import { PageVegetableCatalogComponent } from './page-vegetable-catalog.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pageVegetableCatalogRoutes)],
  declarations: [PageVegetableCatalogComponent],
})
export class PageVegetableCatalogModule {}
