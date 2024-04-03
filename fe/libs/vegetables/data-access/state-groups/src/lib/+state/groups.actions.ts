import { createAction, props } from '@ngrx/store';
import { GroupsEntity } from './groups.models';

export const loadGroups = createAction('[Groups Page] Load vegetable groups');

export const loadGroupsSuccess = createAction(
  '[Groups/API] Load Groups Success',
  props<{ groups: GroupsEntity[] }>()
);

export const loadGroupsFailure = createAction(
  '[Groups/API] Load Groups Failure',
  props<{ error: any }>()
);

export const addNewGroup = createAction('[Groups/API] Add New Group', props<{ group: GroupsEntity }>());
export const addNewGroupSuccess = createAction('[Groups/API] Add New Group Success', props<{ group: GroupsEntity }>());
export const addNewGroupFailure = createAction('[Groups/API] Add New Group Failure', props<{ error: any }>());

export const removeGroup = createAction('[Groups/API] Remove Group', props<{ id: number }>());
export const removeGroupSuccess = createAction('[Groups/API] Remove Group Success', props<{ id: number }>());
export const removeGroupFailure = createAction('[Groups/API] Remove Group Failure', props<{ error: any }>());
