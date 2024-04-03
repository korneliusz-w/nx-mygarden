import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessGroupModule } from '@nx-mygarden/data-access-group';
import { FeatureAddGroupComponent } from './feature-add-group.component';
import { UiAddGroupFormComponent } from '@nx-mygarden/ui-add-group-form';

@NgModule({
  imports: [CommonModule, DataAccessGroupModule, UiAddGroupFormComponent],
  declarations: [FeatureAddGroupComponent],
  exports: [FeatureAddGroupComponent]
})
export class FeatureAddGroupModule {}
