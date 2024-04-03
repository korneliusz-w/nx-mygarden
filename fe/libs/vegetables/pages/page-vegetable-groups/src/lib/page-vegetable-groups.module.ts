import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pageVegetableGroupsRoutes } from './lib.routes';
import { FeatureGroupListModule } from '@nx-mygarden/feature-group-list';
import { FeatureAddGroupModule } from '@nx-mygarden/feature-add-group';
import { PageVegetableGroupsComponent } from './page-vegetable-groups.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pageVegetableGroupsRoutes),
    FeatureGroupListModule,
    FeatureAddGroupModule,
  ],
  declarations: [PageVegetableGroupsComponent],
})
export class PageVegetableGroupsModule {}
