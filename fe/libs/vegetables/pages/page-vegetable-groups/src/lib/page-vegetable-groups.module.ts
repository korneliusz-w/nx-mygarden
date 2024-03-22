import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pageVegetableGroupsRoutes } from './lib.routes';
import { FeatureGroupListModule } from '@nx-mygarden/feature-group-list';
import { FeatureAddGroupModule } from '@nx-mygarden/feature-add-group';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pageVegetableGroupsRoutes), FeatureGroupListModule, FeatureAddGroupModule],
})
export class PageVegetableGroupsModule {}
