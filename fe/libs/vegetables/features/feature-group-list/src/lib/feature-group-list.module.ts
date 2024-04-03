import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessGroupModule } from '@nx-mygarden/data-access-group';
import { UiGroupListComponent } from '@nx-mygarden/ui-group-list';
import { FeatureGroupListComponent } from './feature-group-list.component';
import { SharedModule } from '@nx-mygarden/shared';
import { StateGroupsModule } from '@nx-mygarden/state-groups';

@NgModule({
  imports: [CommonModule, DataAccessGroupModule, UiGroupListComponent, SharedModule, StateGroupsModule],
  declarations: [FeatureGroupListComponent],
  exports: [FeatureGroupListComponent]
})
export class FeatureGroupListModule {}
