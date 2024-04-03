import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGroups from './+state/groups.reducer';
import { GroupsEffects } from './+state/groups.effects';
import { DataAccessGroupModule } from '@nx-mygarden/data-access-group';

@NgModule({
  imports: [
    CommonModule,
    DataAccessGroupModule,
    StoreModule.forFeature(
      fromGroups.GROUPS_FEATURE_KEY,
      fromGroups.groupsReducer
    ),
    EffectsModule.forFeature([GroupsEffects]),
  ],
})
export class StateGroupsModule {}
